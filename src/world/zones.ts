import * as THREE from 'three';
import { Level, P } from './level';
import { facadeMats, mat, flat, glow, glass, makeHumanoid, lightCone } from '../engine/gfx';
import { makeGround, makeSky, makeSkyline } from '../engine/env';
import { LOOKS } from '../game/data';
import { BuildOpts, bld, billboard, walkers, baseLights, metro, storefront, skyTraffic } from './central';

const steel = () => new THREE.MeshStandardMaterial({ color: 0x3a4250, roughness: 0.3, metalness: 0.9 });
function elevator(L: Level, x: number, y: number, z: number, axis: 'x' | 'z', label: string, use: (g: any) => void, sign?: string, signRy = 0) {
  const me = L.box(axis === 'x' ? 1.5 : 0.12, 2.4, axis === 'x' ? 0.12 : 1.5, x, y, z, steel(), false); L.solids.push(me);
  const st = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? 0.04 : 0.14, 2.3, axis === 'x' ? 0.14 : 0.04), glow(0x55ddff, 1.5)); me.add(st);
  if (sign) L.sign(sign, '#9fe8ff', 0.26, x + Math.sin(signRy) * 0.1, y + 2.75, z + Math.cos(signRy) * 0.1, signRy);
  L.interact(me, { label, use, range: 3 });
  return me;
}

