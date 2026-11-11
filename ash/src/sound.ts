/** Procedural audio for ПЕПЕЛ: drones, wind, fire, breathing, ticks, guitar. */
export class Snd {
  ctx!: AudioContext; out!: GainNode; private buf!: AudioBuffer; private on = false; vol = 0.8;
  private droneG!: GainNode; private windG!: GainNode; private windF!: BiquadFilterNode; private fireG!: GainNode; private breathG!: GainNode; private breathF!: BiquadFilterNode; private rev!: DelayNode;
  amb = { drone: 0.5, wind: 0, fire: 0, mask: 0, stress: 0, tick: 0, drip: 0 };
  private tB = 0; private tT = 0; private tD = 0; private tN = 6; private tC = 0;
  start() {
    if (this.on) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; } this.on = true;
    const c = this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)(); this.out = c.createGain(); this.out.gain.value = this.vol; this.out.connect(c.destination);
    const len = c.sampleRate * 3; this.buf = c.createBuffer(1, len, c.sampleRate); const d = this.buf.getChannelData(0); let b = 0; for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = (b + 0.03 * w) / 1.03; d[i] = w * 0.5 + b * 4; }
    this.rev = c.createDelay(1); this.rev.delayTime.value = 0.31; const fb = c.createGain(); fb.gain.value = 0.5; const lp = c.createBiquadFilter(); lp.frequency.value = 1400; this.rev.connect(lp); lp.connect(fb); fb.connect(this.rev); lp.connect(this.out);
    const loop = (rate: number, type: BiquadFilterType, freq: number, q: number) => { const s = c.createBufferSource(); s.buffer = this.buf; s.loop = true; s.playbackRate.value = rate; const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const g = c.createGain(); g.gain.value = 0; s.connect(f); f.connect(g); g.connect(this.out); s.start(); return [g, f] as const; };
    [this.droneG] = loop(0.35, 'lowpass', 150, 1); [this.windG, this.windF] = loop(0.8, 'bandpass', 420, 0.8); [this.fireG] = loop(1.3, 'highpass', 2600, 0.5); [this.breathG, this.breathF] = loop(1, 'bandpass', 900, 2.5);
    for (const fq of [41.2, 61.9]) { const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = fq; const g = c.createGain(); g.gain.value = 0.045; o.connect(g); g.connect(this.droneG); o.start(); }
  }
  setVol(v: number) { this.vol = v; if (this.on) this.out.gain.value = v; }
  private tone(f: number, dur: number, type: OscillatorType, v: number, when = 0, to?: number, dest: AudioNode = this.out, att = 0.004) { const c = this.ctx, t = c.currentTime + when, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + att); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05); }
  private noise(dur: number, v: number, freq: number, q = 1, type: BiquadFilterType = 'bandpass', to?: number, when = 0) { const c = this.ctx, t = c.currentTime + when, s = c.createBufferSource(); s.buffer = this.buf; const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q; if (to) f.frequency.exponentialRampToValueAtTime(to, t + dur); const g = c.createGain(); g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); s.connect(f); f.connect(g); g.connect(this.out); s.start(t, Math.random() * 2); s.stop(t + dur + 0.05); }
  sfx(n: string, p = 1) {
    if (!this.on) return;
    switch (n) {
      case 'click': this.tone(520, 0.05, 'triangle', 0.06); break;
      case 'open': this.noise(0.18, 0.12, 900, 1, 'bandpass', 2400); break;
      case 'pick': this.tone(440, 0.08, 'triangle', 0.1); this.tone(660, 0.14, 'triangle', 0.1, 0.07); break;
      case 'note': this.tone(330, 0.3, 'sine', 0.08, 0, undefined, this.rev); this.tone(495, 0.4, 'sine', 0.07, 0.12, undefined, this.rev); break;
      case 'warn': this.tone(150, 0.2, 'sawtooth', 0.08, 0, 90); break;
      case 'step': this.noise(0.09, 0.09 * p, 240 + Math.random() * 160, 1.5); break;
      case 'stepAsh': this.noise(0.14, 0.07 * p, 700 + Math.random() * 300, 0.7); break;
      case 'splash': this.noise(0.22, 0.12 * p, 1400, 0.6, 'bandpass', 500); break;
      case 'light': this.tone(1800, 0.02, 'square', 0.05); this.noise(0.03, 0.08, 3000, 2); break;
      case 'crank': this.noise(0.05, 0.07, 1200 + Math.random() * 500, 4); this.tone(90 + Math.random() * 20, 0.05, 'sawtooth', 0.04); break;
      case 'mask': this.noise(0.5, 0.16, 500, 1.5, 'bandpass', 1600); break;
      case 'wipe': this.noise(0.3, 0.1, 2400, 1, 'bandpass', 1200); break;
      case 'cough': for (let i = 0; i < 3; i++) this.noise(0.12, 0.2, 500, 2, 'bandpass', 250, i * 0.17); break;
      case 'door': this.noise(0.6, 0.2, 300, 2, 'bandpass', 900); this.tone(70, 0.5, 'sine', 0.14, 0, 45); break;
      case 'sting': for (const f of [98, 146.8, 185]) this.tone(f, 4, 'sawtooth', 0.045, 0, undefined, this.rev, 0.8); break;
      case 'radio': this.noise(1.6, 0.1, 2200, 3, 'bandpass', 1500); this.tone(1000, 0.08, 'sine', 0.03, 0.3); break;
      case 'off': this.tone(600, 0.25, 'square', 0.06, 0, 60); break;
      case 'wings': for (let i = 0; i < 9; i++) this.noise(0.05, 0.1, 1800, 1.5, 'bandpass', 900, i * 0.06 + Math.random() * 0.02); break;
      case 'rat': this.tone(3200, 0.05, 'sine', 0.025, 0, 2400); this.noise(0.25, 0.04, 3500, 2); break;
      case 'blip': this.tone(p, 0.028, 'triangle', 0.02); break;
      case 'travel': this.noise(2, 0.18, 150, 1, 'lowpass', 500); break;
      case 'die': this.tone(200, 2.5, 'sine', 0.14, 0, 40); break;
    }
  }
  /** fingerpicked minor loop — Палыч's three chords */
  guitar() {
    if (!this.on) return; const chords = [[110, 164.8, 220, 261.6, 329.6], [146.8, 220, 293.7, 349.2, 440], [164.8, 207.7, 246.9, 329.6, 415.3], [110, 164.8, 220, 261.6, 329.6]];
    chords.forEach((ch, ci) => [0, 2, 1, 3, 2, 4, 3, 2].forEach((ni, k) => { const t = ci * 2.2 + k * 0.27; this.tone(ch[ni], 1.4, 'triangle', 0.075, t, undefined, this.rev); this.tone(ch[ni] * 2, 0.5, 'sine', 0.02, t); }));
  }
  update(dt: number) {
    if (!this.on) return; const a = this.amb, c = this.ctx, k = 1 - Math.exp(-dt * 2.5), lerp = (p: AudioParam, v: number) => { p.value += (v - p.value) * k; };
    lerp(this.droneG.gain, a.drone * 0.5); lerp(this.windG.gain, a.wind * 0.16 * (a.mask ? 0.45 : 1)); this.windF.frequency.value = 380 + Math.sin(c.currentTime * 0.23) * 160 + Math.sin(c.currentTime * 0.71) * 60;
    lerp(this.fireG.gain, a.fire * 0.035);
    // breathing through the filter
    this.tB += dt * (0.32 + a.stress * 0.5); const ph = this.tB % 1; const br = a.mask ? (ph < 0.42 ? Math.sin(ph / 0.42 * Math.PI) : ph < 0.9 ? Math.sin((ph - 0.5) / 0.4 * Math.PI) * 0.7 : 0) : 0;
    this.breathG.gain.value = Math.max(0, br) * 0.11; this.breathF.frequency.value = ph < 0.45 ? 1100 : 600;
    if (a.fire > 0.05 && (this.tC -= dt) < 0) { this.tC = 0.04 + Math.random() * 0.35 / a.fire; this.noise(0.03, 0.05 * a.fire, 2500 + Math.random() * 3000, 3); }
    if (a.tick > 0 && (this.tT -= dt) < 0) { this.tT = (0.05 + Math.random() * 0.5) / a.tick; this.tone(2600, 0.012, 'square', 0.035); }
    if (a.drip > 0 && (this.tD -= dt) < 0) { this.tD = 0.8 + Math.random() * 4; this.tone(1300 + Math.random() * 900, 0.08, 'sine', 0.035 * a.drip, 0, 500, this.rev); }
    if ((this.tN -= dt) < 0) { this.tN = 5 + Math.random() * 9; const sc = [110, 130.8, 146.8, 164.8, 196, 220]; const f = sc[(Math.random() * sc.length) | 0]; this.tone(f, 3.5, 'sine', 0.035, 0, undefined, this.rev, 0.5); this.tone(f * 1.5, 3, 'sine', 0.014, 0.4, undefined, this.rev, 0.6); }
  }
}
