import * as THREE from 'three';
import { Post } from '../../src/engine/post';
import { softSprite } from '../../src/engine/gfx';
import { Level, InteractDef } from '../../src/world/level';
import { buildStation, buildTunnel, buildSurface } from './levels';
import { DIALOGUES, NAMES, STORY, DNode, Choice, objective, proof, buildEnding } from './story';
import { Snd } from './sound';
import { UI } from './ui';

export interface S {
  flags: Record<string, any>; items: Record<string, string>; cans: number; filters: number; filter: number; battery: number; light: boolean; mask: boolean; air: number;
  level: string; pos: [number, number, number]; yaw: number; notes: string[]; met: Record<string, boolean>; once: Record<string, number>; time: number;
}
const fresh = (): S => ({ flags: {}, items: {}, cans: 2, filters: 0, filter: 200, battery: 0.8, light: false, mask: false, air: 1, level: 'station', pos: [1.6, 0, 1.6], yaw: 2.4, notes: [], met: {}, once: {}, time: 0 });
const KEY = 'ash.save', SET = 'ash.settings', FILTER_FULL = 210;

export class Game {
  canvas = document.getElementById('game') as HTMLCanvasElement; renderer: THREE.WebGLRenderer; camera: THREE.PerspectiveCamera; post: Post;
  snd = new Snd(); audio = this.snd; ui: UI; level!: Level; s: S = fresh(); story = STORY;
  player = { pos: new THREE.Vector3(), yaw: 0, pitch: 0, bob: 0, stepT: 0 }; keys = new Set<string>(); locked = false;
  mode: 'menu' | 'play' | 'dialogue' | 'end' | 'dead' = 'menu'; dialogueNpc: string | null = null; started = false; autoPause = true; fast = false;
  t = 0; fade = 1; fadeTo = 0; private fadeCb: (() => void) | null = null; private fadeSp = 2;
  focus: { def: InteractDef; obj: THREE.Object3D } | null = null; private ray = new THREE.Raycaster(); private look: THREE.Vector3 | null = null;
  settings = { vol: 0.8, sens: 1, quality: 'med' as 'low' | 'med' | 'high', reflections: true, fov: 72 };
  spot = new THREE.SpotLight(0xfff0d8, 0, 36, 0.46, 0.6, 1.25); private dust!: THREE.Points; smear = 0; private crankT = 0; private coughT = 0; private lightI = 0;

