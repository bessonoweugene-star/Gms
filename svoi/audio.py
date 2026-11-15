"""СВОИ: soundtrack assembly.

Music: ElevenLabs Music v2.5 track (build/gen/music_a.mp3), edited to the cut:
plays 0-20.0 s, hard stop (half a second of silence with only the fire), then the
track's own final hit + tail is placed under the title at 20.5 s.
SFX (lighter, whooshes, sub impacts, fire crackle, city bed) are synthesised here.
Output: build/mix.wav (48 kHz stereo), loudness normalised later in build.sh.
"""
import os
import subprocess

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.join(HERE, "build")
SR = 48000
DUR = 25.0
N = int(SR * DUR)
rng = np.random.default_rng(11)

T_DROP, T_STOP, T_TITLE = 8.0, 20.0, 20.5
TAIL_SRC = 23.0  # where the track's last hit + ring-out starts


def load_music(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ar", str(SR), "-ac", "2", "-f", "f32le", "-"],
                         capture_output=True).stdout
    return np.frombuffer(raw, np.float32).reshape(-1, 2).copy()


def env_ar(n, attack, decay, sr=SR):
    t = np.arange(n) / sr
    a = np.clip(t / max(attack, 1e-4), 0, 1)
    d = np.exp(-np.clip(t - attack, 0, None) / max(decay, 1e-4))
    return a * d


def band(x, lo, hi, soft=0.15):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    m = 1 / (1 + np.exp(-(f - lo) / (lo * soft + 1))) * 1 / (1 + np.exp((f - hi) / (hi * soft + 1)))
    return np.fft.irfft(X * m, len(x)).astype(np.float32)


def brown(n):
    w = rng.standard_normal(n).astype(np.float32)
    b = np.cumsum(w)
    b -= np.convolve(b, np.ones(4801) / 4801, mode="same")  # remove drift
    return b / (np.abs(b).max() + 1e-9)


def place(buf, sig, t, gain=1.0, pan=0.0):
    i = int(t * SR)
    if i >= len(buf):
        return
    sig = sig[: len(buf) - i]
    if sig.ndim == 1:
        l = np.cos((pan + 1) * np.pi / 4)
        r = np.sin((pan + 1) * np.pi / 4)
        buf[i:i + len(sig), 0] += sig * gain * l * 1.414
        buf[i:i + len(sig), 1] += sig * gain * r * 1.414
    else:
        buf[i:i + len(sig)] += sig * gain


def norm(x):
    return x / (np.abs(x).max() + 1e-9)


# ------------------------------------------------------------------ SFX
def lighter_strike():
    n = int(0.09 * SR)
    grit = rng.standard_normal(n) * (rng.random(n) < 0.18)
    grit = band(grit, 1500, 9000) * env_ar(n, 0.003, 0.03)
    t = np.arange(int(0.12 * SR)) / SR
    ping = sum(np.sin(2 * np.pi * f * t) * a for f, a in [(3150, 1), (4720, 0.6), (6310, 0.4)]) * np.exp(-t / 0.035)
    out = np.zeros(int(0.12 * SR), np.float32)
    out[:n] += norm(grit) * 0.9
    out += norm(ping) * 0.25
    return out


def flame_ignite(length=1.9):
    n = int(length * SR)
    x = band(rng.standard_normal(n), 120, 1400)
    whump = np.exp(-np.arange(n) / SR / 0.25) * np.clip(np.arange(n) / (0.025 * SR), 0, 1)
    hiss = band(rng.standard_normal(n), 2000, 9000) * 0.08
    sustain = 0.18 * np.clip(np.arange(n) / (0.2 * SR), 0, 1)
    fade = np.clip((n - np.arange(n)) / (0.4 * SR), 0, 1)
    return norm(x) * (whump + sustain) * fade + hiss * fade


