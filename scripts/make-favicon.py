from PIL import Image, ImageFilter
import os

public = r"d:\abubakarwebsite\public"
src = os.path.join(public, "logo-light.png")
im = Image.open(src).convert("RGBA")
im_sharp = im.filter(ImageFilter.UnsharpMask(radius=1.4, percent=140, threshold=1))


def make_square(src_im, size, bg=None, pad_ratio=0.06):
    canvas = Image.new("RGBA", (size, size), bg if bg else (0, 0, 0, 0))
    pad = max(0, int(size * pad_ratio))
    target = size - pad * 2
    w, h = src_im.size
    scale = min(target / w, target / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    resized = src_im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    return canvas


for size, name, opaque in [
    (16, "favicon-16.png", False),
    (32, "favicon-32.png", False),
    (48, "favicon-48.png", False),
    (180, "apple-touch-icon.png", True),
    (192, "icon-192.png", False),
    (512, "icon-512.png", False),
]:
    src_im = im_sharp if size <= 64 else im
    bg = (255, 255, 255, 255) if opaque else None
    # Fill more of the square so RU stays readable at tiny sizes
    sq = make_square(src_im, size, bg=bg, pad_ratio=0.04 if size <= 48 else 0.08)
    path = os.path.join(public, name)
    sq.save(path, "PNG", optimize=True)
    a = sq.getchannel("A").histogram()
    print(path, size, "opaque", a[255], "bytes", os.path.getsize(path))

ico_path = os.path.join(public, "favicon.ico")
icons = [make_square(im_sharp, s, pad_ratio=0.04) for s in (16, 32, 48)]
icons[-1].save(
    ico_path,
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=icons[:-1],
)
print("ico", os.path.getsize(ico_path))
print("done")
