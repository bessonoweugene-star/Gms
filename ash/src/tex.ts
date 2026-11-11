import * as THREE from 'three';
import { rng } from '../../src/engine/gfx';

/* Procedural PBR surfaces: albedo + normal map derived from a height canvas. */
type Ctx = CanvasRenderingContext2D;
const S = 512;
function mk(w = S, h = S) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')!] as const; }
function blobs(g: Ctx, r: () => number, n: number, minR: number, maxR: number, col: (a: number) => string, w = S, h = S) {
  for (let i = 0; i < n; i++) { const x = r() * w, y = r() * h, rad = minR + r() * (maxR - minR); const gr = g.createRadialGradient(x, y, 0, x, y, rad); const a = r(); gr.addColorStop(0, col(a)); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2); }
}
function grain(g: Ctx, r: () => number, amt: number, w = S, h = S) {
  const d = g.getImageData(0, 0, w, h); for (let i = 0; i < d.data.length; i += 4) { const n = (r() - 0.5) * amt; d.data[i] += n; d.data[i + 1] += n; d.data[i + 2] += n; } g.putImageData(d, 0, 0);
}
function normalFrom(hc: HTMLCanvasElement, strength: number) {
  const w = hc.width, h = hc.height, src = hc.getContext('2d')!.getImageData(0, 0, w, h).data; const [c, g] = mk(w, h); const out = g.createImageData(w, h);
  const H = (x: number, y: number) => src[(((y + h) % h) * w + ((x + w) % w)) * 4];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) / 255 * strength, dy = (H(x, y + 1) - H(x, y - 1)) / 255 * strength;
    const l = Math.hypot(dx, dy, 1), i = (y * w + x) * 4;
    out.data[i] = (-dx / l * 0.5 + 0.5) * 255; out.data[i + 1] = (dy / l * 0.5 + 0.5) * 255; out.data[i + 2] = (1 / l * 0.5 + 0.5) * 255; out.data[i + 3] = 255;
  }
  g.putImageData(out, 0, 0); return c;
}

