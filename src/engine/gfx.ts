import * as THREE from 'three';

/* ---------- deterministic rng ---------- */
export function rng(seed: number) {
  let s = (seed >>> 0) || 1;
  return () => {
    s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function mk(w: number, h: number) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  return [c, c.getContext('2d')!] as const;
}
function toTex(c: HTMLCanvasElement, repeat = false) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
const cache = new Map<string, any>();
function cached<T>(key: string, f: () => T): T {
  if (!cache.has(key)) cache.set(key, f());
  return cache.get(key);
}

export const FONT_UI = '"Exo 2", "Segoe UI", sans-serif';
export const FONT_TITLE = '"Russo One", "Exo 2", sans-serif';
export const FONT_MONO = '"JetBrains Mono", monospace';

/* ---------- surface textures ---------- */
function noiseFill(g: CanvasRenderingContext2D, w: number, h: number, base: [number, number, number], amp: number, r: () => number, cell = 2) {
  for (let y = 0; y < h; y += cell) for (let x = 0; x < w; x += cell) {
    const n = (r() - 0.5) * amp;
    g.fillStyle = `rgb(${base[0] + n | 0},${base[1] + n | 0},${base[2] + n | 0})`;
    g.fillRect(x, y, cell, cell);
  }
}

export function surfTex(kind: 'concrete' | 'metal' | 'tile' | 'wood' | 'panel' | 'grime' | 'carpet' | 'labfloor'): THREE.Texture {
  return cached('surf:' + kind, () => {
    const [c, g] = mk(256, 256); const r = rng(kind.length * 977 + kind.charCodeAt(0));
    if (kind === 'concrete') {
      noiseFill(g, 256, 256, [128, 130, 136], 26, r);
      for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.12})`; g.fillRect(r() * 256, 0, 2 + r() * 10, 256); }
      g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 2; g.strokeRect(0, 0, 256, 128); g.strokeRect(0, 128, 256, 128);
    } else if (kind === 'metal') {
      noiseFill(g, 256, 256, [120, 126, 136], 14, r);
      for (let y = 0; y < 256; y += 2) { g.fillStyle = `rgba(255,255,255,${r() * 0.04})`; g.fillRect(0, y, 256, 1); }
      g.strokeStyle = 'rgba(0,0,0,.5)'; g.lineWidth = 3; g.strokeRect(1, 1, 254, 254);
      g.fillStyle = 'rgba(20,20,24,.9)';
      for (const [x, y] of [[10, 10], [246, 10], [10, 246], [246, 246]]) { g.beginPath(); g.arc(x, y, 3, 0, 7); g.fill(); }
    } else if (kind === 'tile') {
      noiseFill(g, 256, 256, [160, 170, 180], 10, r);
      g.strokeStyle = 'rgba(10,12,16,.8)'; g.lineWidth = 2;
      for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, 256); g.moveTo(0, i * 64); g.lineTo(256, i * 64); g.stroke(); }
    } else if (kind === 'wood') {
      noiseFill(g, 256, 256, [128, 92, 66], 10, r);
      for (let y = 0; y < 256; y += 3) { g.fillStyle = `rgba(0,0,0,${r() * 0.18})`; g.fillRect(0, y, 256, 1 + r() * 2); }
      g.strokeStyle = 'rgba(0,0,0,.55)'; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, 256); g.stroke(); }
    } else if (kind === 'panel') {
      noiseFill(g, 256, 256, [118, 124, 136], 8, r);
      g.strokeStyle = 'rgba(0,0,0,.6)'; g.lineWidth = 3;
      g.strokeRect(0, 0, 128, 256); g.strokeRect(128, 0, 128, 256);
      g.fillStyle = 'rgba(120,200,255,.10)'; g.fillRect(8, 120, 112, 3); g.fillRect(136, 120, 112, 3);
    } else if (kind === 'grime') {
      noiseFill(g, 256, 256, [112, 104, 98], 30, r);
      for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(${20 + r() * 30},${14 + r() * 20},10,${r() * 0.25})`; g.beginPath(); g.arc(r() * 256, r() * 256, 4 + r() * 26, 0, 7); g.fill(); }
      for (let i = 0; i < 18; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.25})`; g.fillRect(r() * 256, 0, 1 + r() * 4, 256); }
    } else if (kind === 'carpet') {
      noiseFill(g, 256, 256, [96, 54, 70], 16, r, 1);
    } else {
      noiseFill(g, 256, 256, [190, 198, 206], 6, r);
      g.strokeStyle = 'rgba(40,60,80,.5)'; g.lineWidth = 1;
      for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, 256); g.moveTo(0, i * 128); g.lineTo(256, i * 128); g.stroke(); }
    }
    return toTex(c, true);
  });
}

export function mat(kind: Parameters<typeof surfTex>[0], opts: { color?: number; rough?: number; metal?: number; rep?: [number, number] } = {}) {
  const key = `mat:${kind}:${opts.color}:${opts.rough}:${opts.metal}:${opts.rep}`;
  return cached(key, () => {
    let map = surfTex(kind);
    if (opts.rep) { map = map.clone(); map.repeat.set(opts.rep[0], opts.rep[1]); map.needsUpdate = true; }
    const defaults: Record<string, [number, number]> = {
      concrete: [0.85, 0.05], metal: [0.45, 0.8], tile: [0.25, 0.2], wood: [0.6, 0.05],
      panel: [0.5, 0.6], grime: [0.9, 0.05], carpet: [0.95, 0], labfloor: [0.2, 0.3],
    };
    const [ro, me] = defaults[kind];
    return new THREE.MeshStandardMaterial({ map, color: opts.color ?? 0xffffff, roughness: opts.rough ?? ro, metalness: opts.metal ?? me });
  });
}

export function flat(color: number, rough = 0.7, metal = 0.1, emissive = 0, ei = 1) {
  return cached(`flat:${color}:${rough}:${metal}:${emissive}:${ei}`, () =>
    new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, emissive, emissiveIntensity: ei }));
}
/** unlit glowing material (feeds bloom) */
export function glow(color: number, k = 2.2) {
  return cached(`glow:${color}:${k}`, () => {
    const m = new THREE.MeshBasicMaterial({ color });
    m.color.multiplyScalar(k); return m;
  });
}
export function glass(color = 0x88bbdd, opacity = 0.22) {
  return cached(`glass:${color}:${opacity}`, () => new THREE.MeshStandardMaterial({
    color, roughness: 0.05, metalness: 0.9, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide,
  }));
}

/* ---------- building facades ---------- */
export function facadeMats(seed: number, cols: number, rows: number, tone: 'warm' | 'cold' | 'corp' | 'slum' = 'warm', lit = 0.35) {
  const [c, g] = mk(512, 1024); const [e, ge] = mk(512, 1024); const r = rng(seed * 7919 + 13);
  const wallC = tone === 'corp' ? [52, 60, 74] : tone === 'slum' ? [70, 62, 56] : [58, 62, 76];
  noiseFill(g, 512, 1024, wallC as any, 10, r, 4);
  ge.fillStyle = '#000'; ge.fillRect(0, 0, 512, 1024);
  const cw = 512 / cols, rh = 1024 / rows;
  const palettes = {
    warm: ['#ffcf8a', '#ffb060', '#9fd8ff', '#ff7ab0', '#ffe6b8'],
    cold: ['#9fd8ff', '#6fb6ff', '#c8f0ff', '#b08cff', '#ffcf8a'],
    corp: ['#bfe9ff', '#dff6ff', '#8fd0ff'],
    slum: ['#ffb060', '#ff8a50', '#a8ff9a', '#ff5a7a', '#ffd9a0'],
  }[tone];
  for (let y = 0; y < rows; y++) {
    // floor band
    g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(0, y * rh, 512, 3);
    for (let x = 0; x < cols; x++) {
      const px = x * cw + cw * 0.18, py = y * rh + rh * 0.24, w = cw * 0.64, h = rh * 0.5;
      g.fillStyle = '#07090d'; g.fillRect(px, py, w, h);
      g.strokeStyle = 'rgba(120,130,150,.25)'; g.strokeRect(px, py, w, h);
      if (r() < lit) {
        const col = palettes[(r() * palettes.length) | 0];
        const a = 0.35 + r() * 0.65;
        ge.globalAlpha = a; ge.fillStyle = col; ge.fillRect(px, py, w, h);
        // blinds / silhouettes
        ge.globalAlpha = 1; ge.fillStyle = 'rgba(0,0,0,.55)';
        if (r() < 0.5) for (let i = 0; i < h; i += 3) ge.fillRect(px, py + i, w, 1);
        if (r() < 0.3) ge.fillRect(px + w * r() * 0.6, py + h * 0.35, w * 0.25, h * 0.65);
        if (r() < 0.25) ge.fillRect(px, py, w * (0.3 + r() * 0.4), h);
        g.fillStyle = col; g.globalAlpha = 0.25; g.fillRect(px, py, w, h); g.globalAlpha = 1;
      }
    }
  }
  if (tone === 'corp') { ge.fillStyle = '#7fd4ff'; for (let x = 0; x < cols; x += 3) ge.fillRect(x * cw, 0, 2.5, 1024); }
  const map = toTex(c), em = toTex(e);
  const side = new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 1.05, roughness: 0.6, metalness: 0.35 });
  const roof = flat(0x0c0d11, 0.9, 0.1);
  return [side, side, roof, roof, side, side];
}

/* ---------- neon signs & screens ---------- */
export interface SignOpts { font?: string; border?: boolean; bg?: string | null; sub?: string; weight?: number; k?: number; vertical?: boolean; }
export function signTex(text: string, color: string, o: SignOpts = {}) {
  const key = `sign:${text}:${color}:${JSON.stringify(o)}`;
  return cached(key, () => {
    const font = o.font ?? FONT_TITLE; const fs = 96;
    const [m, gm] = mk(8, 8); gm.font = `${o.weight ?? 400} ${fs}px ${font}`;
    const lines = o.vertical ? text.split('') : text.split('\n');
    let tw = 0; for (const l of lines) tw = Math.max(tw, gm.measureText(l).width);
    const lh = fs * 1.15; const pad = 46;
    const w = Math.ceil(tw + pad * 2), h = Math.ceil(lines.length * lh + pad * 2 + (o.sub ? 44 : 0));
    const [c, g] = mk(w, h);
    if (o.bg) { g.fillStyle = o.bg; g.fillRect(0, 0, w, h); }
    g.font = `${o.weight ?? 400} ${fs}px ${font}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let pass = 0; pass < 3; pass++) {
      g.shadowColor = color; g.shadowBlur = [40, 18, 0][pass];
      g.fillStyle = pass === 2 ? '#ffffff' : color; g.globalAlpha = pass === 2 ? 0.75 : 1;
      lines.forEach((l, i) => g.fillText(l, w / 2, pad + lh * (i + 0.5)));
    }
    g.globalAlpha = 1;
    if (o.sub) { g.shadowBlur = 10; g.font = `600 30px ${FONT_UI}`; g.fillStyle = color; g.fillText(o.sub, w / 2, h - pad * 0.9); }
    if (o.border) { g.shadowBlur = 22; g.strokeStyle = color; g.lineWidth = 6; g.strokeRect(14, 14, w - 28, h - 28); }
    const t = toTex(c); (t as any).aspect = w / h; return t;
  });
}

