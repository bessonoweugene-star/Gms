import * as THREE from 'three';
import { Post } from '../engine/post';
import { AudioSys } from '../engine/audio';
import { Level, InteractDef } from '../world/level';
import { buildCentral, BuildOpts } from '../world/central';
import { buildUnderground, buildResidential, buildHyperion } from '../world/zones';
import { buildMemAgnes, buildMemLab, buildMemNoah } from '../world/memories';
import { NPCS, ITEMS, ENTS, DEDUCTIONS, BARKS, MEMS, ZONES } from './data';
import { DIALOGUES, DNode, Choice } from './dialogues';
import { STORY, buildEnding } from './story';
import { UI } from '../ui/ui';

export interface State {
  v: number; flags: Record<string, any>; inv: string[]; clues: string[]; credits: number;
  npc: Record<string, { met: boolean; trust: number }>;
  board: { pos: Record<string, [number, number]>; links: { a: string; b: string; rel: string }[] };
  deds: string[]; theory: string | null; zone: string; pos: [number, number, number]; yaw: number; time: number;
  log: string[]; mem: Record<string, string[]>; once: Record<string, number>; barks: Record<string, number>;
}
export interface Settings { master: number; music: number; sfx: number; sens: number; quality: 'low' | 'med' | 'high'; reflections: boolean; bloom: boolean; fov: number; }

const ZONE_BUILD: Record<string, (o: BuildOpts) => Level> = { central: buildCentral, underground: buildUnderground, residential: buildResidential, hyperion: buildHyperion };
const MEM_BUILD: Record<string, () => Level> = { mem_agnes: buildMemAgnes, mem_lab7: buildMemLab, mem_noah: buildMemNoah };
const SAVE_KEY = 'neonveil.save.', SET_KEY = 'neonveil.settings';

function freshState(): State {
  return { v: 1, flags: {}, inv: ['i_neuro'], clues: [], credits: 150, npc: {}, board: { pos: {}, links: [] }, deds: [], theory: null, zone: 'central', pos: [-22, 0, 12.6], yaw: Math.PI, time: 0, log: [], mem: {}, once: {}, barks: {} };
}

export class Game {
  canvas = document.getElementById('game') as HTMLCanvasElement;
  renderer: THREE.WebGLRenderer; camera: THREE.PerspectiveCamera; post: Post; audio = new AudioSys(); ui: UI;
  level!: Level; world: Level | null = null; s: State = freshState(); story = STORY;
  player = { pos: new THREE.Vector3(), yaw: 0, pitch: 0, bob: 0, stepT: 0 };
  mode: 'menu' | 'play' | 'dialogue' | 'end' = 'menu'; dialogueNpc: string | null = null; started = false;
  keys = new Set<string>(); locked = false; t = 0; fade = 1; fadeTo = 0; private fadeCb: (() => void) | null = null;
  focus: { def: InteractDef; obj: THREE.Object3D } | null = null; private ray = new THREE.Raycaster();
  dive: { id: string; ret: { pos: THREE.Vector3; yaw: number; pitch: number } } | null = null;
  settings: Settings = { master: 0.8, music: 0.6, sfx: 0.8, sens: 1, quality: 'med', reflections: true, bloom: true, fov: 70 };
  private dlg: { id: string; node: string } | null = null; private look: THREE.Vector3 | null = null; private memAmt = 0; private glitch = 0;

