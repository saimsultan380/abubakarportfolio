from pathlib import Path
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[1] / "public"
patterns = ["*writing*.svg", "*revamp*.svg", "*linkedin*.svg", "*career*.svg"]
files: list[Path] = []
for pat in patterns:
    files.extend(root.glob(pat))

for path in sorted(set(files)):
    text = path.read_text(encoding="utf-8")
    # Broken attribute introduced by earlier PowerShell/python escaping: rx=\"0\"
    fixed = text.replace('rx=\\"0\\"', 'rx="0"')
    # Also tolerate already-correct and other common variants
    fixed = fixed.replace("rx='0'", 'rx="0"')
    if fixed != text:
        path.write_text(fixed, encoding="utf-8")
        print("fixed", path.name)
    else:
        print("unchanged", path.name, repr(text[text.find("rx=") : text.find("rx=") + 16]))

    try:
        ET.parse(path)
        print("  OK parse", path.name)
    except Exception as exc:
        print("  STILL BAD", path.name, exc)
