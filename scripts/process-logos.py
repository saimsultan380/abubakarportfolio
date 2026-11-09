from PIL import Image
import os

public = r"d:\abubakarwebsite\public"
light_src = os.path.join(public, "logo.jpeg")
dark_src = os.path.join(public, "Resumes Uplift logo dark theme 8K.jpg.jpeg")


def remove_bg(path, mode="light"):
    im = Image.open(path).convert("RGBA")
    # Downscale huge sources first for quality + speed
    w, h = im.size
    max_side = 1600
    if max(w, h) > max_side:
        scale = max_side / max(w, h)
        im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)

    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if mode == "light":
                # White / near-white background
                if r > 235 and g > 235 and b > 235:
                    # soft edge for near-white
                    dist = min(r, g, b)
                    alpha = 0 if dist >= 250 else int(max(0, (250 - dist) * 8))
                    pixels[x, y] = (r, g, b, alpha)
            else:
                # Dark navy / charcoal background (~#1a232e)
                luma = 0.299 * r + 0.587 * g + 0.114 * b
                # keep bright whites and blue arrow; drop dark bg
                is_blue_arrow = b > 120 and b > r + 25 and b > g
                is_white_letter = r > 200 and g > 200 and b > 200
                if luma < 55 and not is_blue_arrow and not is_white_letter:
                    alpha = 0 if luma < 40 else int(max(0, (luma - 25) * 6))
                    pixels[x, y] = (r, g, b, alpha)

    bbox = im.getbbox()
    if bbox:
        # small padding
        pad = 8
        left, top, right, bottom = bbox
        left = max(0, left - pad)
        top = max(0, top - pad)
        right = min(w, right + pad)
        bottom = min(h, bottom + pad)
        im = im.crop((left, top, right, bottom))
    return im


def save_png(im, path, max_side=1024):
    w, h = im.size
    scale = min(1.0, max_side / max(w, h))
    if scale < 1:
        im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    im.save(path, "PNG", optimize=True)
    print(path, im.size, os.path.getsize(path))
    return im


def make_square(im, size, bg=None):
    if bg is None:
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    else:
        canvas = Image.new("RGBA", (size, size), bg)
    pad = int(size * 0.1)
    target = size - pad * 2
    w, h = im.size
    scale = min(target / w, target / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    # Upscale from high-res then down for sharper small icons
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    return canvas


print("processing light...")
light = remove_bg(light_src, "light")
print("processing dark...")
dark = remove_bg(dark_src, "dark")

light = save_png(light, os.path.join(public, "logo-light.png"), 1024)
dark = save_png(dark, os.path.join(public, "logo-dark.png"), 1024)

# Work from larger master for crisp favicons
master = light.copy()
if max(master.size) < 512:
    pass

for size, name, opaque in [
    (16, "favicon-16.png", False),
    (32, "favicon-32.png", False),
    (48, "favicon-48.png", False),
    (180, "apple-touch-icon.png", True),
    (192, "icon-192.png", False),
    (512, "icon-512.png", False),
]:
    bg = (255, 255, 255, 255) if opaque else None
    sq = make_square(master, size, bg=bg)
    path = os.path.join(public, name)
    sq.save(path, "PNG", optimize=True)
    print(path, size, os.path.getsize(path))

# Multi-resolution ICO
ico_path = os.path.join(public, "favicon.ico")
icons = [make_square(master, s) for s in (16, 32, 48)]
icons[0].save(
    ico_path,
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=icons[1:],
)
print("ico", os.path.getsize(ico_path))

# SERP / social share image
og = Image.new("RGB", (1200, 630), (255, 255, 255))
lw, lh = light.size
scale = min(720 / lw, 380 / lh)
nw, nh = int(lw * scale), int(lh * scale)
logo_og = light.resize((nw, nh), Image.Resampling.LANCZOS)
og.paste(logo_og, ((1200 - nw) // 2, (630 - nh) // 2), logo_og)
og_path = os.path.join(public, "og-logo.png")
og.save(og_path, "PNG", optimize=True)
print(og_path, os.path.getsize(og_path))
print("done")
