"""СВОИ: frame renderer.

Reads graded copies of the two original photos and the two generated inserts,
renders 1080x1920 @30fps frames (sub-pixel camera moves, real motion blur on the
whip-pan, grain, vignette, gate weave, firelight flicker, typography) and pipes
them to ffmpeg. Faces are only ever scaled/translated as part of the whole
frame: no pixel of a face is warped or regenerated.

usage: python3 render.py video  -> build/video.mkv
       python3 render.py sheet  -> build/storyboard.jpg
"""
import math
import os
import subprocess
import sys
from multiprocessing import Pool

import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

import grade as G

HERE = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.join(HERE, "build")
W, H, FPS = 1080, 1920, 30
DUR = 25.0
NFR = int(DUR * FPS)

# ---------------------------------------------------------------- timeline
# Music (ElevenLabs track) drops at 8.0 s; groove grid = 0.5 s; bars every 2 s.
T_DROP = 8.0
T_STOP = 20.0      # music cut to silence
T_TITLE = 20.5     # "СВОИ" + impact
T_BLACK = 22.2     # fully black
T_END = DUR


def ease_io(t):
    t = min(max(t, 0.0), 1.0)
    return t * t * (3 - 2 * t)


def ease_out(t):
    t = min(max(t, 0.0), 1.0)
    return 1 - (1 - t) ** 3


def lin(t):
    return min(max(t, 0.0), 1.0)


# A = day / suits (960x1280), B = night / fire (1600x1600)
# shot: (start, end, source, (cx,cy,h) from, (cx,cy,h) to, easing, extra)
SHOTS = [
    (0.50, 2.60, "lighter", dict(t_in=0.10, speed=1.0, zoom0=1.00, zoom1=1.06)),
    (2.60, 4.60, "B", (860, 640, 900), (858, 610, 800), ease_io, {}),       # faces in firelight
    (4.60, 6.20, "B", (360, 1060, 780), (380, 760, 780), ease_io, {}),      # flame tips -> sparks tilt up
    (6.20, 7.30, "B", (722, 700, 760), (728, 690, 690), ease_io, {}),       # left one, bottle in hand
    (7.30, 8.00, "embers", dict(t_in=0.0, speed=1.3, zoom0=1.0, zoom1=1.08)),
    (8.00, 10.00, "A", (500, 650, 1280), (500, 610, 1160), ease_out, {}),   # suits wide, after the drop
    (10.00, 12.00, "A", (505, 430, 820), (505, 400, 720), ease_io, {}),    # two faces
    # rhythm block, 0.5 s grid
    (12.00, 12.50, "B", (300, 380, 680), (300, 320, 640), lin, {}),         # sparks
    (12.50, 13.00, "A", (690, 500, 560), (650, 500, 520), lin, {}),         # fist + watch
    (13.00, 13.50, "embers", dict(t_in=0.9, speed=1.0, zoom0=1.15, zoom1=1.22)),  # flames (insert)
    (13.50, 14.00, "A", (480, 1000, 560), (480, 1005, 540), lin, {}),       # loafers on cracked asphalt
    (14.00, 14.50, "A", (365, 385, 640), (375, 380, 580), lin, {}),         # hand on shoulder (day)
    (14.50, 15.00, "B", (840, 600, 700), (835, 595, 620), lin, {}),         # hand on shoulder (night)
    (15.00, 15.50, "A", (505, 520, 720), (505, 515, 660), lin, {}),         # both fists
    (15.50, 16.00, "B", (860, 600, 760), (860, 590, 640), lin, {}),         # faces, punch-in
    # climax: first time we see the whole bonfire frame
    (16.00, 18.00, "B", (720, 800, 1600), (735, 800, 1480), ease_out, {}),
    (18.00, T_STOP, "B", (820, 760, 1240), (830, 740, 1120), ease_io, {}),
    (T_STOP, T_BLACK, "freeze", {}),
    (T_BLACK, T_END, "embers_end", dict(t_in=1.9, speed=0.55)),
]

# whip-pan between 7.3 embers insert and the day wide at the drop
WHIP = (T_DROP - 0.13, T_DROP + 0.13)

TEXTS = [
    # (start, end, key)
    (2.85, 4.60, "t1"),
    (8.35, 11.70, "t2"),
    (T_TITLE, 22.05, "title"),
    (22.55, 24.75, "f1"),
    (23.45, 24.75, "f2"),
]