  constructor() {
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem(SET) || '{}')); } catch { }
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.camera = new THREE.PerspectiveCamera(this.settings.fov, innerWidth / innerHeight, 0.06, 500); this.camera.rotation.order = 'YXZ';
    this.post = new Post(this.renderer, new THREE.Scene(), this.camera); this.post.bloom.strength = 0.5; this.post.bloom.threshold = 0.82;
    this.spot.castShadow = true; this.spot.shadow.mapSize.set(1024, 1024); this.spot.shadow.bias = -0.0012; this.spot.shadow.camera.near = 0.25; this.spot.shadow.camera.far = 36;
    this.dust = this.makeDust();
    this.ui = new UI(this); this.applySettings();
    addEventListener('resize', () => this.resize()); this.bind();
    this.loadLevel('station', 'start'); this.ui.menu();
    let last = performance.now(); const loop = (now: number) => { const dt = Math.min(0.05, (now - last) / 1000); last = now; this.frame(dt); requestAnimationFrame(loop); }; requestAnimationFrame(loop);
  }
  private makeDust() {
    const n = 260, pos = new Float32Array(n * 3); for (let i = 0; i < n * 3; i++) pos[i] = Math.random();
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    const m = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uT: { value: 0 }, uCam: { value: new THREE.Vector3() }, uDir: { value: new THREE.Vector3() }, uI: { value: 0 }, uMap: { value: softSprite() } },
      vertexShader: `uniform float uT,uI; uniform vec3 uCam,uDir; varying float vA; void main(){ vec3 S=vec3(9.0,5.0,9.0); vec3 p=position*S; p.y+=sin(uT*0.3+position.x*20.0)*0.3+uT*0.03; p.x+=sin(uT*0.2+position.y*17.0)*0.4;
        p=mod(p-uCam,S)-S*0.5+uCam; vec3 d=p-uCam; float l=length(d); float c=dot(normalize(d),uDir); vA=smoothstep(0.86,0.985,c)*smoothstep(8.0,1.2,l)*smoothstep(0.35,0.9,l)*uI;
        vec4 mv=viewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=(5.0+fract(position.z*31.0)*9.0)/max(-mv.z,0.3); }`,
      fragmentShader: `uniform sampler2D uMap; varying float vA; void main(){ gl_FragColor=vec4(1.0,0.95,0.85,texture2D(uMap,gl_PointCoord).a*vA); }` });
    const p = new THREE.Points(g, m); p.frustumCulled = false; p.renderOrder = 6; return p;
  }
  applySettings() { this.snd.setVol(this.settings.vol); this.camera.fov = this.settings.fov; this.camera.updateProjectionMatrix(); localStorage.setItem(SET, JSON.stringify(this.settings)); this.resize(); }
  resize() {
    const pr = this.settings.quality === 'low' ? 0.7 : this.settings.quality === 'med' ? 1 : Math.min(devicePixelRatio, 2);
    this.renderer.setPixelRatio(pr); this.renderer.setSize(innerWidth, innerHeight, false); this.canvas.style.width = '100vw'; this.canvas.style.height = '100vh';
    this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix(); this.post?.resize(innerWidth, innerHeight, pr);
  }
  private bind() {
    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === this.canvas; if (!this.locked && this.autoPause && this.mode === 'play' && !this.ui.open && this.fadeTo === 0) this.ui.pause(); });
    this.canvas.addEventListener('click', () => { this.snd.start(); if (this.mode === 'play' && !this.ui.open) this.lock(); });
    let drag = false; this.canvas.addEventListener('mousedown', () => { drag = true; }); addEventListener('mouseup', () => { drag = false; });
    addEventListener('mousemove', e => { if (this.mode !== 'play' || this.ui.open || (!this.locked && !drag)) return; const k = 0.0022 * this.settings.sens; this.player.yaw -= e.movementX * k; this.player.pitch = Math.max(-1.45, Math.min(1.45, this.player.pitch - e.movementY * k)); });
    addEventListener('keydown', e => {
      if (e.code === 'Tab') e.preventDefault(); if (e.repeat) return; this.keys.add(e.code); this.snd.start();
      if (this.ui.onKey(e)) return; if (this.mode !== 'play' || this.fadeTo > 0) return;
      switch (e.code) {
        case 'KeyE': if (this.focus) this.focus.def.use(this, this.focus.obj); break;
        case 'KeyF': this.toggleLight(); break;
        case 'KeyG': this.toggleMask(); break;
        case 'KeyT': if (this.s.mask) { this.smear = 0; this.snd.sfx('wipe'); this.ui.wipe(); } break;
        case 'Tab': case 'KeyJ': this.ui.journal(); break;
        case 'Escape': this.ui.pause(); break;
      }
    });
    addEventListener('keyup', e => this.keys.delete(e.code)); addEventListener('blur', () => this.keys.clear());
  }
  lock() { try { const p: any = this.canvas.requestPointerLock(); p?.catch?.(() => { }); } catch { } }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }
  toggleLight() { if (!this.s.light && this.s.battery <= 0.01) return this.toast('Фонарь сел. Зажми R — крути динамо.', 'warn'); this.s.light = !this.s.light; this.snd.sfx('light'); }
  toggleMask() { this.s.mask = !this.s.mask; this.snd.sfx('mask'); if (this.s.mask && this.s.filter <= 0 && this.s.filters > 0) this.swapFilter(); }
  private swapFilter() { this.s.filters--; this.s.filter = FILTER_FULL; this.snd.sfx('mask'); this.toast('Фильтр заменён. Запасных: ' + this.s.filters, 'item'); }

  /* ---------- levels ---------- */
  loadLevel(id: string, spawn: string) {
    this.level?.dispose();
    const L = id === 'station' ? buildStation() : id === 'tunnel' ? buildTunnel(this.settings.reflections && this.settings.quality !== 'low') : buildSurface();
    this.level = L; this.post.setScene(L.scene); this.s.level = id; this.focus = null;
    L.scene.add(this.spot, this.spot.target, this.dust);
    const sp = L.spawns[spawn] ?? Object.values(L.spawns)[0]; this.player.pos.set(sp.x, sp.y, sp.z); this.player.yaw = sp.yaw; this.player.pitch = 0;
  }
  fadeOut(cb: () => void, sp = 1.4) { if (this.fast) { cb(); return; } this.fadeTo = 1; this.fadeSp = sp; this.fadeCb = cb; }
  travel(id: string, spawn: string) {
    this.ui.closeAll(); this.snd.sfx('travel');
    this.fadeOut(() => { this.loadLevel(id, spawn); this.ui.card(this.level.name, this.level.sub); this.save(); if (id === 'surface') this.toast('G — противогаз · T — протереть стекло · следи за фильтром', 'info'); if (this.mode === 'play') this.lock(); });
  }
  /* ---------- state API ---------- */
  flag(k: string) { return this.s.flags[k]; } set(k: string, v: any = true) { this.s.flags[k] = v; }
  has(i: string) { return i in this.s.items; } give(i: string, name: string) { this.s.items[i] = name; this.toast('Получено: ' + name, 'item'); this.snd.sfx('pick'); } take(i: string) { delete this.s.items[i]; }
  addCans(n: number) { this.s.cans += n; this.toast(`Тушёнка +${n}`, 'item'); this.snd.sfx('pick'); } addFilter(n: number) { this.s.filters += n; this.toast('Запасной фильтр +1', 'item'); this.snd.sfx('pick'); }
  note(t: string) { this.s.notes.push(t); this.snd.sfx('note'); this.ui.toast('Запись в блокноте', 'note'); }
  toast(t: string, kind = 'info') { this.ui.toast(t, kind); if (kind === 'warn') this.snd.sfx('warn'); } notify(t: string, kind = 'info') { this.toast(t, kind); }
  say(n: string, t: string, d = 7) { this.ui.sub(n, t, d); }
  examine(title: string, html: string, acts?: [string, () => void][]) { this.snd.sfx('open'); this.ui.examine(title, html, acts); }
  choice(html: string, opts: [string, () => void][]) { this.ui.choice(html, opts); }
  fmt(s: number) { s = Math.max(0, s); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`; }
  npcName(id: string) { return NAMES[id][this.s.met[id] ? 0 : 1]; } proofN() { return proof(this); } objective() { return objective(this); }
  /* ---------- dialogue ---------- */
  talk(id: string) {
    const D = DIALOGUES[id]; if (!D) return; const st = D.start(this); this.s.met[id] = true; this.mode = 'dialogue'; this.dialogueNpc = id; this.unlock();
    const n = this.level.npcs.find(x => x.id === id); this.look = n ? new THREE.Vector3().setFromMatrixPosition(n.h.head.matrixWorld) : null; if (this.look && this.look.y < 0.5) this.look = n!.pos.clone().setY(n!.pos.y + 1.1);
    this.node(id, st);
  }
  private node(id: string, key: string) {
    const nd: DNode = DIALOGUES[id].nodes[key]; if (!nd) return this.endTalk(); nd.do?.(this); if (this.mode !== 'dialogue') return;
    const text = typeof nd.text === 'function' ? nd.text(this) : nd.text;
    const ch = (nd.choices ?? []).map((c, i) => ({ c, i })).filter(({ c, i }) => (!c.if || c.if(this)) && !(c.once && this.s.once[`${id}.${key}.${i}`]));
    this.ui.dialogue(nd.who === 'me' ? 'ГОРДЕЕВ' : NAMES[id][0].toUpperCase(), text, ch.map(({ c, i }) => ({ t: c.t, tone: c.tone, cost: c.cost, ok: !c.cost || this.s.cans >= c.cost, pick: () => this.pick(id, key, c, i) })),
      () => { const go = typeof nd.go === 'function' ? nd.go(this) : nd.go; go ? this.node(id, go) : this.endTalk(); }, id === 'anya' ? 620 : id === 'vera' || id === 'zarema' ? 360 : 240);
  }
  private pick(id: string, key: string, c: Choice, i: number) {
    if (c.cost) { if (this.s.cans < c.cost) return this.toast('Не хватает тушёнки.', 'warn'); this.s.cans -= c.cost; }
    if (c.once) this.s.once[`${id}.${key}.${i}`] = 1; c.do?.(this); if (this.mode !== 'dialogue') return;
    const go = typeof c.go === 'function' ? c.go(this) : c.go; go ? this.node(id, go) : this.endTalk();
  }
  endTalk() { this.ui.closeDialogue(); this.mode = 'play'; this.dialogueNpc = null; this.look = null; this.lock(); }
  /* ---------- ending / death / save ---------- */
  finish() { this.set('ended'); this.ui.closeDialogue(); this.ui.closeAll(); this.mode = 'end'; this.dialogueNpc = null; this.unlock(); this.snd.sfx('sting'); this.fadeOut(() => this.ui.ending(buildEnding(this)), 0.6); }
  die() { if (this.mode !== 'play') return; this.mode = 'dead'; this.unlock(); this.snd.sfx('die'); this.ui.closeAll(); this.fadeOut(() => this.ui.dead(), 0.5); }
  save() { if (!this.started || this.mode === 'end' || this.mode === 'dead') return; const p = this.player.pos; this.s.pos = [p.x, p.y, p.z]; this.s.yaw = this.player.yaw; try { localStorage.setItem(KEY, JSON.stringify(this.s)); } catch { } }
  hasSave() { return !!localStorage.getItem(KEY); }
  load() {
    let d: any; try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { } if (!d) return false;
    this.s = Object.assign(fresh(), d); this.s.air = 1; if (this.s.level === 'surface' && this.s.filter < 60) this.s.filter = 60; this.started = true; this.mode = 'play'; this.ui.closeAll(); this.ui.closeDialogue(); this.fade = 1; this.fadeTo = 0; this.smear = 0;
    this.loadLevel(this.s.level, ''); this.player.pos.set(...this.s.pos); this.player.yaw = this.s.yaw; this.ui.hud(true); this.lock(); return true;
  }
  newGame() {
    this.s = fresh(); this.started = true; this.mode = 'play'; this.ui.closeAll(); this.fade = 1; this.fadeTo = 0; this.loadLevel('station', 'start'); this.ui.hud(true); this.lock(); this.save();
    this.ui.card('ДЕНЬ 47', 'Москва • станция «Новослободская» • 31 октября 2026');
    this.say('ГОРДЕЕВ', 'Сорок семь дней назад на город лёг Пепел. Наверху без фильтра живут три минуты. Нас под землёй — триста сорок. Радист говорит: завтра придёт поезд.', 10);
    setTimeout(() => this.toast('WASD — идти · E — действие · F — фонарь · R (держать) — динамо · Tab — блокнот', 'info'), 3000);
  }
  toMenu() { this.ui.closeAll(); this.ui.closeDialogue(); this.unlock(); this.mode = 'menu'; this.started = false; this.ui.hud(false); this.fade = 1; this.fadeTo = 0; this.loadLevel('station', 'start'); this.ui.menu(); }

  /* ---------- frame ---------- */
  private hit(c: any, x: number, z: number, y: number) { const r = 0.34; return c.on && !(c.minY >= y + 1.7 || c.maxY <= y + 0.25) && x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r; }
  private blocked(x: number, z: number, y: number, ign: Set<any>) { for (const c of this.level.colliders) if (!ign.has(c) && this.hit(c, x, z, y)) return true; return false; }
  private move(dt: number) {
    const k = this.keys, p = this.player; const f = (k.has('KeyW') ? 1 : 0) - (k.has('KeyS') ? 1 : 0), r = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0); let moving = false;
    const wet = this.s.level === 'tunnel' && p.pos.x > 28 && p.pos.x < 46;
    if (f || r) {
      const sp = (k.has('ShiftLeft') ? 5.2 : 3.2) * (wet ? 0.6 : 1) * (this.s.air < 0.5 ? 0.7 : 1), len = Math.hypot(f, r), sin = Math.sin(p.yaw), cos = Math.cos(p.yaw);
      const dx = ((-sin * f + cos * r) / len) * sp * dt, dz = ((-cos * f - sin * r) / len) * sp * dt;
      const st = new Set<any>(); for (const c of this.level.colliders) if (this.hit(c, p.pos.x, p.pos.z, p.pos.y)) st.add(c);
      if (!this.blocked(p.pos.x + dx, p.pos.z, p.pos.y, st)) { p.pos.x += dx; moving = true; } if (!this.blocked(p.pos.x, p.pos.z + dz, p.pos.y, st)) { p.pos.z += dz; moving = true; }
      if (moving) { p.stepT += dt * sp; if (p.stepT > 2.2) { p.stepT = 0; this.snd.sfx(wet ? 'splash' : this.s.level === 'surface' && !this.level.isIndoor(p.pos) ? 'stepAsh' : 'step', k.has('ShiftLeft') ? 1.3 : 1); } }
    }
    p.bob += ((moving ? 1 : 0) - p.bob) * Math.min(1, dt * 8);
  }
  private findFocus() {
    this.focus = null; this.ray.setFromCamera(new THREE.Vector2(0, 0), this.camera); this.ray.far = 7.5;
    for (const h of this.ray.intersectObjects([...this.level.targets, ...this.level.solids], false)) {
      const o = h.object, def: InteractDef | undefined = o.userData.interact; if (!def) return;
      if (o.userData.disabled || !o.visible || (def.if && !def.if(this))) continue; if (h.distance <= (def.range ?? 2.8)) this.focus = { def, obj: o }; return;
    }
  }
  private frame(dt: number) {
    this.t += dt; const p = this.player, cam = this.camera, s = this.s, play = this.mode === 'play' && !this.ui.open && this.fadeTo === 0;
    if (this.fade !== this.fadeTo) { this.fade += Math.sign(this.fadeTo - this.fade) * Math.min(Math.abs(this.fadeTo - this.fade), dt * this.fadeSp); if (this.fade >= 1 && this.fadeTo === 1) { const cb = this.fadeCb; this.fadeCb = null; this.fadeTo = 0; cb?.(); } }
    const u = this.post.u; u.uFade.value = (this.mode === 'end' || this.mode === 'dead') ? Math.max(this.fade, 0.86) : this.fade; u.uMem.value = 0; u.uGlitch.value = Math.max(0, (0.35 - s.air) * 0.5);
    if (this.mode === 'menu' || this.mode === 'end' || this.mode === 'dead') {
      const a = this.t * 0.04; cam.position.set(-6 + Math.sin(a) * 16, 1.7 + Math.sin(a * 1.3) * 0.2, 1.8 + Math.cos(a * 0.7) * 0.8); cam.rotation.set(0.05, -Math.PI / 2 - 0.2 + Math.sin(a * 0.8) * 0.5, 0); p.pos.set(cam.position.x, 0, cam.position.z);
    } else {
      if (play) { this.move(dt); s.time += dt; } else p.bob += (0 - p.bob) * Math.min(1, dt * 8);
      if (this.mode === 'dialogue' && this.look) { const d = this.look.clone().sub(new THREE.Vector3(p.pos.x, p.pos.y + 1.66, p.pos.z)); const ty = Math.atan2(-d.x, -d.z), tp = Math.atan2(d.y, Math.hypot(d.x, d.z)); let dy = ty - p.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2; p.yaw += dy * Math.min(1, dt * 4); p.pitch += (tp - p.pitch) * Math.min(1, dt * 4); }
      const sway = s.air < 0.6 ? Math.sin(this.t * 1.7) * (0.6 - s.air) * 0.05 : 0;
      cam.position.set(p.pos.x, p.pos.y + 1.66 + Math.sin(p.stepT * 2.85) * 0.032 * p.bob, p.pos.z); cam.rotation.set(p.pitch + sway, p.yaw, Math.sin(p.stepT * 1.42) * 0.004 * p.bob + sway * 0.6);
      const tf = this.mode === 'dialogue' ? this.settings.fov - 18 : this.settings.fov; if (Math.abs(cam.fov - tf) > 0.05) { cam.fov += (tf - cam.fov) * Math.min(1, dt * 5); cam.updateProjectionMatrix(); }
    }
    // flashlight + dynamo
    if (play && this.keys.has('KeyR')) { s.battery = Math.min(1, s.battery + dt * 0.2); if ((this.crankT -= dt) < 0) { this.crankT = 0.11; this.snd.sfx('crank'); } }
    if (s.light && this.mode !== 'menu') { s.battery = Math.max(0, s.battery - dt / 190); if (s.battery <= 0) { s.light = false; this.toast('Фонарь сел. Зажми R — крути динамо.', 'warn'); } }
    const want = s.light && this.mode !== 'menu' && this.mode !== 'end' ? 190 * (0.2 + 0.8 * Math.min(1, s.battery * 2.2)) * (s.battery < 0.12 && Math.sin(this.t * 31) > 0.3 ? 0.35 : 1) : 0;
    this.lightI += (want - this.lightI) * Math.min(1, dt * 14); this.spot.intensity = this.lightI; this.spot.castShadow = this.lightI > 1;
    const dir = new THREE.Vector3(); cam.getWorldDirection(dir); const right = new THREE.Vector3().crossVectors(dir, cam.up).normalize();
    this.spot.position.copy(cam.position).addScaledVector(right, 0.22).add(new THREE.Vector3(0, -0.16, 0)); this.spot.target.position.lerp(cam.position.clone().addScaledVector(dir, 12), Math.min(1, dt * 16));
    const du = (this.dust.material as THREE.ShaderMaterial).uniforms; du.uT.value = this.t; du.uCam.value.copy(cam.position); du.uDir.value.copy(dir); du.uI.value = Math.min(1, this.lightI / 150) * 0.9;
    // air, mask, filter
    const surf = s.level === 'surface' && (this.mode === 'play' || this.mode === 'dialogue');
    if (surf && !this.ui.open) {
      const ok = s.mask && s.filter > 0;
      if (s.mask && s.filter > 0) { s.filter -= dt; if (s.filter <= 0) { if (s.filters > 0) this.swapFilter(); else this.toast('ФИЛЬТР ВЫРАБОТАН. Вниз, быстро!', 'warn'); } }
      if (s.mask) this.smear = Math.min(1, this.smear + dt / (this.level.isIndoor(p.pos) ? 400 : 60));
      if (!ok) { s.air -= dt / 15; if ((this.coughT -= dt) < 0) { this.coughT = 2.2; this.snd.sfx('cough'); if (!s.mask) this.toast('Ты дышишь пеплом! G — противогаз', 'warn'); } if (s.air <= 0) this.die(); } else s.air = Math.min(1, s.air + dt / 8);
    } else if (!surf) { s.air = Math.min(1, s.air + dt / 5); }
    this.level.update(dt, this.t, this);
    if (play) this.findFocus(); else this.focus = null;
    // sound scape
    const a = this.snd.amb; a.drone = s.level === 'surface' ? 0.25 : s.level === 'tunnel' ? 1 : 0.6; a.wind = s.level === 'surface' ? (this.level.isIndoor(p.pos) ? 0.35 : 1) : s.level === 'tunnel' ? 0.18 : 0; a.mask = s.mask && this.mode !== 'menu' ? 1 : 0;
    a.stress = Math.max(1 - s.air, s.mask && s.filter < 40 ? 0.6 : 0); a.tick = s.level === 'surface' && this.mode !== 'menu' ? (this.level.isIndoor(p.pos) ? 0.25 : 0.8) : s.level === 'tunnel' && Math.abs(p.pos.x - 70) < 6 ? 0.3 : 0; a.drip = s.level === 'tunnel' ? 1 : s.level === 'station' ? 0.3 : 0;
    let fire = 0; for (const f of ((this.level as any).fires ?? []) as THREE.Vector3[]) fire = Math.max(fire, 1 - f.distanceTo(p.pos) / 9); a.fire = Math.max(0, fire);
    this.snd.update(dt); this.ui.update(dt); this.post.render(dt);
  }
}
