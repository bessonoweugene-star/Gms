import type { UI } from './ui';

/* =====================  HACK: code-breaking  ===================== */
export function openHack(ui: UI, o: { title: string; level: number; onWin: () => void; onFail?: () => void }) {
  const g = ui.g;
  const cfg = [{ len: 4, syms: 5, tries: 8, time: 120, rep: false }, { len: 4, syms: 6, tries: 8, time: 110, rep: false }, { len: 5, syms: 6, tries: 9, time: 130, rep: true }][Math.max(0, Math.min(2, o.level - 1))];
  const SY = ['Δ', 'Ω', 'Ψ', 'Σ', 'Φ', 'Ξ'].slice(0, cfg.syms);
  const code: number[] = []; while (code.length < cfg.len) { const s = (Math.random() * cfg.syms) | 0; if (cfg.rep || !code.includes(s)) code.push(s); }
  const rows: { gs: number[]; ex: number; pa: number }[] = []; let cur: number[] = []; let left = cfg.time; let over = false; const known: (number | null)[] = code.map(() => null);
  const timer = setInterval(() => {
    if (over) return; left -= 0.25; const bar = ui.ov.querySelector('.hbar i') as HTMLElement | null; if (bar) bar.style.width = Math.max(0, left / cfg.time * 100) + '%';
    if (Math.floor(left * 4) % 4 === 0 && left < 20) g.audio.sfx('hack');
    if (left <= 0) end(false);
  }, 250);
  ui.show('hack', `<div class="panel hk"><div class="phead"><h2><small>ВЗЛОМ • ЗАЩИТА ICE-${o.level}</small>${o.title}</h2><button class="x" data-a="close">ESC — ОТМЕНА</button></div><div class="hbar"><i style="width:100%"></i></div><div id="hkb"></div></div>`, { onClose: () => clearInterval(timer) });
  const body = ui.ov.querySelector('#hkb') as HTMLElement;
  const render = () => {
    body.innerHTML = `<div class="hrows">${rows.map((r, i) => `<div class="hrow"><span class="n">${String(i + 1).padStart(2, '0')}</span>${r.gs.map(s => `<span class="hc">${SY[s]}</span>`).join('')}<span class="hfb">${'<i class="ex"></i>'.repeat(r.ex)}${'<i class="pa"></i>'.repeat(r.pa)}${'<i></i>'.repeat(cfg.len - r.ex - r.pa)}</span></div>`).join('')}
      ${rows.length < cfg.tries ? `<div class="hrow"><span class="n">&gt;&gt;</span>${code.map((_, i) => `<span class="hc cur ${known[i] !== null && cur[i] === undefined ? 'lock' : ''}">${cur[i] !== undefined ? SY[cur[i]] : known[i] !== null ? SY[known[i]!] : ''}</span>`).join('')}</div>` : ''}</div>
      <div class="hkeys">${SY.map((s, i) => `<button data-a="k" data-i="${i}">${s}</button>`).join('')}<button class="w" data-a="bk">⌫</button><button class="w" data-a="go">ВВОД</button>${g.has('i_decryptor') ? '<button class="w" data-a="dc" style="border-color:var(--a);color:var(--a)">ДЕШИФРАТОР</button>' : ''}</div>
      <p class="hint" style="margin-top:.9rem;font-family:'Exo 2'">Подберите ключ из ${cfg.len} символов${cfg.rep ? ' (символы могут повторяться)' : ' (без повторов)'}. <span style="color:var(--g)">●</span> — символ на своём месте, <span style="color:var(--a)">●</span> — есть в ключе, но не там. Попыток: ${cfg.tries - rows.length}. Клавиши 1–${cfg.syms}, Backspace, Enter.</p>`;
  };
  const end = (win: boolean) => { if (over) return; over = true; clearInterval(timer); ui.closeAll(); if (win) { g.audio.sfx('ok'); g.notify('Доступ получен.', 'item'); o.onWin(); } else { g.notify('Взлом провален. Защита сменила ключ.', 'warn'); o.onFail?.(); } };
  const add = (i: number) => { if (cur.length < cfg.len) { cur.push(i); g.audio.sfx('hack'); render(); } };
  const back = () => { cur.pop(); render(); };
  const submit = () => {
    if (cur.length < cfg.len) return;
    let ex = 0; const cc = [...code], gg = [...cur];
    for (let i = 0; i < cfg.len; i++) if (gg[i] === cc[i]) { ex++; cc[i] = -1; gg[i] = -2; }
    let pa = 0; for (let i = 0; i < cfg.len; i++) if (gg[i] >= 0) { const j = cc.indexOf(gg[i]); if (j >= 0) { pa++; cc[j] = -1; } }
    rows.push({ gs: cur, ex, pa }); cur = [];
    if (ex === cfg.len) return end(true);
    if (rows.length >= cfg.tries) return end(false);
    g.audio.sfx('error'); render();
  };
  ui.acts = {
    close: () => { over = true; ui.closeAll(); }, k: el => add(+el.dataset.i!), bk: back, go: submit,
    dc: () => { g.take('i_decryptor'); const free = known.map((k, i) => k === null ? i : -1).filter(i => i >= 0).sort(() => Math.random() - 0.5).slice(0, 2); for (const i of free) known[i] = code[i]; g.notify('Дешифратор вскрыл две позиции и сгорел.'); render(); },
  };
  ui.keyHook = e => {
    if (/^Digit[1-9]$/.test(e.code)) { const i = +e.code.slice(5) - 1; if (i < cfg.syms) add(i); return true; }
    if (e.code === 'Backspace') { back(); return true; } if (e.code === 'Enter') { submit(); return true; }
    if (e.code === 'Escape') { over = true; ui.closeAll(); return true; }
    return true;
  };
  render(); g.audio.sfx('open');
}

