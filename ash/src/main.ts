import '@fontsource/exo-2/400.css';
import '@fontsource/exo-2/600.css';
import '@fontsource/russo-one/400.css';
import '@fontsource/jetbrains-mono/400.css';
import './ash.css';
import { Game } from './game';

async function boot() {
  const t = 'ПЕПЕЛ Новослободская Ж';
  try { await Promise.all([document.fonts.load('400 72px "Russo One"', t), document.fonts.load('400 20px "Exo 2"', t), document.fonts.load('400 20px "JetBrains Mono"', t)]); } catch { }
  try { (window as any).__ash = new Game(); }
  catch (e) {
    console.error(e);
    document.getElementById('ui')!.innerHTML = `<div id="ov" class="on"><div class="panel" style="width:min(42rem,90vw)"><h2>ГРАФИКА НЕДОСТУПНА</h2><div class="body">Браузер не дал игре доступ к 3D (WebGL выключен).<br><br>1. Откройте <b>chrome://flags/#ignore-gpu-blocklist</b>, включите и перезапустите браузер.<br>2. Обновите драйвер видеокарты.<br>3. Не запускайте через удалённый рабочий стол.<br>4. Попробуйте Edge или Firefox.</div><p class="hint">${String((e as any)?.message ?? e).replace(/[<>&]/g, '')}</p></div></div>`;
  }
}
boot();
