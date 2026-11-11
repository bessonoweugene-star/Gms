import * as THREE from 'three';
import { Level, P } from './level';
import { facadeMats, mat, flat, glow, glass, billboardTex, makeHumanoid, rng, softSprite, lightPool, Look } from '../engine/gfx';
import { makeGround, makeSky, makeSkyline } from '../engine/env';
import { LOOKS } from '../game/data';

export interface BuildOpts { reflections: boolean; quality: number; rain: number; }

/* ---------- shared helpers used by several zones ---------- */
export function bld(L: Level, x0: number, x1: number, z0: number, z1: number, h: number, seed: number, tone: any = 'warm', y0 = 0, lit = 0.35) {
  const w = x1 - x0, d = z1 - z0;
  const m = facadeMats(seed, Math.max(3, Math.round(Math.max(w, d) / 1.5)), Math.max(2, Math.round((h - y0) / 2.6)), tone, lit);
  return L.box(w, h - y0, d, (x0 + x1) / 2, y0, (z0 + z1) / 2, m, true);
}
export function billboard(L: Level, seed: number, title: string, sub: string, c1: string, c2: string, w: number, h: number, x: number, y: number, z: number, ry: number) {
  const m = new THREE.MeshBasicMaterial({ map: billboardTex(seed, title, sub, c1, c2) }); m.color.setScalar(1.25);
  const me = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); me.position.set(x, y, z); me.rotation.y = ry; L.scene.add(me);
  const fr = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, h + 0.4, 0.3), flat(0x0a0b0f, 0.5, 0.7)); fr.position.set(x - Math.sin(ry) * 0.2, y, z - Math.cos(ry) * 0.2); fr.rotation.y = ry; L.scene.add(fr);
  const ph = seed * 1.7;
  L.updaters.push((dt, t) => { const f = Math.sin(t * 0.7 + ph) > 0.96 ? 0.5 + Math.random() * 0.7 : 1.25; m.color.setScalar(f); });
  const p = L.pool(new THREE.Color(c1).getHex(), Math.max(w, 6), x + Math.sin(ry) * 4, 0.045, z + Math.cos(ry) * 4, 0.22);
  return me;
}
export function walkers(L: Level, paths: { z?: number; x?: number; a: number; b: number; y?: number }[], n: number, seed: number) {
  const r = rng(seed); const list: any[] = [];
  const coats = [0x1c2028, 0x2a1c22, 0x1a2a2c, 0x33301f, 0x241a30, 0x3a1418, 0x14202e];
  for (let i = 0; i < n; i++) {
    const p = paths[i % paths.length];
    const look: Look = { coat: coats[(r() * coats.length) | 0], coatLen: 0.3 + r() * 0.6, hairStyle: (['short', 'hood', 'hat', 'long', 'bun'] as any)[(r() * 5) | 0], accent: [0x66e0ff, 0xff4fa0, 0xffc060][(r() * 3) | 0], height: 0.94 + r() * 0.1, extra: r() < 0.55 && L.amb.rain ? ['umbrella'] : [] };
    const h = makeHumanoid(look); L.scene.add(h.group);
    list.push({ h, p, pos: p.a + r() * (p.b - p.a), dir: r() < 0.5 ? 1 : -1, sp: 0.9 + r() * 0.6, off: (r() - 0.5) * 1.6, ph: r() * 9, umb: look.extra!.includes('umbrella') });
  }
  L.updaters.push((dt, t, g) => {
    for (const w of list) {
      w.pos += w.dir * w.sp * dt; if (w.pos > w.p.b) { w.pos = w.p.b; w.dir = -1; } if (w.pos < w.p.a) { w.pos = w.p.a; w.dir = 1; }
      const gp = w.h.group.position; const y = w.p.y ?? 0;
      if (w.p.z !== undefined) { gp.set(w.pos, y, w.p.z + w.off); w.h.group.rotation.y = w.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      else { gp.set(w.p.x + w.off, y, w.pos); w.h.group.rotation.y = w.dir > 0 ? 0 : Math.PI; }
      const s = Math.sin(t * 5.2 * w.sp + w.ph);
      w.h.legL.rotation.x = s * 0.5; w.h.legR.rotation.x = -s * 0.5; w.h.armL.rotation.x = -s * 0.35; if (!w.umb) w.h.armR.rotation.x = s * 0.35;
      gp.y = y + Math.abs(Math.cos(t * 5.2 * w.sp + w.ph)) * 0.025;
    }
  });
}
function makeCar(color: number, accent: number) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.62, 1.9), new THREE.MeshStandardMaterial({ color, roughness: 0.18, metalness: 0.9 })); body.position.y = 0.55; g.add(body);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.5, 1.66), new THREE.MeshStandardMaterial({ color: 0x05070a, roughness: 0.05, metalness: 1 })); cab.position.set(-0.25, 1.08, 0); g.add(cab);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 1.86), body.material); nose.position.set(1.7, 0.82, 0); nose.rotation.z = -0.22; g.add(nose);
  for (const s of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 0.5), glow(0xeaf4ff, 4)); hl.position.set(2.21, 0.6, s * 0.62); g.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.6), glow(0xff1830, 3)); tl.position.set(-2.21, 0.66, s * 0.58); g.add(tl);
    for (const fx of [-1.4, 1.4]) { const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 12), flat(0x050506, 0.8)); wh.rotation.x = Math.PI / 2; wh.position.set(fx, 0.34, s * 0.88); g.add(wh); }
  }
  const st = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.03, 0.04), glow(accent, 2.5)); st.position.set(0, 0.86, 0.96); g.add(st); const st2 = st.clone(); st2.position.z = -0.96; g.add(st2);
  const beam = lightPool(0xcfe6ff, 5, 0.5); beam.position.set(6, 0.05, 0); beam.scale.set(1.3, 0.6, 1); g.add(beam);
  const rear = lightPool(0xff2030, 2.4, 0.4); rear.position.set(-3.4, 0.05, 0); g.add(rear);
  return g;
}
export function traffic(L: Level, lanes: { z: number; dir: number }[], x0: number, x1: number, n: number, seed: number) {
  const r = rng(seed); const cars: any[] = [];
  const cols = [0x10141c, 0x1c0f14, 0x0f1a1a, 0x202228, 0x2a0d12, 0x0c1024];
  for (let i = 0; i < n; i++) {
    const lane = lanes[i % lanes.length]; const car = makeCar(cols[(r() * cols.length) | 0], [0x55ddff, 0xff4fa0, 0xffb040][(r() * 3) | 0]);
    car.rotation.y = lane.dir > 0 ? 0 : Math.PI; L.scene.add(car);
    const c = L.col(0, 0, 0, 0, 0, 1.6);
    cars.push({ car, lane, x: x0 + (i + r() * 0.6) * ((x1 - x0) / n), v: 9 + r() * 5, max: 9 + r() * 5, c });
  }
  L.updaters.push((dt, t, g) => {
    const pp = g.player.pos;
    for (const c of cars) {
      let target = c.max;
      const ahead = (pp.x - c.x) * c.lane.dir;
      if (pp.y < 2 && Math.abs(pp.z - c.lane.z) < 2.4 && ahead > -1 && ahead < 14) target = 0;
      for (const o of cars) if (o !== c && o.lane === c.lane) { const d = (o.x - c.x) * c.lane.dir; if (d > 0 && d < 9) target = Math.min(target, o.v * 0.8); }
      c.v += (target - c.v) * Math.min(1, dt * (target < c.v ? 5 : 1.2));
      c.x += c.v * c.lane.dir * dt;
      if (c.x > x1) c.x = x0; if (c.x < x0) c.x = x1;
      c.car.position.set(c.x, 0, c.lane.z);
      c.c.minX = c.x - 2.3; c.c.maxX = c.x + 2.3; c.c.minZ = c.lane.z - 1.0; c.c.maxZ = c.lane.z + 1.0;
    }
  });
}
export function skyTraffic(L: Level, n: number, yMin: number, yMax: number, seed: number) {
  const r = rng(seed); const pos = new Float32Array(n * 3), col = new Float32Array(n * 3); const data: any[] = [];
  for (let i = 0; i < n; i++) { const alongX = r() < 0.5; data.push({ alongX, off: (r() - 0.5) * 300, y: yMin + r() * (yMax - yMin), p: (r() - 0.5) * 500, v: (14 + r() * 22) * (r() < 0.5 ? 1 : -1) }); const c = r() < 0.5 ? [1, 0.25, 0.2] : [0.8, 0.9, 1]; col.set(c, i * 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({ size: 1.4, map: softSprite(), vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, sizeAttenuation: true });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; L.scene.add(pts);
  L.updaters.push(dt => {
    for (let i = 0; i < n; i++) { const d = data[i]; d.p += d.v * dt; if (d.p > 260) d.p = -260; if (d.p < -260) d.p = 260; pos[i * 3] = d.alongX ? d.p : d.off; pos[i * 3 + 1] = d.y; pos[i * 3 + 2] = d.alongX ? d.off : d.p; }
    g.attributes.position.needsUpdate = true;
  });
}
export function baseLights(L: Level, sky: number, groundC: number, hemi: number, dirC: number, dir: number) {
  L.scene.add(new THREE.HemisphereLight(sky, groundC, hemi * 2.2)); L.scene.add(new THREE.AmbientLight(0xa8b4d0, hemi * 1.5));
  const d = new THREE.DirectionalLight(dirC, dir); d.position.set(-30, 80, 20); L.scene.add(d);
}
export function metro(L: Level, x: number, z: number, ry: number, label = 'МЕТРО • ЛИНИЯ 7') {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; L.scene.add(g);
  const mm = flat(0x1a1d24, 0.4, 0.8);
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.6, 0.5), mm); p.position.set(s * 2.4, 1.8, 0); g.add(p); }
  const top = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.7, 0.8), mm); top.position.y = 3.6; g.add(top);
  const back = new THREE.Mesh(new THREE.BoxGeometry(4.4, 3.3, 0.2), flat(0x06080c, 0.3, 0.6)); back.position.set(0, 1.65, -0.5); g.add(back);
  const glowP = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3.0), glow(0x1a6a8a, 0.9)); glowP.position.set(0, 1.6, -0.38); g.add(glowP);
  for (let i = 0; i < 6; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.04, 0.05), glow(0x55ddff, 2)); st.position.set(0, 0.3 + i * 0.5, -0.36); g.add(st); }
  L.sign(label, '#55ddff', 0.5, x + Math.sin(ry) * 0.45, 3.6, z + Math.cos(ry) * 0.45, ry);
  const c = Math.abs(Math.cos(ry)) > 0.5; L.col(x - (c ? 2.8 : 0.7), x + (c ? 2.8 : 0.7), z - (c ? 0.7 : 2.8), z + (c ? 0.7 : 2.8), 0, 4);
  L.light(0x55ddff, 14, 10, x + Math.sin(ry) * 1.5, 2.4, z + Math.cos(ry) * 1.5);
  L.pool(0x55ddff, 4, x + Math.sin(ry) * 2, 0.045, z + Math.cos(ry) * 2, 0.5);
  L.interact(glowP, { label: 'Транзит: выбрать район', use: gm => gm.openTravel(), range: 4 });
  L.solids.push(back);
}
export function storefront(L: Level, x: number, z: number, ry: number, w: number, color: number, name: string, nameColor: string, y = 0) {
  const nx = Math.sin(ry), nz = Math.cos(ry);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(w, 2.3), glow(color, 0.55)); win.position.set(x + nx * 0.03, y + 1.45, z + nz * 0.03); win.rotation.y = ry; L.scene.add(win);
  const fr = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.3, 2.6), flat(0x0a0b0e, 0.4, 0.7)); fr.position.set(x + nx * 0.02, y + 1.45, z + nz * 0.02); fr.rotation.y = ry; L.scene.add(fr);
  for (let i = 1; i < Math.round(w / 1.4); i++) { const b = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 2.3), flat(0x0a0b0e)); const off = -w / 2 + i * (w / Math.round(w / 1.4)); b.position.set(x + nx * 0.04 + nz * off, y + 1.45, z + nz * 0.04 - nx * off); b.rotation.y = ry; L.scene.add(b); }
  if (name) L.sign(name, nameColor, 0.75, x + nx * 0.25, y + 3.3, z + nz * 0.25, ry);
  L.pool(color, w * 0.9, x + nx * 2.2, y + 0.045, z + nz * 2.2, 0.3);
}

