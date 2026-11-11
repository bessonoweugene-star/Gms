import type { Game } from '../game/game';
import { NPCS, ITEMS, ENTS, RELS, DEDUCTIONS, QUESTS, MEMS, ZONES } from '../game/data';
import type { Ending } from '../game/story';
import { openHack, openCCTV } from './minigames';

const esc = (s: string) => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]!));
const ICONS: Record<string, string> = {
  doc: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/></svg>',
  shard: '<svg viewBox="0 0 24 24"><path d="M12 2l6 7-6 13-6-13z"/><path d="M6 9h12M12 2v20"/></svg>',
  key: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="1"/><path d="M7 10h4v4H7zM14 11h4M14 14h3"/></svg>',
  tool: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/></svg>',
  badge: '<svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M12 8l1.2 2.6 2.8.3-2 2 .6 2.8L12 14.2 9.4 15.7l.6-2.8-2-2 2.8-.3z"/></svg>',
  vial: '<svg viewBox="0 0 24 24"><path d="M9 2h6M10 2v6l-5 10a3 3 0 003 4h8a3 3 0 003-4l-5-10V2"/><path d="M7.5 15h9"/></svg>',
  photo: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14"/><circle cx="9" cy="11" r="2"/><path d="M3 17l5-4 4 3 3-2 6 4"/></svg>',
  core: '<svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 2v20M3 7l18 10M21 7L3 17"/></svg>',
};
const TONES: Record<string, string> = { friendly: 'дружелюбие', pressure: 'давление', manip: 'манипуляция', bribe: 'подкуп', lie: 'обман', threat: 'угроза' };
const TYPE_RU: Record<string, string> = { person: 'персона', evidence: 'улика', place: 'место', event: 'событие' };
const fmtTime = (s: number) => { const m = Math.floor(s / 60); return (m >= 60 ? Math.floor(m / 60) + 'ч ' : '') + (m % 60) + 'м'; };

export class UI {
  root = document.getElementById('ui')!; hudEl!: HTMLElement; ov!: HTMLElement; dlgEl!: HTMLElement;
  open = false; private name = ''; private closable = true; private onClose: (() => void) | null = null; acts: Record<string, (el: HTMLElement, e: MouseEvent) => void> = {};
  private els: Record<string, HTMLElement> = {}; private subT = 0; private dirty = false;
  private dlgState: { full: string; shown: number; done: boolean; choices: any[]; next: () => void; voice: number; t: number } | null = null;
  keyHook: ((e: KeyboardEvent) => boolean) | null = null;

  constructor(public g: Game) {
    this.root.innerHTML = `
      <div id="hud"><div class="cross"></div><div class="prompt"></div>
        <div class="hud-tl"><div class="hud-loc"></div><div class="hud-obj"></div></div>
        <div class="hud-tr"><div class="hud-cr"></div><div class="hud-keys">TAB журнал · I инвентарь · B доска · M карта · ESC меню</div></div>
        <div class="hud-mem"></div><div class="hud-lock">КЛИК — ЗАХВАТ МЫШИ</div>
        <div class="toasts"></div></div>
      <div class="sub"><b></b><span></span></div><div class="card"><i></i><h1></h1><p></p></div>
      <div id="dlg"></div><div id="overlay"></div>`;
    const q = (s: string) => this.root.querySelector(s) as HTMLElement;
    this.hudEl = q('#hud'); this.ov = q('#overlay'); this.dlgEl = q('#dlg');
    for (const k of ['cross', 'prompt', 'hud-loc', 'hud-obj', 'hud-cr', 'hud-mem', 'hud-lock', 'toasts', 'sub', 'card']) this.els[k] = q('.' + k);
    this.ov.addEventListener('click', e => {
      const el = (e.target as HTMLElement).closest('[data-a]') as HTMLElement | null; if (!el) return;
      const f = this.acts[el.dataset.a!]; if (f) { this.g.audio.sfx('click'); f(el, e); }
    });
    this.ov.addEventListener('mouseover', e => { if ((e.target as HTMLElement).closest('.btn,.ch,.li,.it,.tab')) this.g.audio.sfx('hover'); });
  }

