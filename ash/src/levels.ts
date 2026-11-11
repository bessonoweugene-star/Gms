import * as THREE from 'three';
import { Level, P, InteractDef } from '../../src/world/level';
import { glow, softSprite, facadeMats, rng, lightCone } from '../../src/engine/gfx';
import { makeGround } from '../../src/engine/env';
import { pbr, stainedGlass, mosaic, signMesh } from './tex';
import { makePerson, PersonOpts } from './people';

const flat = (c: number, r = 0.7, m = 0) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const mesh = (L: Level, geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number, ry = 0) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.rotation.y = ry; L.scene.add(me); return me; };

export const PEOPLE: Record<string, PersonOpts> = {
  vera: { coat: 0x3a4a6a, hat: 'none', hair: 0x8a8a8a, long: true, scarf: 0xa03a2a, coatLen: 0.45, scale: 0.96, skin: 0xd0a890 },
  ildar: { coat: 0x2a4a3a, hat: 'beanie', hatColor: 0x8a3a2a, glasses: true, pose: 'sit', skin: 0xc09070, scale: 0.98 },
  timur: { coat: 0xb0b4a8, hat: 'none', hair: 0x14100c, beard: true, coatLen: 0.5, skin: 0xb08060 },
  anya: { coat: 0xc04a6a, hat: 'beanie', hatColor: 0xe8d070, scale: 0.66, pose: 'sit', skin: 0xe0b8a0, scarf: 0x6ab0d0 },
  zhora: { coat: 0x5a4a2a, hat: 'cap', hatColor: 0x1a1a1a, build: 1.2, beard: true, coatLen: 0.3, backpack: true },
  palych: { coat: 0x30343c, hat: 'ushanka', hatColor: 0x4a4038, beard: true, hair: 0xa0a0a0, pose: 'sit', guitar: true, skin: 0xb89078 },
  suhoy: { coat: 0x4a463a, hat: 'hood', pose: 'sit', beard: true, hair: 0x6a6a60, skin: 0xa88868, scarf: 0x2a2a26 },
  zarema: { coat: 0x26303a, hat: 'none', hair: 0x0c0a0a, long: true, coatLen: 0.5, scale: 0.97, skin: 0xc8a080, scarf: 0x40505a },
  guard: { coat: 0x2e3a2a, hat: 'beanie', hatColor: 0x14160f, mask: true, pose: 'guard', rifle: true, build: 1.1, backpack: true },
};
export function addNpc(L: Level, id: string, o: PersonOpts, x: number, y: number, z: number, yaw: number, def?: InteractDef, cond?: (g: any) => boolean) {
  const h = makePerson(o); h.group.position.set(x, y, z); h.group.rotation.y = yaw; L.scene.add(h.group);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(0.8, o.pose === 'sit' ? 1.3 : 1.9, 0.8), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = o.pose === 'sit' ? 0.65 : 0.95; h.group.add(hit);
  const n: any = { id, h, pos: new THREE.Vector3(x, y, z), yaw, cur: yaw, cond, hit, phase: Math.random() * 10, fixedArm: true };
  n.col = L.col(x - 0.32, x + 0.32, z - 0.32, z + 0.32, y, y + 1.9); L.npcs.push(n);
  if (def !== null) L.interact(hit, def ?? { label: g => 'Говорить: ' + g.npcName(id), use: g => g.talk(id), range: 3.2 });
  return n;
}
/** static extra — no dialogue, no head tracking */
function extra(L: Level, o: PersonOpts, x: number, y: number, z: number, ry: number) { const h = makePerson(o); h.group.position.set(x, y, z); h.group.rotation.y = ry; L.scene.add(h.group); return h; }

function barrelFire(L: Level, x: number, z: number, y = 0) {
  L.cyl(0.34, 0.92, x, y, z, pbr('rust', 1, 1), true);
  const fl: THREE.Mesh[] = []; for (let i = 0; i < 4; i++) { const f = mesh(L, new THREE.ConeGeometry(0.13 + i * 0.03, 0.5 + i * 0.12, 7), glow([0xff9a2a, 0xff6a1a, 0xffc040, 0xff4a10][i], 2.6), x + (i % 2 - 0.5) * 0.14, y + 1.05, z + ((i >> 1) - 0.5) * 0.14); fl.push(f); }
  const l = L.light(0xff8a3a, 15, 13, x, y + 1.5, z);
  const n = 26, pos = new Float32Array(n * 3), sp: number[] = []; for (let i = 0; i < n; i++) { pos[i * 3] = x; pos[i * 3 + 1] = y + 1 + Math.random() * 2; pos[i * 3 + 2] = z; sp.push(0.5 + Math.random()); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.05, color: 0xffa040, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); pts.frustumCulled = false; L.scene.add(pts);
  const ph = Math.random() * 9;
  L.updaters.push((dt, t) => {
    l.intensity = (24 + Math.sin(t * 11 + ph) * 5 + Math.sin(t * 23 + ph) * 3 + Math.sin(t * 3.7) * 3);
    fl.forEach((f, i) => { f.scale.y = 1 + Math.sin(t * (9 + i * 3) + i + ph) * 0.3; f.rotation.y = t * (1 + i); f.position.y = y + 1.1 + f.scale.y * 0.12; });
    for (let i = 0; i < n; i++) { pos[i * 3 + 1] += sp[i] * dt; pos[i * 3] += Math.sin(t * 3 + i) * dt * 0.15; if (pos[i * 3 + 1] > y + 3.4) { pos[i * 3 + 1] = y + 1.1; pos[i * 3] = x + (Math.random() - 0.5) * 0.3; pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.3; } }
    pg.attributes.position.needsUpdate = true;
  });
  (L as any).fires = [...((L as any).fires ?? []), new THREE.Vector3(x, y, z)];
}
function tent(L: Level, x: number, z: number, ry: number, c: number, s = 1) {
  const t = mesh(L, new THREE.ConeGeometry(1.45 * s, 1.75 * s, 4, 1), pbr('cloth', 2, 2, c, { side: THREE.DoubleSide }), x, 0.875 * s, z, ry + Math.PI / 4);
  L.col(x - 0.95 * s, x + 0.95 * s, z - 0.95 * s, z + 0.95 * s, 0, 1.7); L.solids.push(t); return t;
}
function crate(L: Level, x: number, y: number, z: number, s = 0.6, ry = 0) { const c = L.box(s, s, s, x, y, z, pbr('wood', 1, 1, 0xb09070)); c.rotation.y = ry; return c; }
function can(L: Level, x: number, y: number, z: number, key: string, n = 1) {
  P.item(L, new THREE.CylinderGeometry(0.045, 0.045, 0.11, 12), flat(0xa0a4a8, 0.35, 0.8), x, y + 0.055, z, { label: 'Консервы', if: g => !g.flag(key), use: (g, o) => { g.set(key); g.addCans(n); o.visible = false; } });
}
export function finish(L: Level) {
  L.scene.traverse((o: any) => { if (o.isMesh && o.material && o.material.isMeshStandardMaterial && !o.material.transparent) { o.castShadow = o.material.side === THREE.FrontSide; o.receiveShadow = true; } });
  return L;
}

