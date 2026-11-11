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
  (window as any).__nv = new Game();
}
boot();
