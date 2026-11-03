import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MediaShowcase } from "@/components/media/MediaShowcase";
import { adaklikCover } from "@/data/media";
import { getMediaGallerySchema } from "@/lib/media-seo";
import { ArrowRight, Check, ChevronDown, Clock3, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { adaklikService } from "@/data/adaklik";
import { businessInfo } from "@/data/business";
import { buildWhatsappUrl } from "@/lib/contact";
import { getPageMetadata, productionSiteUrl } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata(adaklikService.path, adaklikService.title, adaklikService.description, {
  url: adaklikCover.src, width: adaklikCover.width, height: adaklikCover.height, alt: adaklikCover.alt,
});

const phoneHref = `tel:${businessInfo.phone.replace(/\s/g, "")}`;
const whatsappHref = buildWhatsappUrl(adaklikService.whatsappMessage);
const canonicalUrl = `${productionSiteUrl}${adaklikService.path}`;

export default function AdaklikPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        url: canonicalUrl,
        name: "Mersin adaklık koyun ve keçi satışı, kesim ve teslimat",
        description: adaklikService.description,
        image: `${productionSiteUrl}${adaklikCover.src}`,
        serviceType: "Adaklık koyun ve keçi satışı, kesim ve teslimat",
        provider: { "@id": `${productionSiteUrl}/#business` },
        areaServed: { "@type": "AdministrativeArea", name: "Mersin" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${productionSiteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Mersin Adaklık", item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: adaklikService.questions.map(({ question, answer }) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden bg-burgundy pb-14 pt-32 text-cream sm:pb-20 sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-16 size-[36rem] rounded-full border border-gold/20" />
        <div className="container-shell relative">
          <nav aria-label="Sayfa yolu" className="mb-9 flex flex-wrap items-center gap-2 text-sm text-cream/70">
            <Link href="/" className="rounded hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Ana Sayfa</Link>
            <span aria-hidden="true">/</span><span aria-current="page">Mersin Adaklık</span>
          </nav>
          <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold">Koyun · Keçi · Kesim · Teslimat</p>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Mersin adaklık:<br /><span className="text-gold">birlikte planlayalım.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/80">Akdeniz Kasabı’nda adaklık koyun ve keçi satışı, kesim ve Mersin geneli teslimat için doğrudan bilgi alın. Tercihinizi ve tarihinizi paylaşın; güncel seçenekleri, fiyatı ve hizmet kapsamını birlikte netleştirelim.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={phoneHref} className="button-gold justify-center" data-analytics="adaklik_hero_phone_click"><Phone size={19} aria-hidden="true" /> 0553 776 61 62 · Arayın</a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="button-light-outline justify-center" data-analytics="adaklik_hero_whatsapp_click"><MessageCircle size={19} aria-hidden="true" /> WhatsApp’tan Bilgi Alın</a>
              </div>
              <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-cream/70"><Clock3 size={18} aria-hidden="true" className="mt-0.5 shrink-0" /> 7/24 telefonla iletişim. Kesim ve teslimat zamanı ayrıca planlanır.</p>
            </div>
            <aside aria-label="Adaklık iletişim ve konum bilgisi" className="overflow-hidden rounded-[2rem] border border-gold/30 bg-ink/30">
              <a href="#adaklik-galeri" aria-label="Adaklık fotoğraf ve video galerisine git"><Image src={adaklikCover.src} alt={adaklikCover.alt} width={1200} height={1600} priority sizes="(max-width: 1023px) 100vw, 40vw" className="aspect-[4/3] w-full object-cover object-[center_43%]" /></a>
              <div className="p-7 sm:p-9">
              <p className="eyebrow text-gold">Tek görüşmede netleşsin</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Sizin için nasıl hazırlayalım?</h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-cream/85">
                {["Koyun veya keçi tercihiniz", "Kesim talebiniz ve düşündüğünüz tarih", "Teslimat ilçeniz ve teslim noktası", "Güncel fiyat ve toplam hizmet bedeli"].map((item) => <li key={item} className="flex gap-3"><Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />{item}</li>)}
              </ul>
              <div className="mt-7 border-t border-cream/15 pt-6">
                <p className="font-semibold">Akdeniz Kasabı · Toroslar</p>
                <p className="mt-2 text-sm leading-6 text-cream/70">{businessInfo.address}</p>
                <a href={businessInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded text-sm font-bold text-gold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" data-analytics="adaklik_directions_click"><MapPin size={18} aria-hidden="true" /> Yol Tarifi</a>
              </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="adaklik-services-heading" className="section-space bg-cream">
        <div className="container-shell">
          <p className="eyebrow text-red">İhtiyacınıza göre hizmet</p>
          <h2 id="adaklik-services-heading" className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Seçimden teslimata, ayrıntılar belli olsun.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {adaklikService.services.map((service, index) => <article key={service.title} className="rounded-2xl border border-burgundy/10 bg-white p-7 shadow-soft"><span className="text-sm font-bold tracking-widest text-red">0{index + 1}</span><h3 className="mt-5 font-display text-2xl font-semibold">{service.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{service.text}</p></article>)}
          </div>
          <p className="mt-7 text-sm leading-7 text-muted">Bu sayfa bilgilendirme amaçlıdır. Aramanız veya mesajınız otomatik ödeme ya da kesinleşmiş sipariş oluşturmaz; fiyat ve hizmet ayrıntıları karşılıklı teyit edilir.</p>
        </div>
      </section>

      <MediaShowcase adaklik />

      <section aria-labelledby="adaklik-process-heading" className="section-space bg-paper">
        <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="eyebrow text-red">Nasıl ilerliyoruz?</p><h2 id="adaklik-process-heading" className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Önce konuşalım,<br />sonra planlayalım.</h2><p className="mt-5 leading-7 text-muted">Adaklık ihtiyacınız için doğru bilgiyi doğrudan işletmemizden alın. Seçiminizi yalnızca bir fiyat rakamına göre değil, teklifin tüm kapsamını öğrenerek yapın.</p><a href={phoneHref} className="button-primary mt-7" data-analytics="adaklik_process_phone_click"><Phone size={18} aria-hidden="true" /> Adaklık İçin Arayın</a></div>
          <ol className="divide-y divide-burgundy/15">
            {adaklikService.steps.map((step, index) => <li key={step.title} className="flex gap-5 py-7 first:pt-0"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-burgundy text-sm font-bold text-gold">{index + 1}</span><div><h3 className="font-display text-2xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{step.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section aria-labelledby="adaklik-delivery-heading" className="section-space bg-cream">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div><p className="eyebrow text-red">Mersin’in tüm ilçeleri</p><h2 id="adaklik-delivery-heading" className="mt-4 font-display text-4xl font-semibold sm:text-5xl">İlçenizi söyleyin,<br />teslimatı konuşalım.</h2><p className="mt-5 max-w-2xl leading-7 text-muted">Toroslar’daki Akdeniz Kasabı üzerinden Mersin geneli adaklık teslimatı için bilgi alabilirsiniz. Teslim noktasını, istediğiniz tarihi ve varsa özel hazırlık talebinizi görüşmenin başında paylaşın.</p><ul aria-label="Adaklık teslimatı için bilgi alınabilecek Mersin ilçeleri" className="mt-7 flex flex-wrap gap-2">{adaklikService.districts.map((district) => <li key={district} className="rounded-full border border-burgundy/15 px-4 py-2 text-sm font-semibold text-burgundy">{district}</li>)}</ul></div>
          <div className="self-start rounded-2xl bg-paper p-7 sm:p-9"><Truck size={32} aria-hidden="true" className="text-red" /><h3 className="mt-5 font-display text-2xl font-semibold">Teslimat sözü, teyitten sonra.</h3><p className="mt-4 text-sm leading-7 text-muted">İlçeler hizmet alanını belirtir; farklı ilçelerde şubemiz olduğu anlamına gelmez. Tarih, güzergâh, teslimat şekli ve varsa ek ücret görüşmede belirlenir. Ücretsiz veya anında teslimat varsaymayın.</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-link mt-6" data-analytics="adaklik_delivery_whatsapp_click">İlçeniz için bilgi alın <ArrowRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section aria-labelledby="adaklik-faq-heading" className="section-space bg-paper">
        <div className="container-shell max-w-4xl">
          <p className="eyebrow text-red">Aklınızdaki sorular</p><h2 id="adaklik-faq-heading" className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Adaklık hakkında sık sorulanlar</h2>
          <div className="mt-9 divide-y divide-burgundy/15 border-y border-burgundy/15">
            {adaklikService.questions.map(({ question, answer }) => <details key={question} className="group py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded py-5 font-semibold leading-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red [&::-webkit-details-marker]:hidden">{question}<ChevronDown size={20} aria-hidden="true" className="shrink-0 text-red transition-transform group-open:rotate-180" /></summary><p className="pb-6 pr-7 text-sm leading-7 text-muted">{answer}</p></details>)}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-burgundy p-7 text-cream sm:flex-row sm:items-center sm:p-9"><div><h3 className="font-display text-2xl font-semibold">Güncel fiyatı doğrudan öğrenin.</h3><p className="mt-2 text-sm leading-6 text-cream/75">Koyun, keçi, kesim ve teslimat için 7/24 bilgi.</p></div><a href={phoneHref} className="button-gold shrink-0 justify-center" data-analytics="adaklik_footer_phone_click"><Phone size={18} aria-hidden="true" /> 0553 776 61 62</a></div>
          <p className="mt-7 text-sm leading-7 text-muted">Diğer ihtiyaçlarınız için <Link href="/urunler" className="text-red underline underline-offset-4">et ve tavuk ürünlerimizi</Link> veya <Link href="/iletisim" className="text-red underline underline-offset-4">mağaza iletişim bilgilerini</Link> inceleyebilirsiniz.</p>
        </div>
      </section>
      <script id="adaklik-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getMediaGallerySchema(adaklikService.path)).replace(/</g, "\\u003c") }} />
    </>
  );
}