/* ============================ STATION ============================ */
export function buildStation(): Level {
  const L = new Level('station', 'НОВОСЛОБОДСКАЯ', 'День 47 • убежище • 340 человек', 0x060504, 0.03);
  L.amb.hum = 0.5;
  L.scene.add(new THREE.HemisphereLight(0x4a4038, 0x0a0806, 0.55)); L.scene.add(new THREE.AmbientLight(0x6a6058, 0.28));
  const X0 = -36, X1 = 36, LEN = X1 - X0;
  // floors
  const fl = L.box(LEN, 0.3, 21, 0, -0.3, 0, pbr('granite', 18, 5.25), false); L.solids.push(fl);
  for (const s of [-1, 1]) {
    L.box(LEN, 0.25, 4.2, 0, -1.35, s * 12.6, pbr('concrete', 14, 1, 0x555048), false);
    for (const dz of [-0.76, 0.76]) L.box(LEN, 0.14, 0.07, 0, -1.1, s * 12.5 + dz, pbr('steel', 20, 1), false);
    L.box(LEN, 1.1, 0.12, 0, -1.1, s * 10.56, pbr('concrete', 14, 0.4), false);
    L.box(LEN, 0.012, 0.35, 0, 0.002, s * 10.2, flat(0xb8a030, 0.8), false);
    L.col(X0, X1, s * 10.5 - (s > 0 ? 0 : 0.3), s * 10.5 + (s > 0 ? 0.3 : 0), -1, 4);
    const wall = L.box(LEN, 6, 0.4, 0, -1.4, s * 14.8, pbr('marble', 12, 1.2, 0x9a9488), false); L.solids.push(wall);
    for (let i = 0; i < 3; i++) P.pipe(L, X0, 1.2 + i * 0.22, s * 14.5, X1, s * 14.5, 0.045, 0x15161a);
    const sv = mesh(L, new THREE.CylinderGeometry(4.25, 4.25, LEN, 28, 1, true, 0, Math.PI), pbr('plaster', 4, 14, 0xb0a898, { side: THREE.BackSide }), 0, 2.2, s * 10.5); sv.rotation.z = Math.PI / 2;
    L.box(LEN, 2.8, 2.5, 0, 3.2, s * 5.25, pbr('plaster', 14, 1, 0xa8a090), false);
  }
  const nave = mesh(L, new THREE.CylinderGeometry(4.3, 4.3, LEN, 32, 1, true, 0, Math.PI), pbr('plaster', 4, 14, 0xb8b0a0, { side: THREE.BackSide }), 0, 3.15, 0); nave.rotation.z = Math.PI / 2;
  for (let x = X0 + 4; x < X1; x += 7) { const rib = mesh(L, new THREE.TorusGeometry(4.25, 0.09, 8, 28, Math.PI), flat(0x7a6a3a, 0.5, 0.7), x, 3.15, 0, Math.PI / 2); }
  // pylons, arches, stained glass
  const glassT = [0, 1, 2, 3, 4, 5].map(stainedGlass);
  const arch = new THREE.Shape(); arch.moveTo(-1.5, 0); arch.lineTo(-1.5, 1.52); arch.lineTo(1.5, 1.52); arch.lineTo(1.5, 0); arch.absarc(0, 0, 1.5, 0, Math.PI, false);
  const archGeo = new THREE.ExtrudeGeometry(arch, { depth: 2.5, bevelEnabled: false });
  let gi = 0;
  for (const s of [-1, 1]) for (let k = 0; k < 10; k++) {
    const px = -31.5 + k * 7;
    L.box(4, 3.2, 2.5, px, 0, s * 5.25, pbr('marble', 2, 1.6));
    L.box(4.16, 0.22, 2.66, px, 0, s * 5.25, pbr('granite', 2, 0.2), false);
    for (const side of [-1, 1]) {
      const gz = s * 5.25 + side * 1.285, ry = side > 0 ? 0 : Math.PI;
      const gm = new THREE.MeshStandardMaterial({ map: glassT[gi % 6], emissiveMap: glassT[gi % 6], emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.25, metalness: 0.2 });
      const lit = (gi * 7) % 5 < 4; const base = lit ? 1.1 + ((gi * 13) % 5) * 0.16 : 0.12; const ph = gi * 1.7;
      mesh(L, new THREE.PlaneGeometry(1.15, 2.3), gm, px, 1.55, gz, ry);
      const fr = mesh(L, new THREE.BoxGeometry(1.36, 2.52, 0.04), flat(0x8a6a2a, 0.35, 0.9), px, 1.55, s * 5.25 + side * 1.255, 0);
      L.updaters.push((dt, t) => { gm.emissiveIntensity = base * (0.85 + Math.sin(t * 2.3 + ph) * 0.08 + (Math.sin(t * 17 + ph) > 0.985 ? -0.3 : 0)); });
      gi++;
    }
    if (k < 9) { const a = mesh(L, archGeo, pbr('marble', 0.6, 0.6), px + 3.5, 1.7, s * 5.25 - 1.25, 0); L.solids.push(a); }
  }
  for (const s of [-1, 1]) for (const ex of [X0, X1]) L.box(1.0, 3.2, 2.5, ex + (ex < 0 ? 0.5 : -0.5), 0, s * 5.25, pbr('marble', 0.5, 1.6));
  // end walls
  for (const ex of [X0, X1]) { const w = L.box(0.5, 9, 30, ex + (ex < 0 ? -0.25 : 0.25), -1.4, 0, pbr('marble', 8, 2.4, 0x8a8478)); }
  for (const s of [-1, 1]) for (const ex of [X0, X1]) { const d = mesh(L, new THREE.CircleGeometry(2.3, 28), new THREE.MeshBasicMaterial({ color: 0x000000 }), ex + (ex < 0 ? 0.02 : -0.02), 1.0, s * 12.5, ex < 0 ? Math.PI / 2 : -Math.PI / 2); }
  // mosaic (east)
  const mo = mesh(L, new THREE.PlaneGeometry(5.6, 5.6), new THREE.MeshStandardMaterial({ map: mosaic(), roughness: 0.3, metalness: 0.5 }), X1 - 0.02, 3.3, 0, -Math.PI / 2);
  L.light(0xffe0a0, 7, 12, X1 - 4, 4.4, 0);
  L.interact(mo, { label: 'Мозаика', range: 7, use: g => g.examine('«Мир во всём мире»', 'Мать с ребёнком под голубями. Говорят, в пятьдесят втором под мозаикой был портрет вождя, потом его заложили плиткой. На 47-й день кто-то приписал снизу мелом: «<i>и нам, пожалуйста</i>».') });
  // west: escalator + blast door
  const esc = L.box(9, 0.4, 6, X0 + 1.5, 0.2, 0, pbr('steel', 4, 3), false); esc.rotation.z = 0.5; esc.position.set(X0 + 1.2, 2.4, 0);
  const gd = L.box(0.5, 4.4, 6.4, X0 + 5.2, 0, 0, pbr('steel', 3, 2, 0x6a7078)); L.box(0.2, 4.6, 0.5, X0 + 5.5, 0, 0, pbr('steel', 1, 2, 0x4a4e54), false);
  const wheel = mesh(L, new THREE.TorusGeometry(0.42, 0.045, 8, 24), flat(0x9a2a1a, 0.5, 0.6), X0 + 5.5, 1.5, 1.4, Math.PI / 2);
  const sg = signMesh('ГЕРМОЗАТВОР\nПРИВОД НЕИСПРАВЕН', 0.5, '#d8c890'); sg.position.set(X0 + 5.47, 3.2, 0); sg.rotation.y = Math.PI / 2; L.scene.add(sg);
  L.interact(wheel, { label: 'Гермозатвор', range: 3.5, use: g => g.examine('Гермозатвор', 'Сорок тонн стали. Закрылся на третьей минуте, как и положено. Открыться обратно должен был по команде, которую так никто и не подал. Привод сгорел на девятый день, когда его пробовали сорвать домкратами.<br><br>Наверх теперь только через перегон и вентшахту.') });
  // name on the wall
  const nm = signMesh('НОВОСЛОБОДСКАЯ', 0.42, '#3a2a1a', '#b8ae98'); nm.position.set(0, 2.3, 14.58); nm.rotation.y = Math.PI; L.scene.add(nm);
  const nm2 = signMesh('НОВОСЛОБОДСКАЯ', 0.42, '#3a2a1a', '#b8ae98'); nm2.position.set(-22, 2.3, 14.58); nm2.rotation.y = Math.PI; L.scene.add(nm2);

  // ---- train (north track): people live inside
  for (let c = 0; c < 3; c++) {
    const cx = -20 + c * 19.6, z = -12.55;
    const body = L.box(19, 2.55, 2.7, cx, -0.75, z, new THREE.MeshStandardMaterial({ color: 0x1c4660, roughness: 0.45, metalness: 0.55 }), false); L.solids.push(body);
    const roof = mesh(L, new THREE.CylinderGeometry(1.36, 1.36, 19, 18, 1, false, 0, Math.PI), flat(0x8a8e94, 0.6, 0.5), cx, 1.75, z); roof.rotation.z = Math.PI / 2; roof.scale.x = 0.42;
    L.box(19.02, 0.16, 0.02, cx, 0.75, z + 1.36, flat(0xd8d0b8, 0.5, 0.3), false);
    for (let w = 0; w < 7; w++) { const wx = cx - 8 + w * 2.67; const lit = (c * 7 + w * 3) % 4 !== 0; const m = lit ? glow([0xffb060, 0xffd090, 0xff9a50][(w + c) % 3], 0.55 + ((w * 5 + c) % 3) * 0.2) : flat(0x06080a, 0.1, 0.9); mesh(L, new THREE.PlaneGeometry(1.5, 0.82), m, wx, 1.4, z + 1.357, 0); if (lit && w % 2) mesh(L, new THREE.PlaneGeometry(0.5, 0.82), flat(0x5a2a2a, 1), wx - 0.5, 1.4, z + 1.36, 0); }
    for (const dx of [-5.3, 0, 5.3]) L.box(1.3, 2.0, 0.03, cx + dx, 0.0, z + 1.36, flat(0x163a50, 0.4, 0.6), false);
  }
  L.light(0xffb060, 5, 9, -6, 1.6, -9.5);
  // ---- south track: dark, with a warning
  const wsg = signMesh('В ТОННЕЛЬ — ТОЛЬКО С РАЗРЕШЕНИЯ КОМЕНДАНТА', 0.22, '#e0c060'); wsg.position.set(-30, 2.6, 14.56); wsg.rotation.y = Math.PI; L.scene.add(wsg);
  // service gate to tunnel (south platform, west end)
  L.box(0.3, 2.6, 4, X0 + 0.9, 0, 8.5, pbr('rust', 1, 2), true);
  const gate = L.box(0.12, 2.2, 1.3, X0 + 1.12, 0, 8.5, pbr('steel', 1, 1, 0x5a5648), false); L.solids.push(gate);
  const gs = signMesh('СЛУЖЕБНЫЙ ПРОХОД\nПЕРЕГОН → МЕНДЕЛЕЕВСКАЯ', 0.34, '#e8dcb0'); gs.position.set(X0 + 1.2, 2.75, 8.5); gs.rotation.y = Math.PI / 2; L.scene.add(gs);
  const gl = mesh(L, new THREE.SphereGeometry(0.07, 8, 8), glow(0xff3020, 3), X0 + 1.2, 2.3, 9.4);
  L.updaters.push((dt, t) => { gl.visible = Math.sin(t * 2.5) > 0; });
  L.interact(gate, { label: 'Спуск в перегон', range: 3, use: g => g.story.toTunnel(g) });

  // ---- camp in the nave
  barrelFire(L, -18, 0); barrelFire(L, 2, 0); barrelFire(L, 21, 0.6);
  const tc = [0x5a6a4a, 0x6a5a48, 0x4a5a6a, 0x7a6a50, 0x55584a];
  ([[-26, 2.2], [-23, -2.3], [-13, 2.4], [-9, -2.2], [8, 2.4], [26, -2.4], [29, 2.3], [-3.5, -2.5]] as number[][]).forEach(([x, z], i) => tent(L, x, z, i * 0.5, tc[i % 5], 0.9 + (i % 3) * 0.08));
  for (const [x, z, ry] of [[-16, 1.7, 0.3], [-19.6, -1.4, 1.2], [0.4, -1.7, 0.2], [4.6, 1.4, -0.4], [19, -1.2, 0.8], [23.2, 1.9, 0.1]]) { const bag = mesh(L, new THREE.CapsuleGeometry(0.26, 1.3, 6, 12), pbr('cloth', 1, 2, [0x3a4a5a, 0x5a3a3a, 0x3a5a40][Math.abs(x | 0) % 3]), x, 0.2, z, ry); bag.rotation.z = Math.PI / 2; bag.scale.y = 1; bag.scale.z = 0.7; }
  for (const [x, z, s, ry] of [[-21, 3.2, 0.7, 0.2], [-20.3, 3.3, 0.5, 0.6], [6, -3.3, 0.7, 0.1], [6.2, -3.3, 0.55, 0.4], [17, 3.3, 0.7, 0], [-11, 3.4, 0.6, 0.3], [24, -0.9, 0.5, 0.5], [0.6, 1.9, 0.45, 0.2], [3.3, -1.2, 0.45, 0.7], [-16.6, -1.0, 0.45, 0.1], [-19.3, 1.2, 0.45, 0.5]]) crate(L, x, 0, z, s, ry);
  mesh(L, new THREE.BoxGeometry(0.6, 0.55, 0.6), pbr('wood', 1, 1, 0xb09070), 6.1, 0.975, -3.3, 0.7);
  // garlands between pylons
  for (let k = 0; k < 9; k++) for (const s of [-1, 1]) if ((k + (s > 0 ? 1 : 0)) % 2) for (let i = 0; i <= 10; i++) { const u = i / 10; const b = mesh(L, new THREE.SphereGeometry(0.03, 6, 5), glow([0xffc060, 0xff7a40, 0xffe0a0][i % 3], 1.6), -29.5 + k * 7 + u * 3, 2.85 - Math.sin(u * Math.PI) * 0.35, s * 4.02); }
  // laundry + lamps
  for (const [x, z] of [[-12, 0], [10, 0]]) { P.pipe(L, x, 2.3, -4, x, 4, 0.01, 0x101010); for (let i = 0; i < 6; i++) { const c = mesh(L, new THREE.PlaneGeometry(0.6, 0.8), pbr('cloth', 1, 1, [0x8a8a7a, 0x6a7a8a, 0x8a6a6a][i % 3], { side: THREE.DoubleSide }), x, 1.85, -3 + i * 1.15, Math.PI / 2); L.updaters.push((dt, t) => { c.rotation.z = Math.sin(t * 0.8 + i) * 0.05; }); } }
  for (const [x, z, c] of [[-30, -1.5, 0x9fffc0], [14.5, -2.8, 0xdfe8ff], [31, -1.8, 0xffe0b0]] as number[][]) { mesh(L, new THREE.SphereGeometry(0.06, 8, 8), glow(c, 2.6), x, 2.05, z); L.box(0.012, 0.9, 0.012, x, 2.1, z, flat(0x0a0a0a), false); L.light(c, 5, 8, x, 1.95, z); }

  // ---- radio corner (Ильдар)
  P.table(L, -30.5, 0, -3.2, 2.0, 0.8, pbr('wood', 1, 1, 0x8a7458));
  const radio = L.box(0.7, 0.36, 0.34, -30.6, 0.8, -3.3, flat(0x2e3a2e, 0.5, 0.5), false);
  for (let i = 0; i < 3; i++) mesh(L, new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12), flat(0x101010, 0.4, 0.6), -30.82 + i * 0.16, 0.92, -3.12).rotation.x = Math.PI / 2;
  const dial = mesh(L, new THREE.PlaneGeometry(0.3, 0.09), glow(0xffb040, 1.4), -30.4, 1.05, -3.127);
  L.updaters.push((dt, t) => { (dial.material as any).color.setScalar(1.2 + Math.sin(t * 9) * 0.25); });
  P.pipe(L, -30.6, 1.2, -3.4, -35.6, -3.6, 0.012, 0x0a0a0a);
  L.interact(radio, { label: 'Радиостанция Р-159', range: 2.6, use: g => g.story.radio(g) });
  crate(L, -30.4, 0, -2.15, 0.45);
  addNpc(L, 'ildar', PEOPLE.ildar, -30.4, 0, -2.15, Math.PI);

  // ---- medical canopy (Тимур, Аня)
  L.box(5, 0.06, 3.2, 15, 2.4, -2.4, pbr('cloth', 3, 2, 0xc8c8be), false); for (const [dx, dz] of [[-2.4, -1.5], [2.4, -1.5], [-2.4, 1.5], [2.4, 1.5]]) L.box(0.05, 2.4, 0.05, 15 + dx, 0, -2.4 + dz, flat(0x8a8a8a, 0.4, 0.8), false);
  L.box(5, 2.4, 0.04, 15, 0, -3.95, pbr('cloth', 3, 2, 0xb8b8ae, { side: THREE.DoubleSide }));
  const crs = new THREE.Group(); crs.add(new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.18, 0.02), flat(0xb02020, 0.8)), new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.6, 0.02), flat(0xb02020, 0.8))); crs.position.set(15, 1.9, -3.9); L.scene.add(crs);
  L.box(0.9, 0.4, 1.9, 16.4, 0, -2.6, flat(0x4a4e50, 0.6, 0.5)); L.box(0.86, 0.1, 1.86, 16.4, 0.4, -2.6, pbr('cloth', 1, 2, 0x9aa0a8), false);
  P.table(L, 13.2, 0, -3.3, 1.4, 0.6, flat(0x9a9ea0, 0.4, 0.6)); for (let i = 0; i < 5; i++) L.cyl(0.03, 0.1 + (i % 2) * 0.04, 12.8 + i * 0.2, 0.8, -3.3, flat([0xd8d8d0, 0x6a3a1a, 0x2a5a7a][i % 3], 0.3));
  const dr = mesh(L, new THREE.PlaneGeometry(0.5, 0.36), new THREE.MeshStandardMaterial({ map: drawing(), roughness: 1 }), 16.4, 1.3, -3.92);
  L.interact(dr, { label: 'Рисунок', range: 3, use: g => { g.set('saw_drawing'); g.examine('Рисунок Ани', 'Фломастеры. Дом, дерево с зелёными листьями, жёлтое солнце в углу. И пять человечков, все держатся за руки. Над одним подписано: «ЛЁША МОНТЁР».<br><br>Неба серого нет. Она его не рисует принципиально.'); } });
  addNpc(L, 'anya', PEOPLE.anya, 16.4, 0.5, -2.3, 0);
  addNpc(L, 'timur', PEOPLE.timur, 13.4, 0, -1.9, 0.4);

  // ---- commandant (Вера)
  P.table(L, 32.4, 0, -1.4, 1.0, 2.2, pbr('wood', 1, 1, 0x7a6048));
  const book = L.box(0.3, 0.05, 0.42, 32.4, 0.8, -1.9, flat(0x3a2a22, 0.8), false);
  const drawer = L.box(0.5, 0.3, 0.6, 32.5, 0.3, -0.7, pbr('wood', 1, 1, 0x6a5038), false); L.solids.push(drawer);
  L.interact(drawer, { label: 'Ящик стола коменданта', range: 2.4, use: g => g.story.drawer(g) });
  L.interact(book, { label: 'Журнал станции', range: 2.6, use: g => g.examine('Журнал учёта, день 47', '«Людей — 340 (вчера 342). Вода — 9 суток. Еда — 12 суток при норме 900 ккал.<br>ФВУ №1 — стоит. ФВУ №2 — кассета на исходе, <b>ресурс 40–50 часов</b>. Запасных нет.<br>Инсулин — 2 суток (Козлова А., 9 лет).<br>Настроение — держится. На сигнале».<br><br>Последние два слова подчёркнуты дважды.') });
  addNpc(L, 'vera', PEOPLE.vera, 31.0, 0, -1.2, -Math.PI / 2);

  // ---- trader (Жора) at the train door
  P.table(L, -6, 0, -9.2, 2.2, 0.7, pbr('wood', 1, 1, 0x7a6850));
  for (let i = 0; i < 6; i++) L.cyl(0.045, 0.11, -6.8 + i * 0.3, 0.8, -9.2, flat(0xa0a4a8, 0.35, 0.8)); L.cyl(0.05, 0.09, -5.2, 0.8, -9.3, flat(0x4a5038, 0.5, 0.5));
  addNpc(L, 'zhora', PEOPLE.zhora, -6, 0, -9.95, 0);

  // ---- fireside (Палыч + слушатели)
  addNpc(L, 'palych', PEOPLE.palych, 3.3, 0.45, -1.2, -2.2);
  extra(L, { coat: 0x4a3a3a, hat: 'hood', pose: 'sit' }, 0.6, 0.45, 1.9, 2.6); extra(L, { coat: 0x3a4a4a, hat: 'beanie', pose: 'sit', scale: 0.8, hatColor: 0x6a3a6a }, 0.4, 0.3, -1.6, 0.9);
  extra(L, { coat: 0x40382e, hat: 'ushanka', pose: 'sit', beard: true }, -16.6, 0.45, -1.0, 1.0); extra(L, { coat: 0x2e3a48, hat: 'none', pose: 'sit', long: true, hair: 0x5a3a20 }, -19.3, 0.45, 1.2, -1.2);
  extra(L, { coat: 0x504838, hat: 'cap', pose: 'stand', scarf: 0x6a2a2a }, 22.4, 0, -0.8, 1.2); extra(L, { coat: 0x3a3a3a, hat: 'hood', pose: 'lie' }, 23.2, 0.1, 1.9, 1.67);
  extra(L, { coat: 0x5a3a48, hat: 'beanie', pose: 'stand', scale: 0.92, long: true }, -9, 0, 8.4, 2.0); extra(L, { coat: 0x38404a, hat: 'ushanka', pose: 'stand' }, -8.1, 0, 8.0, -1.4);
  // loot
  can(L, -21, 0.7, 3.2, 'can_st1'); can(L, 17, 0.7, 3.3, 'can_st2'); can(L, 27, 0, 8.6, 'can_st3');
  L.spawns = { start: { x: 1.6, y: 0, z: 1.6, yaw: 2.4 }, fromTunnel: { x: -33.5, y: 0, z: 8.5, yaw: -Math.PI / 2 } };
  L.indoor.push({ minX: -99, maxX: 99, minZ: -99, maxZ: 99, minY: -5, maxY: 20, on: true });
  return finish(L);
}
function drawing() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 180; const g = c.getContext('2d')!; g.fillStyle = '#e8e4d8'; g.fillRect(0, 0, 256, 180);
  g.lineWidth = 4; g.lineCap = 'round'; g.strokeStyle = '#e0b020'; g.beginPath(); g.arc(224, 28, 16, 0, 7); g.stroke(); for (let i = 0; i < 8; i++) { g.beginPath(); g.moveTo(224 + Math.cos(i) * 22, 28 + Math.sin(i) * 22); g.lineTo(224 + Math.cos(i) * 32, 28 + Math.sin(i) * 32); g.stroke(); }
  g.strokeStyle = '#a04020'; g.strokeRect(24, 70, 60, 60); g.beginPath(); g.moveTo(18, 70); g.lineTo(54, 36); g.lineTo(90, 70); g.stroke();
  g.strokeStyle = '#6a4020'; g.beginPath(); g.moveTo(120, 132); g.lineTo(120, 80); g.stroke(); g.strokeStyle = '#30a040'; for (let i = 0; i < 14; i++) { g.beginPath(); g.arc(120 + Math.cos(i * 1.7) * 18, 66 + Math.sin(i * 2.3) * 16, 7, 0, 7); g.stroke(); }
  g.strokeStyle = '#3050a0'; for (let i = 0; i < 5; i++) { const x = 150 + i * 20; g.beginPath(); g.arc(x, 104, 5, 0, 7); g.moveTo(x, 109); g.lineTo(x, 126); g.moveTo(x - 10, 116); g.lineTo(x + 10, 116); g.moveTo(x, 126); g.lineTo(x - 5, 138); g.moveTo(x, 126); g.lineTo(x + 5, 138); g.stroke(); }
  g.strokeStyle = '#30a040'; g.beginPath(); g.moveTo(8, 142); g.lineTo(248, 142); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/* ============================ TUNNEL ============================ */
