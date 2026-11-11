/** Fully procedural audio: ambience, generative music, SFX. No asset files. */
export class AudioSys {
  ctx!: AudioContext; master!: GainNode; musicG!: GainNode; sfxG!: GainNode; ambG!: GainNode;
  private rainG!: GainNode; private humG!: GainNode; private barG!: GainNode; private roomF!: BiquadFilterNode; private dripT = 0;
  private started = false; private noiseBuf!: AudioBuffer; private chordI = 0; private nextChord = 0; private nextBell = 0; private nextKick = 0; private nextSiren = 20;
  vol = { master: 0.8, music: 0.6, sfx: 0.8 };
  amb = { rain: 0, hum: 0, bar: 0, indoor: 0, drip: 0, mem: 0, siren: false };
  private delay!: DelayNode;

  start() {
    if (this.started) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    this.started = true;
    const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.connect(c.destination);
    this.musicG = c.createGain(); this.sfxG = c.createGain(); this.ambG = c.createGain();
    this.roomF = c.createBiquadFilter(); this.roomF.type = 'lowpass'; this.roomF.frequency.value = 18000;
    this.ambG.connect(this.roomF); this.roomF.connect(this.master);
    this.sfxG.connect(this.master);
    // music bus with feedback delay
    this.delay = c.createDelay(1.5); this.delay.delayTime.value = 0.46;
    const fb = c.createGain(); fb.gain.value = 0.42; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
    this.delay.connect(lp); lp.connect(fb); fb.connect(this.delay); lp.connect(this.musicG);
    this.musicG.connect(this.master);
    // noise buffer
    const len = c.sampleRate * 2; this.noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = this.noiseBuf.getChannelData(0); let b = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = (b + 0.02 * w) / 1.02; d[i] = w * 0.6 + b * 3; }
    // rain
    const rs = c.createBufferSource(); rs.buffer = this.noiseBuf; rs.loop = true;
    const rf = c.createBiquadFilter(); rf.type = 'highpass'; rf.frequency.value = 1400;
    const rf2 = c.createBiquadFilter(); rf2.type = 'lowpass'; rf2.frequency.value = 9000;
    this.rainG = c.createGain(); this.rainG.gain.value = 0; rs.connect(rf); rf.connect(rf2); rf2.connect(this.rainG); this.rainG.connect(this.ambG); rs.start();
    // low rumble of rain / city
    const rs2 = c.createBufferSource(); rs2.buffer = this.noiseBuf; rs2.loop = true; rs2.playbackRate.value = 0.5;
    const lf = c.createBiquadFilter(); lf.type = 'lowpass'; lf.frequency.value = 260;
    this.humG = c.createGain(); this.humG.gain.value = 0; rs2.connect(lf); lf.connect(this.humG); this.humG.connect(this.ambG); rs2.start();
    for (const f of [55, 55.4, 82.6]) { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; const g = c.createGain(); g.gain.value = 0.05; const l = c.createBiquadFilter(); l.type = 'lowpass'; l.frequency.value = 140; o.connect(l); l.connect(g); g.connect(this.humG); o.start(); }
    this.barG = c.createGain(); this.barG.gain.value = 0; const bl = c.createBiquadFilter(); bl.type = 'lowpass'; bl.frequency.value = 220; this.barG.connect(bl); bl.connect(this.ambG);
    this.applyVol();
  }
  applyVol() {
    if (!this.started) return;
    this.master.gain.value = this.vol.master; this.musicG.gain.value = this.vol.music * 0.55; this.sfxG.gain.value = this.vol.sfx; this.ambG.gain.value = this.vol.sfx * 0.9;
  }
  private tone(freq: number, dur: number, type: OscillatorType, vol: number, dest: AudioNode, when = 0, slideTo?: number, attack = 0.005) {
    const c = this.ctx, t = c.currentTime + when; const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }
  private noise(dur: number, vol: number, freq: number, q = 1, type: BiquadFilterType = 'bandpass', slideTo?: number, when = 0) {
    const c = this.ctx, t = c.currentTime + when; const s = c.createBufferSource(); s.buffer = this.noiseBuf; s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q; if (slideTo) f.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.sfxG); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  sfx(name: string, p = 1) {
    if (!this.started) return; const S = this.sfxG;
    switch (name) {
      case 'click': this.tone(880, 0.05, 'square', 0.05, S); break;
      case 'hover': this.tone(1320, 0.025, 'sine', 0.03, S); break;
      case 'open': this.tone(440, 0.12, 'triangle', 0.08, S, 0, 880); break;
      case 'close': this.tone(660, 0.1, 'triangle', 0.07, S, 0, 330); break;
      case 'pickup': this.tone(660, 0.09, 'triangle', 0.12, S); this.tone(990, 0.16, 'triangle', 0.12, S, 0.08); break;
      case 'clue': this.tone(523, 0.14, 'sine', 0.13, S); this.tone(784, 0.14, 'sine', 0.13, S, 0.1); this.tone(1046, 0.3, 'sine', 0.12, S, 0.2); break;
      case 'deduce': for (let i = 0; i < 4; i++) this.tone([392, 494, 587, 784][i], 0.5, 'triangle', 0.09, this.delay, i * 0.09); break;
      case 'error': this.tone(160, 0.22, 'sawtooth', 0.1, S, 0, 90); break;
      case 'ok': this.tone(520, 0.08, 'square', 0.06, S); this.tone(780, 0.14, 'square', 0.06, S, 0.07); break;
      case 'door': this.noise(0.5, 0.25, 600, 2, 'bandpass', 2400); this.tone(90, 0.3, 'sine', 0.12, S, 0, 50); break;
      case 'locked': this.tone(140, 0.08, 'square', 0.09, S); this.tone(120, 0.1, 'square', 0.09, S, 0.1); break;
      case 'step': this.noise(0.09, 0.10 * p, 300 + Math.random() * 200, 1.2, 'bandpass'); this.noise(0.05, 0.03 * p, 3000, 1, 'highpass'); break;
      case 'stepIn': this.noise(0.08, 0.09 * p, 180 + Math.random() * 80, 2, 'bandpass'); break;
      case 'blip': this.tone(p, 0.03, 'square', 0.018, S); break;
      case 'dive': this.noise(1.8, 0.3, 200, 3, 'bandpass', 6000); this.tone(60, 1.8, 'sawtooth', 0.12, S, 0, 900); break;
      case 'surface': this.noise(1.2, 0.3, 5000, 3, 'bandpass', 200); this.tone(700, 1.2, 'sine', 0.1, S, 0, 60); break;
      case 'anomaly': this.tone(1200, 0.08, 'sawtooth', 0.07, S, 0, 300); this.tone(300, 0.25, 'sawtooth', 0.07, S, 0.08, 1500); break;
      case 'hack': this.tone(300 + Math.random() * 900, 0.04, 'square', 0.04, S); break;
      case 'coin': this.tone(1400, 0.06, 'square', 0.05, S); this.tone(1900, 0.12, 'square', 0.05, S, 0.06); break;
      case 'travel': this.noise(2.2, 0.3, 120, 1, 'lowpass', 900); this.tone(50, 2.0, 'sine', 0.2, S, 0, 110); break;
      case 'sting': for (const f of [110, 164.8, 207.6]) this.tone(f, 3.5, 'sawtooth', 0.06, this.delay, 0, undefined, 0.6); break;
    }
  }
  /** called every frame */
  update(dt: number) {
    if (!this.started) return; const c = this.ctx, a = this.amb, t = c.currentTime;
    const k = 1 - Math.exp(-dt * 3);
    const set = (g: AudioParam, v: number) => { g.value += (v - g.value) * k; };
    set(this.rainG.gain, a.rain * (a.indoor > 0.5 ? 0.035 : 0.13) * (1 - a.mem));
    set(this.humG.gain, a.hum * 0.5 * (1 - a.mem * 0.6));
    set(this.barG.gain, a.bar);
    set(this.roomF.frequency, a.mem > 0.5 ? 700 : a.indoor > 0.5 ? 1500 : 18000);
    // music: slow pad chords
    if (t > this.nextChord) {
      const prog = a.mem > 0.5
        ? [[98, 146.8, 233.1, 277.2], [92.5, 138.6, 220, 293.7]]
        : [[110, 164.8, 261.6, 329.6], [87.3, 130.8, 220, 329.6], [73.4, 146.8, 220, 349.2], [82.4, 123.5, 196, 293.7]];
      const ch = prog[this.chordI++ % prog.length];
      for (const f of ch) {
        this.tone(f, 9, 'triangle', 0.035, this.delay, 0, undefined, 3);
        this.tone(f * 2.003, 9, 'sine', 0.014, this.delay, 0, undefined, 4);
      }
      this.tone(ch[0] / 2, 9, 'sine', 0.07, this.musicG, 0, undefined, 2.5);
      this.nextChord = t + 8;
    }
    if (t > this.nextBell) {
      const sc = [440, 523.3, 587.3, 659.3, 784, 880, 1046.5]; const f = sc[(Math.random() * sc.length) | 0] * (a.mem > 0.5 ? 0.5 : 1);
      this.tone(f, 2.2, 'sine', 0.035, this.delay); this.nextBell = t + 2 + Math.random() * 6;
    }
    // bar kick
    if (a.bar > 0.01 && t > this.nextKick) {
      const o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
      g.gain.setValueAtTime(0.9, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3); o.connect(g); g.connect(this.barG); o.start(t); o.stop(t + 0.32);
      this.nextKick = t + 0.5;
    }
    if (a.drip > 0) { this.dripT -= dt; if (this.dripT < 0) { this.dripT = 0.6 + Math.random() * 3; this.tone(1500 + Math.random() * 900, 0.07, 'sine', 0.04 * a.drip, this.delay, 0, 500); } }
    if (a.siren && t > this.nextSiren) {
      for (let i = 0; i < 5; i++) { this.tone(620, 0.5, 'sine', 0.012, this.delay, i * 1.0, 820); this.tone(820, 0.5, 'sine', 0.012, this.delay, i * 1.0 + 0.5, 620); }
      this.nextSiren = t + 35 + Math.random() * 50;
    }
  }
}