  /* ---------------- HUD ---------------- */
  hud(on: boolean) { this.hudEl.classList.toggle('on', on); }
  update(dt: number) {
    const g = this.g, e = this.els;
    const hide = g.mode !== 'play' || this.open; this.hudEl.classList.toggle('hide', hide);
    const f = g.focus; e.cross.classList.toggle('hot', !!f); e.prompt.classList.toggle('on', !!f);
    if (f) { const l = typeof f.def.label === 'function' ? f.def.label(g) : f.def.label; const h = `<span class="key">E</span>${esc(l)}`; if (e.prompt.innerHTML !== h) e.prompt.innerHTML = h; }
    if ((this.subT -= dt) < 0) e.sub.classList.remove('on');
    if (g.mode === 'play') {
      const loc = g.level.name; if (e['hud-loc'].textContent !== loc) e['hud-loc'].textContent = loc;
      const cr = g.s.credits + ' ₵'; if (e['hud-cr'].textContent !== cr) e['hud-cr'].textContent = cr;
      const st = QUESTS[0].stages.find(s => !s.done(g)); const o = st ? `<b>ДЕЛО ВЕЙНА</b>${esc(st.text)}` : ''; if (e['hud-obj'].innerHTML !== o) e['hud-obj'].innerHTML = o;
      e['hud-obj'].style.display = g.dive ? 'none' : '';
      e['hud-mem'].classList.toggle('on', !!g.dive);
      if (g.dive) e['hud-mem'].textContent = `MEMORY DIVE // деталей: ${g.s.mem[g.dive.id].length}/${MEMS[g.dive.id].total} // [Q] всплыть`;
      e['hud-lock'].classList.toggle('on', !g.locked && !this.open && g.fadeTo === 0);
    }
    // dialogue typewriter
    const d = this.dlgState;
    if (d && !d.done) {
      d.t += dt * 62; const n = Math.min(d.full.length, Math.floor(d.t));
      if (n !== d.shown) { d.shown = n; (this.dlgEl.querySelector('.dtext') as HTMLElement).textContent = d.full.slice(0, n); if (n % 3 === 0) g.audio.sfx('blip', d.voice + (d.full.charCodeAt(n - 1) % 7) * 12); }
      if (n >= d.full.length) this.dlgFinish();
    }
  }
  toast(text: string, kind = 'info') {
    const t = document.createElement('div'); t.className = 'toast ' + kind; t.textContent = text; this.els.toasts.appendChild(t);
    while (this.els.toasts.children.length > 5) this.els.toasts.firstChild!.remove();
    setTimeout(() => t.remove(), 5200);
  }
  subtitle(name: string, text: string, dur = 7) { const s = this.els.sub; s.querySelector('b')!.textContent = name; s.querySelector('span')!.textContent = text; s.classList.add('on'); this.subT = dur; }
  titleCard(name: string, sub: string) { const c = this.els.card; c.querySelector('h1')!.textContent = name; c.querySelector('p')!.textContent = sub; c.classList.remove('on'); void c.offsetWidth; c.classList.add('on'); }

