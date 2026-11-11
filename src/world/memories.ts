import * as THREE from 'three';
import { Level } from './level';
import { glow, makeHumanoid, makeSign, softSprite, Look } from '../engine/gfx';

const dark = new THREE.MeshBasicMaterial({ color: 0x06121c });
const darker = new THREE.MeshBasicMaterial({ color: 0x030a10 });
function edgeMat(c: number, k = 1.6) { const m = new THREE.LineBasicMaterial({ color: c }); m.color.multiplyScalar(k); return m; }
const E1 = edgeMat(0x7fe0ff), E2 = edgeMat(0xff6ad0, 1.4), E3 = edgeMat(0x4a8aa0, 0.9);

/** solid dark box with glowing edges — the "reconstructed" look of memory space */
function wire(L: Level, w: number, h: number, d: number, x: number, y: number, z: number, collide = true, em = E3, fill: THREE.Material = dark) {
  const me = L.box(w, h, d, x, y, z, fill, collide);
  const ed = new THREE.LineSegments(new THREE.EdgesGeometry(me.geometry), em); me.add(ed); return me;
}
function ghost(L: Level, look: Look, x: number, y: number, z: number, ry: number, pose?: (h: any) => void) {
  const h = makeHumanoid({ ...look, ghost: true }); h.group.position.set(x, y, z); h.group.rotation.y = ry; pose?.(h); L.scene.add(h.group);
  const ph = Math.random() * 9;
  L.updaters.push((dt, t) => { h.group.traverse((n: any) => { if (n.material?.opacity !== undefined && n.material.transparent) n.material.opacity = 0.42 + Math.sin(t * 2.3 + ph) * 0.1 + (Math.sin(t * 37 + ph) > 0.96 ? -0.3 : 0); }); });
  return h;
}
function dust(L: Level, n: number, box: [number, number, number, number, number, number], color = 0x9fe8ff) {
  const pos = new Float32Array(n * 3); const sp: number[] = [];
  for (let i = 0; i < n; i++) { pos[i * 3] = box[0] + Math.random() * (box[1] - box[0]); pos[i * 3 + 1] = box[2] + Math.random() * (box[3] - box[2]); pos[i * 3 + 2] = box[4] + Math.random() * (box[5] - box[4]); sp.push(0.05 + Math.random() * 0.25); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.09, map: softSprite(), color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.8 }));
  pts.frustumCulled = false; L.scene.add(pts);
  L.updaters.push((dt, t) => { for (let i = 0; i < n; i++) { pos[i * 3 + 1] += sp[i] * dt; if (pos[i * 3 + 1] > box[3]) pos[i * 3 + 1] = box[2]; pos[i * 3] += Math.sin(t + i) * dt * 0.05; } g.attributes.position.needsUpdate = true; });
}
/** an examinable memory detail: pulsing marker + interaction */
function detail(L: Level, key: string, label: string, x: number, y: number, z: number, title: string, text: string, size = 0.5) {
  const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), glow(0xffffff, 1.8)); m.position.set(x, y, z); L.scene.add(m);
  const hit = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshBasicMaterial({ visible: false })); m.add(hit);
  L.updaters.push((dt, t, g) => { m.rotation.y = t * 1.5; m.position.y = y + Math.sin(t * 2 + x) * 0.04; const done = g.memFound(key); m.scale.setScalar(done ? 0.55 : 1 + Math.sin(t * 4 + z) * 0.15); m.material = done ? glow(0xff6ad0, 1.2) : glow(0xffffff, 1.8); });
  L.interact(hit, { label: 'Изучить: ' + label, range: 3.6, use: g => g.memMark(key, title, text) });
}
function exitGate(L: Level, x: number, y: number, z: number, ry: number) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; L.scene.add(g);
  const fr = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.04, 8, 40), glow(0xffffff, 2.2)); fr.position.y = 1.3; fr.scale.y = 1.25; g.add(fr);
  const pl = new THREE.Mesh(new THREE.CircleGeometry(0.98, 30), new THREE.MeshBasicMaterial({ color: 0xbfefff, transparent: true, opacity: 0.25, side: THREE.DoubleSide })); pl.position.y = 1.3; pl.scale.y = 1.25; g.add(pl);
  const s = makeSign('ВСПЛЫТЬ', '#ffffff', 0.26); s.position.y = 2.85; g.add(s);
  L.updaters.push((dt, t) => { (pl.material as any).opacity = 0.2 + Math.sin(t * 3) * 0.08; });
  L.interact(pl, { label: 'Завершить погружение', range: 3.4, use: gm => gm.memExit() });
}
function base(id: string, name: string, sub: string) {
  const L = new Level(id, name, sub, 0x02070d, 0.05); L.isMemory = true; L.amb.hum = 0.2;
  L.scene.add(new THREE.AmbientLight(0x88bbdd, 1.2));
  return L;
}