export type Surf = 'tubing' | 'granite' | 'marble' | 'plaster' | 'concrete' | 'brick' | 'rust' | 'cloth' | 'ash' | 'wood' | 'steel' | 'asphalt' | 'sand';
const DEF: Record<Surf, { rough: number; metal: number; bump: number }> = {
  tubing: { rough: 0.72, metal: 0.45, bump: 5 }, granite: { rough: 0.32, metal: 0.05, bump: 1.6 }, marble: { rough: 0.38, metal: 0, bump: 1.2 },
  plaster: { rough: 0.92, metal: 0, bump: 2.2 }, concrete: { rough: 0.9, metal: 0, bump: 3 }, brick: { rough: 0.88, metal: 0, bump: 5 },
  rust: { rough: 0.8, metal: 0.55, bump: 3 }, cloth: { rough: 0.96, metal: 0, bump: 2.5 }, ash: { rough: 1, metal: 0, bump: 3.5 },
  wood: { rough: 0.8, metal: 0, bump: 3 }, steel: { rough: 0.45, metal: 0.85, bump: 2 }, asphalt: { rough: 0.95, metal: 0, bump: 3 }, sand: { rough: 0.98, metal: 0, bump: 4 },
};
function draw(kind: Surf): [HTMLCanvasElement, HTMLCanvasElement] {
  const [a, g] = mk(), [hc, h] = mk(); const r = rng(kind.length * 131 + kind.charCodeAt(1) * 17);
  h.fillStyle = '#808080'; h.fillRect(0, 0, S, S);
  const soft = (n: number, lo: number, hi: number) => { blobs(h, r, n, lo, hi, v => `rgba(${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},.12)`); };
  switch (kind) {
    case 'tubing': {
      g.fillStyle = '#4a4640'; g.fillRect(0, 0, S, S); blobs(g, r, 160, 10, 70, v => `rgba(${v > 0.5 ? '120,74,40' : '20,20,22'},.22)`);
      soft(60, 20, 80);
      for (let x = 0; x < S; x += 128) { h.fillStyle = '#d8d8d8'; h.fillRect(x + 4, 0, 18, S); h.fillRect(x + 106, 0, 18, S); h.fillStyle = '#101010'; h.fillRect(x - 3, 0, 6, S); g.fillStyle = 'rgba(0,0,0,.55)'; g.fillRect(x - 3, 0, 6, S); g.fillStyle = 'rgba(160,150,140,.12)'; g.fillRect(x + 4, 0, 18, S); g.fillRect(x + 106, 0, 18, S); }
      for (let y = 0; y < S; y += 256) { h.fillStyle = '#d0d0d0'; h.fillRect(0, y + 6, S, 16); h.fillRect(0, y + 234, S, 16); h.fillStyle = '#101010'; h.fillRect(0, y - 3, S, 6); g.fillStyle = 'rgba(0,0,0,.5)'; g.fillRect(0, y - 3, S, 6); }
      for (let x = 0; x < S; x += 128) for (let y = 20; y < S; y += 42) for (const ox of [13, 115]) { h.fillStyle = '#ffffff'; h.beginPath(); h.arc(x + ox, y, 5, 0, 7); h.fill(); g.fillStyle = 'rgba(30,24,20,.8)'; g.beginPath(); g.arc(x + ox, y, 5, 0, 7); g.fill(); }
      for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(110,60,28,${r() * 0.3})`; g.fillRect(r() * S, r() * S, 2 + r() * 5, 30 + r() * 140); }
      break; }
    case 'granite': {
      for (let ty = 0; ty < 2; ty++) for (let tx = 0; tx < 2; tx++) { const dark = (tx + ty) % 2; g.fillStyle = dark ? '#3a2826' : '#6e6a66'; g.fillRect(tx * 256, ty * 256, 256, 256); }
      for (let i = 0; i < 9000; i++) { const v = r(); g.fillStyle = `rgba(${v > 0.5 ? '200,190,180' : '10,8,8'},${0.08 + r() * 0.2})`; g.fillRect(r() * S, r() * S, 1 + r() * 2.5, 1 + r() * 2.5); }
      soft(30, 30, 90); h.fillStyle = '#202020'; for (let i = 0; i <= 2; i++) { h.fillRect(i * 256 - 2, 0, 4, S); h.fillRect(0, i * 256 - 2, S, 4); g.fillStyle = 'rgba(0,0,0,.6)'; g.fillRect(i * 256 - 2, 0, 4, S); g.fillRect(0, i * 256 - 2, S, 4); }
      blobs(g, r, 30, 20, 90, () => 'rgba(0,0,0,.18)'); break; }
    case 'marble': {
      g.fillStyle = '#b8ae9e'; g.fillRect(0, 0, S, S); blobs(g, r, 80, 30, 120, v => `rgba(${v > 0.5 ? '230,222,208' : '120,108,96'},.2)`);
      g.lineCap = 'round'; for (let i = 0; i < 26; i++) { g.strokeStyle = `rgba(70,60,54,${0.1 + r() * 0.3})`; g.lineWidth = 0.6 + r() * 2.2; g.beginPath(); let x = r() * S, y = r() * S; g.moveTo(x, y); for (let k = 0; k < 9; k++) { x += (r() - 0.3) * 90; y += (r() - 0.5) * 70; g.lineTo(x, y); } g.stroke(); }
      h.fillStyle = '#303030'; for (let i = 0; i <= 2; i++) { h.fillRect(i * 256 - 2, 0, 3, S); g.fillStyle = 'rgba(0,0,0,.45)'; g.fillRect(i * 256 - 2, 0, 3, S); } h.fillRect(0, S - 3, S, 3); g.fillRect(0, S - 3, S, 3);
      blobs(g, r, 14, 30, 110, () => 'rgba(20,14,8,.22)'); break; }
    case 'plaster': {
      g.fillStyle = '#8e887c'; g.fillRect(0, 0, S, S); blobs(g, r, 120, 20, 110, v => `rgba(${v > 0.5 ? '170,164,150' : '40,34,26'},.2)`); soft(120, 8, 50);
      for (let i = 0; i < 9; i++) { g.strokeStyle = 'rgba(20,16,12,.55)'; h.strokeStyle = '#000'; g.lineWidth = h.lineWidth = 1 + r(); let x = r() * S, y = r() * S; g.beginPath(); h.beginPath(); g.moveTo(x, y); h.moveTo(x, y); for (let k = 0; k < 7; k++) { x += (r() - 0.5) * 60; y += r() * 50; g.lineTo(x, y); h.lineTo(x, y); } g.stroke(); h.stroke(); }
      for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(30,22,14,${r() * 0.25})`; g.fillRect(r() * S, 0, 4 + r() * 16, S * r()); } break; }
    case 'concrete': {
      g.fillStyle = '#5c5a56'; g.fillRect(0, 0, S, S); blobs(g, r, 140, 10, 90, v => `rgba(${v > 0.5 ? '130,128,122' : '20,20,20'},.2)`); soft(200, 4, 40);
      h.fillStyle = '#282828'; h.fillRect(0, 0, S, 4); h.fillRect(0, 0, 4, S); g.fillStyle = 'rgba(0,0,0,.4)'; g.fillRect(0, 0, S, 4); g.fillRect(0, 0, 4, S);
      for (let i = 0; i < 60; i++) { h.fillStyle = '#404040'; h.beginPath(); h.arc(r() * S, r() * S, 1 + r() * 3, 0, 7); h.fill(); } break; }
    case 'brick': {
      g.fillStyle = '#2a2420'; g.fillRect(0, 0, S, S); h.fillStyle = '#303030'; h.fillRect(0, 0, S, S);
      for (let row = 0; row < 16; row++) for (let col = -1; col < 8; col++) { const x = col * 64 + (row % 2) * 32 + 3, y = row * 32 + 3; const v = r(); g.fillStyle = `rgb(${96 + v * 50},${50 + v * 26},${38 + v * 16})`; g.fillRect(x, y, 58, 26); h.fillStyle = `rgb(${190 + v * 50},${190 + v * 50},${190 + v * 50})`; h.fillRect(x, y, 58, 26); }
      blobs(g, r, 60, 20, 90, () => 'rgba(0,0,0,.25)'); break; }
    case 'rust': case 'steel': {
      g.fillStyle = kind === 'rust' ? '#5a4030' : '#565a60'; g.fillRect(0, 0, S, S);
      blobs(g, r, 150, 8, 70, v => kind === 'rust' ? `rgba(${v > 0.5 ? '150,80,36' : '30,22,18'},.25)` : `rgba(${v > 0.5 ? '140,146,154' : '20,22,26'},.16)`); soft(150, 5, 40);
      for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.2})`; g.fillRect(r() * S, r() * S, 1 + r() * 3, 20 + r() * 100); }
      h.strokeStyle = '#303030'; h.lineWidth = 3; h.strokeRect(2, 2, S - 4, S - 4); for (const [x, y] of [[20, 20], [S - 20, 20], [20, S - 20], [S - 20, S - 20]]) { h.fillStyle = '#fff'; h.beginPath(); h.arc(x, y, 6, 0, 7); h.fill(); } break; }
    case 'cloth': {
      g.fillStyle = '#7a7668'; g.fillRect(0, 0, S, S); blobs(g, r, 60, 30, 120, v => `rgba(${v > 0.5 ? '150,146,130' : '30,28,22'},.18)`);
      for (let y = 0; y < S; y += 4) { h.fillStyle = y % 8 ? '#909090' : '#707070'; h.fillRect(0, y, S, 2); } for (let x = 0; x < S; x += 4) { h.fillStyle = 'rgba(255,255,255,.12)'; h.fillRect(x, 0, 2, S); }
      blobs(h, r, 30, 40, 140, v => `rgba(${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},.2)`); break; }
    case 'ash': case 'sand': {
      g.fillStyle = kind === 'ash' ? '#9a968e' : '#6e6654'; g.fillRect(0, 0, S, S); blobs(g, r, 200, 10, 100, v => `rgba(${v > 0.5 ? '200,196,188' : '70,66,60'},.2)`);
      blobs(h, r, 260, 10, 90, v => `rgba(${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},${v > 0.5 ? 255 : 0},.22)`); break; }
    case 'asphalt': {
      g.fillStyle = '#4a4946'; g.fillRect(0, 0, S, S); blobs(g, r, 160, 10, 90, v => `rgba(${v > 0.5 ? '150,146,138' : '20,20,20'},.22)`); soft(300, 3, 24);
      for (let i = 0; i < 8; i++) { g.strokeStyle = 'rgba(10,10,10,.6)'; h.strokeStyle = '#000'; g.lineWidth = h.lineWidth = 1.5; let x = r() * S, y = r() * S; g.beginPath(); h.beginPath(); g.moveTo(x, y); h.moveTo(x, y); for (let k = 0; k < 8; k++) { x += (r() - 0.5) * 90; y += (r() - 0.5) * 90; g.lineTo(x, y); h.lineTo(x, y); } g.stroke(); h.stroke(); } break; }
    case 'wood': {
      g.fillStyle = '#4e3a28'; g.fillRect(0, 0, S, S); for (let y = 0; y < S; y += 2) { g.fillStyle = `rgba(0,0,0,${r() * 0.22})`; g.fillRect(0, y, S, 1 + r() * 2); h.fillStyle = `rgba(0,0,0,${r() * 0.25})`; h.fillRect(0, y, S, 1); }
      for (let i = 0; i <= 4; i++) { h.fillStyle = '#101010'; h.fillRect(0, i * 128 - 2, S, 4); g.fillStyle = 'rgba(0,0,0,.6)'; g.fillRect(0, i * 128 - 2, S, 4); } break; }
  }
  grain(g, r, 16); return [a, hc];
}
const texCache = new Map<string, [THREE.Texture, THREE.Texture]>();
const matCache = new Map<string, THREE.MeshStandardMaterial>();
function tex(c: HTMLCanvasElement, srgb: boolean) { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; }
export function pbr(kind: Surf, rx = 1, ry = 1, color = 0xffffff, o: { rough?: number; metal?: number; side?: THREE.Side } = {}) {
  const key = `${kind}:${rx}:${ry}:${color}:${o.rough}:${o.metal}:${o.side}`; const hit = matCache.get(key); if (hit) return hit;
  if (!texCache.has(kind)) { const [a, h] = draw(kind); texCache.set(kind, [tex(a, true), tex(normalFrom(h, DEF[kind].bump), false)]); }
  const [m0, n0] = texCache.get(kind)!; const map = m0.clone(), nm = n0.clone(); map.repeat.set(rx, ry); nm.repeat.set(rx, ry); map.needsUpdate = nm.needsUpdate = true;
  const m = new THREE.MeshStandardMaterial({ map, normalMap: nm, color, roughness: o.rough ?? DEF[kind].rough, metalness: o.metal ?? DEF[kind].metal, side: o.side ?? THREE.FrontSide });
  matCache.set(key, m); return m;
}

/* ---------- stained glass (the pride of the station) ---------- */
export function stainedGlass(seed: number) {
  const [c, g] = mk(256, 512); const r = rng(seed * 97 + 5);
  g.fillStyle = '#05060a'; g.fillRect(0, 0, 256, 512);
  const pal = [['#ff5a3a', '#ffb040', '#3ac8ff', '#2a5aff'], ['#5affa0', '#ffe070', '#ff4f90', '#7a3aff'], ['#3ac8ff', '#fff0b0', '#ff7a3a', '#1a9a6a']][seed % 3];
  const cell = (x: number, y: number, w: number, h: number, col: string) => { for (const mx of [1, -1]) { g.save(); g.translate(128, 0); g.scale(mx, 1); const gr = g.createLinearGradient(x, y, x + w, y + h); gr.addColorStop(0, col); gr.addColorStop(1, '#ffffff'); g.fillStyle = gr; g.globalAlpha = 0.55 + r() * 0.45; g.beginPath(); g.moveTo(x + w / 2, y); g.lineTo(x + w, y + h / 2); g.lineTo(x + w / 2, y + h); g.lineTo(x, y + h / 2); g.closePath(); g.fill(); g.restore(); } };
  for (let y = 0; y < 16; y++) for (let x = 0; x < 4; x++) cell(x * 30 + 4, y * 32 + (x % 2) * 16, 28, 30, pal[(x + y + ((r() * 2) | 0)) % 4]);
  // medallion
  g.globalAlpha = 1; g.fillStyle = '#05060a'; g.beginPath(); g.ellipse(128, 256, 92, 122, 0, 0, 7); g.fill();
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.fillStyle = pal[i % 4]; g.globalAlpha = 0.9; g.beginPath(); g.ellipse(128 + Math.cos(a) * 46, 256 + Math.sin(a) * 66, 20, 34, a + Math.PI / 2, 0, 7); g.fill(); }
  g.globalAlpha = 1; g.fillStyle = '#fff6d0'; g.beginPath(); g.arc(128, 256, 22, 0, 7); g.fill();
  g.strokeStyle = '#05060a'; g.lineWidth = 3; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.beginPath(); g.moveTo(128, 256); g.lineTo(128 + Math.cos(a) * 92, 256 + Math.sin(a) * 122); g.stroke(); }
  g.lineWidth = 8; g.strokeStyle = '#3a2a12'; g.strokeRect(4, 4, 248, 504);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function mosaic() {
  const [c, g] = mk(512, 512); const r = rng(77);
  g.fillStyle = '#5a4416'; g.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) { const d = Math.hypot(x - 32, y - 26); let col = d < 17 ? [70, 130, 190] : d < 19 ? [230, 210, 140] : [150 + r() * 60, 112 + r() * 44, 30 + r() * 20]; if (Math.abs(x - 32) < 5 + (y - 24) * 0.42 && y > 22 && y < 56) col = [170, 60, 44]; if (Math.hypot(x - 32, y - 19) < 4.2) col = [226, 190, 160]; if (Math.hypot(x - 39, y - 31) < 2.6) col = [226, 190, 160]; if ((Math.hypot(x - 22, y - 14) < 2 || Math.hypot(x - 44, y - 12) < 2 || Math.hypot(x - 18, y - 24) < 2)) col = [240, 240, 236]; const v = 0.75 + r() * 0.3; g.fillStyle = `rgb(${col[0] * v | 0},${col[1] * v | 0},${col[2] * v | 0})`; g.fillRect(x * 8 + 0.5, y * 8 + 0.5, 7, 7); }
  g.fillStyle = '#f0deb0'; g.font = '400 30px "Russo One"'; g.textAlign = 'center'; g.fillText('МИР ВО ВСЁМ МИРЕ', 256, 492);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
/** painted / stencilled sign on a surface (not neon) */
export function paintSign(text: string, fg = '#d8d2c0', bg: string | null = null, font = '"Russo One"', px = 72) {
  const lines = text.split('\n'); const [m, gm] = mk(8, 8); gm.font = `400 ${px}px ${font}`; let w = 0; for (const l of lines) w = Math.max(w, gm.measureText(l).width);
  const W = Math.ceil(w + 40), H = Math.ceil(lines.length * px * 1.15 + 30); const [c, g] = mk(W, H); if (bg) { g.fillStyle = bg; g.fillRect(0, 0, W, H); }
  g.font = `400 ${px}px ${font}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fg; lines.forEach((l, i) => g.fillText(l, W / 2, 15 + px * 1.15 * (i + 0.5)));
  const r = rng(text.length * 31); g.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.6})`; g.fillRect(r() * W, r() * H, 1 + r() * 5, 1 + r() * 3); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; (t as any).aspect = W / H; return t;
}
export function signMesh(text: string, h: number, fg = '#d8d2c0', bg: string | null = null, emissive = 0) {
  const t = paintSign(text, fg, bg); const m = new THREE.MeshStandardMaterial({ map: t, transparent: !bg, roughness: 0.9, emissive: emissive ? 0xffffff : 0, emissiveMap: emissive ? t : null, emissiveIntensity: emissive, side: THREE.DoubleSide });
  return new THREE.Mesh(new THREE.PlaneGeometry(h * (t as any).aspect, h), m);
}
