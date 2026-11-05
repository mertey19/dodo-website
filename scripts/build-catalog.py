"""Build the shareable catalogue from the website's product data.

Requires Node 22.13+, reportlab, Pillow and pypdf. Run from any directory.
Use --font-dir to point to a directory containing Arial and Georgia TTFs.
"""
import argparse
import io
import json
import re
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image, ImageOps
from pypdf import PdfReader
from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument("--output", type=Path, default=ROOT.parent / "output/pdf/akdeniz-kasabi-katalog.pdf")
parser.add_argument("--font-dir", type=Path, default=Path("C:/Windows/Fonts"))
args = parser.parse_args()
data = json.loads(subprocess.check_output(["node", str(ROOT / "scripts/catalog-data.mjs")], encoding="utf-8"))
catalog, business, adaklik = data["catalog"], data["businessInfo"], data["adaklikService"]
product_map = {item["id"]: item for item in data["products"]}
SITE = "https://www.akdenizkasabi.com.tr"
PHONE = "tel:" + business["phone"].replace(" ", "")
W, H = 595.276, 841.89
BURGUNDY, GOLD, CREAM, INK, MUTED = map(HexColor, ["#4b101b", "#c69b47", "#fbf5e9", "#2b2020", "#665b57"])
WHITE = HexColor("#ffffff")