/* ---------- Agnes: the corridor (FORGED) ---------- */
export function buildMemAgnes(): Level {
  const L = base('mem_agnes', 'ПОГРУЖЕНИЕ // А. ВОЛЬФ', 'Запись: 13.11.2091 — коридор, этаж 7');
  wire(L, 30, 0.1, 4, 0, -0.1, 0, false, E3, darker);
  wire(L, 30, 3, 0.2, 0, 0, -2.1, true); wire(L, 30, 3, 0.2, 0, 0, 2.1, true); wire(L, 0.2, 3, 4, -14.6, 0, 0, true); wire(L, 30, 0.1, 4, 0, 3, 0, false, E3, darker);
  // east end "window"
  wire(L, 0.2, 3, 4, 14.6, 0, 0, true, E1, new THREE.MeshBasicMaterial({ color: 0xcfe8f0 }));
  for (const x of [-6, 6]) { wire(L, 1.5, 2.5, 0.12, x, 0, -1.96, false, E1); }
  for (let x = -12; x <= 12; x += 4) wire(L, 0.9, 0.05, 0.25, x, 2.9, 0, false, E1, glow(0x9fe8ff, 0.6));
  L.sign('7A', '#bfefff', 0.22, -6, 2.72, -1.92, 0); L.sign('B7', '#bfefff', 0.22, 6, 2.72, -1.92, 0);
  // clock
  const ck = new THREE.Mesh(new THREE.CircleGeometry(0.25, 24), glow(0xbfefff, 0.8)); ck.position.set(-14.45, 2.2, 0); ck.rotation.y = Math.PI / 2; L.scene.add(ck);
  L.sign('23:40', '#ffffff', 0.2, -14.44, 1.75, 0, Math.PI / 2);
  // frozen figures
  ghost(L, { coat: 0x7fd4ff, coatLen: 0.5, hairStyle: 'short' }, 3.2, 0, -0.4, -Math.PI / 2, h => { h.legL.rotation.x = 0.4; h.legR.rotation.x = -0.4; });
  ghost(L, { coat: 0xff3a5a, coatLen: 1, hairStyle: 'bald' }, 3.9, 0, 0.35, -Math.PI / 2, h => { h.legL.rotation.x = -0.4; h.legR.rotation.x = 0.4; h.armL.rotation.z = -0.5; });
  // only Elias has a shadow
  const sh = new THREE.Mesh(new THREE.CircleGeometry(0.5, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.8 })); sh.rotation.x = -Math.PI / 2; sh.position.set(3.2, 0.012, -0.4); sh.scale.set(2.4, 1, 1); L.scene.add(sh);
  dust(L, 220, [-14, 14, 0, 3, -2, 2]);
  detail(L, 'a_window', 'окно в торце', 13.9, 1.5, 0.9, 'Окно', 'За стеклом — ровный белый свет, сухо, как в полдень. Запись помечена 23:40. В ту ночь над Тессерой стоял ливень: я сам промок, пока шёл сюда.');
  detail(L, 'a_plate', 'табличка на двери', 6, 2.3, -1.6, 'Табличка квартиры', 'На двери Элиаса — «B7». Должно быть «7B». Агнес живёт напротив этой двери двадцать лет. Её собственная память так не ошибается. Чужой шаблон, собранный в спешке, — запросто.');
  detail(L, 'a_face', 'женщина в красном', 4.1, 1.75, 0.75, 'Женщина в красном', 'У неё нет лица. Не скрыто капюшоном, не смазано движением — его просто нет, гладкая заготовка. Зато плащ проработан до строчки на поясе: красный, приметный. Кто-то хотел, чтобы запомнили именно плащ.');
  detail(L, 'a_shadow', 'пол под фигурами', 3.5, 0.3, 0.9, 'Тени', 'Элиас отбрасывает тень на ковёр. Женщина рядом с ним — нет. Свет один и тот же.');
  detail(L, 'a_hands', 'руки Элиаса', 2.75, 1.05, -0.75, 'Элиас', 'Идёт спокойно, руки пустые. Ни сумки, ни кейса. Лицо расслабленное — как на пропуске. Возможно, лицо и взято с пропуска.');
  detail(L, 'a_stain', 'пятно на ковре', -3, 0.25, 0.6, 'Ковёр', 'Пятно от пролитого чая — точно такое же есть в настоящем коридоре. Основа записи подлинная: это действительно память Агнес, её коридор, её угол зрения.');
  detail(L, 'a_lamp', 'мерцающая лампа', -8, 2.6, 0.4, 'Лампа', 'Мерцает в том же сбивчивом ритме, что и наяву. Такие мелочи никто не подделывает — их просто не замечают. А вот то, что нарисовано поверх них, стоит перепроверить.');
  exitGate(L, -11.5, 0, 0, Math.PI / 2);
  L.spawns = { start: { x: -9, y: 0, z: 0, yaw: -Math.PI / 2 } };
  return L;
}

