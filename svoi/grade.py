"""Colour grade + film look for the SVOI trailer.

Works on float32 RGB arrays in 0..1. Originals are never modified: images are
read from svoi/source/ and graded copies live only in memory / svoi/build/.
"""
import numpy as np
from PIL import Image, ImageFilter

LUMA = np.array([0.2126, 0.7152, 0.0722], np.float32)


def load(path):
    return np.asarray(Image.open(path).convert("RGB"), np.float32) / 255.0


def to_img(a):
    return Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))


def luma(a):
    return a @ LUMA


def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


def s_curve(x, strength):
    # contrast around mid-grey, keeps 0 and 1 fixed
    return np.clip((1 - strength) * x + strength * (x * x * (3 - 2 * x)), 0, 1)


def blur(a, radius):
    if a.ndim == 2:
        im = Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius))
        return np.asarray(im, np.float32) / 255.0
    im = to_img(a).filter(ImageFilter.GaussianBlur(radius))
    return np.asarray(im, np.float32) / 255.0


def split_tone(a, shadow_rgb, high_rgb, amount=1.0):
    y = luma(a)[..., None]
    sh = (1 - smoothstep(0.0, 0.55, y))
    hi = smoothstep(0.45, 1.0, y)
    return a + amount * (sh * np.array(shadow_rgb, np.float32) + hi * np.array(high_rgb, np.float32))


def saturation(a, s):
    y = luma(a)[..., None]
    return y + (a - y) * s


def skin_mask(a):
    """Rough skin-tone mask (warm hue, mid saturation) so the grade keeps faces natural."""
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = (mx - mn) / (mx + 1e-4)
    warm = (r > g) & (g > b * 0.9)
    m = warm * smoothstep(0.08, 0.2, sat) * (1 - smoothstep(0.6, 0.8, sat)) * smoothstep(0.15, 0.3, mx)
    return blur(m.astype(np.float32), 3)


def grade_day(a):
    """Daylight 'suits' photo -> Ritchie look: olive greens, warm skin, teal shadows."""
    skin = skin_mask(a)[..., None]
    orig = a.copy()
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    # pull greens toward olive/khaki and kill their saturation
    green = np.clip(g - np.maximum(r, b), 0, 1)
    gm = smoothstep(0.0, 0.12, green)[..., None]
    olive = np.stack([g * 0.86, g * 0.84, g * 0.58], -1)
    yb = luma(a)[..., None]
    olive = (yb + (olive - luma(olive)[..., None]) * 0.9) * 0.78
    a = a * (1 - gm * 0.85) + olive * gm * 0.85
    a = saturation(a, 0.82)
    # exposure down a touch, contrast up, highlights rolled off
    a = np.clip(a * 0.88 - 0.02, 0, 1)
    a = s_curve(a, 0.75)
    a = split_tone(a, (-0.025, 0.006, 0.03), (0.035, 0.012, -0.03))
    # keep skin closer to original tones, gently warmed
    skin_t = s_curve(np.clip(orig * np.array([1.03, 0.99, 0.93]) * 0.93, 0, 1), 0.4)
    a = a * (1 - skin * 0.55) + skin_t * skin * 0.55
    # crush blacks slightly but keep detail
    a = np.clip((a - 0.02) / 0.98, 0, 1)
    return a.astype(np.float32)


def grade_night(a):
    """Night bonfire photo: deepen blacks, rich amber, faint teal in deep shadows."""
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    green = np.clip(g - np.maximum(r, b), 0, 1)
    gm = smoothstep(0.0, 0.08, green)[..., None]
    y = luma(a)[..., None]
    a = a * (1 - gm * 0.6) + (y + (a - y) * 0.45) * np.array([0.92, 0.98, 1.0]) * gm * 0.6
    # highlight shoulder: compress only above k so mids stay put
    k = 0.7
    over = np.clip(a - k, 0, None)
    a = np.minimum(a, k) + (1 - k) * (1 - np.exp(-over / (1 - k) * 1.3)) / (1 - np.exp(-1.3))
    # clipped fire core -> warm gold instead of flat white
    hot = smoothstep(0.82, 0.98, luma(a))[..., None]
    a = a * np.array([1.0, 0.975, 0.9], np.float32) ** hot
    a = a * (0.9 + 0.1 * hot)
    a = s_curve(a, 0.35)
    a = split_tone(a, (-0.012, 0.004, 0.018), (0.02, 0.006, -0.02))
    a = saturation(a, 0.95)
    a = np.clip((a - 0.012) / 0.988, 0, 1)
    return a.astype(np.float32)


def halation(a, thresh=0.86, radius=22, amount=0.16):
    y = luma(a)
    m = smoothstep(thresh, 1.0, y)
    glow = blur(m, radius)
    tint = np.array([1.0, 0.42, 0.12], np.float32)
    return np.clip(a + amount * glow[..., None] * tint, 0, 1)


def vignette_mask(w, h, strength=0.42, softness=0.75):
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    nx = (xx - w / 2) / (w / 2)
    ny = (yy - h / 2) / (h / 2) * 0.85
    d = np.sqrt(nx * nx + ny * ny) / np.sqrt(2)
    v = 1 - strength * smoothstep(1 - softness, 1.1, d)
    return v.astype(np.float32)


class Grain:
    """Luma-weighted film grain, slightly clumped (blurred noise at two scales)."""

    def __init__(self, w, h, seed=7, pool=24):
        rng = np.random.default_rng(seed)
        self.frames = []
        for _ in range(pool):
            fine = rng.standard_normal((h, w)).astype(np.float32)
            coarse = rng.standard_normal((h // 2, w // 2)).astype(np.float32)
            coarse = np.asarray(Image.fromarray(coarse, "F").resize((w, h), Image.BILINEAR))
            n = 0.65 * fine + 0.55 * coarse
            self.frames.append(n.astype(np.float16))
        self.rng = rng

    def apply(self, a, idx, amount=0.045):
        n = self.frames[idx % len(self.frames)].astype(np.float32)
        y = luma(a)
        # grain strongest in mid-shadows, weaker in deep black and highlights
        wgt = 0.55 + 1.6 * y * (1 - y)
        return np.clip(a + (amount * n * wgt)[..., None], 0, 1)