for name, filename in [("Body", "arial.ttf"), ("Bold", "arialbd.ttf"), ("Display", "georgiab.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(args.font_dir / filename)))
args.output.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(args.output), pagesize=(W, H), pageCompression=1)
c.setTitle("Akdeniz Kasabı - Ürün ve Adaklık Kataloğu")
c.setAuthor(business["name"])
c.setSubject("Güncel fiyat için arayın: " + catalog["phoneDisplay"])
c.setKeywords("Akdeniz Kasabı, Mersin, dana, kuzu, tavuk, mangal, adaklık, katalog")


def rect(x, top, width, height, color, radius=0):
    c.setFillColor(color)
    if radius:
        c.roundRect(x, H - top - height, width, height, radius, stroke=0, fill=1)
    else:
        c.rect(x, H - top - height, width, height, stroke=0, fill=1)


def text(value, x, top, size=11, font="Body", color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, H - top - size, value)


def paragraph(value, x, top, width, size=11, leading=None, color=MUTED, font="Body", max_height=999):
    style = ParagraphStyle("copy", fontName=font, fontSize=size, leading=leading or size * 1.45, textColor=color)
    p = Paragraph(escape(value).replace("\n", "<br/>"), style)
    _, height = p.wrap(width, H)
    if height > max_height:
        raise ValueError(f"Text overflow ({height} > {max_height}): {value}")
    p.drawOn(c, x, H - top - height)
    return height


image_cache = {}


def photo(path, x, top, width, height):
    key = (path, round(width), round(height))
    if key not in image_cache:
        with Image.open(ROOT / "public" / path.lstrip("/")) as source:
            # Ordinary print-layout resizing only; original source files are never changed.
            fitted = ImageOps.fit(source.convert("RGB"), (round(width * 2), round(height * 2)), method=Image.Resampling.LANCZOS)
            buffer = io.BytesIO()
            fitted.save(buffer, format="JPEG", quality=88, optimize=True)
            from reportlab.lib.utils import ImageReader
            image_cache[key] = ImageReader(io.BytesIO(buffer.getvalue()))
    c.drawImage(image_cache[key], x, H - top - height, width, height)


def link(url, x, top, width, height):
    c.linkURL(url, (x, H - top - height, x + width, H - top), relative=0, thickness=0)


def qr(url, x, top, size=82):
    code = QrCodeWidget(url, barLevel="M")
    bounds = code.getBounds()
    drawing = Drawing(size, size, transform=[size / (bounds[2] - bounds[0]), 0, 0, size / (bounds[3] - bounds[1]), 0, 0])
    drawing.add(code)
    rect(x - 5, top - 5, size + 10, size + 10, WHITE)
    renderPDF.draw(drawing, c, x, H - top - size)
    link(url, x, top, size, size)


def base(page, dark=False):
    rect(0, 0, W, H, BURGUNDY if dark else CREAM)
    c.drawImage(str(ROOT / "public/logo-720.png"), 36, H - 70, 36, 36, mask="auto")
    text(business["name"], 84, 36, 18, "Display", CREAM if dark else BURGUNDY)
    text("ÜRÜN VE ADAKLIK KATALOĞU", 85, 60, 8, "Bold", GOLD if dark else MUTED)
    text(catalog["edition"], 462, 45, 9, color=GOLD if dark else MUTED)
    rect(36, 86, W - 72, 1, GOLD)
    # The contact strip appears on every page; no product is shown with a numeric price.
    rect(0, 777, W, 65, INK if dark else BURGUNDY)
    text(catalog["priceLabel"], 36, 788, 9, "Body", CREAM)
    text(catalog["phoneDisplay"], 36, 805, 18, "Bold", GOLD)
    link(PHONE, 32, 783, 230, 52)
    text("7/24 iletişim", 298, 790, 10, "Bold", CREAM)
    text("akdenizkasabi.com.tr", 298, 808, 9, color=CREAM)
    link(SITE + catalog["path"], 295, 806, 150, 19)
    text(f"{page:02d} / 08", 508, 807, 9, color=CREAM)


def heading(kicker, title, description):
    text(kicker, 36, 108, 9, "Bold", BURGUNDY)
    text(title, 36, 132, 32, "Display", BURGUNDY)
    paragraph(description, 36, 181, W - 80, 10.5, max_height=32)


def card(item, x, top, width, height, compact=False):
    rect(x, top, width, height, WHITE, 10)
    image_height = 110 if compact else (190 if height > 300 else 133)
    photo(item["image"], x + 8, top + 8, width - 16, image_height)
    title = item.get("name", item.get("title"))
    title_height = paragraph(title, x + 15, top + image_height + 19, width - 30, 15 if not compact else 13.5, leading=19, font="Display", color=BURGUNDY, max_height=38)
    desc = ", ".join(item["contents"]) + ". Gramajı ve içeriği arayarak netleştirin." if "contents" in item else item["description"]
    desc_top = top + image_height + 24 + title_height
    paragraph(desc, x + 15, desc_top, width - 30, 10 if not compact else 9.2, leading=14 if not compact else 12.5, max_height=top + height - 37 - desc_top)
    text("Güncel fiyat için arayın", x + 15, top + height - 29, 9, "Bold", BURGUNDY)
    link(PHONE, x + 8, top + height - 36, width - 16, 30)


# 1. Cover
base(1, dark=True)
text("SOFRANIZ İÇİN. ADAKLIĞINIZ İÇİN.", 36, 116, 10, "Bold", GOLD)
text("Lezzet sofrada,", 36, 153, 39, "Display", CREAM)
text("güven kasabınızda.", 36, 207, 36, "Display", GOLD)
paragraph("Dana, kuzu, tavuk, köfte, sucuk ve mangal seçenekleri.\nMersin adaklık koyun ve keçi hizmetiyle bir arada.", 36, 269, 505, 12, color=CREAM)
photo("/images/gercek-cekimler/paketlenmis-etler.webp", 36, 334, 328, 208)
photo("/images/gercek-cekimler/mersin-adaklik-koc.webp", 374, 334, 185, 208)
text("İşletmemizden gerçek çekimler", 36, 551, 8, color=CREAM)
rect(36, 584, 523, 93, GOLD, 10)
text("Fiyatları arayarak öğrenin.", 53, 601, 22, "Display", BURGUNDY)
text(catalog["phoneDisplay"] + "  |  7/24", 53, 638, 18, "Bold", BURGUNDY)
link(PHONE, 36, 584, 523, 93)
paragraph("İÇİNDEKİLER\nDana 02  /  Kuzu 03  /  Tavuk 04  /  Köfte ve sucuk 05\nMangal ve paketler 06  /  Adaklık 07  /  İletişim 08", 36, 702, 523, 10, leading=17, color=CREAM)
c.showPage()

# 2-6. All eleven products and all three current packages.
for page, group in enumerate(catalog["groups"], start=2):
    base(page)
    heading(group["subtitle"].replace("i", "İ").replace("ı", "I").upper(), group["title"], group["description"])
    items = [product_map[item_id] for item_id in group["productIds"]]
    if group["id"] == "mangal":
        items += data["campaigns"]
    width = (W - 88) / 2
    many = len(items) > 2
    for index, item in enumerate(items):
        card(item, 36 + (index % 2) * (width + 16), 229 + (index // 2) * 263, width, 249 if many else 330, compact=group["id"] == "mangal")
    if not many:
        rect(36, 590, 523, 129, BURGUNDY, 10)
        text("Nasıl hazırlayalım?", 54, 607, 19, "Display", GOLD)
        paragraph("Ürün adını, miktarı ve hazırlama tercihinizi belirtin. Güncel fiyatı ve ürün müsaitliğini arayarak öğrenin; teslim alma ayrıntılarını birlikte netleştirelim.", 54, 644, 480, 11, color=CREAM, max_height=60)
    text("Ürün sunum görselleri temsilidir. İçerik, gramaj ve müsaitlik görüşmede teyit edilir.", 36, 754, 7.5, color=MUTED)
    c.showPage()

# 7. Real photographs and confirmed scope of the adaklik service.
base(7)
heading("MERSİN GENELİ İÇİN BİLGİ ALIN", "Adaklık koyun ve keçi", "Tercihinizi, tarihinizi ve ilçenizi söyleyin. Güncel seçenekleri ve toplam bedeli arayarak öğrenin.")
photo("/images/gercek-cekimler/koyun-yemlik.webp", 36, 229, 253, 245)
photo("/images/gercek-cekimler/barinakta-koyun-ve-keciler-video.webp", 305, 229, 254, 245)
text("Koyun seçenekleri", 36, 485, 14, "Display", BURGUNDY)
text("Keçi seçenekleri", 305, 485, 14, "Display", BURGUNDY)
text("Gerçek işletme çekimleri; mevcut hayvan seçenekleri değişebilir.", 36, 512, 8, color=MUTED)
rect(36, 542, 523, 119, BURGUNDY, 10)
text(adaklik["freePreparation"]["title"], 53, 558, 21, "Display", GOLD)
paragraph(adaklik["freePreparation"]["text"], 53, 593, 488, 11, color=CREAM, max_height=33)
paragraph("Adaklık bedeli, kesim ve teslimat koşulları ayrıca görüşülür.", 53, 635, 488, 9, color=CREAM)
paragraph("Hazırlama tercihinizi ve ücretsiz hizmet kapsamını görüşmede netleştirin. Mersin geneli teslimat talepleri için tarih, adres, uygunluk ve varsa ek ücret ayrıca teyit edilir. 7/24 iletişim, anında kesim veya teslimat anlamına gelmez.", 36, 684, 523, 10, leading=15, max_height=62)
link(SITE + adaklik["path"], 36, 229, 523, 292)
c.showPage()

# 8. Contact and clear ordering instructions.
base(8, dark=True)
text("BİR TELEFON KADAR YAKIN", 36, 117, 10, "Bold", GOLD)
text("Seçin. Arayın.", 36, 153, 39, "Display", CREAM)
text("Birlikte hazırlayalım.", 36, 208, 32, "Display", GOLD)
for y, number, title, detail in [
    (286, "01", "Ne istediğinizi söyleyin", "Ürün adı, miktar ve hazırlama tercihi. Adaklıkta koyun veya keçi tercihiniz, tarih ve ilçe."),
    (368, "02", "Güncel fiyatı öğrenin", "Fiyatı, müsaitliği ve hizmet kapsamını görüşmede teyit edin. Katalogda sabit satış fiyatı bulunmaz."),
    (450, "03", "Teslim alma planını netleştirin", "Mağazadan teslim alma veya uygun teslimat seçeneklerini ve varsa ek ücreti siparişten önce görüşün."),
]:
    text(number, 36, y, 23, "Display", GOLD)
    text(title, 91, y, 16, "Bold", CREAM)
    paragraph(detail, 91, y + 27, 465, 10, color=CREAM, max_height=40)
rect(36, 548, 523, 172, CREAM, 10)
text(business["name"] + " | Toroslar", 54, 566, 17, "Display", BURGUNDY)
paragraph(business["address"], 54, 600, 350, 11, max_height=34)
text("Her gün 7/24 açık - Tatil yok", 54, 640, 11, "Bold", BURGUNDY)
text("Instagram: @akdenizkasabi33", 54, 668, 10, color=BURGUNDY)
text("Yol tarifi için adrese dokunun.", 54, 691, 8, color=MUTED)
link(business["directionsUrl"], 52, 597, 353, 37)
link(business["instagramUrl"], 52, 665, 300, 20)
qr(SITE + catalog["path"], 447, 582, 88)
text("Güncel katalog", 450, 681, 8, color=BURGUNDY)
paragraph(catalog["imageNote"], 36, 737, 523, 7.5, leading=10, color=CREAM, max_height=25)
c.save()

# Logical checks supplement visual page review.
reader = PdfReader(args.output)
assert len(reader.pages) == 8
full_text = "\n".join(page.extract_text() for page in reader.pages)
for item in [*data["products"], *data["campaigns"]]:
    name = item.get("name", item.get("title"))
    assert name in full_text, name
assert adaklik["freePreparation"]["text"] in full_text.replace("\n", " ")
assert not re.search(r"\d\s*(?:TL|₺)", full_text)
for page in reader.pages:
    assert catalog["phoneDisplay"] in page.extract_text()
    uris = [annotation.get_object().get("/A", {}).get("/URI") for annotation in page.get("/Annots", [])]
    assert PHONE in uris
print(json.dumps({"output": str(args.output), "pages": len(reader.pages), "products": len(data["products"]), "packages": len(data["campaigns"]), "bytes": args.output.stat().st_size}, ensure_ascii=False))