/* ---------- Guard's memory: Lab 7 (AUTHENTIC) ---------- */
export function buildMemLab(): Level {
  const L = base('mem_lab7', 'ПОГРУЖЕНИЕ // НЕИЗВЕСТНЫЙ', 'Запись: 14.11.2091 02:07 — HYPERION, Лаб-7');
  wire(L, 24, 0.1, 20, 0, -0.1, 0, false, E3, darker); wire(L, 24, 0.1, 20, 0, 4, 0, false, E3, darker);
  wire(L, 24, 4, 0.2, 0, 0, -10.1); wire(L, 24, 4, 0.2, 0, 0, 10.1); wire(L, 0.2, 4, 20, -12.1, 0, 0); wire(L, 0.2, 4, 20, 12.1, 0, 0);
  // cradle
  L.cyl(1.3, 0.3, 0, 0, -3, dark, true);
  const core = L.cyl(0.5, 1.7, 0, 0.3, -3, glow(0x7fe0ff, 0.9)); L.updaters.push((dt, t) => { core.scale.x = core.scale.z = 0.6 + Math.abs(Math.sin(t * 2)) * 0.4; });
  L.sign('ОРИГИНАЛЫ 31+1\nВЫГРУЗКА 97%', '#ffffff', 0.5, 0, 2.7, -3, 0); L.sign('ОРИГИНАЛЫ 31+1\nВЫГРУЗКА 97%', '#ffffff', 0.5, 0, 2.7, -3.02, Math.PI);
  // Elias with shunt cable
  ghost(L, { coat: 0x7fd4ff, coatLen: 0.9, hairStyle: 'short' }, 1.6, 0, -2.4, -1.9, h => { h.head.rotation.x = 0.3; h.armR.rotation.x = -1.2; });
  const pts = [new THREE.Vector3(0.5, 1.2, -3), new THREE.Vector3(1.0, 0.6, -2.7), new THREE.Vector3(1.55, 1.62, -2.3)];
  const cable = new THREE.Line(new THREE.BufferGeometry().setFromPoints(new THREE.CatmullRomCurve3(pts).getPoints(20)), E2); L.scene.add(cable);
  // Orlova at the elevator
  wire(L, 1.6, 2.5, 0.2, 0, 0, 9.9, false, E1);
  ghost(L, { coat: 0xa0b0ff, coatLen: 0.9, hairStyle: 'bun' }, 1.3, 0, 8.9, Math.PI + 0.5, h => { h.armL.rotation.x = -1.4; h.armR.rotation.x = -0.7; h.head.rotation.x = 0.35; });
  wire(L, 0.06, 2.6, 7, -5, 0, -5.5, true, E1, new THREE.MeshBasicMaterial({ color: 0x0a2030, transparent: true, opacity: 0.5 }));
  wire(L, 0.06, 2.6, 7, 5, 0, -5.5, true, E1, new THREE.MeshBasicMaterial({ color: 0x0a2030, transparent: true, opacity: 0.5 }));
  wire(L, 3.2, 1.9, 0.05, 8.5, 0.95, -9.95, false, E1, glow(0x4a8aa0, 0.5));
  wire(L, 0.9, 1.6, 0.4, 9.5, 0, 4, true, E1); wire(L, 2.2, 0.8, 0.9, -3, 0, 5, true); wire(L, 2.2, 0.8, 0.9, 3, 0, 5, true);
  L.sign('02:07', '#ffffff', 0.3, -11.95, 3.0, 0, Math.PI / 2);
  // skylight rain streaks
  for (let i = 0; i < 26; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.5, 0.02), glow(0x9fe8ff, 0.8)); s.position.set(-8 + Math.random() * 16, 3.6, -8 + Math.random() * 16); L.scene.add(s); }
  dust(L, 300, [-12, 12, 0, 4, -10, 10]);
  detail(L, 'l_cradle', 'криоячейка', 0, 1.3, -1.9, 'Ячейка архива', '«ОРИГИНАЛЫ 31+1 — выгрузка 97%». Он не копирует архив. Он его забирает: после выгрузки ячейка останется пустой.');
  detail(L, 'l_elias', 'человек у ячейки', 1.9, 1.75, -1.9, 'Элиас Вейн', 'Шунт вставлен в затылочный порт. Он льёт тридцать два чужих оригинала прямо в собственную кору — ни один шард столько не вместит, а живой мозг вместит. Ненадолго. Без охлаждения — несколько суток.');
  detail(L, 'l_orlova', 'женщина у лифта', 1.0, 1.75, 8.3, 'Женщина у лифта', 'Инспектор Лена Орлова. В штатском, без жетона. Одной рукой держит створку лифта, другой — смотрит на часы. Она его не задерживает. Она стоит на стрёме.');
  detail(L, 'l_clock', 'часы и потолок', -11.3, 2.7, 0.8, 'Время и погода', '02:07. По стеклянному фонарю ползут дождевые дорожки — ливень в ту ночь действительно шёл. Время сходится с остальной картиной, стыков монтажа не вижу.');
  detail(L, 'l_edge', 'рябь по краям', -9, 1.5, 7.5, 'Рябь изображения', 'Стены на периферии крошатся в пиксели и собираются снова. Так выглядит сжатие с потерями: память снимали с человека второпях, на дешёвый шард. Монтаж обычно выглядит наоборот — слишком чисто.');
  detail(L, 'l_self', 'отражение в стекле', -4.6, 1.5, -4, 'Отражение наблюдателя', 'В перегородке отражается тот, чьими глазами я смотрю. Форма охраны HYPERION. Нашивка: «Б. ХЕЙЛ». Охранник с проходной видел всё — и промолчал. А потом продал память на рынке.');
  detail(L, 'l_list', 'настенный дисплей', 8.5, 1.9, -9.4, 'Дисплей', 'Список субъектов Марлоу. В этой записи строка М-12 открыта: фото молодой женщины. Тёмные волосы, упрямый подбородок. Я видел это лицо сегодня — у себя в офисе.');
  exitGate(L, 0, 0, 7.4, 0);
  L.spawns = { start: { x: -2, y: 0, z: 6, yaw: 0 } };
  return L;
}