/* =====================  CCTV archive review  ===================== */
export function openCCTV(ui: UI) {
  const g = ui.g; let t = 0, speed = 0; // minutes since 22:00
  ui.show('cctv', `<div class="panel cc"><div class="phead"><h2><small style="color:#9fe8a0">ТЕССЕРА • КОРПУС C • АРХИВ 72 Ч</small>КАМЕРА 07 — ЭТАЖ 7</h2><button class="x" data-a="close">ESC — ЗАКРЫТЬ</button></div>
    <canvas width="640" height="360"></canvas>
    <div class="ctl">${[18, 20, 183, 211, 253, 330].map(m => `<i style="left:${m / 360 * 100}%"></i>`).join('')}<input type="range" min="0" max="360" step="0.02" value="0"></div>
    <div class="cctl"><button data-a="sp" data-v="0">❚❚</button><button data-a="sp" data-v="0.25">▶</button><button data-a="sp" data-v="3">▶▶</button><button data-a="sp" data-v="16">▶▶▶</button>
      <span class="hint" style="flex:1;text-align:center">22:00 — 04:00 • риски на шкале — срабатывания датчика движения</span><button data-a="mark" style="border-color:var(--a);color:var(--a)">◉ ОТМЕТИТЬ КАДР</button></div></div>`, { onClose: () => clearInterval(timer) });
  const cv = ui.ov.querySelector('canvas') as HTMLCanvasElement, x = cv.getContext('2d')!, sl = ui.ov.querySelector('input') as HTMLInputElement;
  const L = (a: number, b: number, k: number) => a + (b - a) * k;
  const P = (d: number) => { const k = d / (d + 0.45) * 1.45; return { xl: L(20, 250, k), xr: L(620, 390, k), fy: L(350, 205, k), cy: L(10, 115, k) }; };
  const fig = (d: number, u: number, col: string, kind = 'man') => {
    const p = P(d), px = L(p.xl, p.xr, u), h = (p.fy - p.cy) * 0.62, w = h * 0.26;
    x.fillStyle = 'rgba(0,0,0,.5)'; x.beginPath(); x.ellipse(px, p.fy, w * 0.9, w * 0.25, 0, 0, 7); x.fill();
    if (kind === 'drone') { x.fillStyle = col; x.fillRect(px - w, p.fy - h * 0.14, w * 2, h * 0.12); x.fillStyle = '#eaffea'; x.fillRect(px - 2, p.fy - h * 0.17, 4, 3); return; }
    x.fillStyle = col; x.fillRect(px - w / 2, p.fy - h * 0.84, w, h * 0.84); x.beginPath(); x.arc(px, p.fy - h * 0.92, w * 0.36, 0, 7); x.fill();
    if (kind === 'grey') { x.fillStyle = '#dfffe0'; x.fillRect(px - w * 0.3, p.fy - h * 0.7, w * 0.6, h * 0.03); }
    if (kind === 'case') { x.fillStyle = '#cfe8cf'; x.fillRect(px + w * 0.55, p.fy - h * 0.36, w * 0.55, h * 0.16); }
    if (kind === 'bag') { x.fillStyle = '#1a2a1a'; x.beginPath(); x.arc(px + w * 0.7, p.fy - h * 0.22, w * 0.4, 0, 7); x.fill(); }
  };
  const draw = () => {
    const n = P(0), f = P(1);
    x.fillStyle = '#061008'; x.fillRect(0, 0, 640, 360);
    x.fillStyle = '#0d1f10'; x.beginPath(); x.moveTo(n.xl, n.fy); x.lineTo(n.xr, n.fy); x.lineTo(f.xr, f.fy); x.lineTo(f.xl, f.fy); x.fill();          // floor
    x.fillStyle = '#12281a'; x.beginPath(); x.moveTo(n.xl, n.cy); x.lineTo(f.xl, f.cy); x.lineTo(f.xl, f.fy); x.lineTo(n.xl, n.fy); x.fill();          // left wall
    x.fillStyle = '#16301e'; x.beginPath(); x.moveTo(n.xr, n.cy); x.lineTo(f.xr, f.cy); x.lineTo(f.xr, f.fy); x.lineTo(n.xr, n.fy); x.fill();          // right wall
    x.fillStyle = '#0a160c'; x.fillRect(f.xl, f.cy, f.xr - f.xl, f.fy - f.cy);                                                                         // far wall
    x.fillStyle = '#1e3a24'; x.fillRect(L(f.xl, f.xr, 0.3), L(f.cy, f.fy, 0.2), (f.xr - f.xl) * 0.4, (f.fy - f.cy) * 0.8);                             // elevator
    const inside = t >= 185 && t <= 211;
    for (const [d, name] of [[0.28, '7B'], [0.7, '7A']] as [number, string][]) {
      const a = P(d - 0.07), b = P(d + 0.07); const top = (p: any) => L(p.cy, p.fy, 0.24);
      x.fillStyle = name === '7A' && inside ? '#9fe8a0' : '#0a140c'; x.beginPath(); x.moveTo(a.xr, top(a)); x.lineTo(b.xr, top(b)); x.lineTo(b.xr, b.fy); x.lineTo(a.xr, a.fy); x.fill();
      x.fillStyle = '#9fe8a0'; x.font = '11px monospace'; x.fillText(name, (a.xr + b.xr) / 2 - 8, top(a) - 4);
    }
    for (let d = 0.1; d < 1; d += 0.3) { const p = P(d); x.fillStyle = 'rgba(190,255,190,.5)'; x.fillRect(L(p.xl, p.xr, 0.42), p.cy + 2, (p.xr - p.xl) * 0.16, 3); }
    // events
    if (t >= 18 && t <= 19.2) fig(L(0.7, 0.97, (t - 18) / 1.2), 0.7, '#3a5a40', 'bag'); if (t >= 19.9 && t <= 21) fig(L(0.97, 0.7, (t - 19.9) / 1.1), 0.7, '#3a5a40');
    if (t >= 183 && t <= 185) { const k = (t - 183) / 2; fig(L(0.97, 0.72, k), 0.62, '#6a8a6e', 'grey'); fig(L(0.99, 0.76, k), 0.8, '#6a8a6e', 'grey'); }
    if (t >= 211 && t <= 213) { const k = (t - 211) / 2; fig(L(0.72, 0.97, k), 0.62, '#6a8a6e', 'grey'); fig(L(0.76, 0.99, k), 0.8, '#6a8a6e', 'grey'); }
    if (t >= 253 && t <= 256) { const k = Math.max(0, (t - 253.7) / 2.3); fig(L(0.28, 0.97, k), L(0.9, 0.78, Math.min(1, k * 3)), '#4a7a52', 'case'); }
    if (t >= 330 && t <= 334) fig(L(0.97, 0.05, (t - 330) / 4), 0.4, '#5a8a60', 'drone');
    // noise + overlay
    for (let i = 0; i < 500; i++) { x.fillStyle = `rgba(160,255,170,${Math.random() * 0.1})`; x.fillRect(Math.random() * 640, Math.random() * 360, 2, 1); }
    x.fillStyle = 'rgba(0,0,0,.22)'; for (let y = 0; y < 360; y += 3) x.fillRect(0, y, 640, 1);
    const tot = 22 * 60 + t, hh = Math.floor(tot / 60) % 24, mm = Math.floor(tot % 60), ss = Math.floor((tot * 60) % 60);
    x.fillStyle = '#c8ffd0'; x.font = '14px monospace'; x.fillText(`CAM-07 // ЭТ.7 // ${hh >= 22 ? '13' : '14'}.11.2091  ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`, 14, 24);
    if (Math.floor(performance.now() / 500) % 2) { x.fillStyle = '#ff4040'; x.beginPath(); x.arc(618, 19, 5, 0, 7); x.fill(); }
  };
  const timer = setInterval(() => { if (speed) { t = Math.min(360, t + speed * 0.05); sl.value = String(t); if (t >= 360) speed = 0; } draw(); }, 50);
  sl.addEventListener('input', () => { t = +sl.value; });
  const setSp = (v: number) => { speed = v; ui.ov.querySelectorAll('[data-a=sp]').forEach(b => b.classList.toggle('on', +(b as HTMLElement).dataset.v! === v)); };
  ui.acts = {
    close: () => { g.audio.sfx('close'); ui.closeAll(); }, sp: el => setSp(+el.dataset.v!),
    mark: () => {
      setSp(0);
      if (t >= 252.8 && t <= 256.3) { if (g.hasClue('c_cctv_alone')) return g.notify('Этот кадр уже в деле.'); g.clue('c_cctv_alone'); g.log('Камера, 02:14: Элиас выходит из 7B один, с медицинским кейсом, держась за стену.'); }
      else if (t >= 183 && t <= 213) { if (g.hasClue('c_cctv_cleaners')) return g.notify('Этот кадр уже в деле.'); g.clue('c_cctv_cleaners'); g.log('Камера, 01:05–01:31: двое в сером с шевронами HYPERION провели 26 минут в квартире Агнес.'); }
      else if (t >= 95 && t <= 105) { if (!g.hasClue('c_agnes_testimony')) return g.notify('Пустой коридор. Пока непонятно, чем этот кадр важен.'); if (g.hasClue('c_cctv_empty')) return g.notify('Этот кадр уже в деле.'); g.clue('c_cctv_empty'); g.log('Камера, 23:40: коридор пуст. Никакой женщины в красном.'); }
      else if ((t >= 18 && t <= 21)) g.notify('Соседка выносит мусор. Ничего существенного.');
      else if (t >= 330 && t <= 334) g.notify('Робот-уборщик. Ничего существенного.');
      else g.notify('В кадре пусто. Отмечать нечего.');
    },
  };
  ui.keyHook = e => { if (e.code === 'Space') { setSp(speed ? 0 : 0.25); return true; } if (e.code === 'ArrowRight') { t = Math.min(360, t + 0.5); sl.value = String(t); return true; } if (e.code === 'ArrowLeft') { t = Math.max(0, t - 0.5); sl.value = String(t); return true; } return false; };
  draw(); g.audio.sfx('open');
}