/* =====================  CENTRAL  ===================== */
export function buildCentral(o: BuildOpts): Level {
  const L = new Level('central', 'ЦЕНТРАЛЬНЫЙ РАЙОН', 'Проспект Аркадия • Vesper City', 0x0b0f1c, 0.0135);
  L.amb.siren = true; L.amb.hum = 0.8;
  baseLights(L, 0x5a6aa8, 0x120a14, 0.55, 0x7088c8, 0.35);
  L.add(makeSky(0x02030a, 0x1c1238, 0x7a3a8a));
  L.add(makeSkyline(11, 0x8a90b0));
  L.ground = L.add(makeGround({ size: 300, base: 0x0b0c11, puddle: 0.55, quality: o.quality, rain: o.rain }, o.reflections, L.fog));

  // ---- road dressing
  for (let x = -60; x < 60; x += 6) L.box(2.6, 0.012, 0.14, x, 0.012, 0, glow(0xffd070, 0.5), false);
  for (const z of [-5, 5]) L.box(124, 0.014, 0.12, 0, 0.012, z, glow(0x55ddff, 0.35), false);
  // crosswalk at alley
  for (let i = -4; i <= 4; i++) L.box(0.5, 0.012, 3.2, i * 1.0 - 0, 0.013, 0, glow(0xdfe8ff, 0.28), false);

  // ---- north row (faces z=-10)
  const N: [number, number, number, any][] = [[-70, -52, 58, 'cold'], [-52, -34, 34, 'warm'], [-34, -20, 72, 'cold'], [-20, -4, 44, 'warm'], [-4, 22, 90, 'corp'], [22, 38, 38, 'warm'], [38, 54, 64, 'cold'], [54, 70, 46, 'warm']];
  N.forEach(([a, b, h, t], i) => bld(L, a, b, -32, -10, h, 100 + i, t));
  // ---- south row (faces z=10), office + alley handled separately
  bld(L, -70, -46, 10, 32, 52, 201, 'warm'); bld(L, -46, -28, 10, 32, 76, 202, 'cold');
  bld(L, -28, -16, 10.0, 30, 40, 203, 'warm', 3.5);       // above Noah's office
  bld(L, -28, -16, 20.3, 30, 3.5, 204, 'warm');           // behind office
  bld(L, -16, -3, 10, 30, 60, 205, 'cold');
  bld(L, 3, 25, 10, 30, 44, 206, 'warm');                  // Theo's building (roof)
  bld(L, 25, 46, 10, 32, 82, 207, 'corp'); bld(L, 46, 70, 10, 32, 48, 208, 'warm');
  // plaza surround
  bld(L, -30, -14, 30, 52, 56, 210, 'cold'); bld(L, 14, 30, 30, 52, 66, 211, 'warm'); bld(L, -14, 14, 46, 60, 48, 212, 'cold');
  // tunnel portals
  for (const s of [-1, 1]) {
    L.box(18, 70, 64, s * 71, 5.2, 0, facadeMats(300 + s, 8, 20, 'cold'), false); L.col(s * 62 - 0.5, s * 62 + 0.5, -10, 10);
    L.box(18, 5.2, 4.8, s * 71, 0, -7.5, mat('concrete'), false); L.box(18, 5.2, 4.8, s * 71, 0, 7.5, mat('concrete'), false);
    L.box(0.1, 5.2, 10, s * 79, 0, 0, flat(0x000000), false);
    L.sign('ТРАНСПОРТНЫЙ ТОННЕЛЬ\nПЕШЕХОДАМ ВХОД ЗАПРЕЩЁН', '#ff5a3a', 0.9, s * 61.9, 4.2, 0, -s * Math.PI / 2);
    for (let i = 0; i < 4; i++) L.box(0.08, 5, 0.08, s * 62, 0, -4.5 + i * 3, glow(0xff5a3a, 1.5), false);
  }

  // ---- lamps
  for (let x = -54; x <= 54; x += 18) { L.lamp(x, -5.6, 0xffc890, 6.5, x === 0 || x === -36 || x === 36); L.lamp(x + 9, 5.6, 0x9fd0ff, 6.5); }
  L.lamp(-2.6, 20, 0xff9a60, 5, true); L.lamp(-8, 33, 0x9fd0ff, 6); L.lamp(8, 33, 0x9fd0ff, 6);

  // ---- storefronts + neon
  storefront(L, -61, -9.98, 0, 12, 0x2a8aaa, 'MNEMOBANK', '#55ddff');
  storefront(L, -27, -9.98, 0, 10, 0xaa2a6a, 'ИМПЛАНТЫ 24/7', '#ff4fa0');
  storefront(L, 30, -9.98, 0, 11, 0xaa7a2a, 'ЛОМБАРД ПАМЯТИ', '#ffb040');
  storefront(L, 46, -9.98, 0, 10, 0x2aaa7a, 'СИНТ-АПТЕКА', '#5affb0');
  storefront(L, -58, 9.98, Math.PI, 14, 0x6a2aaa, 'КЛУБ «ЭХО»', '#b070ff');
  storefront(L, -37, 9.98, Math.PI, 12, 0xaa2a3a, 'ТИР • VR', '#ff5a5a');
  storefront(L, -9.5, 9.98, Math.PI, 9, 0x2a6aaa, 'КИБЕР-КАФЕ', '#6fb6ff');
  storefront(L, 35, 9.98, Math.PI, 14, 0x2a9aaa, 'HYPERION STORE', '#bfe9ff');
  storefront(L, 58, 9.98, Math.PI, 14, 0xaa5a2a, 'ОТЕЛЬ «КАПСУЛА»', '#ff9a50');
  // vertical & hanging neon
  L.sign('ПАМЯТЬ', '#ff4fa0', 7, -33.5, 16, -9.6, 0, { vertical: true });
  L.sign('СНЫ НА ЗАКАЗ', '#55ddff', 1.2, 46, 9, -9.7, 0, { border: true });
  L.sign('24H', '#ffb040', 1.6, -20.3, 7, -9.6, 0);
  L.sign('ЭХО', '#b070ff', 6, -46.4, 15, 9.6, Math.PI, { vertical: true });
  L.sign('VESPER', '#5affb0', 5.5, 25.4, 18, 9.6, Math.PI, { vertical: true });
  L.sign('ПРОДАЙ ПЛОХОЙ ДЕНЬ', '#ffb040', 0.9, -61, 6.2, -9.7, 0, { border: true, sub: 'MNEMOBANK • ВЫКУП ВОСПОМИНАНИЙ' });
  L.sign('НЕ ПОМНИШЬ — НЕ БЫЛО', '#ff4fa0', 0.7, 14, 6, 9.7, Math.PI);
  // billboards
  billboard(L, 1, 'HYPERION', 'ПАМЯТЬ — ЭТО ВЫБОР', '#7fd4ff', '#2a4aff', 12, 18, 9, 24, -9.7, 0);
  billboard(L, 2, 'ЗАБУДЬ\nЕГО', 'СЕРВИС «ЧИСТЫЙ ЛИСТ» • ОТ 299₵', '#ff4fa0', '#7a1aff', 9, 13.5, -43, 20, -9.7, 0);
  billboard(L, 3, 'КУПИ\nДЕТСТВО', 'ПОДЛИННЫЕ ВОСПОМИНАНИЯ. ГАРАНТИЯ.', '#ffb040', '#ff3a5a', 9, 13.5, 36, 24, 9.7, Math.PI);
  billboard(L, 4, 'VCPD', 'МЫ ПОМНИМ ЗА ВАС', '#9fb6ff', '#3a5aff', 7, 10, -55, 18, 9.7, Math.PI);

  // ---- street props
  P.vending(L, -14, 0, -9.2, 0, 0x2a8aff, 'SYNTH\nCOLA'); P.vending(L, 20, 0, 9.2, Math.PI, 0xff3a7a, 'НУДЛС\nBOX');
  P.bench(L, -47, 0, -8.6); P.bench(L, 40, 0, -8.6); P.bench(L, 12, 0, 8.6); P.bench(L, -52, 0, 8.6);
  for (const [x, z] of [[-24, -9], [5, 9], [50, 9], [-50, -9]]) { L.cyl(0.3, 0.8, x, 0, z, flat(0x1a1c20, 0.6, 0.5), true); }
  L.steam(-18, 0, -6, 0xb0b8c8, 7, 5, 0.8, 0.2); L.steam(27, 0, 6.5, 0xb0b8c8, 7, 5, 0.8, 0.2); L.steam(-2, 0, 26, 0xffb090, 6, 4, 0.6, 0.18);
  // overhead cables + AC
  for (const x of [-40, -10, 30, 55]) { const c = P.pipe(L, x, 9 + Math.sin(x) * 1.5, -10, x + 3, 10, 0.03, 0x050506); }
  for (let i = 0; i < 10; i++) P.acUnit(L, -64 + i * 13.3, 4.2 + (i % 3) * 3, i % 2 ? -9.75 : 9.75, i % 2 ? 0 : Math.PI);

  // ---- noodle stall (north sidewalk)
  L.box(4.4, 1.0, 0.9, 12, 0, -8.6, mat('wood', { color: 0xa08060 }));
  L.box(5.0, 0.12, 2.6, 12, 2.7, -8.4, flat(0x7a1418, 0.7), false);
  for (const sx of [-2.3, 2.3]) L.box(0.1, 2.7, 0.1, 12 + sx, 0, -7.3, flat(0x15171c, 0.5, 0.7), false);
  L.sign('ЛАПША ВОНГА', '#ff5a3a', 0.6, 12, 3.25, -7.1, 0, { border: true });
  for (let i = 0; i < 5; i++) { const s = L.add(new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), glow(0xff4a2a, 2.4)), 10 + i, 2.45, -7.2); L.updaters.push((dt, t) => { s.position.y = 2.45 + Math.sin(t * 1.5 + i) * 0.02; }); }
  for (const sx of [-1.3, 0, 1.3]) L.cyl(0.18, 0.62, 12 + sx, 0, -7.5, flat(0x2a2c32, 0.5, 0.6), true);
  L.light(0xff6a3a, 26, 11, 12, 2.3, -7.4); L.steam(11, 1.1, -8.7, 0xffe0c0, 6, 2.2, 0.5, 0.25); L.steam(13.2, 1.1, -8.7, 0xffe0c0, 5, 2, 0.4, 0.2);
  L.npc('wong', LOOKS.wong, 12, 0, -9.4, 0, undefined, { label: 'Вонг — повар', use: g => g.bark('wong'), range: 3.4 });
  L.npc('theo', LOOKS.theo, 13.4, 0, -6.8, Math.PI, g => !g.flag('theo_arrested'));

  // ---- police post
  L.box(3.4, 2.8, 2.6, -41, 0, -8.4, mat('panel', { color: 0x9aa4c0 }));
  L.box(3.5, 0.12, 2.7, -41, 1.9, -8.4, glow(0x3a6aff, 2), false);
  L.sign('VCPD • ПОСТ 12', '#9fb6ff', 0.42, -41, 2.45, -7.05, 0);
  const pl1 = L.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.18, 0.3), glow(0xff2030, 3)), -41.6, 2.95, -8.4), pl2 = L.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.18, 0.3), glow(0x2a50ff, 3)), -40.4, 2.95, -8.4);
  const plL = L.light(0x4a70ff, 18, 12, -41, 3.3, -7.5);
  L.updaters.push((dt, t) => { const a = Math.sin(t * 5) > 0; pl1.visible = a; pl2.visible = !a; plL.color.setHex(a ? 0xff3040 : 0x3a60ff); });
  L.npc('orlova', LOOKS.orlova, -38.4, 0, -7.2, 0);

  // ---- Noah's office (interior)
  const WM = mat('panel', { color: 0x9a8f88 });
  L.room(-27, -17, 10.3, 20, 0, 3.3, { wall: WM, floor: mat('wood'), ceil: flat(0x0e0f12, 0.9), doors: [{ side: 'n', at: -22 }] });
  L.door(-22, 0, 10.3, 'x', 1.5, { label: 'Офис Каррена' });
  L.box(0.85, 3.5, 10.3, -27.575, 0, 15.15, WM); L.box(0.85, 3.5, 10.3, -16.425, 0, 15.15, WM);
  L.sign('Н. КАРРЕН\nЧАСТНЫЙ СЫСК', '#ffb040', 0.7, -22, 3.25, 9.9, Math.PI, { sub: 'ПАМЯТЬ • ПРОПАЖИ • ИЗМЕНЫ' });
  P.table(L, -22, 0, 17.6, 2.2, 1.0);
  L.box(0.6, 0.5, 0.6, -22, 0, 18.7, flat(0x1a1410, 0.8), true); L.box(0.6, 0.7, 0.1, -22, 0.5, 19.0, flat(0x1a1410, 0.8), false);
  const dl = L.cyl(0.12, 0.02, -21.2, 0.8, 17.5, flat(0x222222, 0.4, 0.8)); L.cyl(0.015, 0.4, -21.2, 0.82, 17.5, flat(0x222222, 0.4, 0.8));
  L.add(new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.18, 12, 1, true), glow(0xffa860, 1.6)), -21.2, 1.3, 17.5);
  L.light(0xffa860, 9, 8, -21.2, 1.5, 17.3); L.light(0xff4fa0, 6, 7, -22, 2.4, 11.4); L.light(0xffd0a0, 5, 10, -22, 3.0, 14.5);
  L.screen(0.55, 0.36, ['> входящих: 1', '> М. ВЕЙН — СРОЧНО', '> баланс: низкий', '> аренда: просрочена'], -22.7, 1.02, 17.75, 0.3, '#ffb040', 'KARREN//OS');
  L.box(0.6, 0.4, 0.05, -22.7, 0.8, 17.8, flat(0x0c0d10, 0.4, 0.7), false);
  // couch, cabinet, fan
  L.box(0.9, 0.45, 2.6, -26.3, 0, 14.5, flat(0x2a1a1a, 0.9)); L.box(0.25, 0.9, 2.6, -26.7, 0, 14.5, flat(0x2a1a1a, 0.9), false);
  L.box(0.9, 1.5, 0.5, -18.0, 0, 19.5, mat('metal', { color: 0x6a7080 })); L.box(0.9, 1.5, 0.5, -19.0, 0, 19.5, mat('metal', { color: 0x6a7080 }));
  const fan = L.add(new THREE.Group(), -22, 3.15, 15); for (let i = 0; i < 4; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, 0.16), flat(0x1a1a1a, 0.6)); b.position.x = 0.7; const pv = new THREE.Group(); pv.rotation.y = i * Math.PI / 2; pv.add(b); fan.add(pv); }
  L.updaters.push(dt => { fan.rotation.y += dt * 1.2; });
  // blinds window (fake light slats)
  for (let i = 0; i < 9; i++) L.box(2.4, 0.05, 0.02, -25, 1.2 + i * 0.17, 10.48, glow(0xff4fa0, 0.7), false);
  for (let i = 0; i < 9; i++) L.box(2.4, 0.05, 0.02, -19, 1.2 + i * 0.17, 10.48, glow(0x55ddff, 0.6), false);
  // case board
  const board = L.box(0.06, 1.5, 2.6, -17.2, 0.9, 14.5, flat(0x3a2e22, 0.9), false);
  for (let i = 0; i < 7; i++) L.box(0.01, 0.26, 0.2, -17.24, 1.2 + (i % 3) * 0.4, 13.5 + (i * 0.37) % 2.1, flat([0xd8d0c0, 0xc0c8d8, 0xe0c8a0][i % 3], 0.9), false);
  L.box(0.02, 0.01, 2.2, -17.25, 1.75, 14.5, glow(0xff3030, 1.2), false);
  L.interact(board, { label: 'Доска расследования', use: g => g.ui.openBoard(), range: 3.5 });
  // interactables
  P.item(L, new THREE.BoxGeometry(0.1, 0.02, 0.14), flat(0x8a7a3a, 0.3, 0.9), -21.6, 0.83, 17.9, { label: 'Старый жетон', use: (g, o) => { g.give('i_badge'); o.visible = false; o.userData.disabled = true; g.set('took_badge'); }, if: g => !g.flag('took_badge') });
  const bottle = L.cyl(0.04, 0.26, -22.9, 0.8, 17.3, glass(0xaa6a2a, 0.6));
  L.interact(bottle, { label: 'Бутылка', use: g => g.examine('Синт-виски «Олд Вектор»', 'На треть пустая. Говорят, алкоголь портит мнемо-импланты. У меня нет импланта — только шрам за ухом, где он когда-то был. Не помню, зачем его вынули.') });
  const frame = L.box(0.5, 0.36, 0.03, -24.5, 1.6, 19.82, flat(0x8a7a50, 0.4, 0.6), false);
  L.interact(frame, { label: 'Грамота в рамке', use: g => { g.examine('Благодарность департамента', '«Детективу Н. Каррену — за образцовое завершение расследования пожара на Марлоу-стрит. Отдел мнемо-преступлений VCPD, 2085».<br><br>Шесть лет прошло. Я помню, как вешал эту рамку. Не помню, за что её дали — только запах гари и чувство, будто я что-то забыл выключить.'); g.set('saw_commend'); } });
  L.npc('mira', LOOKS.mira, -23.6, 0, 15.2, 0.4, g => !g.flag('mira_gone'));

  // ---- alley + roof access
  L.box(1.6, 2.6, 0.2, 3.05, 0, 22, flat(0x20242c, 0.4, 0.8), false);
  const elev = L.box(0.12, 2.4, 1.4, 2.9, 0, 22, new THREE.MeshStandardMaterial({ color: 0x3a4250, roughness: 0.3, metalness: 0.9 }), false); L.solids.push(elev);
  L.sign('СВОБОДНАЯ ЧАСТОТА', '#5affb0', 0.28, 2.8, 2.75, 22, -Math.PI / 2);
  L.interact(elev, {
    label: 'Служебный лифт на крышу', range: 3,
    use: g => {
      if (g.flag('roof_open')) return g.teleport('roof');
      if (g.flag('theo_code')) { g.set('roof_open'); g.notify('Код Тео принят.'); return g.teleport('roof'); }
      g.choice('Лифт заблокирован кодовой панелью.', [['Взломать панель', () => g.hack({ title: 'ЛИФТ • СВОБОДНАЯ ЧАСТОТА', level: 2, onWin: () => { g.set('roof_open'); g.teleport('roof'); } })], ['Уйти', () => { }]]);
    },
  });
  // alley dressing
  P.crate(L, -2.2, 0, 14); P.crate(L, -2.3, 0.8, 14.1, 0.6); P.barrel(L, 2.3, 0, 16); L.box(1.6, 1.3, 1.0, -2.1, 0, 26, flat(0x1c3a2a, 0.7, 0.4));
  L.sign('ВЫХОДА НЕТ', '#ff3a3a', 0.4, -2.95, 2.4, 18, Math.PI / 2);
  L.light(0xff4fa0, 16, 12, 0, 3.5, 16);
  // plaza
  metro(L, 0, 44.8, Math.PI);
  P.bench(L, -9, 0, 38, false); P.bench(L, 9, 0, 38, false);
  billboard(L, 5, 'ЭЛИАС\nВЕЙН', 'РАЗЫСКИВАЕТСЯ • HYPERION SECURITY', '#ff5a3a', '#ffb040', 6, 9, -13.7, 9, 38, Math.PI / 2);
  storefront(L, 13.98, 38, -Math.PI / 2, 10, 0xaa3a8a, 'САЛОН «ВТОРАЯ ЖИЗНЬ»', '#ff7ad0');
  L.light(0x9fd0ff, 14, 14, 0, 5, 36);

  // ---- roof (Theo's transmitter)
  const RY = 44;
  L.box(22, 0.06, 20, 14, RY, 20, mat('metal', { color: 0x4a4e58, rep: [6, 6] }), false);
  for (const [a, b, c, d] of [[3, 25, 10, 10.3], [3, 25, 29.7, 30], [3, 3.3, 10, 30], [24.7, 25, 10, 30]]) { L.col(a, b, c, d, RY - 1, RY + 3); }
  for (const z of [10.15, 29.85]) { L.box(22, 0.06, 0.06, 14, RY + 1.1, z, glow(0x5affb0, 1.2), false); L.box(22, 0.5, 0.1, 14, RY, z, flat(0x15171c), false); }
  for (const x of [3.15, 24.85]) { L.box(0.06, 0.06, 20, x, RY + 1.1, 20, glow(0x5affb0, 1.2), false); L.box(0.1, 0.5, 20, x, RY, 20, flat(0x15171c), false); }
  L.box(2.4, 2.8, 2.4, 5, RY, 22, mat('metal', { color: 0x5a606c }));
  const elev2 = L.box(0.1, 2.3, 1.3, 6.25, RY, 22, new THREE.MeshStandardMaterial({ color: 0x3a4250, roughness: 0.3, metalness: 0.9 }), false); L.solids.push(elev2);
  L.interact(elev2, { label: 'Лифт вниз', use: g => g.teleport('alley') });
  // antenna
  L.cyl(0.25, 14, 18, RY, 14, flat(0x1a1d24, 0.4, 0.8), true, 0.08);
  for (let i = 0; i < 4; i++) { L.box(3 - i * 0.6, 0.06, 0.06, 18, RY + 4 + i * 2.6, 14, flat(0x1a1d24, 0.4, 0.8), false); }
  const beacon = L.add(new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), glow(0xff2030, 4)), 18, RY + 14.2, 14);
  L.updaters.push((dt, t) => { beacon.visible = Math.sin(t * 2.2) > -0.2; });
  const dish = L.add(new THREE.Mesh(new THREE.SphereGeometry(1.3, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.35), flat(0x3a3e46, 0.4, 0.7)), 21, RY + 1.7, 25); dish.rotation.set(-2.1, 0.6, 0); (dish.material as any).side = THREE.DoubleSide;
  L.cyl(0.08, 1.4, 21, RY, 25, flat(0x1a1d24), true);
  for (const [x, z] of [[9, 12.5], [11.5, 12.5], [22, 18]]) { L.box(1.6, 1.1, 1.2, x, RY, z, flat(0x33373f, 0.6, 0.5)); }
  const tx = P.terminal(L, 16.2, RY, 15.4, 0, ['ПЕРЕДАТЧИК: ГОТОВ', 'ОХВАТ: 4 РАЙОНА', 'ПАКЕТ: ---', '', '> ВСТАВЬТЕ НОСИТЕЛЬ'], 'СВОБОДНАЯ ЧАСТОТА', '#5affb0');
  L.interact(tx.children[0], { label: 'Пиратский передатчик', range: 3.2, use: g => g.story.transmitter(g) });
  L.light(0x5affb0, 10, 10, 16, RY + 2.4, 16.5); L.light(0xff4fa0, 30, 30, 14, RY + 3, 8);
  L.sign('СВОБОДНАЯ\nЧАСТОТА', '#5affb0', 1.6, 14, RY + 3.2, 29.6, Math.PI, { border: true });
  P.crate(L, 8, RY, 27); P.crate(L, 9, RY, 27.4, 0.6);
  L.box(1.8, 0.4, 0.8, 12, RY, 26, flat(0x2a2224, 0.9)); // mattress — Theo sleeps here
  L.indoor.push({ minX: 3.9, maxX: 6.1, minZ: 20.9, maxZ: 23.1, minY: RY, maxY: RY + 3, on: true });

  // ---- life
  walkers(L, [{ z: -7.6, a: -56, b: 56 }, { z: 7.6, a: -56, b: 56 }, { x: 0, a: 12, b: 40 }, { z: -6.4, a: -50, b: 50 }], 12, 77);
  traffic(L, [{ z: -2.5, dir: 1 }, { z: 2.5, dir: -1 }], -84, 84, 7, 5);
  skyTraffic(L, 40, 75, 150, 9);
  L.enableRain(Math.floor(6000 * o.rain));

  L.spawns = {
    start: { x: -22, y: 0, z: 12.6, yaw: Math.PI }, office: { x: -22, y: 0, z: 12.6, yaw: Math.PI },
    metro: { x: 0, y: 0, z: 41.5, yaw: 0 }, roof: { x: 8, y: RY, z: 22, yaw: -Math.PI / 2 }, alley: { x: 1.2, y: 0, z: 22, yaw: Math.PI / 2 },
    menu: { x: -6, y: 0, z: 3, yaw: -1.2 },
  };
  return L;
}