FONT_DIR = os.path.join(HERE, "fonts")
PLAYFAIR = os.path.join(FONT_DIR, "PlayfairDisplay[wght].ttf")
CORM = os.path.join(FONT_DIR, "CormorantGaramond[wght].ttf")
CORM_I = os.path.join(FONT_DIR, "CormorantGaramond-Italic[wght].ttf")


# ---------------------------------------------------------------- assets
class Assets:
    def __init__(self):
        a = G.load(os.path.join(HERE, "source/A_day_suits.jpg"))
        b = G.load(os.path.join(HERE, "source/B_night_fire.jpg"))
        self.img = {
            "A": G.to_img(G.grade_day(a)),
            "B": G.to_img(G.halation(G.grade_night(b))),
        }
        self.clips = {
            "lighter": load_clip(os.path.join(BUILD, "gen/lighter.mp4")),
            "embers": load_clip(os.path.join(BUILD, "gen/embers.mp4")),
        }
        self.vig = G.vignette_mask(W, H, 0.48, 0.8)
        self.grain = G.Grain(W, H, pool=20)
        self.text = build_texts()


def load_clip(path):
    p = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                        "stream=width,height", "-of", "csv=p=0", path], capture_output=True, text=True)
    w, h = map(int, p.stdout.strip().split(","))
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                         capture_output=True).stdout
    frames = np.frombuffer(raw, np.uint8).reshape(-1, h, w, 3)
    return frames  # 24 fps