/* ---------- Noah's own original: Marlow Street ---------- */
export function buildMemNoah(): Level {
  const L = base('mem_noah', 'ПОГРУЖЕНИЕ // Н. КАРРЕН — ОРИГИНАЛ', 'Запись: 02.03.2085 — клиника «Марлоу»');
  L.fog.density = 0.07;
  const F = edgeMat(0xff7a4a, 1.6);
  wire(L, 8, 0.1, 44, 0, -0.1, -18, false, E3, darker); wire(L, 8, 0.1, 44, 0, 3.4, -18, false, F, darker);
  wire(L, 0.2, 3.4, 44, -4.1, 0, -18, true, F); wire(L, 0.2, 3.4, 44, 4.1, 0, -18, true, F); wire(L, 8, 3.4, 0.2, 0, 0, 4.1, true); wire(L, 8, 3.4, 0.2, 0, 0, -40.1, true, F);
  // correction chairs with bodies
  for (let i = 0; i < 8; i++) { const z = -3 - i * 4.2, s = i % 2 ? 1 : -1; wire(L, 0.8, 0.5, 1.8, s * 3.1, 0, z, true, F); if (i < 6) ghost(L, { coat: 0xff7a4a, coatLen: 0.2, hairStyle: 'bald' }, s * 3.1, 0.25, z + 0.3, 0, h => { h.group.rotation.x = -1.2; }); }
  // flames
  for (let i = 0; i < 14; i++) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.3 + Math.random() * 0.3, 1 + Math.random() * 1.6, 5), glow(0xff8a4a, 1.6)); f.position.set((Math.random() < 0.5 ? -1 : 1) * (2.6 + Math.random()), 0.6, -2 - Math.random() * 36); L.scene.add(f); const ph = Math.random() * 9; L.updaters.push((dt, t) => { f.scale.y = 1 + Math.sin(t * 9 + ph) * 0.35; f.rotation.y = t + ph; }); }
  dust(L, 400, [-4, 4, 0, 3.4, -40, 4], 0xffb080);
  // tableau figures
  ghost(L, { coat: 0xbfefff, coatLen: 0.9, hairStyle: 'short' }, 0.4, 0, -9, 0, h => { h.armL.rotation.x = -1.3; h.armR.rotation.x = -1.3; });
  ghost(L, { coat: 0xff6ad0, coatLen: 0.2, hairStyle: 'long', height: 0.9 }, 0.4, 0.95, -8.55, Math.PI / 2, h => { h.group.rotation.z = Math.PI / 2; });
  ghost(L, { coat: 0xffffff, coatLen: 0.9, hairStyle: 'bun' }, -1.2, 0, -21, 0.4, h => { h.armR.rotation.x = -1.1; });
  wire(L, 0.3, 0.4, 0.02, -0.9, 1.1, -20.6, false, E1, glow(0xffffff, 0.8));
  wire(L, 0.9, 0.5, 2.0, 0, 0, -34, true, E1); ghost(L, { coat: 0xbfefff, coatLen: 0.9, hairStyle: 'short' }, 0, 0.3, -33.6, 0, h => { h.group.rotation.x = -1.1; });
  ghost(L, { coat: 0x7fd4ff, coatLen: 0.9, hairStyle: 'short' }, 1.1, 0, -34.6, -0.9, h => { h.armL.rotation.x = -1.5; h.armR.rotation.x = -1.5; });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.03, 8, 30), glow(0xffffff, 2)); halo.position.set(0, 1.25, -34.9); L.scene.add(halo); L.updaters.push((dt, t) => { halo.rotation.z = t * 2; });
  detail(L, 'n_fire', 'ряды кресел', 1.2, 1.4, -3.5, 'Фрагмент: зал', 'Клиника «Марлоу». Я вхожу в дым с фонарём. Кресла коррекции — в два ряда, и в каждом человек. Пристёгнутые. Тридцать один.<br><br>Они сгорели не в пожаре. У них спеклась кора — массовая процедура, сбой на пике нагрузки. Огонь пришёл позже. Чтобы было что написать в отчёте.');
  detail(L, 'n_girl', 'человек с ношей', 1.3, 1.5, -8.6, 'Фрагмент: девушка', 'Это я. Шесть лет назад, ещё с жетоном. Я несу на руках девушку — живую, единственную живую. На браслете: «М-12».<br><br>Она цепляется за мой воротник и шепчет: «Я всё видела. Я всем расскажу». У неё упрямый подбородок. У Миры такой же.<br><br>У Миры — этот самый.');
  detail(L, 'n_deal', 'женщина с планшетом', -0.3, 1.5, -20.3, 'Фрагмент: сделка', 'Августа Крейн. Моложе, без седины, в чужом пальто поверх халата. Протягивает планшет.<br><br>«Она не доживёт до суда, детектив, и вы это знаете. Совет не оставляет свидетелей. Либо она забудет — либо её не станет. Подпишите, что это был пожар, и я дам ей новую жизнь. А вам… вы ведь тоже не хотите это помнить, правда?»<br><br>Внизу договора — сумма. И пустая строка для подписи.');
  detail(L, 'n_chair', 'кресло в конце коридора', 0.8, 1.6, -33.2, 'Фрагмент: кресло', 'В кресле — я. Надо мной — молодой инженер, руки трясутся, на бейдже «Э. ВЕЙН, стажёр».<br><br>Мой голос, ровный, чужой: «Сотри. Всё. И ей тоже. И дай ей кого-нибудь… кого можно любить. Чтобы не была одна».<br><br>Он кивает. Он дал ей брата. Он шесть лет был ей братом — потому что я попросил.');
  exitGate(L, 0, 0, 2.6, 0);
  L.spawns = { start: { x: 0, y: 0, z: 0.5, yaw: 0 } };
  return L;
}