export function buildTunnel(reflections: boolean): Level {
  const L = new Level('tunnel', 'ПЕРЕГОН', 'Новослободская — Менделеевская • 1,1 км темноты', 0x020202, 0.05);
  L.amb.hum = 0.35; L.amb.drip = 1;
  L.scene.add(new THREE.HemisphereLight(0x30343a, 0x050505, 0.22)); L.scene.add(new THREE.AmbientLight(0x404448, 0.1));
  const X1 = 108, R = 2.75;
  const tube = mesh(L, new THREE.CylinderGeometry(R, R, X1 + 8, 28, 1, true), pbr('tubing', 6, (X1 + 8) / 2, 0xb0aaa0, { side: THREE.BackSide }), X1 / 2, 1.85, 0); tube.rotation.z = Math.PI / 2;
  const fl = L.box(X1 + 8, 0.3, 4.4, X1 / 2, -0.3, 0, pbr('concrete', 30, 1.2, 0x5a5650), false); L.solids.push(fl);
  for (const dz of [-0.76, 0.76]) L.box(X1 + 8, 0.15, 0.07, X1 / 2, 0, dz, pbr('steel', 30, 1), false);
  const sl = new THREE.InstancedMesh(new THREE.BoxGeometry(0.22, 0.1, 2.6), pbr('wood', 1, 1, 0x4a4038), Math.floor((X1 + 8) / 0.65)); const m4 = new THREE.Matrix4();
  for (let i = 0; i < sl.count; i++) { m4.setPosition(-4 + i * 0.65, 0.03, 0); sl.setMatrixAt(i, m4); } sl.receiveShadow = true; L.scene.add(sl);
  L.col(-5, X1 + 4, -2.4, -1.72); L.col(-5, X1 + 4, 1.72, 2.4); L.col(-1.4, -0.9, -3, 3); L.col(X1, X1 + 1, -3, 3);
  for (let i = 0; i < 4; i++) P.pipe(L, -4, 1.3 + i * 0.2, 2.2 - i * 0.05, X1 + 4, 2.2 - i * 0.05, 0.04, [0x15161a, 0x2a1a14, 0x15161a, 0x1a2420][i]);
  for (let x = 0; x < X1; x += 6) L.box(0.06, 0.9, 0.12, x, 1.2, 2.3, pbr('rust', 0.2, 0.5), false);
  for (let x = 8; x < X1; x += 16) { const dead = (x / 16 | 0) % 3 !== 1; mesh(L, new THREE.SphereGeometry(0.08, 8, 6), dead ? flat(0x2a2a28, 0.3, 0.2) : glow(0xff2a1a, 2.2), x, 3.3, -1.75); if (!dead) L.light(0xff2010, 4, 9, x, 3.1, -1.4); }
  // back to the station
  L.box(0.4, 4, 4.6, -1.2, 0, 0, pbr('brick', 2, 2), false);
  const d0 = L.box(0.14, 2.2, 1.3, -0.95, 0, 0, pbr('steel', 1, 1, 0x5a5648), false); L.solids.push(d0);
  const s0 = signMesh('НОВОСЛОБОДСКАЯ', 0.26, '#e8dcb0'); s0.position.set(-0.86, 2.6, 0); s0.rotation.y = Math.PI / 2; L.scene.add(s0);
  L.interact(d0, { label: 'Подняться на станцию', range: 3, use: g => g.travel('station', 'fromTunnel') });
  // maintenance trolley
  const tr = L.box(2.2, 0.25, 1.7, 14, 0.25, 0, pbr('rust', 2, 1), false); for (const [dx, dz] of [[-0.8, -0.76], [0.8, -0.76], [-0.8, 0.76], [0.8, 0.76]]) mesh(L, new THREE.CylinderGeometry(0.2, 0.2, 0.08, 14), pbr('steel', 1, 1), 14 + dx, 0.2, dz).rotation.x = Math.PI / 2;
  L.col(12.9, 15.1, -0.85, 0.3, 0, 1.2); crate(L, 13.6, 0.5, -0.3, 0.55, 0.2); crate(L, 14.5, 0.5, 0.25, 0.45, 0.6); can(L, 14.5, 0.95, 0.25, 'can_t1'); can(L, 13.9, 0.5, 0.45, 'can_t2');
  const tsg = signMesh('СМЕНА НЕ ВЕРНУЛАСЬ\nд. 12', 0.16, '#c8c0a0'); tsg.position.set(14, 1.9, -2.25); tsg.rotation.set(0, 0, 0.03); L.scene.add(tsg);
  // flooded stretch
  if (reflections) { const w = makeGround({ size: 18, base: 0x0a0c0d, puddle: 1, reflect: 0.9, quality: 0.5, rain: 0.35 }, true, L.fog); w.position.set(37, 0.085, 0); L.scene.add(w); L.ground = w; }
  else { const w = mesh(L, new THREE.PlaneGeometry(18, 4), new THREE.MeshStandardMaterial({ color: 0x0a0d0e, roughness: 0.04, metalness: 0.9 }), 37, 0.085, 0); w.rotation.x = -Math.PI / 2; }
  (L as any).water = [28, 46];
  for (const x of [31, 39, 44]) L.steam(x, 4.2, 0.4, 0x8a9098, 3, -3, 0.3, 0.08);
  // Сухой's niche
  L.box(1.6, 2.3, 0.1, 52, 0, 2.05, pbr('brick', 1, 1.4, 0x8a8078), false); crate(L, 52, 0, 1.25, 0.45);
  const cn = L.cyl(0.03, 0.14, 51.2, 0, 1.2, flat(0xe8e0c8, 0.7)); const cf = mesh(L, new THREE.ConeGeometry(0.018, 0.06, 6), glow(0xffc060, 3), 51.2, 0.18, 1.2); const cl = L.light(0xffb050, 3.2, 6, 51.2, 0.35, 1.1);
  L.updaters.push((dt, t) => { cl.intensity = 5.5 + Math.sin(t * 13) * 0.8 + Math.sin(t * 5.1) * 0.6; cf.scale.y = 1 + Math.sin(t * 15) * 0.2; });
  for (let i = 0; i < 5; i++) mesh(L, new THREE.PlaneGeometry(0.18, 0.24), flat(0xc8c0a8, 1), 51.6 + i * 0.22, 1.3 + (i % 2) * 0.3, 1.99, Math.PI);
  addNpc(L, 'suhoy', PEOPLE.suhoy, 52, 0.45, 1.25, Math.PI);
  // vent shaft VS-214
  L.box(1.5, 2.5, 0.3, 70, 0, -2.0, pbr('concrete', 1, 1.4), false);
  const vd = L.box(0.95, 2.05, 0.08, 70, 0, -1.78, pbr('steel', 1, 1, 0x4a5248), false); L.solids.push(vd);
  const vs = signMesh('ВШ-214', 0.3, '#e0c060'); vs.position.set(70, 2.35, -1.72); L.scene.add(vs);
  for (let i = 0; i < 7; i++) L.box(0.5, 0.03, 0.03, 71.1, 0.4 + i * 0.36, -1.9, flat(0x6a6a60, 0.5, 0.7), false);
  const ashP = L.steam(70, 3.8, -1.2, 0xb8b4aa, 6, -3.4, 0.7, 0.14);
  L.light(0x9aa0a8, 3.5, 7, 70, 2.8, -1.2);
  L.interact(vd, { label: 'Вентшахта ВШ-214 — наверх', range: 3, use: g => g.story.toSurface(g) });
  // the coat on the signal (it is nothing. probably.)
  L.cyl(0.05, 2.3, 85, 0, 1.45, flat(0x1a1a1a, 0.5, 0.6)); mesh(L, new THREE.BoxGeometry(0.22, 0.5, 0.16), flat(0x101010, 0.5), 85, 2.4, 1.45);
  const coat = mesh(L, new THREE.CapsuleGeometry(0.2, 0.9, 6, 12), pbr('cloth', 1, 2, 0x2a2c2a), 85, 1.35, 1.38); coat.scale.z = 0.5; mesh(L, new THREE.SphereGeometry(0.12, 12, 10), pbr('cloth', 1, 1, 0x1a1a1a), 85, 2.02, 1.38);
  L.updaters.push((dt, t) => { coat.rotation.z = Math.sin(t * 0.7) * 0.03; });
  L.interact(coat, { label: 'Силуэт', range: 3, use: g => g.examine('Не человек', 'Спецовка и каска на светофорном столбике. Кто-то повесил — то ли сушить, то ли пугать. На груди бейдж: «Гордеев А. В., служба сигнализации».<br><br>Это моя. Я оставил её здесь в первый день, когда бежал к станции.') });
  // Mendeleevskaya checkpoint
  const bagM = pbr('sand', 1, 1, 0x8a8068);
  for (const s of [-1, 1]) for (let row = 0; row < 4; row++) for (let i = 0; i < 3 - (row > 2 ? 1 : 0); i++) { const b = mesh(L, new THREE.CapsuleGeometry(0.16, 0.4, 6, 10), bagM, 99.2 + (row % 2) * 0.12, 0.17 + row * 0.29, s * (0.72 + i * 0.5) + (row % 2) * 0.12 * s); b.rotation.x = Math.PI / 2; b.scale.y = 1; }
  L.col(98.8, 99.7, -2, -0.5, 0, 1.4); L.col(98.8, 99.7, 0.5, 2, 0, 1.4); L.col(99.2, 99.6, -0.6, 0.6, 0, 2);
  const bar = L.box(0.06, 0.06, 1.3, 99.3, 1.0, 0, glow(0xff3a20, 0.9), false);
  const csg = signMesh('МЕНДЕЛЕЕВСКАЯ\nСТОЙ. СВЕТ В ПОЛ.', 0.26, '#e8e0c0', '#3a1410'); csg.position.set(99.1, 2.75, 0); csg.rotation.y = -Math.PI / 2; L.scene.add(csg);
  const sp = new THREE.SpotLight(0xdfe8ff, 260, 46, 0.36, 0.5, 1.3); sp.position.set(103.5, 2.9, 0.9); sp.target.position.set(80, 0.6, 0); L.scene.add(sp, sp.target);
  mesh(L, new THREE.SphereGeometry(0.16, 12, 10), glow(0xeaf2ff, 5), 103.4, 2.9, 0.9); const cone = lightCone(0xdfe8ff, 2.6, 16, 0.035); cone.position.set(95.5, 2.3, 0.6); cone.rotation.z = -Math.PI / 2 + 0.07; L.scene.add(cone);
  addNpc(L, 'guard', PEOPLE.guard, 100.6, 0, -1.1, -Math.PI / 2, { label: 'Часовой', range: 4, use: g => g.say('ЧАСОВОЙ', 'С вопросами — к старшей. И свет опусти.') });
  extra(L, PEOPLE.guard, 101.4, 0, 1.2, -Math.PI / 2 + 0.3);
  addNpc(L, 'zarema', PEOPLE.zarema, 97.6, 0, 0.9, -Math.PI / 2);
  // rats
  const rats: any[] = []; for (let i = 0; i < 6; i++) { const r = mesh(L, new THREE.CapsuleGeometry(0.035, 0.1, 4, 8), flat(0x1a1612, 0.9), 20 + i * 11, 0.05, i % 2 ? 1.4 : -1.4); r.rotation.z = Math.PI / 2; rats.push({ r, v: 0, x: r.position.x }); }
  L.updaters.push((dt, t, g) => { for (const a of rats) { const d = a.r.position.x - g.player.pos.x; if (Math.abs(d) < 5 && a.v === 0) { a.v = (d > 0 ? 1 : -1) * (4 + Math.random() * 2); g.snd?.sfx('rat'); } if (a.v) { a.r.position.x += a.v * dt; a.r.position.y = 0.05 + Math.abs(Math.sin(t * 30)) * 0.02; if (Math.abs(a.r.position.x - a.x) > 14) { a.v = 0; a.x = a.r.position.x; } } } });
  L.spawns = { fromStation: { x: 1.2, y: 0, z: 0, yaw: -Math.PI / 2 }, fromSurface: { x: 70, y: 0, z: -0.4, yaw: Math.PI } };
  L.indoor.push({ minX: -99, maxX: 199, minZ: -99, maxZ: 99, minY: -5, maxY: 20, on: true });
  return finish(L);
}

