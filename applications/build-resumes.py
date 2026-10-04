"""Build searchable, single-column resume PDFs from the editable Markdown files.

Run with Python plus reportlab and pypdf. The PDFs use system Arial by default;
set RESUME_FONT_DIR to a directory containing Arial.ttf and Arial Bold.ttf to
use the same fonts on another machine. No third-party network access is used.
"""

from __future__ import annotations

import html
import os
import re
import shutil
from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate


ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path(os.environ.get("RESUME_FONT_DIR", "/System/Library/Fonts/Supplemental"))
pdfmetrics.registerFont(TTFont("Resume", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ResumeBold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold")

INK = colors.HexColor("#172334")
MUTED = colors.HexColor("#405266")
ACCENT = colors.HexColor("#174f74")


def inline(text: str) -> str:
    parts = []
    offset = 0
    for match in re.finditer(r"\[([^]]+)\]\(([^)]+)\)", text):
        parts.append(html.escape(text[offset:match.start()]))
        label, target = match.groups()
        parts.append(f'<a href="{html.escape(target, quote=True)}" color="#174f74">{html.escape(label)}</a>')
        offset = match.end()
    parts.append(html.escape(text[offset:]))
    return "".join(parts)


def styles(scale: float = 1):
    base = dict(fontName="Resume", textColor=INK, alignment=TA_LEFT)
    return {
        "name": ParagraphStyle("Name", fontName="ResumeBold", fontSize=23, leading=27, textColor=INK, spaceAfter=2),
        "role": ParagraphStyle("Role", fontName="ResumeBold", fontSize=11.4, leading=14, textColor=ACCENT, spaceAfter=2),
        "location": ParagraphStyle("Location", **base, fontSize=9.5, leading=12, spaceAfter=3),
        "contact": ParagraphStyle("Contact", **base, fontSize=9.3, leading=12, spaceAfter=1),
        "section": ParagraphStyle("Section", fontName="ResumeBold", fontSize=10.4, leading=13, textColor=ACCENT, spaceBefore=8 * scale, spaceAfter=4 * scale, keepWithNext=True),
        "job": ParagraphStyle("Job", fontName="ResumeBold", fontSize=10.1 * scale, leading=12.6 * scale, textColor=INK, spaceBefore=4 * scale, spaceAfter=1.5 * scale, keepWithNext=True),
        "date": ParagraphStyle("Date", **{**base, "textColor": MUTED}, fontSize=9.2 * scale, leading=11.6 * scale, spaceAfter=4 * scale, keepWithNext=True),
        "body": ParagraphStyle("Body", **base, fontSize=10.1 * scale, leading=12.6 * scale, spaceAfter=3 * scale),
        "bullet": ParagraphStyle("Bullet", **base, fontSize=10.1 * scale, leading=12.6 * scale, leftIndent=9, firstLineIndent=0, bulletIndent=0, spaceAfter=3 * scale),
    }


def story_from_markdown(path: Path, scale: float):
    sty = styles(scale)
    story = []
    header_pos = 0
    in_header = True
    next_is_date = False
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line:
            continue
        if line.startswith("# "):
            story.append(Paragraph(inline(line[2:]), sty["name"]))
        elif line.startswith("## "):
            in_header = False
            story.append(Paragraph(inline(line[3:]).upper(), sty["section"]))
        elif line.startswith("### "):
            story.append(Paragraph(inline(line[4:]), sty["job"]))
            next_is_date = True
        elif next_is_date:
            story.append(Paragraph(inline(line), sty["date"]))
            next_is_date = False
        elif in_header:
            style = "role" if header_pos == 0 else "location" if header_pos == 1 else "contact"
            story.append(Paragraph(inline(line), sty[style]))
            header_pos += 1
        elif line.startswith("- "):
            story.append(Paragraph(inline(line[2:]), sty["bullet"], bulletText="-"))
        else:
            story.append(Paragraph(inline(line), sty["body"]))
    return story


def make_resume(lang: str):
    output = ROOT / "output" / "pdf" / f"murad-gakhramanov-resume-{lang}.pdf"
    output.parent.mkdir(parents=True, exist_ok=True)
    markdown = ROOT / "applications" / f"resume-{lang}.md"
    for scale in (1.0, 0.98, 0.96):
        document = SimpleDocTemplate(
            str(output), pagesize=A4, leftMargin=35, rightMargin=35,
            topMargin=32, bottomMargin=32, title="Murad Gakhramanov - Frontend Developer / Frontend Tech Lead",
            author="Murad Gakhramanov", subject="Frontend resume - React, TypeScript, Fintech and AI-assisted development",
            pageCompression=1,
        )
        document.build(story_from_markdown(markdown, scale))
        reader = PdfReader(output)
        if len(reader.pages) == 1:
            break
    if len(reader.pages) > 2:
        raise RuntimeError("Resume exceeded two pages; shorten the source Markdown.")
    text = "\n".join(page.extract_text() for page in reader.pages)
    expected = ["my_pad@mail.ru", "React", "TypeScript", "Zustand", "FullCalendar"]
    for item in expected:
        if item not in text:
            raise RuntimeError(f"Missing extractable text: {item}")
    annotations = [a.get_object() for page in reader.pages for a in page.get("/Annots", [])]
    targets = {a.get("/A", {}).get("/URI") for a in annotations}
    if not {"mailto:my_pad@mail.ru", "tel:+79534215577", "https://t.me/murad_savage", "https://github.com/WakeUpMurad"}.issubset(targets):
        raise RuntimeError("Expected contact links are missing")
    website = ROOT / "public" / "resume" / f"murad-gakhramanov-{lang}.pdf"
    website.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(output, website)
    print(f"{output.name}: {len(reader.pages)} page(s); {len(text)} extractable characters; {len(targets)} links; scale={scale}")


if __name__ == "__main__":
    make_resume("en")
    make_resume("ru")