  /* ---------------- overlay core ---------------- */
  show(name: string, html: string, o: { closable?: boolean; clear?: boolean; onClose?: () => void } = {}) {
    this.onClose?.(); this.onClose = o.onClose ?? null; this.keyHook = null;
    this.name = name; this.closable = o.closable !== false; this.ov.innerHTML = html; this.ov.className = 'on' + (o.clear ? ' clear' : ''); this.open = true; this.g.unlock();
  }
  closeAll() {
    if (!this.open) return; const cb = this.onClose; this.onClose = null; cb?.();
    this.open = false; this.name = ''; this.ov.className = ''; this.ov.innerHTML = ''; this.keyHook = null; this.acts = {};
    if (this.g.mode === 'play') this.g.lock();
  }
  private close() { this.g.audio.sfx('close'); this.closeAll(); if (this.g.mode === 'menu') this.mainMenu(); }
  private head(small: string, title: string) { return `<div class="phead"><h2><small>${small}</small>${title}</h2>${this.closable ? '<button class="x" data-a="close">ESC — ЗАКРЫТЬ</button>' : ''}</div>`; }
  onKey(e: KeyboardEvent): boolean {
    if (this.open) {
      if (this.keyHook?.(e)) return true;
      const tog: Record<string, string> = { Tab: 'journal', KeyJ: 'journal', KeyI: 'inventory', KeyB: 'board', KeyM: 'map' };
      if (e.code === 'Escape' || tog[e.code] === this.name) { if (this.closable) { if (this.name === 'sub') this.backFromSub(); else this.close(); } }
      return true;
    }
    if (this.dlgState) {
      const d = this.dlgState;
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'KeyE') { if (!d.done) this.dlgFinish(); else if (!d.choices.length) d.next(); }
      else if (d.done && /^Digit[1-9]$/.test(e.code)) { const c = d.choices[+e.code.slice(5) - 1]; if (c && c.afford) { this.g.audio.sfx('click'); c.pick(); } }
      return true;
    }
    return false;
  }
  private subBack: (() => void) | null = null;
  private backFromSub() { const b = this.subBack; this.subBack = null; this.g.audio.sfx('close'); b ? b() : this.close(); }

  /* ---------------- menus ---------------- */
  mainMenu() {
    const g = this.g; const has = ['auto', 'quick', '1', '2', '3'].some(s => g.saveMeta(s));
    this.show('main', `<div class="menu">
      <div class="logo">NEON<br><span>VEIL</span></div><div class="tagline">Vesper City • 2091 • детектив памяти</div>
      ${has ? '<button class="btn pri" data-a="cont">Продолжить</button>' : ''}
      <button class="btn ${has ? '' : 'pri'}" data-a="new">Новое дело</button>
      <button class="btn" data-a="load" ${has ? '' : 'disabled'}>Загрузить</button>
      <button class="btn" data-a="set">Настройки</button><button class="btn" data-a="how">Управление</button>
      <div class="foot">Кампания ≈ 40 минут • 7 концовок • сохранение — в браузере<br>Рекомендуется играть в наушниках и в полноэкранном режиме (F11)</div></div>`, { closable: false, clear: true });
    this.acts = {
      new: () => { g.audio.start(); this.closeAll(); g.newGame(); },
      cont: () => { g.audio.start(); const best = ['auto', 'quick', '1', '2', '3'].map(s => [s, g.saveMeta(s)] as const).filter(x => x[1]).sort((a, b) => b[1].time - a[1].time)[0]; g.load(best[0]); },
      load: () => this.saves('load', () => this.mainMenu()), set: () => this.settings(() => this.mainMenu()), how: () => this.controls(() => this.mainMenu()),
    };
  }
  pause() {
    const g = this.g; if (g.mode !== 'play') return;
    this.show('pause', `<div class="panel" style="width:24rem">${this.head('NEON VEIL', 'ПАУЗА')}
      <div style="display:flex;flex-direction:column;gap:.5rem">
      <button class="btn pri" data-a="close">Продолжить</button><button class="btn" data-a="save" ${g.dive ? 'disabled' : ''}>Сохранить</button><button class="btn" data-a="load">Загрузить</button>
      <button class="btn" data-a="set">Настройки</button><button class="btn" data-a="how">Управление</button><button class="btn" data-a="menu">Выйти в главное меню</button></div></div>`);
    this.acts = { close: () => this.close(), save: () => this.saves('save', () => this.pause()), load: () => this.saves('load', () => this.pause()), set: () => this.settings(() => this.pause()), how: () => this.controls(() => this.pause()), menu: () => { g.save('auto'); g.toMenu(); } };
  }
  controls(back: () => void) {
    this.show('sub', `<div class="panel" style="width:36rem">${this.head('справка', 'УПРАВЛЕНИЕ')}<div class="kv">
      ${[['W A S D', 'движение'], ['SHIFT', 'бег'], ['МЫШЬ', 'обзор'], ['E', 'взаимодействие / осмотр / разговор'], ['TAB', 'журнал расследования'], ['I', 'инвентарь (использование шардов)'], ['B', 'доска расследования'], ['M', 'карта города'], ['Q', 'всплыть из воспоминания'], ['1–9', 'выбор реплики'], ['F5', 'быстрое сохранение'], ['ESC', 'пауза / закрыть окно']].map(([k, v]) => `<span class="key">${k}</span><span>${v}</span>`).join('')}
      </div><p class="hint" style="margin-top:1.2rem">Перемещение между районами — через станции транзита (метро / монорельс). Собирайте улики, связывайте их на доске и выбирайте рабочую гипотезу: от неё зависит, что вам скажут люди — и чем всё кончится. Игра не подсказывает, правы ли вы.</p></div>`);
    this.subBack = back; this.acts = { close: () => this.backFromSub() };
  }
  settings(back: () => void) {
    const g = this.g, s = g.settings; const before = JSON.stringify([s.quality, s.reflections]);
    const sl = (k: string, label: string, min: number, max: number, step: number, fmt: (v: number) => string) => `<label>${label}</label><input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${(s as any)[k]}"><output>${fmt((s as any)[k])}</output>`;
    const pct = (v: number) => Math.round(v * 100) + '%';
    const render = () => {
      this.show('sub', `<div class="panel">${this.head('система', 'НАСТРОЙКИ')}<div class="set">
        ${sl('master', 'Общая громкость', 0, 1, 0.05, pct)}${sl('music', 'Музыка', 0, 1, 0.05, pct)}${sl('sfx', 'Эффекты и среда', 0, 1, 0.05, pct)}
        ${sl('sens', 'Чувствительность мыши', 0.3, 2.5, 0.1, v => v.toFixed(1))}${sl('fov', 'Угол обзора', 55, 95, 1, v => v + '°')}
        <label>Качество рендера</label><div class="seg">${(['low', 'med', 'high'] as const).map(q => `<button data-a="q" data-v="${q}" class="${s.quality === q ? 'on' : ''}">${{ low: 'Низкое', med: 'Среднее', high: 'Высокое' }[q]}</button>`).join('')}</div><output></output>
        <label>Отражения на мокрых поверхностях</label><div class="seg"><button data-a="refl" data-v="1" class="${s.reflections ? 'on' : ''}">Вкл</button><button data-a="refl" data-v="" class="${!s.reflections ? 'on' : ''}">Выкл</button></div><output></output>
        <label>Свечение неона (bloom)</label><div class="seg"><button data-a="bloom" data-v="1" class="${s.bloom ? 'on' : ''}">Вкл</button><button data-a="bloom" data-v="" class="${!s.bloom ? 'on' : ''}">Выкл</button></div><output></output>
        </div><p class="hint" style="margin-top:1.2rem">Если игра идёт рывками — отключите отражения и понизьте качество.</p></div>`,
        { onClose: () => { if (JSON.stringify([s.quality, s.reflections]) !== before && !g.dive) g.rebuildZone(); } });
      this.subBack = back;
      this.ov.querySelectorAll('input[type=range]').forEach(inp => inp.addEventListener('input', () => { const i = inp as HTMLInputElement; (s as any)[i.dataset.k!] = +i.value; const f = ({ master: pct, music: pct, sfx: pct, sens: (v: number) => v.toFixed(1), fov: (v: number) => v + '°' } as any)[i.dataset.k!]; (i.nextElementSibling as HTMLElement).textContent = f(+i.value); g.applySettings(); }));
      this.acts = { close: () => this.backFromSub(), q: el => { s.quality = el.dataset.v as any; g.applySettings(); const oc = this.onClose; this.onClose = null; render(); this.onClose = oc; }, refl: el => { s.reflections = !!el.dataset.v; g.applySettings(); const oc = this.onClose; this.onClose = null; render(); this.onClose = oc; }, bloom: el => { s.bloom = !!el.dataset.v; g.applySettings(); const oc = this.onClose; this.onClose = null; render(); this.onClose = oc; } };
    };
    render();
  }
  saves(mode: 'save' | 'load', back: () => void) {
    const g = this.g; const slots = mode === 'save' ? ['1', '2', '3'] : ['auto', 'quick', '1', '2', '3'];
    const nm: Record<string, string> = { auto: 'АВТО', quick: 'БЫСТРОЕ', 1: 'СЛОТ 1', 2: 'СЛОТ 2', 3: 'СЛОТ 3' };
    this.show('sub', `<div class="panel">${this.head(mode === 'save' ? 'запись' : 'чтение', mode === 'save' ? 'СОХРАНИТЬ ДЕЛО' : 'ЗАГРУЗИТЬ ДЕЛО')}
      ${slots.map(s => { const m = g.saveMeta(s); return `<button class="slot" data-a="slot" data-s="${s}" ${mode === 'load' && !m ? 'disabled' : ''}><b>${nm[s]}</b><span>${m ? esc(m.zone) + ` • улик: ${m.clues}` : '— пусто —'}</span><small>${m ? fmtTime(m.time) + ' • ' + m.date : ''}</small></button>`; }).join('')}</div>`);
    this.subBack = back;
    this.acts = { close: () => this.backFromSub(), slot: el => { const s = el.dataset.s!; if (mode === 'save') { if (g.save(s)) { this.toast('Дело сохранено: ' + nm[s], 'item'); g.audio.sfx('ok'); this.saves(mode, back); } } else g.load(s); } };
  }

  /* ---------------- journal ---------------- */
  private jTab = 'tasks'; private jSel = '';
  journal(tab?: string) {
    const g = this.g; if (tab) this.jTab = tab; const T = this.jTab;
    const tabs = [['tasks', 'Задачи'], ['clues', 'Улики'], ['people', 'Досье'], ['log', 'Хроника']];
    let body = '';
    if (T === 'tasks') {
      body = '<div class="scroll">' + QUESTS.filter(q => !q.visible || q.visible(g)).map(q => {
        let seenOpen = false;
        return `<div class="quest ${q.main ? '' : 'side'}"><h4>${q.main ? '' : 'ПОБОЧНОЕ • '}${q.title}</h4>${q.stages.map(s => { const d = s.done(g); if (!d && seenOpen && q.main) return ''; if (!d) seenOpen = true; return `<div class="st ${d ? 'done' : ''}">${esc(s.text)}</div>`; }).join('')}</div>`;
      }).join('') + `<p class="hint">Рабочая гипотеза: ${g.s.theory ? esc(DEDUCTIONS.find(d => d.id === g.s.theory)!.theory!) : 'не выбрана — откройте доску [B].'}</p></div>`;
    } else if (T === 'clues' || T === 'people') {
      const list = g.s.clues.filter(c => (ENTS[c].type === 'person') === (T === 'people'));
      if (!list.includes(this.jSel)) this.jSel = list[0] ?? '';
      const sel = this.jSel; let det = '<p class="hint">Пока пусто.</p>';
      if (sel) {
        const e = ENTS[sel];
        if (T === 'people') { const id = sel.slice(2), n = NPCS[id]; det = `<h3>${n.name}</h3><div class="role">${n.role}${id !== 'noah' && g.s.npc[id] ? ' • доверие: ' + ['враждебно', 'холодно', 'настороженно', 'нейтрально', 'расположен', 'доверяет', 'доверяет', 'предан', 'предан'][Math.max(0, Math.min(8, g.s.npc[id].trust + 3))] : ''}</div>` + n.bio.filter(b => !b[0] || g.knows(b[0])).map(b => `<p class="${b[0] ? 'new' : ''}">${b[1]}</p>`).join(''); }
        else {
          let extra = ''; const mem = Object.entries(MEMS).find(m => m[1].clue === sel);
          if (mem) { const v = g.flag(mem[0] + '_verdict'); extra = `<p class="new">Изучено деталей: ${(g.s.mem[mem[0]] ?? []).length}/${mem[1].total}.${v ? ' Мой вердикт: <b>' + (v === 'fake' ? 'ПОДДЕЛКА' : 'ПОДЛИННОЕ') + '</b>.' : mem[0] === 'mem_noah' ? '' : ' Вердикт не вынесен.'}</p>`; }
          det = `<h3>${e.title}</h3><div class="role">${TYPE_RU[e.type]}</div><p>${e.text}</p>${extra}`;
        }
      }
      body = `<div class="split"><div class="scroll">${list.map(c => `<button class="li ${c === sel ? 'on' : ''}" data-a="sel" data-id="${c}"><small>${T === 'people' ? NPCS[c.slice(2)].role : TYPE_RU[ENTS[c].type]}</small>${ENTS[c].title}</button>`).join('')}</div><div class="detail scroll">${det}</div></div>`;
    } else body = '<div class="scroll">' + (g.s.log.length ? g.s.log.slice().reverse().map(l => `<div class="logl">${esc(l)}</div>`).join('') : '<p class="hint">Записей нет.</p>') + '</div>';
    this.show('journal', `<div class="panel jr">${this.head(`дело № 2091-114 • ${fmtTime(g.s.time)} в игре`, 'ЖУРНАЛ РАССЛЕДОВАНИЯ')}<div class="tabs">${tabs.map(t => `<button class="tab ${t[0] === T ? 'on' : ''}" data-a="tab" data-t="${t[0]}">${t[1]}</button>`).join('')}<button class="tab" data-a="board" style="margin-left:auto;color:var(--m)">Доска [B] ▸</button></div>${body}</div>`);
    this.acts = { close: () => this.close(), tab: el => this.journal(el.dataset.t), sel: el => { this.jSel = el.dataset.id!; this.journal(); }, board: () => this.openBoard() };
    g.audio.sfx('open');
  }

  /* ---------------- inventory ---------------- */
  private iSel = '';
  inventory() {
    const g = this.g; if (!g.s.inv.includes(this.iSel)) this.iSel = g.s.inv[0] ?? ''; const it = ITEMS[this.iSel];
    this.show('inventory', `<div class="panel jr">${this.head(`кредиты: ${g.s.credits} ₵`, 'ИНВЕНТАРЬ')}<div class="split"><div class="scroll"><div class="inv">${g.s.inv.map(i => `<button class="it ${i === this.iSel ? 'on' : ''} ${ITEMS[i].use ? 'use' : ''}" data-a="sel" data-id="${i}" title="${ITEMS[i].name}">${ICONS[ITEMS[i].icon]}</button>`).join('')}</div></div>
      <div class="detail scroll">${it ? `<h3>${it.name}</h3><div class="role">${{ doc: 'документ', shard: 'мнемо-шард', key: 'доступ', tool: 'оборудование', badge: 'удостоверение', vial: 'медикаменты', photo: 'фотография', core: 'носитель данных' }[it.icon]}</div><p>${it.desc}</p>${it.use ? `<button class="btn pri" data-a="use" style="margin-top:1rem">${it.use.startsWith('dive') ? 'Погрузиться в воспоминание' : 'Использовать'}</button>` : ''}` : ''}</div></div></div>`);
    this.acts = { close: () => this.close(), sel: el => { this.iSel = el.dataset.id!; this.inventory(); }, use: () => g.useItem(this.iSel) };
    g.audio.sfx('open');
  }

  /* ---------------- investigation board ---------------- */
  private bSel = ''; private bScroll: [number, number] = [0, 0];
  openBoard() {
    const g = this.g, B = g.s.board;
    const theories = DEDUCTIONS.filter(d => d.theory && g.ded(d.id));
    const selE = this.bSel && ENTS[this.bSel];
    const lines = B.links.filter(l => B.pos[l.a] && B.pos[l.b]).map(l => { const a = B.pos[l.a], b = B.pos[l.b], r = RELS[l.rel]; const x1 = a[0] + 84, y1 = a[1] + 22, x2 = b[0] + 84, y2 = b[1] + 22; return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${r.color}" stroke-width="2" stroke-opacity=".85"/><text x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 4}" fill="${r.color}" text-anchor="middle" data-a="unlink" data-p="${l.a}|${l.b}">${r.label} ✕</text>`; }).join('');
    this.show('board', `<div class="panel bd">${this.head('соединяйте факты • стройте версии • ошибаться можно, но дорого', 'ДОСКА РАССЛЕДОВАНИЯ')}<div class="bd-body">
      <div class="bd-wrap"><div class="bd-canvas"><svg>${lines}</svg>${g.s.clues.map(c => { const p = B.pos[c], e = ENTS[c]; return `<div class="nd ${e.type} ${c === this.bSel ? 'sel' : ''}" data-id="${c}" style="left:${p[0]}px;top:${p[1]}px"><small>${TYPE_RU[e.type]}</small>${e.title}</div>`; }).join('')}</div></div>
      <div class="bd-side"><div class="bd-info">${selE ? `<b>${selE.title}</b>${selE.text}<p class="hint" style="margin-top:.5rem">Теперь выберите вторую карточку, чтобы провести связь.</p>` : '<span class="hint">Нажмите на карточку, затем на вторую — и укажите тип связи. Карточки можно перетаскивать. Щелчок по подписи связи удаляет её.<br><br>Осмысленные связи рождают <b style="display:inline;color:var(--m)">версии</b>. Версии могут быть ложными.</span>'}</div>
        <div class="scroll" style="flex:1"><h4>ВЕРСИИ (${g.s.deds.length})</h4>${g.s.deds.length ? g.s.deds.map(id => { const d = DEDUCTIONS.find(x => x.id === id)!; return `<div class="dd"><b>${d.title}</b>${d.text}</div>`; }).join('') : '<p class="hint">Пока ни одной. Сопоставьте улики, которые подтверждают или опровергают друг друга.</p>'}
        <h4 style="margin-top:1rem;color:var(--a)">РАБОЧАЯ ГИПОТЕЗА: ЧТО СЛУЧИЛОСЬ С ЭЛИАСОМ?</h4>${theories.length ? theories.map(d => `<button class="th ${g.s.theory === d.id ? 'on' : ''}" data-a="theory" data-id="${d.id}">${d.theory}</button>`).join('') + '<p class="hint">Гипотеза открывает новые реплики и действия. Никто не скажет вам, верна ли она.</p>' : '<p class="hint">Нужна хотя бы одна версия о судьбе Элиаса.</p>'}</div></div></div></div>`);
    const wrap = this.ov.querySelector('.bd-wrap') as HTMLElement, cv = this.ov.querySelector('.bd-canvas') as HTMLElement;
    wrap.scrollLeft = this.bScroll[0]; wrap.scrollTop = this.bScroll[1];
    const keep = () => { this.bScroll = [wrap.scrollLeft, wrap.scrollTop]; };
    this.acts = {
      close: () => { keep(); this.bSel = ''; this.close(); },
      unlink: el => { const [a, b] = el.dataset.p!.split('|'); g.removeLink(a, b); keep(); this.openBoard(); },
      theory: el => { g.setTheory(el.dataset.id!); keep(); this.openBoard(); },
      rel: el => { g.addLink(el.dataset.x!, el.dataset.y!, el.dataset.r!); this.bSel = ''; keep(); this.openBoard(); }, relx: () => { this.bSel = ''; keep(); this.openBoard(); },
    };
    // drag + select
    cv.addEventListener('mousedown', e => {
      const nd = (e.target as HTMLElement).closest('.nd') as HTMLElement | null; if (!nd) return; e.preventDefault();
      const id = nd.dataset.id!, p = B.pos[id], sx = e.clientX, sy = e.clientY, ox = p[0], oy = p[1]; let moved = false;
      const mv = (ev: MouseEvent) => { const dx = ev.clientX - sx, dy = ev.clientY - sy; if (Math.abs(dx) + Math.abs(dy) > 4) moved = true; if (moved) { p[0] = Math.max(0, Math.min(1330, ox + dx)); p[1] = Math.max(0, Math.min(1190, oy + dy)); nd.style.left = p[0] + 'px'; nd.style.top = p[1] + 'px'; } };
      const up = (ev: MouseEvent) => {
        removeEventListener('mousemove', mv); removeEventListener('mouseup', up); keep();
        if (moved) return this.openBoard();
        g.audio.sfx('click');
        if (!this.bSel || this.bSel === id) { this.bSel = this.bSel === id ? '' : id; return this.openBoard(); }
        const r = wrap.getBoundingClientRect(); const pk = document.createElement('div'); pk.className = 'relpick';
        pk.style.left = Math.min(ev.clientX - r.left + wrap.scrollLeft, wrap.scrollLeft + r.width - 240) + 'px'; pk.style.top = Math.min(ev.clientY - r.top + wrap.scrollTop, wrap.scrollTop + r.height - 260) + 'px';
        pk.innerHTML = `<span class="hint" style="padding:.2rem .5rem">${ENTS[this.bSel].title} ↔ ${ENTS[id].title}</span>` + Object.entries(RELS).map(([k, v]) => `<button data-a="rel" data-x="${this.bSel}" data-y="${id}" data-r="${k}" style="border-color:${v.color};color:${v.color}">${v.label}</button>`).join('') + '<button data-a="relx" style="border-color:#555;color:#888">отмена</button>';
        wrap.querySelector('.relpick')?.remove(); wrap.appendChild(pk);
      };
      addEventListener('mousemove', mv); addEventListener('mouseup', up);
    });
    g.audio.sfx('open');
  }

  /* ---------------- map ---------------- */
  map(travel: boolean) {
    const g = this.g; if (g.dive) return;
    const zs = Object.entries(ZONES);
    const lines = zs.map(([id, z]) => id === 'central' ? '' : `<line x1="50%" y1="46%" x2="${z.x}%" y2="${z.y}%" stroke="#6fe0ff" stroke-opacity=".45" stroke-dasharray="6 6"/>`).join('');
    let grid = ''; for (let i = 0; i < 26; i++) grid += `<rect x="${(i * 37) % 100}%" y="${(i * 53) % 100}%" width="${4 + (i % 4) * 3}%" height="${3 + (i % 3) * 4}%" fill="none" stroke="#6fe0ff" stroke-opacity=".08"/>`;
    this.show('map', `<div class="panel mapw">${this.head(travel ? 'транзитная сеть • выберите станцию' : 'перемещение — через станции транзита', 'VESPER CITY')}<div class="map"><svg>${grid}${lines}</svg>
      ${zs.map(([id, z]) => { const cur = id === g.s.zone; return `<${travel && !cur ? 'button data-a="go"' : 'div'} class="zn ${cur ? 'cur' : ''}" data-z="${id}" style="left:${z.x}%;top:${z.y}%"><b>${z.name}</b><small>${cur ? '● вы здесь' : z.desc}</small></${travel && !cur ? 'button' : 'div'}>`; }).join('')}</div></div>`);
    this.acts = { close: () => this.close(), go: el => g.travel(el.dataset.z!) };
    g.audio.sfx('open');
  }

  /* ---------------- documents / examine / choice ---------------- */
  doc(title: string, html: string) { this.show('doc', `<div class="panel doc">${this.head('документ', title)}<div class="body scroll">${html}</div></div>`); this.acts = { close: () => this.close() }; }
  examine(title: string, html: string) { this.show('doc', `<div class="panel exm">${this.head('осмотр', title)}<div class="body scroll" style="font-size:1.05rem;line-height:1.65">${html}</div></div>`); this.acts = { close: () => this.close() }; }
  choice(text: string, opts: [string, () => void][]) {
    this.show('choice', `<div class="panel exm"><p style="font-size:1.08rem;line-height:1.6;margin-bottom:1.2rem">${text}</p><div style="display:flex;flex-direction:column;gap:.5rem">${opts.map((o, i) => `<button class="btn ${i === 0 ? 'pri' : ''}" data-a="o" data-i="${i}">${o[0]}</button>`).join('')}</div></div>`);
    this.acts = { o: el => { const f = opts[+el.dataset.i!][1]; this.closeAll(); f(); }, close: () => this.close() };
  }
  hack(o: any) { openHack(this, o); }
  cctv() { openCCTV(this); }

  /* ---------------- memory verdict & sequence ---------------- */
  verdict(id: string, found: number, total: number, cb: (v: string | null) => void) {
    this.show('verdict', `<div class="panel vd">${this.head('memory dive • экспертиза', MEMS[id].title.toUpperCase())}
      <p>Изучено деталей: <b>${found} из ${total}</b>. ${found < 3 ? 'Вы почти ничего не осмотрели — вердикт будет догадкой.' : ''}</p>
      <p>Воспоминания подделывают. Вердикт останется в деле и повлияет на то, каким версиям вы сможете доверять. Что это за запись?</p>
      <div class="row"><button class="btn" data-a="v" data-v="real">Подлинное воспоминание</button><button class="btn pri" data-a="v" data-v="fake">Подделка / монтаж</button><button class="btn" data-a="close">Вернуться и осмотреться</button></div></div>`);
    this.acts = { v: el => cb(el.dataset.v!), close: () => { this.close(); cb(null); } };
  }
  sequence(cb: (order: string[]) => void) {
    const fr: [string, string][] = [['n_chair', 'Я в кресле. Надо мной — молодой инженер.'], ['n_fire', 'Зал. Тридцать одно кресло. Дым.'], ['n_deal', 'Крейн протягивает планшет с договором.'], ['n_girl', 'Я несу на руках девушку с браслетом М-12.']];
    let order: string[] = [];
    const render = () => {
      this.show('verdict', `<div class="panel vd" style="width:min(52rem,92vw)">${this.head('memory dive • реконструкция', 'ЧТО БЫЛО СНАЧАЛА?')}<p>Оригинал повреждён: фрагменты всплыли вперемешку. Восстановите порядок событий той ночи. От того, как вы их сложите, зависит, что вы будете помнить о себе.</p>
        <div class="seq">${fr.map(f => { const i = order.indexOf(f[0]); return `<button data-a="p" data-id="${f[0]}" class="${i >= 0 ? 'pk' : ''}">${i >= 0 ? `<em>${i + 1}</em>` : ''}${f[1]}</button>`; }).join('')}</div>
        <div class="row"><button class="btn pri" data-a="ok" ${order.length < 4 ? 'disabled' : ''}>Так всё и было</button><button class="btn" data-a="rs">Сбросить</button></div></div>`, { closable: false });
      this.acts = { p: el => { const id = el.dataset.id!; order = order.includes(id) ? order.filter(x => x !== id) : [...order, id]; render(); }, rs: () => { order = []; render(); }, ok: () => cb(order) };
    };
    render();
  }

  /* ---------------- dialogue ---------------- */
  dialogue(who: string, text: string, inner: boolean, choices: any[], next: () => void, voice: number) {
    this.dlgEl.className = 'on';
    this.dlgEl.innerHTML = `<div class="dbox"><div class="dwho ${inner ? 'in' : ''}">${who}</div><div class="dtext ${inner ? 'in' : ''}"></div><div class="dch"></div></div>`;
    this.dlgState = { full: text, shown: 0, done: false, choices, next, voice, t: 0 };
    (this.dlgEl.querySelector('.dtext') as HTMLElement).onclick = () => { const d = this.dlgState!; if (!d.done) this.dlgFinish(); else if (!d.choices.length) d.next(); };
  }
  private dlgFinish() {
    const d = this.dlgState!; d.done = true; (this.dlgEl.querySelector('.dtext') as HTMLElement).textContent = d.full;
    const box = this.dlgEl.querySelector('.dch') as HTMLElement;
    if (!d.choices.length) { box.innerHTML = '<div class="dnext">ПРОБЕЛ — ДАЛЕЕ ▸</div>'; return; }
    box.innerHTML = d.choices.map((c, i) => `<button class="ch" data-i="${i}" ${c.afford ? '' : 'disabled'}><i>${i + 1}</i>${c.tone ? `<span class="tone ${c.tone}">${TONES[c.tone]}${c.cost ? ' −' + c.cost + '₵' : ''}</span>` : c.cost ? `<span class="tone bribe">−${c.cost}₵</span>` : ''}<span>${esc(c.t)}</span></button>`).join('');
    box.querySelectorAll('.ch').forEach(b => { (b as HTMLElement).onclick = () => { this.g.audio.sfx('click'); d.choices[+(b as HTMLElement).dataset.i!].pick(); }; (b as HTMLElement).onmouseenter = () => this.g.audio.sfx('hover'); });
  }
  closeDialogue() { this.dlgEl.className = ''; this.dlgEl.innerHTML = ''; this.dlgState = null; }

  /* ---------------- ending ---------------- */
  ending(E: Ending) {
    const g = this.g; const total = Object.keys(ENTS).length;
    this.hud(false);
    this.show('end', `<div class="panel end scroll" style="display:block"><div class="es" style="color:${E.color}">${E.sub}</div><h1 style="color:${E.color};text-shadow:0 0 2rem ${E.color}">${E.title}</h1>
      ${E.paras.map((p, i) => `<p style="animation-delay:${i * 0.5}s">${p}</p>`).join('')}
      ${E.truth ? `<div class="truth"><b>ЧЕГО ВЫ НЕ УЗНАЛИ / ЧТО ВЫ СДЕЛАЛИ</b>${E.truth}</div>` : ''}
      <div class="stats"><div><b>${fmtTime(g.s.time)}</b><small>время дела</small></div><div><b>${g.s.clues.length}/${total}</b><small>фактов на доске</small></div><div><b>${g.s.deds.length}/${DEDUCTIONS.length}</b><small>версий построено</small></div><div><b>${Object.values(g.s.mem).reduce((a, b) => a + b.length, 0)}/18</b><small>деталей памяти</small></div></div>
      <p class="hint">В этой истории семь развязок. Другие версии, другие союзники и другое отношение к собственной памяти приведут к иному финалу.</p>
      <div class="row" style="margin-top:1rem"><button class="btn pri" data-a="menu">В главное меню</button><button class="btn" data-a="load">Загрузить сохранение</button></div></div>`, { closable: false });
    this.acts = { menu: () => g.toMenu(), load: () => this.saves('load', () => this.ending(E)) };
  }
}