/* =====================  UNDERGROUND  ===================== */
export function buildUnderground(o: BuildOpts): Level {
  const L = new Level('underground', 'НИЖНИЙ ЯРУС', 'Рынок под эстакадой • сектор 8', 0x120c0a, 0.028);
  L.amb.hum = 0.5; L.amb.drip = 1; L.amb.bar = new THREE.Vector3(-18, 0, -14);
  baseLights(L, 0x6a4a3a, 0x0a0606, 0.42, 0x8a5a3a, 0.1);
  L.ground = L.add(makeGround({ size: 120, base: 0x0f0c0a, puddle: 0.6, quality: o.quality, rain: 0.25 }, o.reflections, L.fog));
  const W = mat('grime'), C = flat(0x0c0a09, 0.9);
  L.room(-32, 32, -8, 8, 0, 6.5, { wall: W, floor: null, ceil: C, doors: [{ side: 'n', at: -18, w: 2.4, h: 2.8 }, { side: 'n', at: 16, w: 1.6 }], indoor: false });
  // ceiling pipes, cables, lamps
  for (const [z, r, c] of [[-6.5, 0.28, 0x3a2a22], [-5.6, 0.14, 0x2a3a2a], [6.4, 0.34, 0x2c3038], [5.2, 0.1, 0x4a2a22], [0.8, 0.2, 0x2a2c30]] as number[][]) P.pipe(L, -32, 6.1 - r, z, 32, z, r, c);
  for (let x = -28; x <= 28; x += 8) {
    const col = [0xffa040, 0xff3a3a, 0x5affa0, 0xff4fa0][((x + 28) / 8) % 4 | 0];
    L.box(0.03, 1.6, 0.03, x, 4.7, ((x / 8) % 2) * 2.4, flat(0x050505), false);
    L.add(new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), glow(col, 3)), x, 4.6, ((x / 8) % 2) * 2.4);
    L.pool(col, 4.5, x, 0.045, ((x / 8) % 2) * 2.4, 0.45);
    if (((x + 28) / 8) % 2 === 0) L.light(col, 22, 13, x, 4.2, ((x / 8) % 2) * 2.4);
  }
  for (const x of [-26, -11, 3, 21]) L.steam(x, 5.6, -6.2, 0xc8b8a8, 5, -2.2, 0.5, 0.2);
  L.steam(8, 0, 4, 0xd8c8b0, 7, 4, 0.8, 0.24);
  // support columns
  for (const x of [-24, -8, 8, 24]) for (const z of [-7.3, 7.3]) L.box(0.9, 6.5, 0.9, x, 0, z, mat('concrete', { color: 0x8a7a70 }));

  // ---- signage on hall walls
  L.sign('ПОСЛЕДНИЙ БАЙТ', '#ff3a5a', 1.0, -18, 4.1, -7.78, 0, { border: true, sub: 'БАР • ЖИВАЯ ПАМЯТЬ • БЕЗ КАМЕР' });
  L.sign('КЛИНИКА', '#5affa0', 0.8, 16, 3.5, -7.78, 0, { sub: 'ИМПЛАНТЫ • БЕЗ ВОПРОСОВ' });
  const cross = L.add(new THREE.Group(), 13.2, 3.4, -7.75); cross.add(new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.28, 0.05), glow(0x5affa0, 2.4)), new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.9, 0.05), glow(0x5affa0, 2.4)));
  L.updaters.push((dt, t) => { cross.visible = Math.sin(t * 7) > -0.92 || Math.sin(t * 1.3) > 0; });
  L.sign('ПАМЯТЬ\nКУПЛЮ • ПРОДАМ', '#ffb040', 1.3, -6, 4.0, 7.78, Math.PI, { border: true });
  L.sign('ЗАПЧАСТИ ДЛЯ ЛЮДЕЙ', '#55ddff', 0.5, -20, 3.3, 7.78, Math.PI);
  L.sign('ЕДА. НАВЕРНОЕ.', '#ff7a3a', 0.5, 8, 3.3, 7.78, Math.PI);
  L.sign('ДОЛГИ НЕ ЗАБЫВАЮТ', '#ff3a3a', 0.45, 26, 3.6, -7.78, 0);
  L.sign('СЕКТОР 9\nЗАТОПЛЕН', '#ff5a3a', 0.9, 31.7, 3.4, 0, -Math.PI / 2, { border: true });
  L.sign('ты помнишь, кто ты?', '#b070ff', 0.42, 0, 2.6, -7.78, 0, { font: '"Exo 2"', weight: 600 });
  // east gate rubble
  for (let i = 0; i < 9; i++) L.box(0.12, 6, 0.12, 30.6, 0, -6 + i * 1.5, flat(0x20140e, 0.6, 0.7), false);
  L.col(30.2, 31, -8, 8);
  for (const [x, z, s] of [[28.5, -4, 1.2], [29, 3, 1.5], [27.6, 5.5, 0.9]]) P.crate(L, x, 0, z, s, mat('grime'));
  metro(L, -31.2, 0, Math.PI / 2, 'ТРАНЗИТ');

  // ---- market stalls (south wall)
  const stall = (x: number, canopy: number) => {
    P.table(L, x, 0, 6.2, 3.2, 1.0, mat('metal', { color: 0x6a5a4a }));
    L.box(3.8, 0.08, 2.4, x, 2.7, 6.4, flat(canopy, 0.8), false);
    for (const s of [-1.8, 1.8]) L.box(0.07, 2.7, 0.07, x + s, 0, 5.3, flat(0x15120f, 0.5, 0.6), false);
  };
  stall(-20, 0x1a2a3a); stall(-6, 0x3a2a12); stall(8, 0x3a1a12);
  // junk stall
  for (let i = 0; i < 6; i++) L.box(0.3, 0.2 + (i % 3) * 0.1, 0.3, -21.2 + i * 0.5, 0.8, 6.1, flat([0x4a4a52, 0x6a4a3a, 0x3a5a5a][i % 3], 0.4, 0.8), false);
  const arm = L.add(new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.5, 4, 8), flat(0x8a8f96, 0.3, 0.9)), -19, 0.86, 6.2); arm.rotation.z = 1.4;
  L.interact(arm, { label: 'Протез руки', use: g => g.examine('Протез «Кронос-4», б/у', 'На запястье гравировка: «Папе. Чтобы обнимал крепче». Кто-то продал руку. Или за неё продали.') });
  L.npc('junk', LOOKS.junk, -20, 0, 7.1, Math.PI, undefined, { label: 'Торговец запчастями', use: g => g.bark('junk'), range: 3.2 });
  // Pixel's memory stall
  for (let i = 0; i < 7; i++) { const s = L.add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.16), glow([0xffb040, 0x55ddff, 0xff4fa0][i % 3], 2)), -7.2 + i * 0.4, 0.82, 6.1); s.rotation.y = i * 0.5; }
  L.light(0xffb040, 12, 8, -6, 2.2, 5.6);
  L.npc('pixel', LOOKS.pixel, -6, 0, 7.15, Math.PI);
  // food stall
  L.cyl(0.35, 0.3, 7.4, 0.8, 6.2, flat(0x2a2a2a, 0.4, 0.8)); L.cyl(0.3, 0.25, 8.6, 0.8, 6.2, flat(0x2a2a2a, 0.4, 0.8));
  L.steam(7.4, 1.1, 6.2, 0xffe8d0, 5, 1.8, 0.3, 0.3); L.light(0xff7a3a, 10, 7, 8, 2.2, 5.6);
  L.npc('cook', LOOKS.cook, 8, 0, 7.15, Math.PI, undefined, { label: 'Уличная кухня', use: g => g.bark('cook'), range: 3.2 });
  // market terminal
  const mt = P.terminal(L, 24, 0, 6.9, Math.PI, ['СКЛАД-8 // УЧЁТ', 'поставки: 14', 'долги: 231', '', '> ДОСТУП ЗАКРЫТ'], 'ЧЁРНЫЙ РЕЕСТР', '#ffb040');
  L.interact(mt.children[0], { label: 'Терминал чёрного рынка', range: 3, use: g => g.story.marketTerminal(g) });
  // clutter
  P.barrel(L, -13, 0, 6.8, 0x4a2a1a); P.barrel(L, -12.2, 0, 7.1, 0x2a3a2a); P.crate(L, 15, 0, 6.9, 0.9, mat('grime')); P.crate(L, 15.9, 0, 6.8, 0.7, mat('grime')); P.crate(L, 15.3, 0.9, 6.9, 0.6, mat('grime'));
  P.barrel(L, 2, 0, -7.0, 0x3a1a1a); P.vending(L, -2, 0, -7.2, 0, 0xff3a3a, 'СТИМ\nДОЗА');
  const fire = L.cyl(0.32, 0.9, 20, 0, -1.5, flat(0x1a1210, 0.7, 0.5), true); const fl = L.light(0xff7a2a, 24, 10, 20, 1.5, -1.5);
  const flame = L.add(new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 8), glow(0xff8a2a, 3)), 20, 1.15, -1.5);
  L.updaters.push((dt, t) => { fl.intensity = 20 + Math.sin(t * 13) * 5 + Math.sin(t * 7.3) * 4; flame.scale.y = 1 + Math.sin(t * 11) * 0.25; });
  for (const [x, z, ry] of [[19, -0.8, 2.2], [21, -2.2, -1.2]]) { const h = makeHumanoid({ coat: 0x2a2420, hairStyle: 'hood', coatLen: 0.8 }); h.group.position.set(x, 0, z); h.group.rotation.y = ry; h.armL.rotation.x = -1; h.armR.rotation.x = -1; L.scene.add(h.group); }

  // ---- bar «Последний байт»
  L.room(-28, -8, -22, -8, 0, 4, { wall: mat('wood', { color: 0x7a5a50 }), floor: mat('wood', { color: 0x8a7060 }), ceil: flat(0x0a0808, 0.9), skip: 's' });
  L.box(10, 1.1, 0.8, -18, 0, -19.4, mat('wood', { color: 0x5a3a30 })); L.box(10.2, 0.06, 1.0, -18, 1.1, -19.4, flat(0x1a0d0d, 0.2, 0.6), false);
  L.box(10, 0.04, 0.05, -18, 0.2, -18.98, glow(0xff3a5a, 2.2), false);
  for (let s = 0; s < 3; s++) { L.box(9, 0.05, 0.35, -18, 1.5 + s * 0.6, -21.7, flat(0x15100f, 0.5), false); for (let i = 0; i < 16; i++) L.cyl(0.04, 0.24, -22.2 + i * 0.56, 1.55 + s * 0.6, -21.7, glow([0xffb040, 0x55ddff, 0xff4fa0, 0x5affa0][(i + s) % 4], 0.9)); }
  for (let i = 0; i < 5; i++) L.cyl(0.17, 0.7, -21.5 + i * 1.7, 0, -18.4, flat(0x2a1a1a, 0.5, 0.6), true);
  for (const [x, z] of [[-25, -12], [-25, -16], [-11, -12], [-11.5, -16.5]]) { L.cyl(0.5, 0.74, x, 0, z, flat(0x1a1212, 0.4, 0.6), true, 0.08); L.cyl(0.55, 0.04, x, 0.74, z, flat(0x2a1a1a, 0.3, 0.5)); L.add(new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), glow(0xffa040, 2)), x, 0.86, z); }
  L.light(0xff3a5a, 20, 12, -18, 3.2, -17); L.light(0xffa040, 10, 9, -24, 2.6, -13); L.light(0x7a3aff, 10, 9, -11, 2.6, -14);
  const juke = L.box(1.0, 1.7, 0.6, -27.3, 0, -20.5, flat(0x1a1020, 0.4, 0.6)); const jg = L.box(0.7, 1.0, 0.02, -27.3, 0.5, -20.18, glow(0x7a3aff, 1.6), false); juke.rotation.y = 0;
  L.updaters.push((dt, t) => { (jg.material as any).color.setHSL(0.75 + Math.sin(t * 0.8) * 0.1, 1, 0.5).multiplyScalar(1.8); });
  L.interact(jg, { label: 'Музыкальный автомат', use: g => g.examine('Автомат «Ностальгия»', 'Играет не музыку — чужие воспоминания о музыке. Трек №7: «Чей-то первый танец, 2064». Пять кредитов. Люди платят.') });
  L.sign('ПЛАТИ ИЛИ ЗАБУДЬ', '#ffb040', 0.36, -18, 3.3, -21.84, 0);
  for (const [x, z, ry, lk] of [[-25, -12.9, 0, 0x2a2026], [-11, -11.1, Math.PI, 0x20262a], [-24.1, -16, -1.5, 0x26201a]] as number[][]) { const h = makeHumanoid({ coat: lk, hairStyle: 'short', coatLen: 0.4 }); h.group.position.set(x, -0.28, z); h.group.rotation.y = ry; h.legL.rotation.x = h.legR.rotation.x = -1.4; h.armL.rotation.x = -0.9; L.scene.add(h.group); }
  L.npc('garth', LOOKS.garth, -18, 0, -20.5, 0);

  // ---- clinic
  const TW = mat('tile', { color: 0x9ac0b0 });
  L.room(8, 24, -20, -8, 0, 3.4, { wall: TW, floor: mat('tile', { color: 0x7a8a88, rep: [4, 3] }), ceil: flat(0x10140f, 0.9), skip: 's', doors: [{ side: 'n', at: 19 }] });
  L.door(16, 0, -8, 'x', 1.6, { label: 'Клиника Сойки', color: 0x2a4a3a, locked: g => g.flag('soyka_hostile') && !g.has('i_coolant') && g.player.pos.z > -8 ? 'Заперто изнутри. Сойка не хочет вас видеть. Разве что вы придёте не с пустыми руками.' : null });
  L.door(19, 0, -20, 'x', 1.5, { label: 'Задняя комната', color: 0x1a2a22, locked: g => g.flag('backroom_open') ? null : 'Гермодверь. Замок биометрический — открывается только изнутри или рукой Сойки.' });
  // operating chair
  L.box(0.8, 0.5, 2.0, 12, 0, -14.5, flat(0x2a3a36, 0.5, 0.5)); L.box(0.8, 0.12, 2.0, 12, 0.5, -14.5, flat(0x4a1a1a, 0.7), false);
  const lampArm = L.box(0.06, 0.06, 1.4, 12, 2.9, -14.5, flat(0x8a8f96, 0.3, 0.8), false); L.add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 0.14, 14), glow(0xd0ffe8, 2.2)), 12, 2.5, -14.5);
  const cone = lightCone(0xd0ffe8, 1.2, 2.0, 0.08); cone.position.set(12, 1.5, -14.5); L.scene.add(cone);
  L.light(0xc0ffe0, 6, 10, 12, 2.3, -14.5); L.light(0x5affa0, 4, 9, 20, 2.6, -11);
  P.table(L, 9.2, 0, -12, 0.8, 2.0, mat('metal', { color: 0x9aa0a8 }));
  for (let i = 0; i < 6; i++) L.cyl(0.03, 0.14, 9.1 + (i % 2) * 0.2, 0.8, -12.7 + i * 0.25, glow([0x5affa0, 0x55ddff, 0xff4fa0][i % 3], 1.2));
  L.box(0.5, 2.0, 3.0, 23.5, 0, -11, mat('metal', { color: 0x8a9a94 }));
  L.screen(1.2, 0.75, ['ПАЦИЕНТОВ: 0', 'ХЛАДАГЕНТ: ▓░░░░', 'КРЕДИТ: ОТКАЗ', '', 'не трогай ничего'], 8.2, 2.0, -16, Math.PI / 2, '#5affa0', 'КЛИНИКА//С');
  // incinerator
  const inc = L.box(1.4, 1.8, 0.9, 22, 0, -19.3, mat('metal', { color: 0x5a4a44 })); const incG = L.box(0.7, 0.4, 0.02, 22, 0.7, -18.84, glow(0xff5a1a, 2.2), false);
  L.updaters.push((dt, t) => { (incG.material as any).color.setRGB(2.2 + Math.sin(t * 9) * 0.5, 0.7, 0.2); });
  L.sign('УТИЛИЗАТОР', '#ff7a3a', 0.2, 22, 2.0, -18.8, 0);
  L.interact(incG, { label: 'Утилизатор биоотходов', range: 3, use: g => g.story.incinerator(g) });
  L.npc('soyka', LOOKS.soyka, 14.4, 0, -11.5, 0.3);

  // ---- back room
  L.room(13, 24, -30, -20, 0, 3.2, { wall: mat('panel', { color: 0x6a8a80 }), floor: mat('tile', { color: 0x4a5a58 }), ceil: flat(0x0a0d0c, 0.9), skip: 's' });
  L.box(0.9, 0.5, 2.1, 20.5, 0, -27, flat(0x2a3a36, 0.5, 0.5)); L.box(0.9, 0.5, 0.7, 20.5, 0.5, -27.9, flat(0x2a3a36, 0.5, 0.5), false);
  const tank = L.cyl(0.5, 2.2, 22.8, 0, -28.5, glass(0x55ddff, 0.35), true); L.cyl(0.36, 1.9, 22.8, 0.1, -28.5, glow(0x2a9aff, 0.9));
  L.light(0x3aa0ff, 14, 9, 22, 2, -27); L.light(0xff3a3a, 5, 6, 15, 2.4, -22);
  for (let i = 0; i < 5; i++) { const c = P.pipe(L, 20.9, 1.2 + i * 0.07, -27.8, 22.5, -28.4, 0.02, [0x55ddff, 0xff3a3a, 0x111111][i % 3]); }
  L.screen(1.4, 0.85, ['Э. ВЕЙН // СОСТОЯНИЕ', 't° коры: 41.3 ↑', 'нагрузка: 3200%', 'ёмкость: 32/32', 'прогноз: часы'], 16.5, 1.9, -29.82, 0, '#ff5a5a', 'НЕЙРОМОНИТОР');
  L.box(0.8, 0.9, 0.8, 14.2, 0, -28.8, mat('metal', { color: 0x6a7a74 }));
  L.npc('elias', LOOKS.elias, 20.5, 0, -25.4, Math.PI, g => !g.flag('elias_taken') && !g.flag('elias_dead'));
  // signs of a raid (visible only if Elias was taken)
  const wreck = L.add(new THREE.Group()); for (let i = 0; i < 6; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.5 + i * 0.1, 0.05, 0.4), flat(0x8a8f96, 0.4, 0.7)); p.position.set(16 + i * 1.1, 0.05, -23 - (i % 3)); p.rotation.y = i; wreck.add(p); }
  L.updaters.push((dt, t, g) => { wreck.visible = !!g.flag('elias_taken'); });

  walkers(L, [{ z: -2.6, a: -26, b: 26 }, { z: 2.4, a: -26, b: 26 }, { z: 0, a: -24, b: 14 }], 7, 31);
  L.indoor.push({ minX: -40, maxX: 40, minZ: -40, maxZ: 12, minY: -1, maxY: 8, on: true });
  L.spawns = { metro: { x: -27, y: 0, z: 0, yaw: -Math.PI / 2 }, menu: { x: 0, y: 0, z: 0, yaw: 1.2 } };
  return L;
}