export function makeSign(text: string, color: string, height: number, o: SignOpts = {}) {
  const t = signTex(text, color, o);
  const m = new THREE.MeshBasicMaterial({ map: t, transparent: !o.bg, side: THREE.DoubleSide, depthWrite: !!o.bg });
  m.color.setScalar(o.k ?? 2.0);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(height * (t as any).aspect, height), m);
  mesh.userData.neon = true;
  return mesh;
}

export function screenTex(lines: string[], color = '#6ff0ff', bg = '#03101a', title?: string) {
  const [c, g] = mk(512, 320);
  g.fillStyle = bg; g.fillRect(0, 0, 512, 320);
  g.fillStyle = color; g.globalAlpha = 0.08; for (let y = 0; y < 320; y += 4) g.fillRect(0, y, 512, 1); g.globalAlpha = 1;
  g.shadowColor = color; g.shadowBlur = 8; g.fillStyle = color;
  let y = 34;
  if (title) { g.font = `700 26px ${FONT_MONO}`; g.fillText(title, 20, y); y += 16; g.fillRect(20, y, 472, 2); y += 30; }
  g.font = `400 20px ${FONT_MONO}`;
  for (const l of lines) { g.fillText(l, 20, y); y += 27; }
  return toTex(c);
}
export function makeScreen(w: number, h: number, lines: string[], color = '#6ff0ff', title?: string, bg?: string) {
  const m = new THREE.MeshBasicMaterial({ map: screenTex(lines, color, bg, title) }); m.color.setScalar(1.5);
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
}