/* ============================ SURFACE ============================ */
class AshFall {
  pts: THREE.Points; mat: THREE.ShaderMaterial;
  constructor(n: number, box: { minX: number; maxX: number; minZ: number; maxZ: number }) {
    const pos = new Float32Array(n * 3); for (let i = 0; i < n * 3; i++) pos[i] = Math.random();
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector4(box.minX, box.maxX, box.minZ, box.maxZ) }, uMap: { value: softSprite() } },
      vertexShader: `uniform float uTime; uniform vec3 uCam; uniform vec4 uBox; varying float vA;
        void main(){ vec3 S=vec3(30.0,16.0,30.0); vec3 p=position*S; float sp=0.35+fract(position.x*71.3)*0.5;
          p.y=mod(p.y-uTime*sp,S.y); p.x+=sin(uTime*0.6+position.z*40.0)*0.5+uTime*0.25; p.z+=cos(uTime*0.45+position.x*33.0)*0.4;
          p.xz=mod(p.xz-uCam.xz,S.xz)-S.xz*0.5+uCam.xz; p.y+=uCam.y-S.y*0.45;
          float d=length(p-uCam); vA=smoothstep(15.0,3.0,d)*0.75;
          vec4 mv=viewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=(18.0+fract(position.y*17.0)*26.0)/max(-mv.z,0.5);
          if(p.x>uBox.x&&p.x<uBox.y&&p.z>uBox.z&&p.z<uBox.w&&p.y<3.4) gl_Position=vec4(2.0,2.0,2.0,1.0); }`,
      fragmentShader: `uniform sampler2D uMap; varying float vA; void main(){ float a=texture2D(uMap,gl_PointCoord).a; gl_FragColor=vec4(0.86,0.85,0.82,a*vA); }` });
    this.pts = new THREE.Points(g, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 5;
  }
}
function car(L: Level, x: number, z: number, ry: number, col: number, seed: number) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; L.scene.add(g);
  const paint = new THREE.MeshStandardMaterial({ color: col, roughness: 0.7, metalness: 0.4 }); const ashM = pbr('ash', 1, 1, 0xffffff);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.62, 2.9, 10, 20), paint); body.rotation.z = Math.PI / 2; body.scale.set(0.74, 1, 1.42); body.position.y = 0.62; g.add(body);
  const cab = new THREE.Mesh(new THREE.SphereGeometry(1, 22, 14, 0, Math.PI * 2, 0, Math.PI / 2), paint); cab.scale.set(1.25, 0.62, 0.8); cab.position.set(-0.2, 0.95, 0); g.add(cab);
  const glassM = new THREE.MeshStandardMaterial({ color: 0x14181a, roughness: 0.15, metalness: 0.8 }); const win = new THREE.Mesh(new THREE.SphereGeometry(1.006, 22, 10, 0, Math.PI * 2, Math.PI * 0.24, Math.PI * 0.2), glassM); win.scale.copy(cab.scale); win.position.copy(cab.position); g.add(win);
  const ashTop = new THREE.Mesh(new THREE.SphereGeometry(1.025, 22, 10, 0, Math.PI * 2, 0, Math.PI * 0.27), ashM); ashTop.scale.copy(cab.scale); ashTop.position.copy(cab.position); g.add(ashTop);
  for (const s of [-1, 1]) for (const fx of [-1.25, 1.3]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 16), flat(0x0c0c0c, 0.9)); w.rotation.x = Math.PI / 2; w.position.set(fx, 0.32, s * 0.82); g.add(w); }
  const c = Math.abs(Math.cos(ry)), s2 = Math.abs(Math.sin(ry)); const hx = 2.2 * c + 0.95 * s2, hz = 2.2 * s2 + 0.95 * c; L.col(x - hx, x + hx, z - hz, z + hz, 0, 1.6); L.solids.push(body);
  return g;
}
function tree(L: Level, x: number, z: number, seed: number) {
  const r = rng(seed); const bark = pbr('wood', 1, 3, 0x3a342e); L.cyl(0.2, 3.2, x, 0, z, bark, true, 0.13);
  const grow = (px: number, py: number, pz: number, len: number, rad: number, ax: number, az: number, depth: number) => {
    const b = mesh(L, new THREE.CylinderGeometry(rad * 0.6, rad, len, 6), bark, px, py, pz); b.rotation.set(ax, 0, az); const dir = new THREE.Vector3(0, 1, 0).applyEuler(b.rotation); b.position.addScaledVector(dir, len / 2);
    if (depth > 0) for (let i = 0; i < 2 + (r() > 0.5 ? 1 : 0); i++) { const e = new THREE.Vector3(px, py, pz).addScaledVector(dir, len * (0.6 + r() * 0.4)); grow(e.x, e.y, e.z, len * 0.68, rad * 0.6, ax + (r() - 0.5) * 1.5, az + (r() - 0.5) * 1.5, depth - 1); }
  };
  for (let i = 0; i < 3; i++) grow(x, 2.6 + i * 0.3, z, 1.9, 0.09, (r() - 0.5) * 1.3, (r() - 0.5) * 1.3, 3);
}
export function buildSurface(): Level {
  const FOG = 0x8c8982; const L = new Level('surface', 'ПОВЕРХНОСТЬ', 'Новослободская улица • без фильтра — три минуты', FOG, 0.03);
  L.amb.hum = 0;
  L.scene.add(new THREE.HemisphereLight(0xc8c4bc, 0x4a4844, 1.5));
  const sun = new THREE.DirectionalLight(0xfff0dc, 1.7); sun.position.set(-30, 46, 24); sun.target.position.set(0, 0, 0); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera as THREE.OrthographicCamera; sc.left = -56; sc.right = 56; sc.top = 40; sc.bottom = -40; sc.near = 5; sc.far = 130; sun.shadow.bias = -0.0015; sun.shadow.normalBias = 0.06; L.scene.add(sun, sun.target); (L as any).sun = sun;
  const disc = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite(), color: 0xfff4e0, fog: false, transparent: true, opacity: 0.85, depthWrite: false })); disc.scale.setScalar(60); disc.position.set(-150, 190, 110); L.scene.add(disc);
  const gr = mesh(L, new THREE.PlaneGeometry(240, 120), pbr('ash', 46, 23), 0, 0, 0); gr.rotation.x = -Math.PI / 2; L.solids.push(gr);
  const road = mesh(L, new THREE.PlaneGeometry(240, 15), pbr('asphalt', 40, 3, 0x9a968e), 0, 0.012, 0); road.rotation.x = -Math.PI / 2;
  const r = rng(4747);
  for (let i = 0; i < 46; i++) { const d = mesh(L, new THREE.SphereGeometry(1, 14, 8), pbr('ash', 2, 2), -46 + r() * 92, -0.05, (r() < 0.5 ? -1 : 1) * (7.5 + r() * 5)); d.scale.set(1.2 + r() * 2.6, 0.12 + r() * 0.2, 0.8 + r() * 1.8); }
  // buildings (dead windows)
  const row = (z0: number, z1: number, list: [number, number, number][], seed: number) => list.forEach(([a, b, h], i) => { const m = facadeMats(seed + i, Math.round((b - a) / 1.6), Math.round(h / 3), i % 2 ? 'slum' : 'warm', 0); (m[0] as any).color = new THREE.Color(0xb8b4ac); L.box(b - a, h, z1 - z0, (a + b) / 2, 0, (z0 + z1) / 2, m); });
  row(-34, -13.3, [[-70, -46, 24], [-46, -22, 18], [-22, 5, 27], [17, 40, 21], [40, 70, 30]], 900); row(13.3, 34, [[-70, -48, 20], [-34, -8, 30], [-8, 16, 18], [16, 44, 26], [44, 70, 22]], 950);
  { const m = facadeMats(990, 8, 9, 'warm', 0); (m[0] as any).color = new THREE.Color(0xb8b4ac); L.box(12, 23.6, 20.7, 11, 3.4, -23.65, m, false); L.box(12, 3.4, 12.4, 11, 0, -27.8, m, false); L.col(4.6, 17.4, -34, -21.2, 0, 4); }
  L.col(-48.5, -47.5, -14, 14); L.col(47.5, 48.5, -14, 14);
  // metro rotunda (sealed)
  L.cyl(5.4, 6.2, -41, 0, 20, pbr('plaster', 6, 2, 0xc8c0b0), true); mesh(L, new THREE.SphereGeometry(5.5, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), pbr('steel', 4, 2, 0x8a9088), -41, 6.2, 20).scale.y = 0.45;
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; L.cyl(0.32, 5.6, -41 + Math.cos(a) * 5.7, 0, 20 + Math.sin(a) * 5.7, pbr('marble', 1, 2), false); }
  const ms = signMesh('М', 1.5, '#b02a20'); ms.position.set(-41, 8.4, 14.2); ms.rotation.y = Math.PI; L.scene.add(ms);
  const rot = signMesh('ВХОД ЗАКРЫТ\nУКРЫТИЕ ЗАПОЛНЕНО', 0.4, '#2a2420', '#c8b890'); rot.position.set(-41, 2.2, 14.55); rot.rotation.y = Math.PI; L.scene.add(rot);
  L.interact(rot, { label: 'Объявление', range: 4, use: g => g.examine('Вход в метро', 'Распечатка под плёнкой, приклеена скотчем в первый день: «ВХОД ЗАКРЫТ. УКРЫТИЕ ЗАПОЛНЕНО. СЛЕДУЙТЕ К СТ. МЕНДЕЛЕЕВСКАЯ».<br><br>Под дверью — намело. Невысоко. Я не буду смотреть, что под пеплом.') });
  // vent kiosk (way back down)
  L.cyl(1.5, 2.7, -30, 0, -10.6, pbr('concrete', 3, 1), true); mesh(L, new THREE.ConeGeometry(1.75, 0.6, 20), pbr('rust', 2, 1), -30, 3.0, -10.6);
  for (let i = 0; i < 6; i++) mesh(L, new THREE.BoxGeometry(1.2, 0.05, 0.1), flat(0x2a2a28, 0.6, 0.6), -30, 1.5 + i * 0.16, -9.08);
  const kd = L.box(0.9, 1.3, 0.08, -30, 0, -9.08, pbr('steel', 1, 1, 0x4a5248), false); L.solids.push(kd);
  const ks = signMesh('ВШ-214', 0.24, '#e0c060'); ks.position.set(-30, 2.55, -9.06); L.scene.add(ks);
  L.interact(kd, { label: 'Спуститься в шахту', range: 3, use: g => g.story.toTunnelFromSurface(g) });
  // tram
  const tram = L.box(13.5, 2.7, 2.5, -9, 0.45, 1.8, new THREE.MeshStandardMaterial({ color: 0x8a2a22, roughness: 0.6, metalness: 0.3 })); L.box(13.5, 0.9, 2.52, -9, 1.9, 1.8, flat(0xc8c0a8, 0.7), false);
  const tro = mesh(L, new THREE.CylinderGeometry(1.26, 1.26, 13.5, 16, 1, false, 0, Math.PI), pbr('ash', 4, 1, 0xd0ccc4), -9, 3.1, 1.8); tro.rotation.z = Math.PI / 2; tro.scale.x = 0.3;
  for (let i = 0; i < 8; i++) for (const s of [-1, 1]) mesh(L, new THREE.PlaneGeometry(1.25, 0.8), flat(0x101416, 0.12, 0.8), -14.6 + i * 1.6, 2.1, 1.8 + s * 1.262, s > 0 ? 0 : Math.PI);
  L.box(13, 0.45, 1.9, -9, 0, 1.8, flat(0x1a1a1a, 0.8), false); L.box(0.05, 1.6, 0.05, -9, 3.4, 1.8, flat(0x202020, 0.5, 0.7), false);
  const trs = signMesh('7  ·  НОВОСЛОБОДСКАЯ — БЕЛОРУССКИЙ ВОКЗАЛ', 0.2, '#f0e8c0', '#1a1a1a'); trs.position.set(-9, 2.95, 3.07); L.scene.add(trs);
  const twin = L.box(1.2, 1.0, 0.05, -4.2, 1.5, 3.08, flat(0x101416, 0.12, 0.8), false);
  L.interact(twin, { label: 'Заглянуть в трамвай', range: 3, use: g => { if (!g.flag('can_tram')) { g.set('can_tram'); g.addCans(2); } g.examine('Трамвай №7', 'Двери открыты, внутри по щиколотку серого. На сиденье — детский рюкзак с брелоком-совой и пакет из «Пятёрочки». В пакете две банки тушёнки. Срок годности — до марта двадцать девятого.<br><br>Тушёнке всё равно, что случилось.'); } });
  // cars, trees, poles
  const cc = [0x5a6068, 0x6a2a26, 0x2a3a5a, 0x8a8a84, 0x3a4a3a, 0x202226];
  ([[-38, -4, 0.1], [-24, 4.6, 3.2], [-19, -5.2, 0.4], [3, -4.4, 0.05], [8, 4.2, 3.0], [14, 5.6, 3.3], [21, -3.6, 1.2], [34, -5, 0.2], [40, 2.4, 2.7], [44, -1.5, 1.6], [-44, 2, 1.5], [-45, -3.5, 1.7]] as number[][]).forEach(([x, z, ry], i) => car(L, x, z, ry, cc[i % 6], i));
  for (const [x, z] of [[-36, 11], [-8, 11], [20, 11.2], [36, -11], [-14, -11.2], [2, 11]]) tree(L, x, z, x * 7 + z);
  for (let x = -40; x <= 40; x += 20) for (const s of [-1, 1]) { L.cyl(0.09, 7.5, x + (s > 0 ? 6 : 0), 0, s * 8.6, flat(0x3a3c3e, 0.6, 0.6), true); L.box(1.6, 0.08, 0.14, x + (s > 0 ? 6 : 0) - s * 0.7, 7.4, s * 8.0, flat(0x3a3c3e, 0.6, 0.6), false).rotation.y = Math.PI / 2; }
  for (const z of [-1.2, 1.2, 4.6]) P.pipe(L, -48, 6.0, z, 48, z, 0.012, 0x151515);
  // tarps
  for (const [x, z, ry] of [[-26, 9.4, 0.4], [25, -9.6, 1.9], [12.5, 9.8, 0.2]]) { const t = mesh(L, new THREE.CapsuleGeometry(0.28, 1.2, 6, 12), pbr('cloth', 1, 2, 0x4a5a6a), x, 0.2, z, ry); t.rotation.z = Math.PI / 2; t.scale.set(1, 1, 1.5); L.interact(t, { label: 'Брезент', range: 2.6, use: g => g.examine('Под брезентом', 'Кто-то в первые дни ещё выходил и накрывал их. Потом перестал: брезент кончился раньше.<br><br>Не трогаю.') }); }

  // ---- pharmacy
  const PW = pbr('plaster', 3, 1, 0xc8c8c0);
  L.room(5, 17, -21, -13.3, 0, 3.2, { wall: PW, floor: pbr('granite', 4, 3, 0xb0b0a8), ceil: flat(0x8a8a84, 0.9), doors: [{ side: 's', at: 8.6, w: 1.6 }, { side: 's', at: 13.4, w: 3.6, h: 2.2 }] });
  L.box(3.6, 0.9, 0.12, 13.4, 0, -13.3, PW); const pwn = L.box(3.6, 1.3, 0.04, 13.4, 0.9, -13.3, new THREE.MeshStandardMaterial({ color: 0x9aa8a8, roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.35 }), true);
  const cross = new THREE.Group(); const cm = flat(0x2a6a3a, 0.5); cross.add(new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.36, 0.08), cm), new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.2, 0.08), cm)); cross.position.set(8.6, 4.2, -13.0); cross.rotation.z = 0.3; L.scene.add(cross);
  const ps = signMesh('АПТЕКА  36,6', 0.5, '#2a6a3a', '#d8d8d0'); ps.position.set(12.6, 3.75, -13.1); L.scene.add(ps);
  L.box(6.5, 1.0, 0.6, 12.5, 0, -17.2, flat(0xd8d8d0, 0.5)); L.box(6.5, 0.05, 0.7, 12.5, 1.0, -17.2, flat(0x8aa0a0, 0.3, 0.3), false);
  for (const sx of [6.2, 9.2]) for (let s = 0; s < 4; s++) { L.box(2.2, 0.04, 0.4, sx + 1.1 - 0.9, 0.5 + s * 0.55, -20.7, flat(0xd0d0c8, 0.6), false); for (let i = 0; i < 4; i++) if ((s * 3 + i + sx | 0) % 3) L.box(0.16, 0.12 + (i % 2) * 0.08, 0.1, sx - 0.5 + i * 0.5, 0.54 + s * 0.55, -20.7, flat([0xe8e8e0, 0x4a8ab0, 0xb04a4a, 0x6ab06a][(i + s) % 4], 0.6), false); }
  L.col(5.2, 10.6, -21, -20.4, 0, 2.6);
  for (let i = 0; i < 16; i++) { const p = mesh(L, new THREE.BoxGeometry(0.16, 0.05, 0.1), flat([0xe8e8e0, 0x4a8ab0, 0xb04a4a][i % 3], 0.6), 6 + (i * 1.37) % 9, 0.03, -14.2 - (i * 0.83) % 2.6, i); }
  const fr = L.box(0.9, 1.9, 0.75, 16.3, 0, -20.4, flat(0xe0e4e4, 0.3, 0.3)); const frd = L.box(0.8, 1.7, 0.04, 16.3, 0.1, -20.0, flat(0xc8d0d0, 0.2, 0.5), false); L.solids.push(frd);
  L.interact(frd, { label: 'Холодильник', range: 2.6, use: g => g.story.fridge(g) });
  P.item(L, new THREE.CylinderGeometry(0.05, 0.05, 0.08, 14), flat(0x4a5038, 0.5, 0.5), 9.8, 1.09, -17.2, { label: 'Фильтр ФК-5', if: g => !g.flag('filter_ph'), use: (g, o) => { g.set('filter_ph'); g.addFilter(1); o.visible = false; } });
  const note = mesh(L, new THREE.PlaneGeometry(0.21, 0.3), flat(0xe8e4d0, 1), 13.6, 1.03, -17.15); note.rotation.x = -Math.PI / 2;
  L.interact(note, { label: 'Записка на прилавке', range: 2.4, use: g => g.examine('Записка провизора', '«Кто придёт: наркотические — в сейфе, код 3660, берите, мне уже без надобности. Инсулин — в термосумке в холодильнике, свет дали на 4 часа, должен дожить. <b>Одна упаковка, на одного человека месяца на три.</b> Не делите — поделите, и не хватит никому.<br><br>Простите, что не дождалась. Л. А.»') });
  L.light(0xdfe8e0, 2.5, 9, 11, 2.6, -17);

  // ---- emergency comms van
  const vx = 30, vz = 5.2; const vanM = new THREE.MeshStandardMaterial({ color: 0xd8d4c8, roughness: 0.6, metalness: 0.3 });
  L.box(4.6, 2.3, 2.3, vx, 0.6, vz, vanM); L.box(4.62, 0.4, 2.32, vx, 1.4, vz, flat(0xc8501a, 0.6), false); const cabv = mesh(L, new THREE.CapsuleGeometry(0.95, 0.7, 8, 16), vanM, vx + 2.9, 1.35, vz); cabv.rotation.x = Math.PI / 2; cabv.scale.set(0.9, 1, 1.05);
  mesh(L, new THREE.PlaneGeometry(1.5, 0.7), flat(0x14181a, 0.12, 0.8), vx + 3.72, 1.75, vz, Math.PI / 2); L.col(vx + 2.2, vx + 4, vz - 1.2, vz + 1.2, 0, 2.5);
  for (const fx of [-1.5, 2.8]) for (const s of [-1, 1]) mesh(L, new THREE.CylinderGeometry(0.42, 0.42, 0.26, 16), flat(0x0c0c0c, 0.9), vx + fx, 0.42, vz + s * 1.05).rotation.x = Math.PI / 2;
  L.cyl(0.06, 9, vx - 1.6, 2.9, vz, flat(0x8a8e90, 0.4, 0.8), false, 0.03); for (let i = 0; i < 3; i++) L.box(1.4 - i * 0.35, 0.03, 0.03, vx - 1.6, 9 + i * 0.9, vz, flat(0x8a8e90, 0.4, 0.8), false);
  const beacon = mesh(L, new THREE.SphereGeometry(0.07, 8, 8), glow(0xff3020, 4), vx - 1.6, 11.95, vz); L.updaters.push((dt, t) => { beacon.visible = Math.sin(t * 3) > 0.2; });
  const vs2 = signMesh('МЧС РОССИИ · ПОДВИЖНЫЙ УЗЕЛ СВЯЗИ', 0.2, '#1a2a4a'); vs2.position.set(vx, 2.5, vz - 1.17); vs2.rotation.y = Math.PI; L.scene.add(vs2);
  const sol = mesh(L, new THREE.BoxGeometry(1.6, 0.04, 1.0), new THREE.MeshStandardMaterial({ color: 0x14204a, roughness: 0.15, metalness: 0.7 }), vx + 0.6, 2.98, vz); sol.rotation.z = 0.25;
  const cons = L.box(0.5, 0.5, 1.2, vx - 2.56, 1.0, vz, flat(0x2a2e30, 0.5, 0.5), false); const led = mesh(L, new THREE.PlaneGeometry(0.5, 0.18), glow(0x5aff8a, 1.6), vx - 2.83, 1.32, vz, -Math.PI / 2); L.solids.push(cons);
  L.updaters.push((dt, t) => { (led.material as any).color.setScalar(1.2 + (Math.sin(t * 5) > 0 ? 0.6 : 0)); });
  L.interact(cons, { label: 'Пульт ретранслятора', range: 3, use: g => g.story.van(g) });
  // ---- life: pigeons + a green shoot
  const birds: any[] = []; for (let i = 0; i < 5; i++) { const b = new THREE.Group(); const bd = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), flat(0x6a707a, 0.8)); bd.scale.set(0.8, 0.8, 1.4); const hd = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), flat(0x4a5a6a, 0.8)); hd.position.set(0, 0.06, 0.08); const wg = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.01, 0.1), flat(0x8a909a, 0.8)); wg.visible = false; b.add(bd, hd, wg); b.position.set(13.6 + i * 0.3, 1.62 + (i % 2) * 0.03, 5.4 + (i % 3) * 0.25); b.rotation.y = i; L.scene.add(b); birds.push({ b, wg, t: -1, d: new THREE.Vector3(0.6 + i * 0.3, 1.4, -0.8 + i * 0.5) }); }
  L.updaters.push((dt, t, g) => { const d = Math.hypot(g.player.pos.x - 14.2, g.player.pos.z - 5.6); for (const a of birds) { if (a.t < 0 && d < 7.5) { a.t = 0; if (!g.flag('saw_birds')) g.story.birds(g); } if (a.t >= 0) { a.t += dt; a.b.position.addScaledVector(a.d, dt * 3.2); a.wg.visible = true; a.wg.scale.x = Math.sin(t * 34) > 0 ? 1 : 0.35; if (a.t > 9) a.b.visible = false; } else a.b.rotation.x = Math.sin(t * 6 + a.d.x * 9) > 0.7 ? 0.5 : 0; } });
  const sh = new THREE.Group(); for (let i = 0; i < 4; i++) { const lf = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshStandardMaterial({ color: 0x3aa030, roughness: 0.6, emissive: 0x1a5010, emissiveIntensity: 0.5 })); lf.scale.set(0.5, 0.15, 1.2); lf.position.set(Math.cos(i * 1.6) * 0.05, 0.1 + i * 0.035, Math.sin(i * 1.6) * 0.05); lf.rotation.y = i * 1.6; sh.add(lf); } sh.add(new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.2, 5), flat(0x3a7a2a))); sh.children[4].position.y = 0.1; sh.position.set(-7.45, 0.02, 10.75); L.scene.add(sh);
  const shHit = mesh(L, new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshBasicMaterial({ visible: false }), -7.45, 0.25, 10.75);
  L.interact(shHit, { label: 'Росток', range: 2.6, use: g => g.story.leaf(g) });
  const ash = new AshFall(5000, { minX: 5, maxX: 17, minZ: -21, maxZ: -13.3 }); L.scene.add(ash.pts);
  L.updaters.push((dt, t, g) => { ash.mat.uniforms.uTime.value = t; ash.mat.uniforms.uCam.value.copy(g.camera.position); });
  L.indoor.push({ minX: 5, maxX: 17, minZ: -21, maxZ: -13.3, minY: -1, maxY: 3.4, on: true });
  L.spawns = { fromTunnel: { x: -30, y: 0, z: -7.6, yaw: Math.PI } };
  return finish(L);
}
