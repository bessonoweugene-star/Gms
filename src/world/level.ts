import * as THREE from 'three';
import { Humanoid, Look, makeHumanoid, makeSign, SignOpts, mat, flat, glow, lightPool, lightCone, makeScreen } from '../engine/gfx';
import { Rain, Steam } from '../engine/env';

export interface Collider { minX: number; maxX: number; minZ: number; maxZ: number; minY: number; maxY: number; on: boolean; }
export interface InteractDef { label: string | ((g: any) => string); use: (g: any, o: THREE.Object3D) => void; if?: (g: any) => boolean; range?: number; }
export interface Spawn { x: number; y: number; z: number; yaw: number; }
export interface NpcInst { id: string; h: Humanoid; pos: THREE.Vector3; yaw: number; cur: number; cond?: (g: any) => boolean; hit: THREE.Mesh; phase: number; }
interface DoorInst { panel: THREE.Mesh; col: Collider; axis: 'x' | 'z'; w: number; open: number; target: number; base: THREE.Vector3; timer: number; }
export interface DoorDef { label?: string; locked?: (g: any) => string | null; onOpen?: (g: any) => void; onLocked?: (g: any) => void; color?: number; h?: number; }

export class Level {
  scene = new THREE.Scene(); colliders: Collider[] = []; targets: THREE.Object3D[] = []; solids: THREE.Object3D[] = [];
  npcs: NpcInst[] = []; updaters: ((dt: number, t: number, g: any) => void)[] = []; spawns: Record<string, Spawn> = {};
  indoor: Collider[] = []; doors: DoorInst[] = []; fog: THREE.FogExp2; rain?: Rain; ground?: THREE.Object3D;
  amb = { rain: 0, hum: 0.6, drip: 0, siren: false, bar: null as THREE.Vector3 | null };
  isMemory = false; onEnter?: (g: any) => void;
  constructor(public id: string, public name: string, public sub: string, fogColor: number, fogDensity: number) {
    this.fog = new THREE.FogExp2(fogColor, fogDensity); this.scene.fog = this.fog; this.scene.background = new THREE.Color(fogColor);
  }
  add<T extends THREE.Object3D>(o: T, x?: number, y?: number, z?: number, ry?: number): T {
    if (x !== undefined) o.position.set(x, y!, z!); if (ry !== undefined) o.rotation.y = ry; this.scene.add(o); return o;
  }
  col(minX: number, maxX: number, minZ: number, maxZ: number, minY = -1, maxY = 300): Collider {
    const c = { minX, maxX, minZ, maxZ, minY, maxY, on: true }; this.colliders.push(c); return c;
  }
  /** axis-aligned box; x,z = centre, y = bottom */
  box(w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material | THREE.Material[], collide = true) {
    const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); me.position.set(x, y + h / 2, z); this.scene.add(me);
    if (collide) { this.col(x - w / 2, x + w / 2, z - d / 2, z + d / 2, y, y + h); this.solids.push(me); }
    return me;
  }
  cyl(r: number, h: number, x: number, y: number, z: number, m: THREE.Material, collide = false, r2 = r) {
    const me = new THREE.Mesh(new THREE.CylinderGeometry(r2, r, h, 14), m); me.position.set(x, y + h / 2, z); this.scene.add(me);
    if (collide) { this.col(x - r, x + r, z - r, z + r, y, y + h); this.solids.push(me); }
    return me;
  }
  sign(text: string, color: string, height: number, x: number, y: number, z: number, ry = 0, o: SignOpts = {}) {
    const s = makeSign(text, color, height, o); s.position.set(x, y, z); s.rotation.y = ry; this.scene.add(s); return s;
  }
  light(color: number, intensity: number, dist: number, x: number, y: number, z: number) {
    const l = new THREE.PointLight(color, intensity * 1.9, dist * 1.25, 1.5); l.position.set(x, y, z); this.scene.add(l); return l;
  }
  pool(color: number, r: number, x: number, y: number, z: number, k = 0.5) { const p = lightPool(color, r, k); p.position.set(x, y, z); this.scene.add(p); return p; }
  interact<T extends THREE.Object3D>(o: T, def: InteractDef): T { o.userData.interact = def; this.targets.push(o); return o; }
  screen(w: number, h: number, lines: string[], x: number, y: number, z: number, ry = 0, color = '#6ff0ff', title?: string) {
    const s = makeScreen(w, h, lines, color, title); s.position.set(x, y, z); s.rotation.y = ry; this.scene.add(s); return s;
  }
  steam(x: number, y: number, z: number, color = 0x9fb0c0, n = 7, height = 4, spread = 0.6, op = 0.16) {
    const s = new Steam(x, y, z, color, n, height, spread, op); this.scene.add(s.group); this.updaters.push(dt => s.update(dt)); return s;
  }
  /** street lamp with light pool + cone; real light optional */
  lamp(x: number, z: number, color = 0xffc890, h = 6, real = false, y = 0) {
    this.cyl(0.07, h, x, y, z, flat(0x15171c, 0.5, 0.7), true);
    this.box(0.9, 0.08, 0.25, x, y + h, z, flat(0x15171c, 0.5, 0.7), false);
    const b = this.box(0.7, 0.05, 0.18, x, y + h - 0.05, z, glow(color, 3), false);
    this.pool(color, 5.5, x, y + 0.04, z, 0.42);
    const c = lightCone(color, 2.6, h - 0.2, 0.022); c.position.set(x, y + h / 2 - 0.1, z); this.scene.add(c);
    if (real) this.light(color, 40, 16, x, y + h - 0.4, z);
    return b;
  }
  /** Rectangular room with wall gaps for doors. side: n=z0, s=z1, w=x0, e=x1 */
  room(x0: number, x1: number, z0: number, z1: number, y: number, h: number, o: {
    wall?: THREE.Material; floor?: THREE.Material | null; ceil?: THREE.Material | null; outer?: THREE.Material;
    doors?: { side: 'n' | 's' | 'w' | 'e'; at: number; w?: number; h?: number }[]; skip?: string; indoor?: boolean;
  } = {}) {
    const T = 0.3, wm = o.wall ?? mat('concrete');
    const sides: ['n' | 's' | 'w' | 'e', boolean, number, number, number][] = [
      ['n', true, z0, x0, x1], ['s', true, z1, x0, x1], ['w', false, x0, z0, z1], ['e', false, x1, z0, z1]];
    for (const [side, alongX, fixed, a0, a1] of sides) {
      if (o.skip?.includes(side)) continue;
      const gaps = (o.doors ?? []).filter(d => d.side === side).sort((p, q) => p.at - q.at);
      let cur = a0 - T / 2;
      const seg = (s: number, e: number, yb: number, hh: number) => {
        if (e - s < 0.02) return; const len = e - s, mid = (s + e) / 2;
        if (alongX) this.box(len, hh, T, mid, yb, fixed, wm); else this.box(T, hh, len, fixed, yb, mid, wm);
      };
      for (const gp of gaps) {
        const w = gp.w ?? 1.5, dh = gp.h ?? 2.5;
        seg(cur, gp.at - w / 2, y, h); if (h > dh) seg(gp.at - w / 2, gp.at + w / 2, y + dh, h - dh); cur = gp.at + w / 2;
      }
      seg(cur, a1 + T / 2, y, h);
    }
    const w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    if (o.floor !== null) { const f = this.box(w, 0.06, d, cx, y - 0.02, cz, o.floor ?? mat('concrete'), false); this.solids.push(f); }
    if (o.ceil !== null) { const c = this.box(w + T, 0.2, d + T, cx, y + h, cz, o.ceil ?? flat(0x101216, 0.9), false); this.solids.push(c); }
    if (o.indoor !== false) this.indoor.push({ minX: x0 - 0.2, maxX: x1 + 0.2, minZ: z0 - 0.2, maxZ: z1 + 0.2, minY: y - 0.5, maxY: y + h + 0.4, on: true });
  }
  /** sliding door. axis = direction the panel spans. */
  door(x: number, y: number, z: number, axis: 'x' | 'z', w = 1.5, def: DoorDef = {}) {
    const hh = def.h ?? 2.5;
    const m = new THREE.MeshStandardMaterial({ color: def.color ?? 0x2a2f3a, roughness: 0.35, metalness: 0.85 });
    const panel = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? w : 0.12, hh, axis === 'x' ? 0.12 : w), m);
    panel.position.set(x, y + hh / 2, z); this.scene.add(panel); this.solids.push(panel);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? w * 0.7 : 0.14, 0.05, axis === 'x' ? 0.14 : w * 0.7), glow(0x55ddff, 1.6)); strip.position.y = 0.2; panel.add(strip);
    const c = axis === 'x' ? this.col(x - w / 2, x + w / 2, z - 0.2, z + 0.2, y, y + hh) : this.col(x - 0.2, x + 0.2, z - w / 2, z + w / 2, y, y + hh);
    const d: DoorInst = { panel, col: c, axis, w, open: 0, target: 0, base: panel.position.clone(), timer: 0 };
    this.doors.push(d);
    this.interact(panel, {
      label: g => { const l = def.locked?.(g); return (def.label ?? 'Дверь') + (l ? ' — заперто' : ''); },
      use: g => {
        const l = def.locked?.(g);
        if (l) { g.audio.sfx('locked'); if (def.onLocked) def.onLocked(g); else g.notify(l, 'warn'); return; }
        if (d.target === 0) { d.target = 1; d.timer = 6; g.audio.sfx('door'); def.onOpen?.(g); }
      },
      if: () => d.open < 0.5,
    });
    return d;
  }
  npc(id: string, look: Look, x: number, y: number, z: number, yaw: number, cond?: (g: any) => boolean, def?: InteractDef) {
    const h = makeHumanoid(look); h.group.position.set(x, y, z); h.group.rotation.y = yaw; this.scene.add(h.group);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.9, 0.7), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = 0.95; h.group.add(hit);
    const n: NpcInst = { id, h, pos: new THREE.Vector3(x, y, z), yaw, cur: yaw, cond, hit, phase: Math.random() * 10 };
    this.npcs.push(n);
    const c = this.col(x - 0.3, x + 0.3, z - 0.3, z + 0.3, y, y + 1.9); (n as any).col = c;
    this.interact(hit, def ?? { label: g => 'Говорить: ' + g.npcName(id), use: g => g.talk(id), range: 3.2 });
    return n;
  }
  enableRain(count = 5000) { this.rain = new Rain(count, this.indoor); this.scene.add(this.rain.mesh); this.amb.rain = 1; }

  update(dt: number, t: number, g: any) {
    for (const u of this.updaters) u(dt, t, g);
    const pp = g.player.pos;
    for (const d of this.doors) {
      if (d.target === 1) {
        const dist = Math.hypot(pp.x - d.base.x, pp.z - d.base.z);
        if (dist > 2.6 || Math.abs(pp.y - (d.base.y - 1.25)) > 2) { d.timer -= dt; if (d.timer <= 0) d.target = 0; } else d.timer = 2.5;
      }
      const prev = d.open; d.open += Math.sign(d.target - d.open) * Math.min(Math.abs(d.target - d.open), dt * 2.2);
      if (prev !== d.open) { if (d.axis === 'x') d.panel.position.x = d.base.x + d.open * d.w * 0.96; else d.panel.position.z = d.base.z + d.open * d.w * 0.96; }
      d.col.on = d.open < 0.6;
    }
    for (const n of this.npcs) {
      const vis = n.cond ? !!n.cond(g) : true;
      n.h.group.visible = vis; (n as any).col.on = vis; n.hit.userData.disabled = !vis;
      if (!vis) continue;
      const dx = pp.x - n.pos.x, dz = pp.z - n.pos.z, dist = Math.hypot(dx, dz);
      let want = n.yaw; if (dist < 6 && Math.abs(pp.y - n.pos.y) < 2) want = Math.atan2(dx, dz);
      let diff = want - n.cur; while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
      n.cur += diff * Math.min(1, dt * 3); n.h.group.rotation.y = n.cur;
      const ph = t * 1.3 + n.phase;
      n.h.torso.scale.y = 1 + Math.sin(ph) * 0.012; n.h.head.rotation.x = Math.sin(ph * 0.5) * 0.04; n.h.head.rotation.z = Math.sin(ph * 0.31) * 0.03;
      n.h.armL.rotation.x = Math.sin(ph * 0.7) * 0.05; if (!(n as any).fixedArm) n.h.armR.rotation.x = -Math.sin(ph * 0.7) * 0.05;
      if (g.dialogueNpc === n.id) { n.h.head.rotation.x = Math.sin(t * 9) * 0.03; n.h.armR.rotation.x = -0.25 + Math.sin(t * 3) * 0.15; }
    }
    if (this.rain) this.rain.update(dt, g.camera.position);
    if (this.ground && (this.ground as any).material?.uniforms?.uTime) (this.ground as any).material.uniforms.uTime.value = t;
  }
  isIndoor(p: THREE.Vector3) {
    for (const b of this.indoor) if (p.x > b.minX && p.x < b.maxX && p.z > b.minZ && p.z < b.maxZ && p.y > b.minY && p.y < b.maxY) return true;
    return false;
  }
  dispose() { this.scene.traverse((n: any) => { n.geometry?.dispose?.(); }); const gr: any = this.ground; gr?.dispose?.(); }
}