export function billboardTex(seed: number, title: string, sub: string, c1: string, c2: string) {
  return cached(`bb:${seed}:${title}`, () => {
    const [c, g] = mk(512, 768); const r = rng(seed);
    const gr = g.createLinearGradient(0, 0, 512, 768); gr.addColorStop(0, c1); gr.addColorStop(1, c2);
    g.fillStyle = '#04050a'; g.fillRect(0, 0, 512, 768);
    g.globalAlpha = 0.5; g.fillStyle = gr; g.fillRect(0, 0, 512, 768); g.globalAlpha = 1;
    // abstract face / iris motif
    g.strokeStyle = c1; g.lineWidth = 3; g.shadowColor = c1; g.shadowBlur = 20;
    const cx = 256, cy = 300;
    for (let i = 0; i < 9; i++) { g.globalAlpha = 0.2 + i * 0.08; g.beginPath(); g.ellipse(cx, cy, 190 - i * 20, 110 - i * 11, 0, 0, 7); g.stroke(); }
    g.globalAlpha = 1; g.fillStyle = '#fff'; g.beginPath(); g.arc(cx, cy, 26, 0, 7); g.fill();
    for (let i = 0; i < 70; i++) { g.fillStyle = r() < 0.5 ? c1 : c2; g.globalAlpha = r() * 0.6; g.fillRect(r() * 512, r() * 768, 2 + r() * 50, 2); }
    g.globalAlpha = 1; g.textAlign = 'center'; g.fillStyle = '#fff'; g.shadowColor = c2; g.shadowBlur = 26;
    g.font = `400 62px ${FONT_TITLE}`; const tl = title.split('\n'); tl.forEach((l, i) => g.fillText(l, 256, 540 + i * 66));
    g.font = `600 26px ${FONT_UI}`; g.fillStyle = c1; g.fillText(sub, 256, 540 + tl.length * 66 + 6);
    g.fillStyle = 'rgba(0,0,0,.25)'; for (let y = 0; y < 768; y += 4) g.fillRect(0, y, 512, 1);
    return toTex(c);
  });
}

