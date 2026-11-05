import { catalog } from "@/data/catalog";
import { BookOpen, Download } from "lucide-react";
import Link from "next/link";

export function CatalogTeaser() {
  return (
    <section className="bg-cream py-10" aria-labelledby="catalog-teaser-title">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-burgundy/15 bg-white p-7 md:flex-row md:items-center sm:p-10">
          <div className="max-w-xl">
            <p className="eyebrow text-burgundy">Et, tavuk, mangal ve adaklık</p>
            <h2 id="catalog-teaser-title" className="mt-3 font-display text-3xl font-semibold">Tüm seçenekler tek katalogda.</h2>
            <p className="mt-3 leading-7 text-ink/70">Ürünleri inceleyin, PDF kataloğunu paylaşın. Güncel fiyat için {catalog.phoneDisplay} numarasından bizi arayın.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Link href={catalog.path} className="button-primary justify-center" data-analytics="catalog_open_click"><BookOpen size={18} aria-hidden="true" /> Kataloğu İnceleyin</Link>
            <a href={catalog.pdfPath} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold text-burgundy underline underline-offset-4" data-analytics="catalog_pdf_download"><Download size={17} aria-hidden="true" /> PDF Kataloğunu İndir</a>
          </div>
        </div>
      </div>
    </section>
  );
}