def whoosh(length, f0, f1, peak=0.8):
    n = int(length * SR)
    noise = rng.standard_normal(n).astype(np.float32)
    blk = 2048
    out = np.zeros(n + blk, np.float32)
    win = np.hanning(blk).astype(np.float32)
    for s in range(0, n, blk // 2):
        seg = np.zeros(blk, np.float32)
        piece = noise[s:s + blk]
        seg[:len(piece)] = piece
        u = s / n
        fc = f0 * (f1 / f0) ** u
        out[s:s + blk] += band(seg * win, fc * 0.5, fc * 2.2)
    out = out[:n]
    t = np.linspace(0, 1, n)
    e = np.where(t < peak, (t / peak) ** 2.2, np.exp(-(t - peak) / 0.06))
    return norm(out * e)


def sub_impact(length, f0, f1, decay, crack=0.35):
    n = int(length * SR)
    t = np.arange(n) / SR
    f = f1 + (f0 - f1) * np.exp(-t / 0.12)
    ph = 2 * np.pi * np.cumsum(f) / SR
    sub = np.sin(ph) * np.exp(-t / decay)
    body = band(rng.standard_normal(n), 30, 260) * np.exp(-t / (decay * 0.35))
    tr = band(rng.standard_normal(n), 1200, 8000) * np.exp(-t / 0.012)
    x = norm(sub) + 0.5 * norm(body) + crack * norm(tr)
    x = np.tanh(x * 1.2) / np.tanh(1.2)
    return x.astype(np.float32)


def lid_close():
    t = np.arange(int(0.25 * SR)) / SR
    clack = band(rng.standard_normal(len(t)), 800, 7000) * np.exp(-t / 0.008)
    ring = sum(np.sin(2 * np.pi * f * t) * a for f, a in [(2050, 1), (3420, 0.5), (5100, 0.3)]) * np.exp(-t / 0.07)
    return norm(norm(clack) + 0.35 * norm(ring))


def fire_bed(n):
    out = np.zeros((n, 2), np.float32)
    roar = band(rng.standard_normal(n), 40, 380)
    roar = norm(roar) * 0.35
    out[:, 0] += roar
    out[:, 1] += np.roll(roar, 1700)
    # crackles: Poisson pops
    rate = 14
    k = rng.poisson(rate * n / SR)
    for _ in range(k):
        pos = rng.integers(0, n - 2000)
        ln = int(rng.uniform(0.002, 0.014) * SR)
        p = rng.standard_normal(ln) * np.exp(-np.arange(ln) / (ln / 4))
        amp = rng.uniform(0.15, 1.0) ** 2
        pan = rng.uniform(-0.7, 0.7)
        out[pos:pos + ln, 0] += p * amp * (1 - pan) * 0.5
        out[pos:pos + ln, 1] += p * amp * (1 + pan) * 0.5
    out[:, 0] = band(out[:, 0], 60, 9000)
    out[:, 1] = band(out[:, 1], 60, 9000)
    return out / (np.abs(out).max() + 1e-9)


def city_bed(n):
    l = band(rng.standard_normal(n), 50, 600)
    r = band(rng.standard_normal(n), 50, 600)
    hum = np.sin(2 * np.pi * 97 * np.arange(n) / SR) * 0.05
    out = np.stack([l + hum, r + hum], -1)
    return out / (np.abs(out).max() + 1e-9)


def automation(points, n):
    """piecewise-linear gain curve from [(t, gain_db), ...]"""
    ts = np.array([p[0] for p in points]) * SR
    g = 10 ** (np.array([p[1] for p in points]) / 20)
    return np.interp(np.arange(n), ts, g).astype(np.float32)


# ------------------------------------------------------------------ mix
def main():
    mix = np.zeros((N, 2), np.float32)

    # music edit
    m = load_music(os.path.join(BUILD, "gen/music_a.mp3"))
    a = m[: int(T_STOP * SR)].copy()
    fo = int(0.03 * SR)
    a[-fo:] *= np.linspace(1, 0, fo)[:, None]
    intro = automation([(0, 6.0), (6.5, 4.0), (7.9, 0.0), (25, 0.0)], len(a))
    mix[: len(a)] += a * intro[:, None]
    tail = m[int((TAIL_SRC - 0.01) * SR):].copy()
    fi = int(0.004 * SR)
    tail[:fi] *= np.linspace(0, 1, fi)[:, None]
    place(mix, tail, T_TITLE - 0.01, 1.0)

    # lighter (insert starts at 0.5 s, spark lands ~0.85 s)
    place(mix, lighter_strike(), 0.83, 0.32)
    place(mix, flame_ignite(1.8), 0.88, 0.22)

    # pre-drop whoosh into the whip-pan, impact on the drop
    place(mix, whoosh(0.62, 250, 3200, peak=0.9), T_DROP - 0.56, 0.32)
    place(mix, sub_impact(1.4, 95, 42, 0.35, crack=0.2), T_DROP, 0.28)

    # little swishes in the rhythm block (on the day/night match cut)
    for t, g in [(12.0, 0.12), (14.0, 0.14), (14.5, 0.16), (16.0, 0.2)]:
        place(mix, whoosh(0.28, 900, 2600, peak=0.75), t - 0.22, g, pan=rng.uniform(-0.3, 0.3))

    # the title hit
    place(mix, sub_impact(3.0, 75, 32, 0.7, crack=0.4), T_TITLE, 0.42)
    # final bookend: lighter lid snaps shut
    place(mix, lid_close(), 24.55, 0.35)

    # beds with automation: fire loud on night shots, under the silence, city on day shots
    fire = fire_bed(N)
    fire_auto = automation([
        (0, -60), (2.4, -60), (2.7, -24), (7.9, -22), (8.0, -40), (11.9, -40), (12.0, -30), (16.0, -27),
        (19.9, -24), (20.0, -15), (20.48, -15), (20.5, -26), (22.2, -28), (24.6, -30), (25.0, -60)], N)
    mix += fire * fire_auto[:, None]
    city = city_bed(N)
    city_auto = automation([(0, -40), (2.5, -38), (7.9, -36), (8.0, -26), (11.9, -27), (12.0, -34),
                            (20.0, -40), (22.0, -36), (25.0, -60)], N)
    mix += city * city_auto[:, None]

    # gentle bus glue + safety
    mix = np.tanh(mix * 1.1) / np.tanh(1.1)
    raw = (np.clip(mix, -1, 1) * 32767).astype("<i2").tobytes()
    out = os.path.join(BUILD, "mix.wav")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "s16le", "-ar", str(SR), "-ac", "2", "-i", "-", out],
                   input=raw, check=True)
    print("wrote", out)


if __name__ == "__main__":
    main()