export function softSprite(): THREE.Texture {
  return cached('soft', () => {
    const [c, g] = mk(128, 128);
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    const t = toTex(c); return t;
  });
}
/** additive light pool decal on the ground */
export function lightPool(color: number, radius: number, k = 0.55) {
  const m = new THREE.MeshBasicMaterial({ map: softSprite(), color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: k });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), m);
  mesh.rotation.x = -Math.PI / 2; mesh.renderOrder = 2; return mesh;
}
/** volumetric-ish light cone */
export function lightCone(color: number, r: number, h: number, opacity = 0.07) {
  const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const g = new THREE.CylinderGeometry(0.08, r, h, 20, 1, true);
  const mesh = new THREE.Mesh(g, m); mesh.renderOrder = 3; return mesh;
}

/* ---------- characters ---------- */
export interface Look {
  coat: number; coatLen?: number; pants?: number; skin?: number; hair?: number;
  hairStyle?: 'short' | 'long' | 'bald' | 'bun' | 'hood' | 'hat' | 'mohawk';
  accent?: number; build?: number; height?: number; extra?: ('visor' | 'glasses' | 'scarf' | 'apron' | 'armor' | 'cane' | 'umbrella' | 'tie')[];
  ghost?: boolean;
}
export interface Humanoid { group: THREE.Group; head: THREE.Group; armL: THREE.Object3D; armR: THREE.Object3D; legL: THREE.Object3D; legR: THREE.Object3D; torso: THREE.Object3D; }

