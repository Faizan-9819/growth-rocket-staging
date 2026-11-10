# Minimal .docx -> Markdown for reading: headings, lists, bold, links, tables.
# Standard library only. Usage: py -I docx2md.py <in.docx> <out.md>
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
R = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"

src, dst = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(src) as z:
    doc = ET.fromstring(z.read("word/document.xml"))
    rels = {}
    if "word/_rels/document.xml.rels" in z.namelist():
        for rel in ET.fromstring(z.read("word/_rels/document.xml.rels")):
            rels[rel.get("Id")] = rel.get("Target")
    styles = {}
    if "word/styles.xml" in z.namelist():
        for st in ET.fromstring(z.read("word/styles.xml")).iter(W + "style"):
            name = st.find(W + "name")
            styles[st.get(W + "styleId")] = name.get(W + "val") if name is not None else ""


def run_text(r):
    out = []
    for child in r:
        if child.tag == W + "t":
            out.append(child.text or "")
        elif child.tag == W + "tab":
            out.append("\t")
        elif child.tag in (W + "br", W + "cr"):
            out.append("  \n")
    text = "".join(out)
    rpr = r.find(W + "rPr")
    if text.strip() and rpr is not None and rpr.find(W + "b") is not None:
        b = rpr.find(W + "b")
        if b.get(W + "val") not in ("0", "false"):
            lead = len(text) - len(text.lstrip())
            trail = len(text) - len(text.rstrip())
            text = text[:lead] + "**" + text.strip() + "**" + (text[len(text) - trail:] if trail else "")
    return text


def para_text(p):
    out = []
    for child in p:
        if child.tag == W + "r":
            out.append(run_text(child))
        elif child.tag == W + "hyperlink":
            inner = "".join(run_text(r) for r in child.iter(W + "r"))
            target = rels.get(child.get(R + "id"), "") or ("#" + (child.get(W + "anchor") or ""))
            out.append(f"[{inner}]({target})" if target else inner)
        elif child.tag in (W + "ins", W + "smartTag", W + "sdt"):
            out.append("".join(run_text(r) for r in child.iter(W + "r")))
    text = "".join(out)
    return re.sub(r"\*\*\s*\*\*", "", text)


def para_md(p):
    ppr = p.find(W + "pPr")
    style = ""
    level = None
    if ppr is not None:
        ps = ppr.find(W + "pStyle")
        if ps is not None:
            style = styles.get(ps.get(W + "val"), ps.get(W + "val") or "")
        num = ppr.find(W + "numPr")
        if num is not None:
            ilvl = num.find(W + "ilvl")
            level = int(ilvl.get(W + "val")) if ilvl is not None else 0
    text = para_text(p).strip()
    if not text:
        return ""
    m = re.match(r"(?i)heading\s*(\d)", style)
    if m:
        return "#" * int(m.group(1)) + " " + text.replace("**", "")
    if style.lower() == "title":
        return "# " + text.replace("**", "")
    if level is not None or style.lower().startswith("list"):
        return "  " * (level or 0) + "- " + text
    return text


def table_md(tbl):
    rows = []
    for tr in tbl.findall(W + "tr"):
        cells = []
        for tc in tr.findall(W + "tc"):
            parts = [para_text(p).strip() for p in tc.findall(W + "p")]
            cells.append(" <br> ".join(x for x in parts if x).replace("|", "\\|"))
        rows.append(cells)
    if not rows:
        return ""
    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]
    lines = ["| " + " | ".join(rows[0]) + " |", "|" + "---|" * width]
    lines += ["| " + " | ".join(r) + " |" for r in rows[1:]]
    return "\n".join(lines)


blocks = []
body = doc.find(W + "body")
for el in body:
    if el.tag == W + "p":
        md = para_md(el)
        if md:
            blocks.append(md)
    elif el.tag == W + "tbl":
        blocks.append(table_md(el))

with open(dst, "w", encoding="utf-8") as f:
    f.write("\n\n".join(blocks) + "\n")
print(dst, len(blocks), "blocks")