/* =====================  RESIDENTIAL  ===================== */
export function buildResidential(o: BuildOpts): Level {
  const L = new Level('residential', 'ЖИЛОЙ СЕКТОР', 'Блок «Тессера» • корпус C', 0x090d12, 0.019);
  baseLights(L, 0x4a5a70, 0x0a0a08, 0.5, 0x6a80a0, 0.3);
  L.add(makeSky(0x02040a, 0x0e1a22, 0x2a5a5a)); L.add(makeSkyline(21, 0x70808a, 110, 260, 50));
  L.ground = L.add(makeGround({ size: 240, base: 0x0c0d0e, puddle: 0.7, quality: o.quality, rain: o.rain }, o.reflections, L.fog));
  const FY = 24;
  // megablocks. North block has interiors, so its shell has custom colliders.
  const nb = facadeMats(401, 30, 26, 'slum', 0.18);
  // one seamless shell above the lobby: separate boxes would leave their inner faces cutting through floor 7
  L.box(80.3, 80.2, 22, 0, 3.8, -29, nb, false); L.box(33, 3.8, 22, -23.65, 0, -29, mat('concrete', { color: 0x6a625c }), false); L.box(33, 3.8, 22, 23.65, 0, -29, mat('concrete', { color: 0x6a625c }), false);
  L.col(-40.2, -7.15, -40, -18, 0, 20); L.col(7.15, 40.2, -40, -18, 0, 20); L.col(-7.2, 7.2, -40, -30.15, 0, 20);
  bld(L, -46, -24, -18, 30, 70, 402, 'slum', 0, 0.18); bld(L, 24, 46, -18, 30, 76, 403, 'slum', 0, 0.18); bld(L, -24, 24, 24, 44, 64, 404, 'slum', 0, 0.18);
  // balconies & AC on north face
  for (let f = 1; f < 9; f++) for (let i = 0; i < 8; i++) if ((f * 7 + i * 3) % 5 !== 0) {
    const x = -34 + i * 9.6 + (f % 2) * 2; if (Math.abs(x) < 8 && f < 2) continue;
    L.box(2.6, 0.1, 1.0, x, f * 5.6, -17.5, flat(0x1c1a18, 0.8), false); L.box(2.6, 0.9, 0.05, x, f * 5.6, -17.02, flat(0x25221f, 0.6, 0.5), false);
    if ((f + i) % 3 === 0) L.box(1.4, 0.03, 0.03, x, f * 5.6 + 2.2, -17.3, glow([0xff7a3a, 0x55ddff, 0xff4fa0][(f + i) % 3], 1.6), false);
  }
  for (let i = 0; i < 7; i++) { P.acUnit(L, -23.75, 4 + i * 4.4, -12 + (i % 4) * 8, Math.PI / 2); P.acUnit(L, 23.75, 5 + i * 4.1, -10 + (i % 4) * 8, -Math.PI / 2); }
  // laundry lines
  for (const [y, z] of [[7, -8], [10.5, 2], [8.5, 12]]) { P.pipe(L, -24, y, z, 24, z, 0.012, 0x050505); for (let i = 0; i < 9; i++) { const c = L.add(new THREE.Mesh(new THREE.PlaneGeometry(0.8 + (i % 3) * 0.3, 1.0 + (i % 2) * 0.4), new THREE.MeshStandardMaterial({ color: [0x5a4a4a, 0x4a5a5a, 0x6a6a5a, 0x3a3a4a][i % 4], side: THREE.DoubleSide, roughness: 1 })), -20 + i * 4.7 + (y % 2), y - 0.6, z); L.updaters.push((dt, t) => { c.rotation.x = Math.sin(t * 1.4 + i) * 0.12; }); } }
  // signage
  L.sign('ТЕССЕРА • C', '#ffb040', 0.9, 0, 5.0, -17.7, 0, { border: true });
  L.sign('ЖИЛЬЁ ЗА ПАМЯТЬ', '#ff4fa0', 0.6, -15, 4.4, -17.8, 0, { sub: 'ПРОГРАММА MNEMOBANK • 1 ГОД АРЕНДЫ = 1 ГОД ДЕТСТВА' });
  L.sign('ПРАЧЕЧНАЯ', '#55ddff', 0.5, 23.7, 3.4, 4, -Math.PI / 2); L.sign('РЕМОНТ ИМПЛАНТОВ', '#5affa0', 0.5, -23.7, 3.4, 6, Math.PI / 2);
  storefront(L, 23.98, 4, -Math.PI / 2, 7, 0x2a6a8a, '', '#fff'); storefront(L, -23.98, 6, Math.PI / 2, 7, 0x2a8a5a, '', '#fff');
  billboard(L, 7, 'ТЫ\nДОМА', 'HYPERION HOUSING • МЫ ПОМНИМ ТВОЙ АДРЕС', '#7fd4ff', '#2a8aaa', 8, 12, 14, 16, 23.7, Math.PI);
  // courtyard
  L.lamp(-12, -12, 0xffb070, 5.5, true); L.lamp(12, -12, 0xffb070, 5.5); L.lamp(-14, 12, 0x9fd0ff, 5.5); L.lamp(14, 12, 0x9fd0ff, 5.5, true);
  L.cyl(2.2, 0.5, 0, 0, 2, mat('concrete'), true); const tree = L.cyl(0.18, 3.4, 0, 0.5, 2, flat(0x1a1410, 0.9)); for (let i = 0; i < 6; i++) { const b = L.add(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.07, 1.8, 5), flat(0x1a1410, 0.9)), Math.cos(i) * 0.5, 3.6 + (i % 3) * 0.4, 2 + Math.sin(i) * 0.5); b.rotation.set(Math.sin(i * 2) * 0.9, 0, Math.cos(i * 2) * 0.9); }
  const ring = L.add(new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.03, 6, 40), glow(0x5affa0, 1.6)), 0, 0.52, 2); ring.rotation.x = Math.PI / 2;
  // broken holo-playground
  const sw = L.add(new THREE.Group(), -13, 0, 4); for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.4, 0.08), flat(0x2a2c30, 0.5, 0.7)); p.position.set(s * 1.2, 1.2, 0); sw.add(p); } const tb = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 0.08), flat(0x2a2c30, 0.5, 0.7)); tb.position.y = 2.4; sw.add(tb);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.2), glow(0xff4fa0, 1.4)); seat.position.y = 0.6; const sp = new THREE.Group(); sp.position.y = 2.4; sp.add(seat); seat.position.y = -1.8; sw.add(sp);
  L.updaters.push((dt, t) => { sp.rotation.x = Math.sin(t * 1.1) * 0.25; seat.visible = Math.sin(t * 17) > -0.6; }); L.col(-14.4, -11.6, 3.7, 4.3, 0, 2.5);
  P.bench(L, 6, 0, -4); P.bench(L, -6, 0, 9); P.vending(L, 20, 0, -16.9, 0, 0xffb040, 'ВОДА\n2₵');
  for (const [x, z] of [[-20, -15], [-19, -14.4], [18, 16]]) L.box(1.2, 1.2, 0.9, x, 0, z, flat(0x1c2a22, 0.7, 0.4));
  // fire barrel with tenants
  L.cyl(0.32, 0.9, 13, 0, 3, flat(0x1a1210, 0.7, 0.5), true); const fl = L.light(0xff7a2a, 26, 11, 13, 1.5, 3); const flame = L.add(new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 8), glow(0xff8a2a, 3)), 13, 1.15, 3);
  L.box(3, 0.1, 3, 13, 3.2, 3, flat(0x1a1c20, 0.8), false); for (const [sx, sz] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) L.box(0.08, 3.2, 0.08, 13 + sx, 0, 3 + sz, flat(0x1a1c20), false);
  L.indoor.push({ minX: 11.5, maxX: 14.5, minZ: 1.5, maxZ: 4.5, minY: 0, maxY: 3.2, on: true });
  L.updaters.push((dt, t) => { fl.intensity = 22 + Math.sin(t * 13) * 5 + Math.sin(t * 7.3) * 4; flame.scale.y = 1 + Math.sin(t * 11) * 0.25; });
  L.npc('tenant', LOOKS.tenant, 12.2, 0, 3.9, 2.2, undefined, { label: 'Жилец', use: g => g.bark('tenant'), range: 3.2 });
  { const h = makeHumanoid({ coat: 0x2a2a22, hairStyle: 'hat', coatLen: 0.7 }); h.group.position.set(14, 0, 2.6); h.group.rotation.y = -1.2; h.armL.rotation.x = -1; h.armR.rotation.x = -1; L.scene.add(h.group); }
  metro(L, 0, 22.6, Math.PI);

  // ---- lobby
  L.room(-7, 7, -30, -18, 0, 3.6, { wall: mat('grime', { color: 0xa09a90 }), floor: mat('tile', { color: 0x6a6a66, rep: [4, 4] }), ceil: flat(0x0e0e0c, 0.9), doors: [{ side: 's', at: 0, w: 2.2 }] });
  const ll = L.light(0xd8e0c0, 14, 12, 0, 3.1, -24); L.box(1.6, 0.05, 0.3, 0, 3.5, -24, glow(0xd8e0c0, 2), false);
  L.updaters.push((dt, t) => { ll.intensity = (Math.sin(t * 23) > 0.93 || Math.sin(t * 3.1) > 0.97) ? 3 : 14; });
  for (let i = 0; i < 12; i++) L.box(0.02, 0.28, 0.4, -6.8, 0.9 + ((i / 4) | 0) * 0.32, -22 - (i % 4) * 0.45, mat('metal', { color: 0x7a7468 }), false);
  L.sign('ПОЧТА', '#ffb040', 0.2, -6.78, 2.1, -22.7, Math.PI / 2);
  L.box(2.6, 1.1, 0.7, 4.5, 0, -22.5, mat('wood', { color: 0x5a4a40 }));
  const ct = P.terminal(L, 4.6, 0, -24.6, Math.PI, ['КАМЕРЫ: 12', 'ЭТАЖ 7: ЗАПИСЬ ЕСТЬ', 'АРХИВ: 72 ч', '', '> ТРЕБУЕТСЯ КОД VCPD'], 'ТЕССЕРА//ОХРАНА', '#9fe8a0');
  L.interact(ct.children[0], { label: 'Пульт видеонаблюдения', range: 3, use: g => g.story.cctvTerminal(g) });
  L.sign('КОНСЬЕРЖ УВОЛЕН. ЖАЛОБЫ — В СТЕНУ.', '#ff7a5a', 0.16, 4.5, 2.4, -29.8, 0);
  elevator(L, 0, 0, -29.8, 'x', 'Лифт — этаж 7', g => g.teleport('floor7'), 'ЛИФТ', 0);

  // ---- floor 7
  const CW = mat('grime', { color: 0x8a8478 });
  L.room(-14, 14, -27, -24, FY, 3, { wall: CW, floor: mat('carpet'), ceil: flat(0x0e0d0c, 0.9), doors: [{ side: 'n', at: -6 }, { side: 'n', at: 6 }, { side: 'e', at: -25.5, w: 2.4, h: 2.2 }] });
  const win = L.box(0.06, 2.2, 2.4, 14, FY, -25.5, glass(0x6a9ab0, 0.25), true);
  L.light(0xffc890, 8, 9, -6, FY + 2.6, -25.5); L.light(0xffc890, 8, 9, 6, FY + 2.6, -25.5);
  for (const x of [-6, 6]) L.box(0.9, 0.05, 0.25, x, FY + 2.9, -25.5, glow(0xffc890, 1.6), false);
  L.sign('7', '#ffb040', 0.6, -13.82, FY + 2.0, -25.5, Math.PI / 2);
  elevator(L, -13.8, FY, -25.5, 'z', 'Лифт — вестибюль', g => g.teleport('lobby'));
  L.sign('7A', '#d8d0c0', 0.22, -6, FY + 2.72, -26.82, 0); L.sign('7B', '#d8d0c0', 0.22, 6, FY + 2.72, -26.82, 0);
  L.door(-6, FY, -27, 'x', 1.5, { label: 'Квартира 7A', locked: () => 'Агнес не приглашала вас внутрь.', color: 0x3a2e28 });
  L.door(6, FY, -27, 'x', 1.5, { label: 'Квартира 7B — Э. Вейн', color: 0x2e3238, locked: g => g.has('i_key') ? null : 'Заперто. Нужен ключ.', onOpen: g => g.story.enterApartment(g) });
  // police tape on 7B? no — nobody reported him. just a welcome mat.
  L.box(1.0, 0.02, 0.6, 6, FY + 0.03, -26.4, flat(0x3a2a22, 1), false);
  L.box(1.0, 0.02, 0.6, -6, FY + 0.03, -26.4, flat(0x4a3a4a, 1), false);
  const mb = L.box(0.4, 0.5, 0.12, -4.4, FY + 1.2, -26.8, mat('metal', { color: 0x7a8088 }), false); L.box(0.2, 0.06, 0.02, -4.4, FY + 1.5, -26.72, glow(0xffb040, 1.8), false); L.solids.push(mb);
  L.interact(mb, { label: 'Мнемо-бэкап 7A', range: 2.6, use: g => g.story.agnesBackup(g) });
  L.npc('agnes', LOOKS.agnes, -8.2, FY, -26.2, 0.6, g => !g.flag('agnes_shut'));
  P.item(L, new THREE.BoxGeometry(0.5, 0.5, 0.5), flat(0x4a4038, 0.9), 11.5, FY + 0.25, -26.3, { label: 'Коробка', use: g => g.examine('Коробка с вещами', 'Детские игрушки, выставленные к лифту. На боку маркером: «Отдам. Не помню, чьи».') }, false);

  // ---- Elias's apartment
  L.room(1, 13, -37, -27, FY, 3, { wall: mat('panel', { color: 0x7a8088 }), floor: mat('wood', { color: 0x6a6a70 }), ceil: flat(0x0c0d10, 0.9), skip: 's', doors: [{ side: 'n', at: 8.5, w: 4.5, h: 2.3 }] });
  L.box(4.5, 2.3, 0.06, 8.5, FY, -37, glass(0x8a6ab0, 0.22), true);
  for (let i = 0; i < 10; i++) L.box(4.4, 0.04, 0.04, 8.5, FY + 0.3 + i * 0.2, -36.85, flat(0x15161a, 0.5, 0.5), false);
  L.light(0xff4fa0, 10, 11, 8.5, FY + 1.6, -35.6); L.light(0x55ddff, 6, 8, 11, FY + 1.4, -30); L.light(0xffe0c0, 6, 12, 6, FY + 2.7, -31);
  L.sign('HYPERION', '#7fd4ff', 2.2, 20, FY + 5, -52, 0);
  // desk + terminal
  P.table(L, 11.2, FY, -31, 1.0, 2.4, mat('metal', { color: 0x5a6068 }));
  const et = L.screen(0.9, 0.56, ['HYPERION REMOTE', 'user: e.vane', 'статус: ОТОЗВАН', '', '> _'], 11.55, FY + 1.2, -31, -Math.PI / 2, '#6ff0ff', 'ЛИЧНЫЙ ТЕРМИНАЛ');
  L.box(0.05, 0.62, 0.96, 11.6, FY + 0.89, -31, flat(0x0c0d10, 0.4, 0.7), false);
  L.interact(et, { label: 'Терминал Элиаса', range: 2.6, use: g => g.story.eliasTerminal(g) });
  const chair = L.box(0.5, 0.5, 0.5, 9.6, FY, -30.2, flat(0x1a1c22, 0.7), false); chair.rotation.set(0, 0.7, Math.PI / 2); chair.position.y = FY + 0.26;
  // bed
  L.box(2.0, 0.4, 3.0, 2.3, FY, -35, flat(0x22252c, 0.9)); L.box(1.9, 0.14, 2.9, 2.3, FY + 0.4, -35, flat(0x5a5a66, 1), false); L.box(1.4, 0.12, 0.5, 2.3, FY + 0.54, -36.1, flat(0x8a8a90, 1), false);
  // shelf (east wall)
  for (let s = 0; s < 3; s++) L.box(0.35, 0.04, 2.6, 12.7, FY + 0.7 + s * 0.6, -34.5, flat(0x1a1c22, 0.5, 0.5), false);
  P.item(L, new THREE.BoxGeometry(0.22, 0.07, 0.34), flat(0x9aa0a8, 0.3, 0.8), 12.65, FY + 1.37, -34.9, { label: 'Кейс мнемо-инъектора', use: g => { g.clue('c_injector'); g.examine('Пустой кейс инъектора', 'Медицинский кейс на шесть ампул. Пусто. На крышке — трафаретная птица и буква «С». Внутри запах озона: так пахнет нейрохладагент.'); } });
  P.item(L, new THREE.BoxGeometry(0.03, 0.26, 0.2), flat(0x6a5a40, 0.5, 0.4), 12.72, FY + 0.87, -33.9, { label: 'Фотография в рамке', use: g => { g.clue('c_family_photo'); g.examine('Семейное фото Вейнов', 'Озеро. Мужчина, женщина и мальчик лет десяти с удочкой. На обороте, выцветшими чернилами: «Вирен, 2063. Наш единственный, наш Эли».<br><br><i>Единственный.</i>'); } }, false);
  // jacket + pass
  const jk = L.box(0.5, 0.9, 0.12, 2.4, FY + 1.0, -27.3, flat(0x1c2028, 0.9), false);
  L.interact(jk, { label: 'Куртка на крючке', range: 2.6, if: g => !g.flag('took_pass'), use: g => { g.set('took_pass'); g.give('i_pass'); g.clue('c_pass'); g.examine('Пропуск HYPERION', 'Во внутреннем кармане — пропуск. «ВЕЙН Э. • Отдел мнемо-архитектуры • Уровень 2 • Лаб-7». Человек, который бежит, не оставляет пропуск. Если только не знает, что его уже аннулировали.'); } });
  // trash + note
  const bin = L.cyl(0.18, 0.4, 10.4, FY, -32.6, flat(0x2a2c30, 0.5, 0.6));
  L.interact(bin, { label: 'Мусорная корзина', range: 2.4, if: g => !g.hasClue('c_note_soyka'), use: g => { g.clue('c_note_soyka'); g.examine('Скомканная записка', 'Почерк торопливый, буквы прыгают:<br><br>«<b>Сойка. Нижний ярус. Спросить Ржавого.</b><br>Хладагент — 6 амп./сутки, иначе не дотяну.<br>НЕ ЗВОНИТЬ М.»'); } });
  // hidden vent
  const vent = L.box(0.6, 0.3, 0.04, 4.6, FY + 0.25, -36.82, mat('metal', { color: 0x5a5e66 }), false);
  for (let i = 0; i < 4; i++) L.box(0.5, 0.02, 0.05, 4.6, FY + 0.16 + i * 0.07, -36.8, flat(0x0a0a0c), false);
  L.interact(vent, { label: 'Вентиляционная решётка', range: 2.2, use: g => g.story.vent(g) });
  // papers on floor
  for (let i = 0; i < 8; i++) { const p = L.add(new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.3), flat(0xc8c4b8, 1)), 5 + (i * 1.7) % 5, FY + 0.045, -29 - (i * 2.3) % 6); p.rotation.set(-Math.PI / 2, 0, i * 1.3); }
  L.box(0.8, 1.9, 0.5, 1.6, FY, -30.5, flat(0x1a1c22, 0.7)); // wardrobe

  walkers(L, [{ z: -15, a: -20, b: 20 }, { x: -18, a: -12, b: 18 }, { z: 17, a: -18, b: 18 }], 5, 91);
  skyTraffic(L, 24, 70, 150, 19);
  L.enableRain(Math.floor(5500 * o.rain));
  L.spawns = { metro: { x: 0, y: 0, z: 19, yaw: 0 }, lobby: { x: 0, y: 0, z: -27.8, yaw: Math.PI }, floor7: { x: -12, y: FY, z: -25.5, yaw: -Math.PI / 2 }, menu: { x: 0, y: 0, z: 10, yaw: 0.3 } };
  return L;
}