export function makeHumanoid(L: Look): Humanoid {
  const g = new THREE.Group();
  const ghostMat = L.ghost ? new THREE.MeshBasicMaterial({ color: L.coat, transparent: true, opacity: 0.55, wireframe: false }) : null;
  const M = (c: number, ro = 0.8, me = 0.05) => ghostMat ?? new THREE.MeshStandardMaterial({ color: c, roughness: ro, metalness: me });
  const cloth = M(L.coat, 0.75, 0.1), pants = M(L.pants ?? 0x15161b), skin = M(L.skin ?? 0xc9a184, 0.6), hairM = M(L.hair ?? 0x1a1512, 0.5, 0.2);
  const b = L.build ?? 1;
  const add = (geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = g) => {
    const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); parent.add(me); return me;
  };
  // legs (pivot at hip)
  const leg = (sx: number) => {
    const p = new THREE.Group(); p.position.set(sx * 0.095 * b, 0.9, 0); g.add(p);
    add(new THREE.CapsuleGeometry(0.078 * b, 0.68, 4, 10), pants, 0, -0.42, 0, p);
    add(new THREE.BoxGeometry(0.13 * b, 0.1, 0.28), M(0x0b0b0e, 0.5, 0.3), 0, -0.85, 0.04, p);
    return p;
  };
  const legL = leg(-1), legR = leg(1);
  // torso
  const torso = new THREE.Group(); torso.position.y = 1.18; g.add(torso);
  const tm = add(new THREE.CapsuleGeometry(0.17, 0.4, 6, 14), cloth, 0, 0, 0, torso); tm.scale.set(1.18 * b, 1, 0.78 * b);
  const len = (L.coatLen ?? 0.6);
  if (len > 0.1) {
    const coat = add(new THREE.CylinderGeometry(0.2 * b, (0.2 + len * 0.07) * b, 0.5 + len * 0.7, 14, 1, true), cloth, 0, 0.12 - (0.5 + len * 0.7) / 2 + 0.2, 0, torso);
    coat.scale.z = 0.74; (coat.material as any).side = THREE.DoubleSide;
    // collar
    const col = add(new THREE.CylinderGeometry(0.1, 0.16, 0.12, 12, 1, true), cloth, 0, 0.33, 0, torso); col.scale.z = 0.85;
  }
  // shoulders + arms (pivot at shoulder)
  const arm = (sx: number) => {
    const p = new THREE.Group(); p.position.set(sx * 0.235 * b, 0.22, 0); torso.add(p);
    add(new THREE.SphereGeometry(0.072 * b, 10, 8), cloth, 0, 0, 0, p);
    add(new THREE.CapsuleGeometry(0.058 * b, 0.5, 4, 8), cloth, 0, -0.3, 0, p);
    add(new THREE.SphereGeometry(0.05, 8, 6), skin, 0, -0.62, 0, p);
    p.rotation.z = sx * 0.08; return p;
  };
  const armL = arm(-1), armR = arm(1);
  add(new THREE.CylinderGeometry(0.05, 0.06, 0.1, 8), skin, 0, 0.36, 0, torso);
  // head
  const head = new THREE.Group(); head.position.y = 1.18 + 0.5; g.add(head);
  const hm = add(new THREE.SphereGeometry(0.115, 18, 14), skin, 0, 0, 0, head); hm.scale.set(0.9, 1.1, 0.98);
  add(new THREE.BoxGeometry(0.03, 0.045, 0.035), skin, 0, -0.01, 0.11, head);
  const ac = L.accent ?? 0x66e0ff;
  const eyeM = new THREE.MeshBasicMaterial({ color: ac }); eyeM.color.multiplyScalar(L.ghost ? 1 : 1.6);
  const ex = L.extra ?? [];
  if (ex.includes('visor')) add(new THREE.BoxGeometry(0.2, 0.035, 0.06), eyeM, 0, 0.025, 0.085, head);
  else {
    const em = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
    add(new THREE.BoxGeometry(0.03, 0.012, 0.01), em, -0.04, 0.03, 0.105, head);
    add(new THREE.BoxGeometry(0.03, 0.012, 0.01), em, 0.04, 0.03, 0.105, head);
    // temple implant
    add(new THREE.BoxGeometry(0.008, 0.035, 0.03), eyeM, 0.1, 0.02, 0.02, head);
  }
  if (ex.includes('glasses')) { const gm = M(0x111111, 0.2, 0.9); add(new THREE.BoxGeometry(0.2, 0.04, 0.012), gm, 0, 0.03, 0.112, head); }
  const hs = L.hairStyle ?? 'short';
  if (hs === 'short' || hs === 'long' || hs === 'bun') {
    const cap = add(new THREE.SphereGeometry(0.122, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.52), hairM, 0, 0.012, -0.012, head); cap.scale.set(0.95, 1.12, 1.04);
    if (hs === 'long') { const bk = add(new THREE.CapsuleGeometry(0.1, 0.22, 4, 10), hairM, 0, -0.1, -0.05, head); bk.scale.set(1.05, 1, 0.6); }
    if (hs === 'bun') add(new THREE.SphereGeometry(0.055, 10, 8), hairM, 0, 0.1, -0.1, head);
  } else if (hs === 'hood') {
    const hd = add(new THREE.SphereGeometry(0.15, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.7), cloth, 0, 0, -0.02, head); hd.scale.set(1, 1.15, 1.1);
    (hd.material as any).side = THREE.DoubleSide;
  } else if (hs === 'hat') {
    add(new THREE.CylinderGeometry(0.2, 0.2, 0.015, 20), M(0x121214, 0.6), 0, 0.085, 0, head);
    add(new THREE.CylinderGeometry(0.11, 0.125, 0.11, 16), M(0x121214, 0.6), 0, 0.14, 0, head);
  } else if (hs === 'mohawk') {
    add(new THREE.BoxGeometry(0.03, 0.09, 0.2), eyeM, 0, 0.13, -0.01, head);
  }
  if (ex.includes('scarf')) { const s = add(new THREE.TorusGeometry(0.1, 0.04, 8, 14), M(ac, 0.9), 0, 0.33, 0, torso); s.rotation.x = Math.PI / 2; }
  if (ex.includes('tie')) add(new THREE.BoxGeometry(0.04, 0.26, 0.01), eyeM, 0, 0.12, 0.14 * b, torso);
  if (ex.includes('apron')) add(new THREE.BoxGeometry(0.34 * b, 0.6, 0.02), M(0x8a8f96, 0.5, 0.2), 0, -0.2, 0.15 * b, torso);
  if (ex.includes('armor')) {
    add(new THREE.BoxGeometry(0.4 * b, 0.34, 0.3 * b), M(0x22262e, 0.35, 0.8), 0, 0.08, 0, torso);
    add(new THREE.BoxGeometry(0.16, 0.03, 0.01), eyeM, 0, 0.14, 0.152 * b, torso);
  }
  if (ex.includes('cane')) add(new THREE.CylinderGeometry(0.012, 0.012, 0.9, 6), M(0x333333, 0.3, 0.8), 0.3, 0.45, 0.12);
  if (ex.includes('umbrella')) {
    add(new THREE.CylinderGeometry(0.01, 0.01, 1.0, 6), M(0x222222), 0.26, 1.5, 0.12);
    const u = add(new THREE.ConeGeometry(0.62, 0.22, 10, 1, true), M(0x0d0d12, 0.4, 0.3), 0.26, 2.05, 0.12); (u.material as any).side = THREE.DoubleSide;
    armR.rotation.x = -1.1;
  }
  // contact shadow
  if (!L.ghost) {
    const sh = new THREE.Mesh(new THREE.CircleGeometry(0.42, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.45, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = 0.035; g.add(sh);
  }
  g.scale.setScalar(L.height ?? 1);
  return { group: g, head, armL, armR, legL, legR, torso };
}

export function disposeTree(o: THREE.Object3D) {
  o.traverse((n: any) => { if (n.geometry) n.geometry.dispose(); });
}