  constructor() {
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem(SET_KEY) || '{}')); } catch { }
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.15;
    this.camera = new THREE.PerspectiveCamera(this.settings.fov, innerWidth / innerHeight, 0.08, 700);
    this.camera.rotation.order = 'YXZ';
    this.post = new Post(this.renderer, new THREE.Scene(), this.camera);
    this.ui = new UI(this);
    this.applySettings();
    addEventListener('resize', () => this.resize()); this.resize();
    this.bindInput();
    this.loadZone('central', 'menu', true);
    this.ui.mainMenu();
    let last = performance.now();
    const loop = (now: number) => { const dt = Math.min(0.05, (now - last) / 1000); last = now; this.frame(dt); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }

  /* ---------------- settings / resize ---------------- */
  applySettings() {
    const s = this.settings; this.audio.vol = { master: s.master, music: s.music, sfx: s.sfx }; this.audio.applyVol();
    this.post.bloom.strength = s.bloom ? 0.6 : 0; this.camera.fov = s.fov; this.camera.updateProjectionMatrix();
    localStorage.setItem(SET_KEY, JSON.stringify(s)); this.resize();
  }
  resize() {
    const pr = this.settings.quality === 'low' ? 0.7 : this.settings.quality === 'med' ? 1 : Math.min(devicePixelRatio, 2);
    this.renderer.setPixelRatio(pr); this.renderer.setSize(innerWidth, innerHeight, false);
    this.canvas.style.width = '100vw'; this.canvas.style.height = '100vh';
    this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix();
    this.post?.resize(innerWidth, innerHeight, pr);
  }
  get buildOpts(): BuildOpts { return { reflections: this.settings.reflections, quality: this.settings.quality === 'high' ? 0.75 : this.settings.quality === 'med' ? 0.5 : 0.35, rain: 1 }; }

  /* ---------------- input ---------------- */
  private bindInput() {
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (!this.locked && this.mode === 'play' && !this.ui.open && this.fadeTo === 0) this.ui.pause();
    });
    this.canvas.addEventListener('click', () => { this.audio.start(); if (this.mode === 'play' && !this.ui.open) this.lock(); });
    let drag = false;
    this.canvas.addEventListener('mousedown', () => { drag = true; }); addEventListener('mouseup', () => { drag = false; });
    addEventListener('mousemove', e => {
      if (this.mode !== 'play' || this.ui.open) return;
      if (!this.locked && !drag) return;
      const k = 0.0022 * this.settings.sens; this.player.yaw -= e.movementX * k; this.player.pitch = Math.max(-1.45, Math.min(1.45, this.player.pitch - e.movementY * k));
    });
    addEventListener('keydown', e => {
      if (e.code === 'Tab' || e.code === 'F5') e.preventDefault();
      if (e.repeat) return; this.keys.add(e.code); this.audio.start();
      if (this.ui.onKey(e)) return;
      if (this.mode !== 'play' || this.fadeTo > 0) return;
      switch (e.code) {
        case 'KeyE': this.interact(); break;
        case 'Tab': case 'KeyJ': this.ui.journal(); break;
        case 'KeyI': this.ui.inventory(); break;
        case 'KeyB': if (!this.dive) this.ui.openBoard(); break;
        case 'KeyM': this.ui.map(false); break;
        case 'Escape': this.ui.pause(); break;
        case 'F5': this.save('quick'); this.notify('Быстрое сохранение.'); break;
        case 'KeyQ': if (this.dive) this.memExit(); break;
      }
    });
    addEventListener('keyup', e => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
  }
  lock() { try { const p: any = this.canvas.requestPointerLock(); p?.catch?.(() => { }); } catch { } }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }

  /* ---------------- levels ---------------- */
  private setLevel(L: Level) {
    this.level = L; this.post.setScene(L.scene); this.focus = null;
    const a = this.audio.amb; a.rain = L.amb.rain; a.hum = L.amb.hum; a.drip = L.amb.drip; a.siren = L.amb.siren; a.mem = L.isMemory ? 1 : 0;
  }
  place(sp: { x: number; y: number; z: number; yaw: number }) { this.player.pos.set(sp.x, sp.y, sp.z); this.player.yaw = sp.yaw; this.player.pitch = 0; }
  loadZone(id: string, spawn = 'metro', silent = false) {
    if (this.level && !this.level.isMemory) this.level.dispose();
    const L = ZONE_BUILD[id](this.buildOpts); this.setLevel(L); this.s.zone = id;
    this.place(L.spawns[spawn] ?? L.spawns.metro);
    if (!silent) this.ui.titleCard(L.name, L.sub);
  }
  rebuildZone() { const p = this.player.pos.clone(), y = this.player.yaw; this.loadZone(this.s.zone, 'metro', true); this.player.pos.copy(p); this.player.yaw = y; }
  fast = false;
  fadeOut(cb: () => void, speed = 2.6) { if (this.fast) { cb(); return; } this.fadeTo = 1; this.fadeSpeed = speed; this.fadeCb = cb; }
  private fadeSpeed = 2.6;
  teleport(spawn: string) { this.audio.sfx('door'); this.fadeOut(() => { this.place(this.level.spawns[spawn]); }); }
  travel(zone: string) {
    if (zone === this.s.zone) return;
    this.ui.closeAll(); this.audio.sfx('travel');
    this.fadeOut(() => { this.loadZone(zone, 'metro'); this.story.onTravel(this); this.save('auto'); if (this.mode === 'play') this.lock(); }, 1.2);
  }
  openTravel() { this.ui.map(true); }

  /* ---------------- state helpers (used by story data) ---------------- */
  flag(k: string) { return this.s.flags[k]; }
  set(k: string, v: any = true) { this.s.flags[k] = v; }
  has(i: string) { return this.s.inv.includes(i); }
  give(i: string) { if (this.has(i)) return; this.s.inv.push(i); this.ui.toast('Получено: ' + ITEMS[i].name, 'item'); this.audio.sfx('pickup'); }
  take(i: string) { this.s.inv = this.s.inv.filter(x => x !== i); }
  hasClue(c: string) { return this.s.clues.includes(c); }
  ded(d: string) { return this.s.deds.includes(d); }
  knows(k: string) { return !!this.flag(k) || this.hasClue(k) || this.ded(k); }
  clue(id: string, silent = false) {
    if (this.hasClue(id) || !ENTS[id]) return;
    this.s.clues.push(id); const e = ENTS[id];
    const col = { person: 0, place: 1, event: 1, evidence: 2 }[e.type]; const n = this.s.clues.filter(c => ({ person: 0, place: 1, event: 1, evidence: 2 }[ENTS[c].type]) === col).length - 1;
    const per = [2, 1, 4][col], x0 = [40, 420, 640][col];
    this.s.board.pos[id] = [x0 + (n % per) * 185 + ((n * 37) % 17), 50 + Math.floor(n / per) * 104 + ((n * 53) % 23)];
    if (!silent) { this.ui.toast(({ person: 'Досье', place: 'Место', event: 'Событие', evidence: 'Улика' }[e.type]) + ': ' + e.title, 'clue'); this.audio.sfx('clue'); }
    this.checkDeductions();
  }
  pay(n: number) { if (this.s.credits < n) return false; this.s.credits -= n; if (n) this.audio.sfx('coin'); return true; }
  earn(n: number) { this.s.credits += n; this.ui.toast('+' + n + ' ₵', 'item'); this.audio.sfx('coin'); }
  trust(id: string, d?: number) { const n = this.s.npc[id] ??= { met: false, trust: 0 }; if (d) n.trust = Math.max(-3, Math.min(5, n.trust + d)); return n.trust; }
  npcName(id: string) { return this.s.npc[id]?.met ? NPCS[id].name : NPCS[id].role; }
  notify(t: string, kind = 'info') { this.ui.toast(t, kind); if (kind === 'warn') this.audio.sfx('error'); }
  log(t: string) { this.s.log.push(t); }
  say(name: string, text: string, dur = 7) { this.ui.subtitle(name, text, dur); }
  examine(title: string, html: string) { this.audio.sfx('open'); this.ui.examine(title, html); }
  choice(text: string, opts: [string, () => void][]) { this.ui.choice(text, opts); }
  hack(o: { title: string; level: number; onWin: () => void; onFail?: () => void }) { this.ui.hack(o); }
  bark(id: string) { const b = BARKS[id]; const i = (this.s.barks[id] ?? 0); this.s.barks[id] = i + 1; this.say(b.name.toUpperCase(), b.lines[i % b.lines.length], 6); this.audio.sfx('blip', 300); }

  /* ---------------- board ---------------- */
  addLink(a: string, b: string, rel: string) {
    this.s.board.links = this.s.board.links.filter(l => !((l.a === a && l.b === b) || (l.a === b && l.b === a)));
    this.s.board.links.push({ a, b, rel }); this.checkDeductions();
  }
  removeLink(a: string, b: string) { this.s.board.links = this.s.board.links.filter(l => !((l.a === a && l.b === b) || (l.a === b && l.b === a))); }
  checkDeductions() {
    for (const d of DEDUCTIONS) {
      if (this.ded(d.id)) continue; if (d.need && !d.need(this)) continue;
      const hit = this.s.board.links.some(l => d.rels.includes(l.rel) && d.pairs.some(p => (p[0] === l.a && p[1] === l.b) || (p[0] === l.b && p[1] === l.a)));
      if (hit) { this.s.deds.push(d.id); this.ui.toast('Новая версия: ' + d.title, 'ded'); this.audio.sfx('deduce'); this.log('Версия: ' + d.title + '.'); }
    }
  }
  setTheory(id: string) { this.s.theory = id; const d = DEDUCTIONS.find(x => x.id === id)!; this.log('Рабочая гипотеза: ' + d.theory); this.ui.toast('Рабочая гипотеза принята', 'ded'); this.audio.sfx('deduce'); }

  /* ---------------- dialogue ---------------- */
  talk(id: string) {
    const D = DIALOGUES[id]; if (!D) return;
    const st = D.start(this); (this.s.npc[id] ??= { met: false, trust: 0 }).met = true;
    this.mode = 'dialogue'; this.dialogueNpc = id; this.unlock();
    const n = this.level.npcs.find(x => x.id === id); this.look = n ? n.pos.clone().add(new THREE.Vector3(0, 1.62 * (n.h.group.scale.y), 0)) : null;
    this.enterNode(id, st);
  }
  private enterNode(id: string, key: string) {
    const node: DNode = DIALOGUES[id].nodes[key]; if (!node) return this.endDialogue();
    this.dlg = { id, node: key }; node.do?.(this);
    if (this.mode !== 'dialogue') return; // ending fired
    const text = typeof node.text === 'function' ? node.text(this) : node.text;
    const choices = (node.choices ?? []).map((c, i) => ({ c, i })).filter(({ c, i }) => (!c.if || c.if(this)) && !(c.once && this.s.once[`${id}.${key}.${i}`]));
    const who = node.who === 'noah' ? 'КАРРЕН' : NPCS[id].name.toUpperCase();
    this.ui.dialogue(who, text, node.who === 'noah', choices.map(({ c, i }) => ({ t: c.t, tone: c.tone, cost: c.cost, afford: !c.cost || this.s.credits >= c.cost, pick: () => this.pick(id, key, c, i) })),
      () => { const go = typeof node.go === 'function' ? node.go(this) : node.go; go ? this.enterNode(id, go) : this.endDialogue(); }, NPCS[id].voice * (node.who === 'noah' ? 0.6 : 1));
  }
  private pick(id: string, key: string, c: Choice, i: number) {
    if (c.cost && !this.pay(c.cost)) { this.notify('Недостаточно кредитов.', 'warn'); return; }
    if (c.once) this.s.once[`${id}.${key}.${i}`] = 1;
    c.do?.(this); if (this.mode !== 'dialogue') return;
    const go = typeof c.go === 'function' ? c.go(this) : c.go; go ? this.enterNode(id, go) : this.endDialogue();
  }
  endDialogue() { this.ui.closeDialogue(); this.mode = 'play'; this.dialogueNpc = null; this.dlg = null; this.look = null; this.lock(); }

  /* ---------------- memory dive ---------------- */
  useItem(i: string) {
    const use = ITEMS[i].use; if (!use) return;
    if (use.startsWith('dive:')) { if (this.dive) return this.notify('Вы уже в погружении.', 'warn'); this.ui.closeAll(); this.startDive(use.slice(5)); }
  }
  startDive(id: string) {
    this.audio.sfx('dive'); this.glitch = 1;
    this.fadeOut(() => {
      this.dive = { id, ret: { pos: this.player.pos.clone(), yaw: this.player.yaw, pitch: this.player.pitch } };
      this.world = this.level; const L = MEM_BUILD[id](); this.setLevel(L); this.place(L.spawns.start); this.s.mem[id] ??= [];
      this.ui.titleCard(L.name, L.sub); this.ui.toast('MEMORY DIVE: изучайте детали [E]. Выход — белые врата или [Q].', 'info'); this.lock();
    }, 1.2);
  }
  memFound(key: string) { return !!this.dive && (this.s.mem[this.dive.id] ?? []).includes(key); }
  memFoundIn(mem: string, key: string) { return (this.s.mem[mem] ?? []).includes(key); }
  memMark(key: string, title: string, html: string) {
    if (!this.dive) return; const arr = this.s.mem[this.dive.id];
    if (!arr.includes(key)) { arr.push(key); this.audio.sfx('anomaly'); this.glitch = 0.6; if (key === 'l_self') { this.set('know_bruno'); this.clue('p_bruno', true); } if (key === 'l_list') this.set('saw_m12_face'); }
    this.ui.examine(title, html);
  }
  memExit() {
    if (!this.dive) return; const id = this.dive.id, M = MEMS[id], found = this.s.mem[id].length;
    if (M.verdict) this.ui.verdict(id, found, M.total, v => { if (v) this.endDive(v); });
    else if (found < M.total) this.choice(`Собрано фрагментов: ${found} из ${M.total}. Всплыть сейчас — значит помнить обрывками.`, [['Остаться и досмотреть', () => { }], ['Всплыть', () => this.endDive('broken')]]);
    else this.ui.sequence(order => this.endDive(order.join() === 'n_fire,n_girl,n_deal,n_chair' ? 'full' : 'broken'));
  }
  private endDive(result: string) {
    const id = this.dive!.id; this.audio.sfx('surface'); this.glitch = 1; this.ui.closeAll();
    this.fadeOut(() => {
      const d = this.dive!; this.level.dispose(); this.setLevel(this.world!); this.world = null; this.dive = null;
      this.player.pos.copy(d.ret.pos); this.player.yaw = d.ret.yaw; this.player.pitch = d.ret.pitch;
      this.clue(MEMS[id].clue, true);
      if (id === 'mem_agnes') { this.set('mem_agnes_verdict', result); this.log('Воспоминание Агнес — мой вердикт: ' + (result === 'fake' ? 'ПОДДЕЛКА.' : 'подлинное.')); this.say('КАРРЕН', result === 'fake' ? 'Основа настоящая, а поверх — заплатка. Кто-то вписал в вечер Агнес женщину в красном. Вопрос — кто и зачем.' : 'Запись как запись. Значит, женщина в красном существует — и она была с Элиасом последней.'); }
      if (id === 'mem_lab7') { this.set('mem_lab7_verdict', result); this.set('mem_lab7_seen'); this.log('Воспоминание из Лаб-7 — мой вердикт: ' + (result === 'fake' ? 'ПОДДЕЛКА.' : 'подлинное.')); this.say('КАРРЕН', result === 'fake' ? 'Пиксель подсунул мне фальшивку. На это я опираться не буду.' : 'Это было на самом деле. Он унёс архив в собственной голове. И ему помогли выйти.'); }
      if (id === 'mem_noah') { this.set('noah_recall', result); this.clue('p_noah', true); this.audio.sfx('sting'); this.log(result === 'full' ? 'Я вспомнил. Меня никто не заставлял. Я попросил сам.' : 'Я видел обрывки. Крейн, договор, кресло. Кажется, меня вынудили.'); this.say('КАРРЕН', result === 'full' ? 'Тридцать один плюс один. Я не жертва этой истории. Я её соавтор. Теперь архив у меня — и решать снова мне.' : 'Обрывки. Крейн, планшет, кресло… Меня заставили. Наверное. Должны были заставить.', 10); }
      this.checkDeductions(); this.save('auto'); this.lock();
    }, 1.2);
  }

  /* ---------------- ending ---------------- */
  ending(id: string) {
    this.set('ended'); this.ui.closeDialogue(); this.ui.closeAll(); this.mode = 'end'; this.dialogueNpc = null; this.unlock(); this.audio.sfx('sting');
    if (id.startsWith('veil')) this.earn(5000);
    this.fadeOut(() => { this.ui.ending(buildEnding(id, this)); }, 0.7);
  }

  /* ---------------- save / load ---------------- */
  save(slot: string) {
    if (this.dive || !this.started || this.mode === 'end') return false;
    const p = this.player.pos; this.s.pos = [p.x, p.y, p.z]; this.s.yaw = this.player.yaw;
    const meta = { zone: ZONES[this.s.zone].name, time: this.s.time, date: new Date().toLocaleString('ru-RU'), clues: this.s.clues.length };
    try { localStorage.setItem(SAVE_KEY + slot, JSON.stringify({ meta, s: this.s })); return true; } catch { return false; }
  }
  saveMeta(slot: string) { try { return JSON.parse(localStorage.getItem(SAVE_KEY + slot) || 'null')?.meta ?? null; } catch { return null; } }
  load(slot: string) {
    let d: any; try { d = JSON.parse(localStorage.getItem(SAVE_KEY + slot) || 'null'); } catch { } if (!d) return false;
    this.s = Object.assign(freshState(), d.s); this.dive = null; this.world = null; this.started = true;
    this.ui.closeAll(); this.ui.closeDialogue(); this.mode = 'play';
    this.fade = 1; this.fadeTo = 0; this.loadZone(this.s.zone, 'metro'); this.player.pos.set(...this.s.pos); this.player.yaw = this.s.yaw; this.ui.hud(true); this.lock();
    return true;
  }
  newGame() {
    this.s = freshState(); this.started = true; this.mode = 'play'; this.ui.closeAll(); this.fade = 1; this.fadeTo = 0;
    this.loadZone('central', 'start'); this.ui.hud(true); this.lock();
    this.say('14 НОЯБРЯ 2091 • 23:07', 'Четвёртый день дождя. В этом городе продаётся всё, включая вчерашний день. Ко мне пришла женщина, которой нечего продать, кроме тревоги.', 9);
    setTimeout(() => this.ui.toast('WASD — движение • мышь — обзор • E — действие • Tab — журнал • B — доска', 'info'), 2500);
  }
  toMenu() { this.ui.closeAll(); this.ui.closeDialogue(); this.unlock(); this.mode = 'menu'; this.started = false; this.dive = null; this.world = null; this.ui.hud(false); this.fade = 1; this.fadeTo = 0; this.loadZone('central', 'menu', true); this.ui.mainMenu(); }

  /* ---------------- interaction ---------------- */
  private findFocus() {
    this.focus = null; const L = this.level;
    this.ray.setFromCamera(new THREE.Vector2(0, 0), this.camera); this.ray.far = 5;
    const hits = this.ray.intersectObjects([...L.targets, ...L.solids], false);
    for (const h of hits) {
      const o = h.object; const def: InteractDef | undefined = o.userData.interact;
      if (!def) return;            // wall in the way
      if (o.userData.disabled || !o.visible || (def.if && !def.if(this))) continue;
      if (h.distance <= (def.range ?? 2.8)) this.focus = { def, obj: o };
      return;
    }
  }
  interact() { if (this.focus) this.focus.def.use(this, this.focus.obj); }

  /* ---------------- frame ---------------- */
  private collides(x: number, z: number, y: number, ignore?: Set<any>) {
    const r = 0.34;
    for (const c of this.level.colliders) {
      if (!c.on || ignore?.has(c)) continue;
      if (c.minY >= y + 1.7 || c.maxY <= y + 0.25) continue;
      if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) return c;
    }
    return null;
  }
  private movePlayer(dt: number) {
    const k = this.keys, p = this.player;
    const f = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0), r = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    let moving = false;
    if (f || r) {
      const sp = (k.has('ShiftLeft') ? 5.8 : 3.5) * (this.dive ? 0.8 : 1), len = Math.hypot(f, r);
      const sin = Math.sin(p.yaw), cos = Math.cos(p.yaw);
      const dx = ((-sin * f + cos * r) / len) * sp * dt, dz = ((-cos * f - sin * r) / len) * sp * dt;
      const stuck = new Set<any>(); for (const c of this.level.colliders) if (c.on && this.hit1(c, p.pos.x, p.pos.z, p.pos.y)) stuck.add(c);
      if (!this.collides(p.pos.x + dx, p.pos.z, p.pos.y, stuck)) { p.pos.x += dx; moving = true; }
      if (!this.collides(p.pos.x, p.pos.z + dz, p.pos.y, stuck)) { p.pos.z += dz; moving = true; }
      if (moving) { p.stepT += dt * sp; if (p.stepT > 2.3) { p.stepT = 0; this.audio.sfx(this.level.isIndoor(p.pos) ? 'stepIn' : 'step', k.has('ShiftLeft') ? 1.3 : 1); } }
    }
    p.bob += ((moving ? 1 : 0) - p.bob) * Math.min(1, dt * 8);
  }
  private hit1(c: any, x: number, z: number, y: number) { const r = 0.34; return !(c.minY >= y + 1.7 || c.maxY <= y + 0.25) && x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r; }

  private frame(dt: number) {
    this.t += dt; const p = this.player, cam = this.camera;
    // fade
    if (this.fade !== this.fadeTo) { this.fade += Math.sign(this.fadeTo - this.fade) * Math.min(Math.abs(this.fadeTo - this.fade), dt * this.fadeSpeed); if (this.fade >= 1 && this.fadeTo === 1) { const cb = this.fadeCb; this.fadeCb = null; this.fadeTo = 0; cb?.(); } }
    const u = this.post.u; u.uFade.value = this.mode === 'end' ? Math.max(this.fade, 0.82) : this.fade;
    this.memAmt += ((this.level.isMemory ? 1 : 0) - this.memAmt) * Math.min(1, dt * 4); u.uMem.value = this.memAmt;
    this.glitch = Math.max(0, this.glitch - dt * 1.2); u.uGlitch.value = this.glitch + (this.level.isMemory ? 0.12 : 0);

    if (this.mode === 'menu' || this.mode === 'end') {
      const a = this.t * 0.03; cam.position.set(-14 + Math.sin(a) * 24, 2.0 + Math.sin(a * 1.7) * 0.5, 7.4 + Math.cos(a * 0.6) * 0.8); cam.rotation.set(0.14, -Math.PI / 2 + 0.25 + Math.sin(a * 0.9) * 0.3, 0);
      p.pos.set(cam.position.x, 0, cam.position.z);
    } else {
      if (this.mode === 'play' && !this.ui.open && this.fadeTo === 0) { this.movePlayer(dt); this.s.time += dt; }
      else p.bob += (0 - p.bob) * Math.min(1, dt * 8);
      if (this.mode === 'dialogue' && this.look) {
        const d = this.look.clone().sub(new THREE.Vector3(p.pos.x, p.pos.y + 1.66, p.pos.z));
        const ty = Math.atan2(-d.x, -d.z), tp = Math.atan2(d.y, Math.hypot(d.x, d.z));
        let dy = ty - p.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
        p.yaw += dy * Math.min(1, dt * 4); p.pitch += (tp - p.pitch) * Math.min(1, dt * 4);
      }
      const bobY = Math.sin(p.stepT * 2.7) * 0.035 * p.bob;
      cam.position.set(p.pos.x, p.pos.y + 1.66 + bobY, p.pos.z); cam.rotation.set(p.pitch, p.yaw, Math.sin(p.stepT * 1.35) * 0.004 * p.bob);
      const tf = this.mode === 'dialogue' ? this.settings.fov - 20 : this.settings.fov + (this.keys.has('ShiftLeft') && p.bob > 0.5 ? 5 : 0);
      if (Math.abs(cam.fov - tf) > 0.05) { cam.fov += (tf - cam.fov) * Math.min(1, dt * 5); cam.updateProjectionMatrix(); }
    }
    this.level.update(dt, this.t, this);
    if (this.mode === 'play' && !this.ui.open) this.findFocus(); else this.focus = null;
    // audio environment
    const a = this.audio.amb; a.indoor = this.level.isIndoor(p.pos) ? 1 : 0;
    a.bar = this.level.amb.bar ? Math.max(0, 1 - this.level.amb.bar.distanceTo(p.pos) / 22) * 0.5 : 0;
    this.audio.update(dt);
    this.ui.update(dt);
    this.post.render(dt);
  }
}