/* ------------ shared prop helpers ------------ */
export const P = {
  table(L: Level, x: number, y: number, z: number, w = 1.6, d = 0.8, m = mat('wood')) {
    L.box(w, 0.06, d, x, y + 0.74, z, m, false); L.col(x - w / 2, x + w / 2, z - d / 2, z + d / 2, y, y + 0.8);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) L.box(0.06, 0.74, 0.06, x + sx * (w / 2 - 0.08), y, z + sz * (d / 2 - 0.08), flat(0x15161a, 0.5, 0.6), false);
  },
  crate(L: Level, x: number, y: number, z: number, s = 0.8, m = mat('metal', { color: 0x8a7a5a })) { return L.box(s, s, s, x, y, z, m); },
  barrel(L: Level, x: number, y: number, z: number, c = 0x3a4a3a) { return L.cyl(0.32, 0.95, x, y, z, flat(c, 0.6, 0.5), true); },
  terminal(L: Level, x: number, y: number, z: number, ry: number, lines: string[], title: string, color = '#6ff0ff') {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; L.scene.add(g);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.15, 0.4), mat('metal', { color: 0x4a5060 })); body.position.y = 0.575; g.add(body);
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.62, 0.08), flat(0x0c0e12, 0.3, 0.8)); top.position.set(0, 1.5, -0.1); top.rotation.x = -0.18; g.add(top);
    const sc = makeScreen(0.8, 0.52, lines, color, title); sc.position.set(0, 1.5, -0.05); sc.rotation.x = -0.18; g.add(sc);
    const kb = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.03, 0.25), glow(new THREE.Color(color).getHex(), 0.5)); kb.position.set(0, 1.17, 0.05); g.add(kb);
    L.col(x - 0.5, x + 0.5, z - 0.5, z + 0.5, y, y + 1.8); L.solids.push(body);
    const l = new THREE.PointLight(new THREE.Color(color).getHex(), 2.5, 4, 2); l.position.set(0, 1.5, 0.5); g.add(l);
    return g;
  },
  /** small pickup / examine prop */
  item(L: Level, geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number, def: InteractDef, hl = true) {
    const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); L.scene.add(me);
    if (hl) { const ring = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.125, 20), glow(0xffd070, 1.6)); ring.rotation.x = -Math.PI / 2; ring.position.y = -0.0; me.add(ring); (ring.material as any).side = THREE.DoubleSide;
      L.updaters.push((dt, t) => { ring.scale.setScalar(1 + Math.sin(t * 3) * 0.15); ring.lookAt(ring.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 1, 0))); }); }
    return L.interact(me, def);
  },
  vending(L: Level, x: number, y: number, z: number, ry: number, color: number, label: string) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; L.scene.add(g);
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.0, 0.7), flat(0x14161c, 0.4, 0.7)); b.position.y = 1; g.add(b);
    const f = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.2), glow(color, 1.3)); f.position.set(0, 1.25, 0.36); g.add(f);
    const s = makeSign(label, '#ffffff', 0.22, { k: 1.5 }); s.position.set(0, 1.3, 0.37); g.add(s);
    L.col(x - 0.6, x + 0.6, z - 0.6, z + 0.6, y, y + 2); L.solids.push(b);
    L.pool(color, 2.2, x + Math.sin(ry) * 1.2, y + 0.045, z + Math.cos(ry) * 1.2, 0.5);
    return g;
  },
  bench(L: Level, x: number, y: number, z: number, alongX = true) {
    const w = alongX ? 1.8 : 0.5, d = alongX ? 0.5 : 1.8;
    L.box(w, 0.08, d, x, y + 0.42, z, flat(0x23262e, 0.5, 0.6), false); L.box(w * 0.9, 0.42, d * 0.5, x, y, z, flat(0x15171c, 0.6, 0.5), false);
    L.col(x - w / 2, x + w / 2, z - d / 2, z + d / 2, y, y + 0.5);
  },
  pipe(L: Level, x0: number, y: number, z0: number, x1: number, z1: number, r = 0.12, c = 0x2c3038) {
    const len = Math.hypot(x1 - x0, z1 - z0); const me = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 8), flat(c, 0.5, 0.7));
    me.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); me.rotation.z = Math.PI / 2; me.rotation.y = -Math.atan2(z1 - z0, x1 - x0); L.scene.add(me); return me;
  },
  acUnit(L: Level, x: number, y: number, z: number, ry = 0) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; L.scene.add(g);
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.7, 0.45), flat(0x3a3e46, 0.6, 0.5)); g.add(b);
    const f = new THREE.Mesh(new THREE.CircleGeometry(0.26, 12), flat(0x0a0b0d, 0.4, 0.8)); f.position.z = 0.23; g.add(f); return g;
  },
};