/* =====================  HYPERION  ===================== */
export function buildHyperion(o: BuildOpts): Level {
  const L = new Level('hyperion', 'КОМПЛЕКС HYPERION', 'Плаза Памяти • охраняемая территория', 0x0a1218, 0.0125);
  baseLights(L, 0x6a90b0, 0x081014, 0.62, 0x9ac0e0, 0.45);
  L.add(makeSky(0x02050c, 0x0c2030, 0x2a7a9a)); L.add(makeSkyline(33, 0x90b0c8, 120, 280, 60, 60, 220));
  L.ground = L.add(makeGround({ size: 300, base: 0x12161b, puddle: 0.35, tiles: 3, reflect: 1.1, quality: o.quality, rain: o.rain }, o.reflections, L.fog));
  const LY = 30, KY = 90;
  // tower shell (interiors inside → custom colliders)
  const tm = facadeMats(501, 16, 50, 'corp', 0.55);
  L.box(40, 200, 26, 0, 6.2, -23, tm, false);
  L.box(5.85, 6.2, 26, -17.07, 0, -23, tm, false); L.box(5.85, 6.2, 26, 17.07, 0, -23, tm, false);
  L.col(-20, -14.15, -36, -10, 0, 20); L.col(14.15, 20, -36, -10, 0, 20); L.col(-20, 20, -36, -30.15, 0, 20);
  L.sign('HYPERION', '#bfe9ff', 5, 0, 22, -9.8, 0, { k: 1.3 });
  L.sign('ПАМЯТЬ — ЭТО ВЫБОР', '#7fd4ff', 0.9, 0, 17.5, -9.8, 0);
  for (const x of [-19.9, 19.9]) L.box(0.25, 160, 0.25, x, 6, -9.9, glow(0x7fd4ff, 1.6), false);
  bld(L, -60, -32, -40, 34, 120, 502, 'corp', 0, 0.5); bld(L, 32, 60, -40, 34, 140, 503, 'corp', 0, 0.5); bld(L, -32, 32, 34, 56, 90, 504, 'corp', 0, 0.5);
  L.col(-32, -20, -36, -10.5); L.col(20, 32, -36, -10.5);
  L.box(12, 9, 0.4, -26, 0, -10.6, mat('panel', { color: 0x8aa0b0 }), false); L.box(12, 9, 0.4, 26, 0, -10.6, mat('panel', { color: 0x8aa0b0 }), false);
  // plaza
  for (const x of [-18, -6, 6, 18]) { L.box(0.14, 0.014, 40, x, 0.012, 10, glow(0x7fd4ff, 0.8), false); }
  for (const [x, z] of [[-24, 0], [24, 0], [-24, 20], [24, 20], [-10, 28], [10, 28]]) L.lamp(x, z, 0xcfeaff, 7, Math.abs(x) === 24 && z === 0);
  // monument: memory ring
  L.cyl(2.6, 0.4, 0, 0, 12, mat('labfloor', { color: 0x8a98a8 }), true);
  const ringG = L.add(new THREE.Group(), 0, 3.6, 12);
  const r1 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.06, 8, 60), glow(0x7fd4ff, 2.2)), r2 = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.04, 8, 50), glow(0xffffff, 1.6)), r3 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.03, 8, 40), glow(0x7fd4ff, 2.2));
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: 0x0a1018, roughness: 0.05, metalness: 1, emissive: 0x2a6a9a, emissiveIntensity: 0.6 }));
  ringG.add(r1, r2, r3, core);
  L.updaters.push((dt, t) => { r1.rotation.set(t * 0.3, t * 0.2, 0); r2.rotation.set(-t * 0.4, 0, t * 0.3); r3.rotation.set(0, t * 0.6, -t * 0.5); core.rotation.y = t * 0.2; });
  L.light(0x7fd4ff, 40, 20, 0, 4, 12); L.pool(0x7fd4ff, 8, 0, 0.42, 12, 0.5);
  const plq = L.box(1.2, 0.5, 0.06, 0, 0.5, 14.7, flat(0x1a1d22, 0.3, 0.8), false);
  L.interact(plq, { label: 'Мемориальная табличка', use: g => { g.examine('«Кольцо Памяти»', '«В память о 31 жертве пожара на Марлоу-стрит, 2085. HYPERION помнит — чтобы вы могли забыть».<br><br>Корпорация поставила памятник трагедии в собственном дворе. Либо совесть, либо реклама. В этом городе разницы нет.'); g.set('saw_memorial'); } });
  P.bench(L, -12, 0, 12, false); P.bench(L, 12, 0, 12, false); P.bench(L, -12, 0, 20, false); P.bench(L, 12, 0, 20, false);
  for (const x of [-27, 27]) for (const z of [-4, 8, 20]) { L.box(1.6, 0.7, 1.6, x, 0, z, mat('labfloor', { color: 0x6a7480 })); L.add(new THREE.Mesh(new THREE.ConeGeometry(0.6, 2.2, 6), flat(0x0e2a22, 0.9)), x, 1.8, z); }
  billboard(L, 8, 'ВУАЛЬ', 'СКОРО. ГОРОД БЕЗ ПЛОХИХ ВОСПОМИНАНИЙ.', '#bfe9ff', '#5a8aff', 9, 13.5, -31.7, 14, 10, Math.PI / 2);
  billboard(L, 9, 'СПИ\nСПОКОЙНО', 'HYPERION MNEMOCARE', '#bfe9ff', '#2ac0c0', 9, 13.5, 31.7, 14, 10, -Math.PI / 2);
  metro(L, 0, 32.6, Math.PI, 'МОНОРЕЛЬС');
  // drones
  for (let i = 0; i < 2; i++) {
    const d = L.add(new THREE.Group()); const b = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.18, 0.7), flat(0x1a1d24, 0.3, 0.8)); const e = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), glow(0xff3030, 3)); e.position.y = -0.12; d.add(b, e);
    const cone = lightCone(0xcfeaff, 2.2, 7.5, 0.05); cone.position.y = -3.9; d.add(cone);
    const pool = L.pool(0xcfeaff, 3, 0, 0.05, 0, 0.5);
    L.updaters.push((dt, t) => { const a = t * 0.22 + i * Math.PI; d.position.set(Math.cos(a) * 20, 8 + Math.sin(t + i) * 0.3, 10 + Math.sin(a * (1 + i * 0.5)) * 13); pool.position.x = d.position.x; pool.position.z = d.position.z; e.visible = Math.sin(t * 6) > 0; });
  }
  // ---- checkpoint & entrances (front wall z=-10)
  L.room(-14, 14, -30, -10, 0, 6, { wall: mat('labfloor', { color: 0x8a9aa8 }), floor: mat('labfloor', { color: 0x5a6672, rep: [7, 5] }), ceil: flat(0x10151a, 0.95), doors: [{ side: 's', at: 0, w: 3.2, h: 3.4 }, { side: 's', at: 10, w: 1.5 }] });
  const ff = L.box(3.2, 3.4, 0.05, 0, 0, -10, new THREE.MeshBasicMaterial({ color: 0x3ac0ff, transparent: true, opacity: 0.22, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }), false);
  const ffc = L.col(-1.6, 1.6, -10.25, -9.75, 0, 4);
  for (const s of [-1.75, 1.75]) L.box(0.12, 3.5, 0.3, s, 0, -9.8, glow(0x3ac0ff, 2), false);
  L.updaters.push((dt, t, g) => { const open = !!g.flag('hyp_access'); ff.visible = !open; ffc.on = !open; (ff.material as any).opacity = 0.16 + Math.sin(t * 20) * 0.03; });
  L.interact(ff, { label: 'Силовой барьер', if: g => !g.flag('hyp_access'), use: g => g.notify('Барьер. Охранник у стойки решает, кто войдёт.', 'warn') });
  L.box(1.6, 1.15, 0.8, 3.4, 0, -7.4, mat('panel', { color: 0x9ab0c0 })); L.box(1.7, 0.05, 0.9, 3.4, 1.15, -7.4, glow(0x3ac0ff, 0.8), false);
  for (const x of [-3, 5.5]) for (let i = 0; i < 3; i++) L.cyl(0.07, 0.9, x - i * 1.4 * Math.sign(x), 0, -6.5, glow(0x3ac0ff, 1.2), true);
  L.npc('bruno', LOOKS.bruno, 2.4, 0, -8.6, 0);
  L.sign('КОНТРОЛЬ ДОСТУПА', '#7fd4ff', 0.3, 0, 3.9, -9.75, 0);
  L.sign('СЛУЖЕБНЫЙ ВХОД', '#ffb040', 0.2, 10, 2.8, -9.78, 0);
  L.door(10, 0, -10, 'x', 1.5, { label: 'Служебный вход', locked: g => g.flag('hyp_access') || g.flag('service_open') ? null : 'Служебный шлюз заблокирован.', onLocked: g => g.story.serviceDoor(g) });
  // ---- lobby
  L.light(0xcfeaff, 12, 22, 0, 5, -18); L.light(0x7fd4ff, 8, 16, 0, 4, -27);
  for (const x of [-9, 0, 9]) L.box(3, 0.06, 0.5, x, 5.9, -20, glow(0xdff4ff, 1.8), false);
  L.box(6, 1.1, 1.2, 0, 0, -20, mat('labfloor', { color: 0xa0b0c0 })); L.box(6.1, 0.05, 1.3, 0, 1.1, -20, glow(0x7fd4ff, 0.7), false);
  L.sign('HYPERION', '#bfe9ff', 1.3, 0, 4.2, -29.7, 0);
  const holo = makeHumanoid({ coat: 0x3ac0ff, ghost: true, hairStyle: 'bun', coatLen: 0.7 }); holo.group.position.set(0, 0.1, -21.2); L.scene.add(holo.group);
  const holoHit = L.box(0.7, 1.9, 0.7, 0, 0, -21.2, new THREE.MeshBasicMaterial({ visible: false }), false);
  L.interact(holoHit, { label: 'Голо-администратор', use: g => g.bark('holo'), range: 4 });
  L.updaters.push((dt, t) => { holo.group.visible = Math.sin(t * 31) > -0.97; holo.group.rotation.y = Math.sin(t * 0.5) * 0.3; });
  for (const x of [-11, 11]) { L.box(1, 0.45, 4, x, 0, -15, flat(0x1a2028, 0.8)); L.box(0.2, 0.9, 4, x + Math.sign(x) * 0.6, 0, -15, flat(0x1a2028, 0.8), false); }
  L.box(0.5, 2.6, 0.5, -8, 0, -26, mat('labfloor', { color: 0x9aa8b6 })); L.box(0.5, 2.6, 0.5, 8, 0, -26, mat('labfloor', { color: 0x9aa8b6 }));
  elevator(L, -5, 0, -29.8, 'x', 'Лифт — лаборатории', g => g.story.labElevator(g), 'ЛАБОРАТОРИИ • УР. 7', 0);
  elevator(L, 5, 0, -29.8, 'x', 'Лифт — дирекция', g => { g.teleport('krane'); }, 'ДИРЕКЦИЯ', 0);
  L.updaters.push((dt, t, g) => { const p = g.player.pos; if (!g.flag('intercom') && p.y < 2 && p.z < -11 && p.z > -30 && Math.abs(p.x) < 14) { g.set('intercom'); g.say('ИНТЕРКОМ — А. КРЕЙН', 'Детектив Каррен. Не утруждайтесь взломом — лифт в дирекцию открыт. Поднимайтесь. Я ждала вас дольше, чем вы думаете.'); } });

  // ---- LAB 7
  const LW = mat('labfloor', { color: 0xb8c4d0 });
  L.room(-12, 12, -34, -14, LY, 4, { wall: LW, floor: mat('labfloor', { rep: [6, 5] }), ceil: flat(0x1a2026, 0.95) });
  elevator(L, 0, LY, -14.2, 'x', 'Лифт — вестибюль', g => g.teleport('lobbyL'));
  for (const x of [-7, 0, 7]) L.box(3.5, 0.05, 0.4, x, LY + 3.95, -24, glow(0xe8f6ff, 1.0), false);
  L.light(0xdff0ff, 6, 18, 0, LY + 3.4, -22); L.light(0xff3a3a, 6, 10, 0, LY + 2, -31); L.light(0x3ac0ff, 5, 10, -8, LY + 2, -28);
  L.box(24, 0.06, 0.06, 0, LY + 3.2, -33.8, glow(0xff3030, 1.6), false);
  L.sign('ЛАБ-7 • МНЕМО-АРХИТЕКТУРА', '#7fd4ff', 0.3, 0, LY + 3.4, -14.25, Math.PI);
  L.sign('ИНЦИДЕНТ • ДОСТУП ОГРАНИЧЕН', '#ff5a5a', 0.24, 0, LY + 2.8, -33.78, 0);
  // archive cradle
  L.cyl(1.3, 0.3, 0, LY, -27, mat('labfloor', { color: 0x6a7682 }), true);
  const cr = L.cyl(0.55, 1.7, 0, LY + 0.3, -27, glass(0x7fd4ff, 0.28), false); L.cyl(0.6, 0.12, 0, LY + 2.0, -27, flat(0x1a2028, 0.3, 0.8));
  L.cyl(0.1, 0.5, 0, LY + 0.3, -27, glow(0xff3030, 1.2));
  L.interact(cr, { label: 'Криоячейка архива', range: 3.2, use: g => { g.clue('c_cradle'); g.examine('Пустая криоячейка', 'Маркировка: «<b>ОРИГИНАЛЫ • 31 + 1</b>. Марлоу-стрит. Хранить вечно. Доступ: А. Крейн, Э. Вейн».<br><br>Ячейка вскрыта аккуратно, изнутри системы. Носитель извлечён. Рядом на полу — использованный нейрошунт: кто-то лил данные не на шард, а прямо в живую голову.<br><br>Тридцать один погибший. Кто тогда «плюс один»?'); } });
  // glass partitions + dive chair
  L.box(0.06, 2.6, 7, -5, LY, -29.5, glass(0x9fdfff, 0.16), true); L.box(0.06, 2.6, 7, 5, LY, -29.5, glass(0x9fdfff, 0.16), true);
  L.box(0.8, 0.5, 2.0, -8.5, LY, -29, flat(0xdfe6ee, 0.4, 0.2)); L.box(0.8, 0.9, 0.3, -8.5, LY + 0.5, -29.9, flat(0xdfe6ee, 0.4, 0.2), false);
  const halo = L.add(new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.04, 8, 30), glow(0x3ac0ff, 2)), -8.5, LY + 1.5, -29.6);
  L.interact(halo, { label: 'Кресло коррекции', use: g => g.examine('Кресло мнемо-коррекции', 'Подголовник протёрт до блеска. На подлокотниках — мягкие фиксаторы. Табличка: «Процедура безболезненна. Вы не вспомните, что боялись».') });
  // subject display
  const sd = L.screen(3.2, 1.9, ['М-09  ......  †', 'М-10  ......  †', 'М-11  ......  †', 'М-12  ЖЕНЩ. 24  ВЫЖИЛА', '      → КОРРЕКЦИЯ ПОЛНАЯ', '      → ЛЕГЕНДА: «СЕСТРА»', 'К-01  ОФИЦЕР  ДОБРОВОЛЬНО'], 8.5, LY + 1.9, -33.82, 0, '#bfe9ff', 'МАРЛОУ // СУБЪЕКТЫ');
  L.interact(sd, { label: 'Дисплей: список субъектов', range: 4, use: g => g.story.subjects(g) });
  // lab terminal
  const lt = P.terminal(L, 9.5, LY, -20, -Math.PI / 2, ['АРХИВ ДЕЛ // ЗАЩИТА: ICE-3', 'MARLOW_2085.case', 'VEIL_rollout.plan', '', '> ДОСТУП ЗАКРЫТ'], 'ЛАБ-7//ЯДРО', '#7fd4ff');
  L.interact(lt.children[0], { label: 'Терминал ядра Лаб-7', range: 3, use: g => g.story.labTerminal(g) });
  // coolant cabinet
  const cab = L.box(1.2, 2.0, 0.6, -10.8, LY, -18, mat('labfloor', { color: 0x9aa8b6 })); const cg = L.box(0.9, 1.2, 0.02, -10.8, LY + 0.6, -17.68, glow(0x2a9aff, 0.8), false);
  L.interact(cg, { label: 'Шкаф: нейрохладагент', range: 2.8, use: g => g.story.coolantCabinet(g) });
  for (const [x, z] of [[-3, -19], [3, -19]]) { P.table(L, x, LY, z, 2.2, 0.9, mat('labfloor', { color: 0xc8d2dc })); L.screen(0.7, 0.42, ['сеанс прерван', 'оператор: e.vane', '02:07:44'], x, LY + 1.05, z, Math.PI, '#7fd4ff'); }

  // ---- KRANE's office
  L.room(-9, 9, -30, -12, KY, 4.5, { wall: mat('panel', { color: 0x9aa0aa }), floor: mat('wood', { color: 0x5a5a62, rough: 0.55 }), ceil: flat(0x0c0e12, 0.95), doors: [{ side: 'n', at: 0, w: 15, h: 3.6 }] });
  L.box(15, 3.6, 0.06, 0, KY, -30, glass(0x7fb0d0, 0.12), true);
  for (const x of [-7.5, -2.5, 2.5, 7.5]) L.box(0.08, 3.6, 0.12, x, KY, -30, flat(0x0c0e12, 0.3, 0.9), false);
  elevator(L, 0, KY, -12.2, 'x', 'Лифт — вестибюль', g => g.teleport('lobbyK'));
  L.box(4.2, 0.08, 1.5, 0, KY + 0.78, -24, flat(0x08090c, 0.08, 0.9), false); L.box(0.3, 0.78, 1.2, -1.7, KY, -24, flat(0x08090c, 0.1, 0.9), false); L.box(0.3, 0.78, 1.2, 1.7, KY, -24, flat(0x08090c, 0.1, 0.9), false); L.col(-2.1, 2.1, -24.75, -23.25, KY, KY + 1);
  L.screen(0.9, 0.5, ['VEIL // развёртывание', 'готовность: 94%', 'аудит: через 3 дня', 'оригиналы: УТРАЧЕНЫ'], -1.0, KY + 1.14, -24.1, 0.25, '#bfe9ff', 'A.KRANE');
  L.light(0xdfe8ff, 22, 18, 0, KY + 3.9, -20); L.light(0xffc890, 12, 12, -6, KY + 2.2, -15); L.light(0x5a90ff, 5, 12, 6, KY + 3.6, -27);
  L.box(0.5, 1.4, 0.5, -7, KY, -16, flat(0x08090c, 0.1, 0.9)); const art = L.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.32, 0), new THREE.MeshStandardMaterial({ color: 0xc8a050, roughness: 0.15, metalness: 1 })), -7, KY + 1.8, -16);
  L.updaters.push((dt) => { art.rotation.y += dt * 0.4; art.rotation.x += dt * 0.2; });
  L.interact(art, { label: 'Скульптура', use: g => g.examine('«Забвение», золото', 'Табличка: «Дар благодарных семей Марлоу-стрит». Интересно, помнят ли семьи, за что благодарили.') });
  L.box(2.4, 0.42, 0.9, 6.6, KY, -18, flat(0x14161a, 0.6)); L.box(1.2, 0.03, 0.6, 6.6, KY + 0.5, -20, glass(0xffffff, 0.3), false);
  L.npc('krane', LOOKS.krane, 0, KY, -27, 0);

  walkers(L, [{ z: 4, a: -22, b: 22 }, { z: 22, a: -22, b: 22 }, { x: -20, a: -4, b: 26 }], 6, 55);
  skyTraffic(L, 50, 115, 190, 29);
  L.enableRain(Math.floor(5000 * o.rain));
  L.spawns = { metro: { x: 0, y: 0, z: 29, yaw: 0 }, lobbyL: { x: -5, y: 0, z: -27.6, yaw: Math.PI }, lobbyK: { x: 5, y: 0, z: -27.6, yaw: Math.PI }, lab: { x: 0, y: LY, z: -16.4, yaw: 0 }, krane: { x: 0, y: KY, z: -14.4, yaw: 0 }, menu: { x: 6, y: 0, z: 22, yaw: 0.2 } };
  return L;
}