# ---------------------------------------------------------------- typography
def text_layer(lines, font_path, size, weight, tracking, color, line_gap=1.25, italic_path=None):
    """Render centred multi-line text with letter-spacing into an RGBA image."""
    font = ImageFont.truetype(font_path, size)
    try:
        font.set_variation_by_axes([weight])
    except Exception:
        pass
    track = tracking * size
    widths = []
    for ln in lines:
        wsum = sum(font.getlength(ch) for ch in ln) + track * (len(ln) - 1)
        widths.append(wsum)
    asc, desc = font.getmetrics()
    lh = int(size * line_gap)
    pad = int(size * 0.6)
    tw = int(max(widths)) + 2 * pad
    th = lh * len(lines) + 2 * pad
    im = Image.new("RGBA", (tw, th), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    for i, ln in enumerate(lines):
        x = (tw - widths[i]) / 2
        y = pad + i * lh
        for ch in ln:
            d.text((x, y), ch, font=font, fill=color)
            x += font.getlength(ch) + track
    return im


def with_shadow(im, radius=14, opacity=0.55):
    a = im.split()[-1]
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    sh.putalpha(a.filter(ImageFilter.GaussianBlur(radius)).point(lambda v: int(v * opacity)))
    out = Image.new("RGBA", im.size, (0, 0, 0, 0))
    out = Image.alpha_composite(out, sh)
    return Image.alpha_composite(out, im)


def build_texts():
    warm = (244, 236, 222, 255)
    gold = (214, 178, 122, 255)
    t = {}
    t["t1"] = with_shadow(text_layer(["У КАЖДОГО", "СВОЯ ИСТОРИЯ"], CORM, 76, 600, 0.16, warm))
    t["t2"] = with_shadow(text_layer(["НО НЕКОТОРЫЕ", "ПИШУТСЯ ВДВОЁМ"], CORM, 76, 600, 0.16, warm))
    title = text_layer(["СВОИ"], PLAYFAIR, 250, 900, 0.10, warm, line_gap=1.0)
    t["title"] = with_shadow(title, 30, 0.7)
    t["f1"] = text_layer(["НЕ ВСЁ В ЭТОЙ ЖИЗНИ", "МОЖНО КУПИТЬ."], CORM, 64, 500, 0.12, warm)
    t["f2"] = text_layer(["Некоторые вещи", "просто есть."], CORM_I, 76, 500, 0.04, gold)
    return t


TEXT_POS = {"t1": 0.74, "t2": 0.74, "title": 0.47, "f1": 0.40, "f2": 0.56}


# ---------------------------------------------------------------- rendering
def crop_affine(img, cx, cy, h, dx=0.0, dy=0.0):
    s = h / H
    # output (x,y) -> source
    a, b, c = s, 0, cx - (W / 2) * s - dx * s
    d, e, f = 0, s, cy - (H / 2) * s - dy * s
    out = img.transform((W, H), Image.AFFINE, (a, b, c, d, e, f), resample=Image.BICUBIC)
    return np.asarray(out, np.float32) / 255.0


def clip_frame(frames, t_local, t_in, speed, zoom):
    fi = (t_in + t_local * speed) * 24.0
    i0 = int(min(max(math.floor(fi), 0), len(frames) - 1))
    i1 = min(i0 + 1, len(frames) - 1)
    k = fi - math.floor(fi)
    fr = frames[i0].astype(np.float32) * (1 - k) + frames[i1].astype(np.float32) * k
    im = Image.fromarray(fr.astype(np.uint8))
    hh = im.height / zoom
    return crop_affine(im, im.width / 2, im.height / 2, hh)


def weave(t):
    # slow, tiny film gate weave
    return (0.9 * math.sin(t * 2.1) + 0.5 * math.sin(t * 5.3 + 1.3),
            0.7 * math.sin(t * 1.7 + 0.4) + 0.4 * math.sin(t * 4.1))


def flicker(t):
    return 1.0 + 0.025 * math.sin(t * 13.0) + 0.018 * math.sin(t * 23.7 + 1.1) + 0.012 * math.sin(t * 41.3)


def shot_at(t):
    for sh in SHOTS:
        if sh[0] <= t < sh[1]:
            return sh
    return SHOTS[-1]


def render_shot(A, sh, t):
    start, end = sh[0], sh[1]
    src = sh[2]
    u = (t - start) / max(end - start, 1e-6)
    wx, wy = weave(t)
    if src in ("A", "B"):
        p0, p1, ez = sh[3], sh[4], sh[5]
        k = ez(u)
        cx, cy, h = (p0[i] + (p1[i] - p0[i]) * k for i in range(3))
        fr = crop_affine(A.img[src], cx, cy, h, wx, wy)
        if src == "B":
            fr = fr * flicker(t)
        return fr
    if src in ("lighter", "embers"):
        o = sh[3]
        z = o["zoom0"] + (o["zoom1"] - o["zoom0"]) * ease_io(u)
        return clip_frame(A.clips[src], t - start, o["t_in"], o["speed"], z)
    if src == "freeze":
        # hold the last climax frame, slowly creeping in and dimming
        last = SHOTS[[s[2] for s in SHOTS].index("freeze") - 1]
        p1 = last[4]
        creep = 1 - 0.035 * ease_io((t - start) / (end - start))
        fr = crop_affine(A.img["B"], p1[0], p1[1], p1[2] * creep, wx, wy)
        fr = fr * flicker(T_STOP)  # firelight frozen too
        dim = 1.0 - 0.18 * ease_io((t - T_STOP) / (T_TITLE - T_STOP))
        if t >= T_TITLE:
            dim = 0.42 - 0.08 * ease_io((t - T_TITLE) / 1.2)
        fade = 1 - ease_io((t - (T_BLACK - 0.55)) / 0.55)
        return fr * dim * fade
    if src == "embers_end":
        o = sh[3]
        fr = clip_frame(A.clips["embers"], t - start, o["t_in"], o["speed"], 1.12)
        fade_in = ease_io((t - start) / 0.9)
        fade_out = 1 - ease_io((t - (T_END - 0.5)) / 0.5)
        return fr * 0.42 * fade_in * fade_out
    raise ValueError(src)


def whip_frame(A, t):
    """Average several sub-frames of a fast horizontal pan from the outgoing to the incoming shot."""
    t0, t1 = WHIP
    sub = 10
    acc = np.zeros((H, W, 3), np.float32)
    out_sh = shot_at(t0 - 1e-3)
    in_sh = shot_at(T_DROP + 1e-3)
    for i in range(sub):
        ts = t - 0.5 / FPS + (i + 0.5) / (sub * FPS)
        u = ease_io((ts - t0) / (t1 - t0))
        off = int(round(u * (W + 120)))
        canvas = np.zeros((H, W, 3), np.float32)
        a = render_shot(A, out_sh, min(ts, t0))
        b = render_shot(A, in_sh, max(ts, T_DROP))
        if off < W:
            canvas[:, : W - off] = a[:, off:]
        if off > 120:
            s = off - 120
            canvas[:, W - s:] = b[:, :s]
        acc += canvas
    return acc / sub


def text_alpha(t, s, e, key):
    if key == "title":
        # hard cut in on the impact, gentle settle, fade with the picture
        return 1.0 - ease_io((t - (T_BLACK - 0.6)) / 0.55)
    fi = 0.55
    fo = 0.45
    return ease_io((t - s) / fi) * (1 - ease_io((t - (e - fo)) / fo))


def composite_text(fr, A, t):
    img = None
    for s, e, key in TEXTS:
        if not (s <= t < e):
            continue
        a = text_alpha(t, s, e, key)
        if a <= 0.001:
            continue
        layer = A.text[key]
        u = (t - s) / (e - s)
        if key == "title":
            scale = 1.06 - 0.06 * ease_out((t - s) / 1.4)
        else:
            scale = 1.0 + 0.025 * u
        lw, lh = int(layer.width * scale), int(layer.height * scale)
        lay = layer.resize((lw, lh), Image.BICUBIC)
        drift = 0 if key == "title" else int(10 * (1 - ease_out((t - s) / 0.8)))
        x = (W - lw) // 2
        y = int(H * TEXT_POS[key] - lh / 2) + drift
        if img is None:
            img = Image.fromarray((np.clip(fr, 0, 1) * 255).astype(np.uint8)).convert("RGBA")
        if a < 1:
            r, g, b, al = lay.split()
            al = al.point(lambda v: int(v * a))
            lay = Image.merge("RGBA", (r, g, b, al))
        img.alpha_composite(lay, (x, y))
    if img is None:
        return fr
    return np.asarray(img.convert("RGB"), np.float32) / 255.0


def render_frame(A, n):
    t = n / FPS
    if t < SHOTS[0][0]:
        fr = np.zeros((H, W, 3), np.float32)
    elif WHIP[0] <= t < WHIP[1]:
        fr = whip_frame(A, t)
    else:
        sh = shot_at(t)
        fr = render_shot(A, sh, t)
        if sh[2] == "lighter":
            fr = fr * ease_io((t - sh[0]) / 0.35)
    # vignette, protecting hot highlights (fire stays bright)
    y = G.luma(fr)
    v = A.vig + (1 - A.vig) * G.smoothstep(0.85, 1.0, y)
    fr = fr * v[..., None]
    fr = composite_text(fr, A, t)
    fr = A.grain.apply(fr, n, 0.042)
    # filmic black floor
    fr = 0.012 + fr * 0.988
    return (np.clip(fr, 0, 1) * 255 + 0.5).astype(np.uint8)


_A = None


def _init():
    global _A
    _A = Assets()


def _work(n):
    return render_frame(_A, n).tobytes()


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "video"
    os.makedirs(BUILD, exist_ok=True)
    if mode == "sheet":
        A = Assets()
        times = [0.3, 1.2, 2.2, 3.5, 5.4, 6.7, 7.6, 8.0, 9.0, 11.0, 12.2, 12.7, 13.2, 13.7, 14.2, 14.7,
                 15.2, 15.7, 16.8, 19.0, 20.3, 21.0, 23.0, 24.0]
        thumbs = []
        for t in times:
            fr = render_frame(A, int(round(t * FPS)))
            im = Image.fromarray(fr).resize((270, 480), Image.LANCZOS)
            d = ImageDraw.Draw(im)
            d.text((8, 6), f"{t:5.2f}s", fill=(255, 255, 0))
            thumbs.append(im)
        cols = 8
        rows = math.ceil(len(thumbs) / cols)
        sheet = Image.new("RGB", (cols * 270, rows * 480), (20, 20, 20))
        for i, im in enumerate(thumbs):
            sheet.paste(im, ((i % cols) * 270, (i // cols) * 480))
        sheet.save(os.path.join(BUILD, "storyboard.jpg"), quality=90)
        return
    if mode == "frames":
        A = Assets()
        for t in map(float, sys.argv[2:]):
            Image.fromarray(render_frame(A, int(round(t * FPS)))).save(os.path.join(BUILD, f"frame_{t:05.2f}.jpg"), quality=92)
        return
    out = os.path.join(BUILD, "video.mkv")
    ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
                           "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-preset", "medium",
                           "-crf", "10", "-pix_fmt", "yuv420p", out], stdin=subprocess.PIPE)
    with Pool(4, initializer=_init) as pool:
        for i, buf in enumerate(pool.imap(_work, range(NFR), chunksize=4)):
            ff.stdin.write(buf)
            if i % 60 == 0:
                print(f"frame {i}/{NFR}", flush=True)
    ff.stdin.close()
    ff.wait()
    print("done", out)


if __name__ == "__main__":
    main()
