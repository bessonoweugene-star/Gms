import type { Game } from './game';
import type { Ending } from './story';

const esc = (s: string) => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]!));
export class UI {
  root = document.getElementById('ui')!; open = false; private name = ''; private closable = true; private acts: Record<string, (el: HTMLElement) => void> = {};
  private e: Record<string, HTMLElement> = {}; private subT = 0; private back: (() => void) | null = null;
  private dlg: { full: string; n: number; t: number; done: boolean; ch: any[]; next: () => void; voice: number } | null = null;
  constructor(public g: Game) {
    this.root.innerHTML = `
      <div class="mask"><div class="glass"></div><div class="smear"></div><div class="fog"></div>
        <svg class="scr" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M12 30 L31 22 M68 12 L74 31 M80 70 L92 62 M20 80 L27 91 M45 8 L52 14 M58 88 L71 84" /></svg><div class="rim"></div></div>
      <div class="choke"></div>
      <div id="hud"><div class="cross"></div><div class="prompt"></div>
        <div class="obj"><b>ЗАДАЧА</b><span></span></div>
        <div class="stat"><div class="row fl"><i>ФИЛЬТР</i><b class="ft"></b><em class="fs"></em></div><div class="row"><i>ФОНАРЬ</i><span class="bar"><u class="bt"></u></span></div><div class="row"><i>ТУШЁНКА</i><b class="cn"></b></div></div>
        <div class="keys">F фонарь · R динамо · G противогаз · T протереть · TAB блокнот</div>
        <div class="lock">КЛИК — ЗАХВАТ МЫШИ</div><div class="toasts"></div></div>
      <div class="sub"><b></b><span></span></div><div class="card"><h1></h1><p></p></div><div id="dlg"></div><div id="ov"></div>`;
    for (const k of ['mask', 'smear', 'fog', 'choke', 'cross', 'prompt', 'obj', 'stat', 'ft', 'fs', 'bt', 'cn', 'lock', 'toasts', 'sub', 'card', 'fl']) this.e[k] = this.root.querySelector('.' + k) as HTMLElement;
    this.e.hud = this.root.querySelector('#hud') as HTMLElement; this.e.dlg = this.root.querySelector('#dlg') as HTMLElement; this.e.ov = this.root.querySelector('#ov') as HTMLElement;
    this.e.ov.addEventListener('click', ev => { const el = (ev.target as HTMLElement).closest('[data-a]') as HTMLElement | null; if (el && this.acts[el.dataset.a!]) { this.g.snd.sfx('click'); this.acts[el.dataset.a!](el); } });
  }
  hud(on: boolean) { this.e.hud.classList.toggle('on', on); }
  wipe() { const m = this.e.mask; m.classList.remove('wiping'); void m.offsetWidth; m.classList.add('wiping'); }
  update(dt: number) {
    const g = this.g, e = this.e, s = g.s, inGame = g.mode === 'play' || g.mode === 'dialogue';
    e.hud.classList.toggle('hide', g.mode !== 'play' || this.open);
    e.mask.classList.toggle('on', s.mask && inGame);
    const br = (Math.sin(g.t * (2 + (1 - s.air) * 3)) * 0.5 + 0.5);
    e.fog.style.opacity = String(0.12 + br * 0.3 + (s.filter < 40 ? 0.25 : 0) + (1 - s.air) * 0.4); e.smear.style.opacity = String(g.smear * 0.9);
    e.choke.style.opacity = String(inGame ? Math.max(0, 1 - s.air) * 1.1 : 0);
    const f = g.focus; e.cross.classList.toggle('hot', !!f); e.prompt.classList.toggle('on', !!f);
    if (f) { const h = `<span class="key">E</span>${esc(typeof f.def.label === 'function' ? f.def.label(g) : f.def.label)}`; if (e.prompt.innerHTML !== h) e.prompt.innerHTML = h; }
    if ((this.subT -= dt) < 0) e.sub.classList.remove('on');
    if (g.mode === 'play') {
      const o = g.objective(), os = e.obj.querySelector('span')!; if (os.textContent !== o) os.textContent = o;
      const ft = s.mask ? g.fmt(s.filter) : 'снят'; if (e.ft.textContent !== ft) e.ft.textContent = ft; const fs = '+' + s.filters; if (e.fs.textContent !== fs) e.fs.textContent = fs;
      e.fl.classList.toggle('low', s.mask && s.filter < 45); e.fl.classList.toggle('act', s.level === 'surface');
      e.bt.style.width = (s.battery * 100) + '%'; e.bt.classList.toggle('low', s.battery < 0.15); e.bt.classList.toggle('on', s.light);
      const cn = String(s.cans); if (e.cn.textContent !== cn) e.cn.textContent = cn;
      e.lock.classList.toggle('on', !g.locked && !this.open && g.fadeTo === 0);
    }
    const d = this.dlg; if (d && !d.done) { d.t += dt * 58; const n = Math.min(d.full.length, Math.floor(d.t)); if (n !== d.n) { d.n = n; (e.dlg.querySelector('.dt') as HTMLElement).textContent = d.full.slice(0, n); if (n % 3 === 0) g.snd.sfx('blip', d.voice + (d.full.charCodeAt(n - 1) % 6) * 14); } if (n >= d.full.length) this.dlgDone(); }
  }
  toast(t: string, kind = 'info') { const el = document.createElement('div'); el.className = 'toast ' + kind; el.textContent = t; this.e.toasts.appendChild(el); while (this.e.toasts.children.length > 4) this.e.toasts.firstChild!.remove(); setTimeout(() => el.remove(), 5200); }
  sub(n: string, t: string, d = 7) { const s = this.e.sub; s.querySelector('b')!.textContent = n; s.querySelector('span')!.textContent = t; s.classList.add('on'); this.subT = d; }
  card(a: string, b: string) { const c = this.e.card; c.querySelector('h1')!.textContent = a; c.querySelector('p')!.textContent = b; c.classList.remove('on'); void c.offsetWidth; c.classList.add('on'); }
  /* ---------- overlay ---------- */
  private show(name: string, html: string, closable = true, cls = '') { this.name = name; this.closable = closable; this.e.ov.innerHTML = html; this.e.ov.className = 'on ' + cls; this.open = true; this.g.unlock(); }
  closeAll() { if (!this.open) return; this.open = false; this.name = ''; this.e.ov.className = ''; this.e.ov.innerHTML = ''; this.acts = {}; this.back = null; if (this.g.mode === 'play') this.g.lock(); }
  private x() { return this.closable ? '<button class="x" data-a="close">ESC</button>' : ''; }
  private close() { const b = this.back; this.back = null; if (b) return b(); this.closeAll(); if (this.g.mode === 'menu') this.menu(); }
  onKey(ev: KeyboardEvent) {
    if (this.open) { if ((ev.code === 'Escape' || (ev.code === 'Tab' && this.name === 'journal') || (ev.code === 'KeyE' && this.name === 'exam')) && this.closable) this.close(); return true; }
    if (this.dlg) { const d = this.dlg; if (ev.code === 'Space' || ev.code === 'Enter' || ev.code === 'KeyE') { if (!d.done) this.dlgDone(); else if (!d.ch.length) d.next(); } else if (d.done && /^Digit[1-9]$/.test(ev.code)) { const c = d.ch[+ev.code.slice(5) - 1]; if (c && c.ok) { this.g.snd.sfx('click'); c.pick(); } } return true; }
    return false;
  }
  menu() {
    const g = this.g, has = g.hasSave();
    this.show('menu', `<div class="menu"><div class="day">ДЕНЬ 47</div><div class="logo">ПЕПЕЛ</div><div class="tag">Москва · октябрь 2026 · под землёй</div>
      ${has ? '<button class="btn pri" data-a="cont">Продолжить</button>' : ''}<button class="btn ${has ? '' : 'pri'}" data-a="new">Новая игра</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="how">Управление</button>
      <div class="foot">≈ 15 минут · 4 концовки · играть в наушниках и в темноте</div></div>`, false, 'left');
    this.acts = { new: () => { g.snd.start(); this.closeAll(); g.newGame(); }, cont: () => { g.snd.start(); g.load(); }, set: () => this.settings(() => this.menu()), how: () => this.how(() => this.menu()) };
  }
  pause() {
    const g = this.g; if (g.mode !== 'play') return;
    this.show('pause', `<div class="panel" style="width:22rem"><h2>ПАУЗА ${this.x()}</h2><div class="col"><button class="btn pri" data-a="close">Продолжить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="how">Управление</button><button class="btn" data-a="menu">В главное меню</button></div><p class="hint">Игра сохраняется автоматически при переходе между локациями.</p></div>`);
    this.acts = { close: () => this.close(), set: () => this.settings(() => this.pause()), how: () => this.how(() => this.pause()), menu: () => { g.save(); g.toMenu(); } };
  }
  how(back: () => void) {
    this.show('sub', `<div class="panel" style="width:34rem"><h2>УПРАВЛЕНИЕ ${this.x()}</h2><div class="kv">${[['W A S D', 'идти'], ['SHIFT', 'бежать'], ['МЫШЬ', 'осматриваться'], ['E', 'действие, разговор, осмотр'], ['F', 'фонарь'], ['R (держать)', 'крутить динамо — заряжать фонарь'], ['G', 'надеть / снять противогаз'], ['T', 'протереть стекло маски'], ['TAB', 'блокнот: задача, записи, вещи'], ['1–9, ПРОБЕЛ', 'выбор реплики, дальше'], ['ESC', 'пауза']].map(r => `<span class="key">${r[0]}</span><span>${r[1]}</span>`).join('')}</div>
      <p class="hint">На поверхности без противогаза — три минуты. Фильтр тоже не вечный: следи за таймером, запасные меняются сами. Тушёнка — здешние деньги.</p></div>`);
    this.back = back; this.acts = { close: () => this.close() };
  }
  settings(back: () => void) {
    const g = this.g, s = g.settings; const was = JSON.stringify([s.quality, s.reflections]);
    const r = () => {
      this.show('sub', `<div class="panel" style="width:36rem"><h2>НАСТРОЙКИ ${this.x()}</h2><div class="set">
        <label>Громкость</label><input type="range" data-k="vol" min="0" max="1" step="0.05" value="${s.vol}">
        <label>Чувствительность мыши</label><input type="range" data-k="sens" min="0.3" max="2.5" step="0.1" value="${s.sens}">
        <label>Угол обзора</label><input type="range" data-k="fov" min="55" max="95" step="1" value="${s.fov}">
        <label>Качество</label><div class="seg">${(['low', 'med', 'high'] as const).map(q => `<button data-a="q" data-v="${q}" class="${s.quality === q ? 'on' : ''}">${{ low: 'Низкое', med: 'Среднее', high: 'Высокое' }[q]}</button>`).join('')}</div>
        <label>Отражения в воде</label><div class="seg"><button data-a="rf" data-v="1" class="${s.reflections ? 'on' : ''}">Вкл</button><button data-a="rf" data-v="" class="${s.reflections ? '' : 'on'}">Выкл</button></div></div></div>`);
      this.back = () => { if (JSON.stringify([s.quality, s.reflections]) !== was && g.s.level === 'tunnel' && g.mode === 'play') { const p = g.player.pos.clone(), y = g.player.yaw; g.loadLevel('tunnel', ''); g.player.pos.copy(p); g.player.yaw = y; } back(); };
      this.e.ov.querySelectorAll('input').forEach(i => i.addEventListener('input', () => { (s as any)[(i as HTMLInputElement).dataset.k!] = +(i as HTMLInputElement).value; g.applySettings(); }));
      this.acts = { close: () => this.close(), q: el => { s.quality = el.dataset.v as any; g.applySettings(); r(); }, rf: el => { s.reflections = !!el.dataset.v; g.applySettings(); r(); } };
    }; r();
  }
  journal() {
    const g = this.g, s = g.s; const items = Object.values(s.items);
    this.show('journal', `<div class="panel book"><h2>БЛОКНОТ МОНТЁРА ${this.x()}</h2><div class="pg"><div class="scroll"><h4>ЗАДАЧА</h4><p class="big">${esc(g.objective())}</p>
      <h4>ПРИ СЕБЕ</h4><p>${items.length ? items.map(esc).join(' · ') : 'ничего особенного'}<br>Тушёнка: ${s.cans} · запасных фильтров: ${s.filters}</p>
      <h4>ПРИМЕТЫ, ЧТО ПЕПЕЛ РЕДЕЕТ</h4><p>${g.proofN() ? '● '.repeat(g.proofN()) + '○ '.repeat(3 - g.proofN()) : 'пока ни одной'}</p></div>
      <div class="scroll"><h4>ЗАПИСИ</h4>${s.notes.length ? s.notes.slice().reverse().map(n => `<p class="nt">${esc(n)}</p>`).join('') : '<p class="hint">Пусто.</p>'}</div></div></div>`);
    this.acts = { close: () => this.close() }; g.snd.sfx('open');
  }
  examine(title: string, html: string, acts?: [string, () => void][]) {
    this.show('exam', `<div class="panel" style="width:min(40rem,90vw)"><h2>${title} ${this.x()}</h2><div class="body scroll">${html}</div>${acts ? `<div class="col" style="margin-top:1.2rem">${acts.map((a, i) => `<button class="btn" data-a="o" data-i="${i}">${a[0]}</button>`).join('')}</div>` : ''}</div>`);
    this.acts = { close: () => this.close(), o: el => { const f = acts![+el.dataset.i!][1]; this.closeAll(); f(); } };
  }
  choice(html: string, opts: [string, () => void][]) {
    this.show('choice', `<div class="panel" style="width:min(36rem,90vw)"><div class="body">${html}</div><div class="col" style="margin-top:1.2rem">${opts.map((o, i) => `<button class="btn ${i ? '' : 'pri'}" data-a="o" data-i="${i}">${o[0]}</button>`).join('')}</div></div>`);
    this.acts = { close: () => this.close(), o: el => { const f = opts[+el.dataset.i!][1]; this.closeAll(); f(); } };
  }
  dialogue(who: string, text: string, ch: any[], next: () => void, voice: number) {
    this.root.classList.add('talk'); this.e.dlg.className = 'on'; this.e.dlg.innerHTML = `<div class="db"><div class="dw">${who}</div><div class="dt"></div><div class="dc"></div></div>`;
    this.dlg = { full: text, n: 0, t: 0, done: false, ch, next, voice }; (this.e.dlg.querySelector('.dt') as HTMLElement).onclick = () => { const d = this.dlg!; if (!d.done) this.dlgDone(); else if (!d.ch.length) d.next(); };
  }
  dlgDone() {
    const d = this.dlg!; d.done = true; (this.e.dlg.querySelector('.dt') as HTMLElement).textContent = d.full; const box = this.e.dlg.querySelector('.dc') as HTMLElement;
    if (!d.ch.length) { box.innerHTML = '<div class="dn">ПРОБЕЛ ▸</div>'; return; }
    box.innerHTML = d.ch.map((c, i) => `<button class="ch" data-i="${i}" ${c.ok ? '' : 'disabled'}><i>${i + 1}</i>${c.tone ? `<span class="tone t-${c.tone}">${c.tone}</span>` : ''}${c.cost ? `<span class="tone t-торг">−${c.cost} туш.</span>` : ''}<span>${esc(c.t)}</span></button>`).join('');
    box.querySelectorAll('.ch').forEach(b => { (b as HTMLElement).onclick = () => { this.g.snd.sfx('click'); d.ch[+(b as HTMLElement).dataset.i!].pick(); }; });
  }
  closeDialogue() { this.root.classList.remove('talk'); this.e.dlg.className = ''; this.e.dlg.innerHTML = ''; this.dlg = null; }
  dead() {
    this.hud(false); this.show('dead', `<div class="panel" style="width:30rem;text-align:center"><h2 style="justify-content:center;color:#c0452a">ТЫ НЕ ДОШЁЛ</h2><div class="body">Пепел не убивает сразу. Сначала першит в горле, потом темнеет по краям. Три минуты — это если не бежать.</div><div class="col" style="margin-top:1.4rem"><button class="btn pri" data-a="l">С последней точки</button><button class="btn" data-a="m">В главное меню</button></div></div>`, false);
    this.acts = { l: () => this.g.load(), m: () => this.g.toMenu() };
  }
  ending(E: Ending) {
    const g = this.g; this.hud(false); const m = Math.floor(g.s.time / 60);
    this.show('end', `<div class="panel end scroll"><div class="es">день 47 · исход</div><h1 style="color:${E.color}">${E.title}</h1><div class="eq">${E.sub}</div>${E.paras.map((p, i) => `<p style="animation-delay:${i * 0.6}s">${p}</p>`).join('')}
      <div class="stats"><div><b>${m} мин</b><small>в пути</small></div><div><b>${g.proofN()}/3</b><small>примет найдено</small></div><div><b>${g.s.notes.length}</b><small>записей</small></div></div>
      <p class="hint">Исходов четыре. На них влияет не только последний разговор: что ты нашёл наверху, кому достался инсулин и о чём договорился на блокпосту.</p>
      <div class="rowb"><button class="btn pri" data-a="m">В главное меню</button><button class="btn" data-a="l">С последней точки</button></div></div>`, false);
    this.acts = { m: () => g.toMenu(), l: () => g.load() };
  }
}
