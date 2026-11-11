import '@fontsource/exo-2/400.css';
import '@fontsource/exo-2/600.css';
import '@fontsource/russo-one/400.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/700.css';
import './style.css';
import { Game } from './game/game';

async function boot() {
  // canvas textures (neon signs) need the webfonts ready before first draw
  const sample = 'NEON VEIL Память Ж';
  try {
    await Promise.all([
      document.fonts.load('400 96px "Russo One"', sample), document.fonts.load('400 20px "Exo 2"', sample), document.fonts.load('600 30px "Exo 2"', sample),
      document.fonts.load('400 20px "JetBrains Mono"', sample), document.fonts.load('700 26px "JetBrains Mono"', sample),
    ]);
  } catch { /* fall back to system fonts */ }
  try { (window as any).__nv = new Game(); }
  catch (e) {
    console.error(e);
    document.getElementById('ui')!.innerHTML = `<div id="overlay" class="on"><div class="panel" style="width:min(44rem,90vw)">
      <div class="phead"><h2><small>ошибка запуска</small>ГРАФИКА НЕДОСТУПНА</h2></div>
      <p style="line-height:1.7;margin-bottom:1rem">Браузер не дал игре доступ к 3D-графике (WebGL отключён или не поддерживается). NEON VEIL без него не запустится.</p>
      <p class="hint" style="font-size:.95rem;line-height:1.8">1. Откройте <b>chrome://gpu</b> — в строке WebGL должно быть «Hardware accelerated».<br>
      2. Включите <b>chrome://flags/#ignore-gpu-blocklist</b> и перезапустите браузер.<br>
      3. Обновите драйвер видеокарты.<br>4. Не запускайте через удалённый рабочий стол или виртуальную машину.<br>5. Попробуйте другой браузер: Edge или Firefox.</p>
      <p class="hint" style="margin-top:1rem">Техническая причина: ${String((e as any)?.message ?? e).replace(/[<>&]/g, '')}</p></div></div>`;
  }
}
boot();
