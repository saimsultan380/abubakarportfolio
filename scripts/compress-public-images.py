"""Compress oversized images in public/ and remove unused duplicates."""
from __future__ import annotations

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"

DELETE = [
    ROOT / "ATS Friendly Resume Templates and Samples.png",
    ROOT / "ATS-friendly ResumeCV Writing Templates for the UK Audience.png",
    ROOT / "Signs Your Resume Needs a Revamp.png",
    ROOT / "Who This Service Is For",
    ROOT / "Resumes Uplift logo dark theme 8K.jpg.jpeg",
]

# Convert these PNGs → WebP (same stem), then delete PNG
PNG_TO_WEBP = [
    (ROOT / "about-image.png", 1600, 82),
    (ROOT / "Your Career, Your Story Unforgettable.png", 1600, 82),
    (ROOT / "areas" / "us-ats-templates-samples.png", 1600, 82),
    (ROOT / "areas" / "uk-ats-templates-samples.png", 1600, 82),
    (ROOT / "hero-visual.png", 1400, 80),
]


def human(n: int) -> str:
    return f"{n / 1024 / 1024:.2f} MB"


def resize_max(im: Image.Image, max_edge: int) -> Image.Image:
    w, h = im.size
    m = max(w, h)
    if m <= max_edge:
        return im
    scale = max_edge / m
    return im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.Resampling.LANCZOS)


def compress_jpeg(path: Path, max_edge: int = 1400, quality: int = 78) -> None:
    before = path.stat().st_size
    im = Image.open(path)
    im = resize_max(im, max_edge)
    if im.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        rgba = im.convert("RGBA")
        bg.paste(rgba, mask=rgba.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    tmp = path.with_suffix(path.suffix + ".tmp")
    im.save(tmp, "JPEG", quality=quality, optimize=True, progressive=True)
    tmp.replace(path)
    print(f"JPG  {human(before):>8} → {human(path.stat().st_size):>8}  {path.relative_to(ROOT)}")


def png_to_webp(path: Path, max_edge: int, quality: int) -> Path:
    before = path.stat().st_size
    im = Image.open(path)
    im = resize_max(im, max_edge)
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    out = im.convert("RGBA") if has_alpha else im.convert("RGB")
    webp = path.with_suffix(".webp")
    out.save(webp, "WEBP", quality=quality, method=6)
    path.unlink()
    print(f"WEBP {human(before):>8} → {human(webp.stat().st_size):>8}  {webp.relative_to(ROOT)}")
    return webp


def main() -> None:
    print("=== delete unused / duplicates ===")
    for p in DELETE:
        if p.exists():
            print(f"DEL  {human(p.stat().st_size):>8}  {p.relative_to(ROOT)}")
            p.unlink()

    print("\n=== compress sample JPEGs ===")
    for path in sorted((ROOT / "samples").glob("*.jp*g")):
        if path.stat().st_size > 250_000:
            compress_jpeg(path, max_edge=1400, quality=78)

    print("\n=== convert large PNGs → WebP ===")
    for path, max_edge, quality in PNG_TO_WEBP:
        if path.exists():
            png_to_webp(path, max_edge, quality)

    mark = ROOT / "favicon-mark.png"
    if mark.exists() and mark.stat().st_size > 80_000:
        before = mark.stat().st_size
        im = resize_max(Image.open(mark).convert("RGBA"), 256)
        im.save(mark, "PNG", optimize=True)
        print(f"PNG  {human(before):>8} → {human(mark.stat().st_size):>8}  favicon-mark.png")

    # blog JPG masters if still large
    for path in sorted((ROOT / "blog").glob("*.jpg")):
        if path.stat().st_size > 180_000:
            compress_jpeg(path, max_edge=1280, quality=80)

    total = sum(p.stat().st_size for p in ROOT.rglob("*") if p.is_file())
    print(f"\nTOTAL public now: {human(total)}")


if __name__ == "__main__":
    main()
