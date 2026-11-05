import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, MapPin, Phone } from "lucide-react";
import { catalog } from "@/data/catalog";
import { products, getCategoryHref } from "@/data/products";
import { campaigns } from "@/data/campaigns";
import { businessInfo } from "@/data/business";
import { adaklikService } from "@/data/adaklik";
import { getPageMetadata, productionSiteUrl } from "@/lib/seo";

export const metadata = getPageMetadata(catalog.path, catalog.title, catalog.description, {
  url: "/images/gercek-cekimler/paketlenmis-etler.webp", width: 1600, height: 808, alt: "Akdeniz Kasabı’ndan paketlenmiş etler",
});
const phoneHref = `tel:${businessInfo.phone.replace(/\s/g, "")}`;

function PriceLink({ name }: { name: string }) {
  return <a href={phoneHref} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-burgundy underline underline-offset-4" aria-label={`${name}: güncel fiyat için ${catalog.phoneDisplay} numarasını arayın`} data-analytics="catalog_product_phone_click"><Phone size={17} aria-hidden="true" /> {catalog.priceLabel}</a>;
}

export default function CatalogPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: catalog.title, description: catalog.description, url: `${productionSiteUrl}${catalog.path}`,
    dateModified: catalog.updatedAt, inLanguage: "tr-TR",
    publisher: { "@id": `${productionSiteUrl}/#business` },
    mainEntity: { "@type": "ItemList", itemListElement: [
      ...products.map((product) => ({ "@type": "ListItem", name: product.name, url: `${productionSiteUrl}${catalog.path}#${product.id}` })),
      ...campaigns.filter((campaign) => campaign.active).map((campaign) => ({ "@type": "ListItem", name: campaign.title, url: `${productionSiteUrl}${catalog.path}#${campaign.id}` })),
      { "@type": "ListItem", name: "Adaklık koyun ve keçi", url: `${productionSiteUrl}${adaklikService.path}` },
    ].map((item, index) => ({ ...item, position: index + 1 })) },
  };
  return <>
    <section className="bg-burgundy pb-16 pt-32 text-cream sm:pt-40">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow text-gold">Ürün ve adaklık kataloğu · {catalog.edition}</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight sm:text-6xl">Sofranız için.<br /><span className="text-gold">Adaklığınız için.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">Dana, kuzu, tavuk, köfte, sucuk, mangal paketleri ve adaklık seçenekleri bir arada.</p>
          <p className="mt-5 font-semibold text-gold">Fiyatları arayarak öğrenin. Her gün 7/24 iletişim.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={phoneHref} className="button-gold justify-center" data-analytics="catalog_hero_phone_click"><Phone size={19} aria-hidden="true" /> {catalog.phoneDisplay}</a>
            <a href={catalog.pdfPath} download className="button-light-outline justify-center" data-analytics="catalog_pdf_download"><Download size={19} aria-hidden="true" /> PDF Kataloğunu İndir</a>
          </div>
          <p className="mt-5 max-w-xl text-xs leading-6 text-cream/70">{catalog.availabilityNote}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/25">
          <Image src="/images/gercek-cekimler/paketlenmis-etler.webp" alt="Akdeniz Kasabı tezgâhında paketlenmiş etler" fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" />
          <span className="absolute bottom-4 left-4 rounded-full bg-burgundy px-4 py-2 text-xs font-semibold text-cream">İşletmemizden gerçek çekim</span>
        </div>
      </div>
    </section>
    <div className="bg-cream py-7">
      <nav className="container-shell flex flex-wrap gap-3" aria-label="Katalog bölümleri">
        {catalog.groups.map((group) => <a key={group.id} href={`#${group.id}`} className="inline-flex min-h-11 items-center rounded-full border border-burgundy/20 px-5 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-cream">{group.title}</a>)}
        <a href="#adaklik" className="inline-flex min-h-11 items-center rounded-full bg-burgundy px-5 text-sm font-semibold text-cream">Adaklık</a>
      </nav>
    </div>
    {catalog.groups.map((group, index) => <section id={group.id} key={group.id} aria-labelledby={`catalog-${group.id}`} className={`scroll-mt-28 py-12 sm:py-16 ${index % 2 ? "bg-white" : "bg-cream"}`}>
      <div className="container-shell">
        <p className="eyebrow text-burgundy">{String(index + 1).padStart(2, "0")} / {group.subtitle}</p>
        <h2 id={`catalog-${group.id}`} className="mt-3 font-display text-4xl font-semibold">{group.title}</h2>
        <p className="mt-4 max-w-2xl leading-7 text-ink/65">{group.description}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.productIds.map((id) => {
            const product = products.find((item) => item.id === id)!;
            return <article key={id} id={id} className="scroll-mt-28 overflow-hidden rounded-2xl border border-burgundy/10 bg-white">
              <div className="relative aspect-[4/3]"><Image src={product.image} alt={`${product.name}, temsili ürün sunumu`} fill sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 33vw" className="object-cover" /></div>
              <div className="p-6"><h3 className="font-display text-2xl font-semibold">{product.name}</h3><p className="mt-3 leading-7 text-ink/65">{product.description}</p><PriceLink name={product.name} /><Link href={getCategoryHref(product.category)} className="mt-3 flex min-h-11 items-center gap-2 text-sm text-ink/65 underline underline-offset-4">Ürün grubu hakkında bilgi <ArrowRight size={15} aria-hidden="true" /></Link></div>
            </article>;
          })}
          {group.id === "mangal" && campaigns.filter((campaign) => campaign.active).map((campaign) => <article key={campaign.id} id={campaign.id} className="scroll-mt-28 overflow-hidden rounded-2xl border border-burgundy/10 bg-white">
            <div className="relative aspect-[4/3]"><Image src={campaign.image} alt={`${campaign.title}, temsili sunum`} fill sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 33vw" className="object-cover" /></div>
            <div className="p-6"><h3 className="font-display text-2xl font-semibold">{campaign.title}</h3><p className="mt-3 leading-7 text-ink/65">{campaign.description}</p><ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-ink/70">{campaign.contents.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-3 text-xs leading-6 text-ink/60">Gramaj, paket içeriği ve müsaitlik görüşmede netleştirilir.</p><PriceLink name={campaign.title} /></div>
          </article>)}
        </div>
      </div>
    </section>)}
    <section id="adaklik" aria-labelledby="catalog-adaklik" className="scroll-mt-28 bg-burgundy py-16 text-cream">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/images/gercek-cekimler/mersin-adaklik-koc.webp" alt="İşletmemizin gerçek çekimlerinden adaklık koçlar" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-cover" /></div>
        <div><p className="eyebrow text-gold">06 / Mersin adaklık</p><h2 id="catalog-adaklik" className="mt-4 font-display text-4xl font-semibold">Koyun ve keçi seçenekleri</h2><p className="mt-5 leading-8 text-cream/80">Koyun veya keçi tercihinizi, düşündüğünüz tarihi ve ilçenizi paylaşın. Hayvan seçimi, kesim ve teslimat için güncel fiyatı arayarak öğrenin.</p>
          <h3 className="mt-6 flex items-center gap-2 text-lg font-bold text-gold"><Check size={19} aria-hidden="true" /> {adaklikService.freePreparation.title}</h3><p className="mt-2 leading-7 text-cream/85">{adaklikService.freePreparation.text}</p><p className="mt-3 text-xs leading-6 text-cream/65">{adaklikService.freePreparation.scopeNote}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href={phoneHref} className="button-gold justify-center" data-analytics="catalog_adaklik_phone_click"><Phone size={18} aria-hidden="true" /> Fiyat İçin Arayın</a><Link href={adaklikService.path} className="button-light-outline justify-center">Adaklık Ayrıntıları <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </div>
    </section>
    <section className="bg-cream py-14" aria-labelledby="catalog-contact"><div className="container-shell"><h2 id="catalog-contact" className="font-display text-3xl font-semibold">Seçiminizi yapın, bizi arayın.</h2><p className="mt-4 max-w-3xl leading-7 text-ink/70">Ürün adını, miktarı ve hazırlama tercihinizi belirtin. Güncel fiyatı ve teslim alma koşullarını görüşmede teyit edin. Adaklık için kesim ve teslimat zamanı ayrıca planlanır.</p><div className="mt-6 flex flex-wrap gap-4"><a href={phoneHref} className="button-primary" data-analytics="catalog_contact_phone_click"><Phone size={18} aria-hidden="true" /> {catalog.phoneDisplay}</a><a href={businessInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-burgundy underline underline-offset-4"><MapPin size={18} aria-hidden="true" /> Yol Tarifi</a></div><p className="mt-5 text-sm leading-7">{businessInfo.address}<br />{businessInfo.workingHours.display}</p><p className="mt-8 max-w-3xl text-xs leading-6 text-ink/60">{catalog.imageNote}</p></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
