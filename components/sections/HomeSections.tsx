"use client";

import { BusinessStatus } from "@/components/common/BusinessStatus";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { campaigns } from "@/data/campaigns";
import { businessInfo } from "@/data/business";
import { faqItems } from "@/data/faq";
import { storeGallery } from "@/data/gallery";
import { categories, products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { formatCampaignEndDate, isCampaignVisible } from "@/lib/campaigns";
import { buildCampaignWhatsappUrl, buildWhatsappUrl } from "@/lib/contact";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChefHat,
  ChevronDown,
  Clock3,
  CreditCard,
  HandPlatter,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Star,
  Store,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trustItems = [
  { icon: Sparkles, title: "Günlük Taze Ürün", text: "Sofranız için günlük ve özenli hazırlık." },
  { icon: ShieldCheck, title: "Hijyenik Hazırlık", text: "Temiz çalışma alanı ve kontrollü süreç." },
  { icon: ChefHat, title: "Usta Kasap Deneyimi", text: "Doğru ürün ve doğru kesim için ustalık." },
  { icon: Clock3, title: "Hızlı Sipariş", text: "WhatsApp üzerinden kolayca bilgi alın." },
];

const reasons = [
  "Ürünleri günlük ve özenli hazırlama",
  "Müşteri isteğine göre doğrama",
  "Kıyma, kuşbaşı, biftek ve ızgaralık özel hazırlama",
  "Hijyen kurallarına önem verme",
  "Yerel ve güvenilir esnaf anlayışı",
  "Müşteri memnuniyetini odağa alma",
];

const orderSteps = [
  { icon: ShoppingBasket, number: "01", title: "Ürününü seç", text: "Ürünlerimizi incele, sofrana uygun seçimi belirle." },
  { icon: MessageCircle, number: "02", title: "Miktarı bildir", text: "WhatsApp'tan ürün, miktar ve hazırlama tercihini yaz." },
  { icon: PackageCheck, number: "03", title: "Mağazadan teslim al", text: "Siparişini konuştuğumuz şekilde hazırlanmış olarak mağazadan al." },
];

const serviceItems = [
  { icon: Store, title: "Mağazadan teslim", text: businessInfo.serviceInfo.pickup },
  { icon: Truck, title: "Teslimat bilgisi", text: businessInfo.serviceInfo.delivery },
  { icon: CreditCard, title: "Ödeme seçenekleri", text: businessInfo.serviceInfo.payment },
  { icon: ShoppingBasket, title: "Minimum sipariş", text: businessInfo.serviceInfo.minimumOrder },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-ink pt-28 text-cream sm:min-h-[780px] lg:min-h-[820px]">
      <Image
        src="/images/hero-butcher.jpg"
        alt="Dana ve kuzu ürünlerinden temsili kasap tezgâhı sunumu"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,10,12,.94)_0%,rgba(38,12,17,.84)_37%,rgba(36,11,16,.28)_70%,rgba(20,8,10,.24)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/85 to-transparent" />
      <div className="container-shell relative flex min-h-[630px] items-center py-16 sm:min-h-[650px] lg:min-h-[690px]">
        <Reveal className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-ink/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold backdrop-blur-sm">
              <BadgeCheck size={16} aria-hidden="true" /> Yerel ustalık, günlük özen
            </div>
            <BusinessStatus dark />
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.1rem,7vw,6.7rem)] font-semibold leading-[.92] tracking-[-0.035em]">
            Mersin’de{" "}
            <span className="block text-gold">7/24 açık</span>{" "}
            kasabınız.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-cream/75 sm:text-lg sm:leading-8">
            Akdeniz Kasabı, Toroslar Mithat Toroğlu Mahallesi’nde. Günlük taze dana, kuzu, tavuk ve köfte seçeneklerini inceleyin; kesim, miktar ve güncel fiyatı birlikte netleştirelim.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="button-gold justify-center" data-analytics="hero_whatsapp_click">
              <MessageCircle size={19} aria-hidden="true" /> WhatsApp’tan Sipariş Ver
            </a>
            <Link href="/urunler" className="button-light-outline justify-center">
              Ürünleri İncele <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <Link href="/blog/mersin-kasap-secimi-rehberi" className="mt-6 inline-block text-sm text-cream/80 underline decoration-gold/50 underline-offset-4 hover:text-gold">Kasap alışverişinden önce sorulacak sorular</Link>
        </Reveal>
      </div>
      <div className="container-shell relative -mt-5 pb-7 sm:pb-9">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/55">
          Dana · Kuzu · Tavuk · Köfte · Şarküteri · Izgaralık
        </p>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="relative z-10 -mt-px bg-ink pb-12 sm:pb-16">
      <div className="container-shell grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className="bg-[#211719] p-6 sm:p-7">
            <item.icon className="text-gold" size={26} strokeWidth={1.6} aria-hidden="true" />
            <h2 className="mt-5 font-display text-xl font-semibold text-cream">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-cream/55">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section id="urunlerimiz" className="section-space bg-paper scroll-mt-24">
      <div className="container-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Ürün Gruplarımız" title="Mersin’de dana, kuzu ve tavuk ürünleri" description="Günlük yemeğinizden kalabalık mangal sofralarına kadar ihtiyacınızı birlikte planlayalım. Güncel stok ve fiyat için ürün ve miktarınızı paylaşın." />
          <Link href="/urunler" className="text-link shrink-0">Tüm ürünleri görüntüle <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={(index % 3) * 0.06}>
              <article className="category-card group">
                <Image src={category.image} alt={`${category.title} ürünleri`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-display text-3xl font-semibold text-cream">{category.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-cream/65">{category.description}</p>
                  <Link href={`/urunler?kategori=${category.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                    Ürünleri Gör <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProductsSection() {
  const featuredProducts = products.filter((product) => product.featured);
  return (
    <section className="section-space bg-cream">
      <div className="container-shell">
        <SectionHeading align="center" eyebrow="Tezgâhtan Seçimler" title="Öne çıkan ürünler" description="Ürünlerin kesim ve hazırlama biçimini tercihinize göre konuşabilir, güncel fiyat için bize yazabilirsiniz." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 0.04}><ProductCard product={product} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CampaignsSection() {
  const visibleCampaigns = campaigns.filter((campaign) => isCampaignVisible(campaign));
  if (visibleCampaigns.length === 0) return null;

  return (
    <section id="kampanyalar" className="section-space scroll-mt-24 bg-burgundy text-cream">
      <div className="container-shell">
        <SectionHeading light eyebrow="Sofrana Uygun Paketler" title="Güncel kampanya seçkileri" description="Paket içeriği ve uygun miktar için WhatsApp üzerinden bilgi alabilirsiniz. Fiyatlar güncel koşullara göre paylaşılır." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visibleCampaigns.map((campaign, index) => {
            const validityLabel = formatCampaignEndDate(campaign.endsAt);
            return (
            <Reveal key={campaign.id} delay={index * 0.06}>
              <article className="overflow-hidden rounded-3xl border border-cream/12 bg-cream/5">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={campaign.image} alt={`${campaign.title} ürün seçkisi`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-3xl font-semibold">{campaign.title}</h3>
                  {validityLabel && <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-gold">{validityLabel}</p>}
                  <p className="mt-3 text-sm leading-6 text-cream/65">{campaign.description}</p>
                  <ul className="mt-5 space-y-3 text-sm text-cream/80">
                    {campaign.contents.map((content) => <li key={content} className="flex items-center gap-3"><Check className="text-gold" size={17} aria-hidden="true" />{content}</li>)}
                  </ul>
                  <a href={buildCampaignWhatsappUrl(campaign.title)} target="_blank" rel="noopener noreferrer" className="button-gold mt-7 w-full justify-center" data-analytics="campaign_whatsapp_click">
                    WhatsApp’tan Bilgi Al <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StoreGallerySection() {
  const publishedImages = storeGallery.filter((item) => item.published);
  if (publishedImages.length === 0) return null;

  return (
    <section className="section-space bg-cream">
      <div className="container-shell">
        <SectionHeading eyebrow="Mağazamızdan" title="Gerçek ürünler, gerçek tezgâh" description="Mağaza ve ürün hazırlıklarından güncel kareler." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publishedImages.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.05}>
              <figure className="overflow-hidden rounded-3xl border border-burgundy/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3] bg-stone">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
                {item.caption && <figcaption className="p-5 text-sm leading-6 text-muted">{item.caption}</figcaption>}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="section-space bg-paper">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone">
            <Image src="/images/butcher-craft.jpg" alt="Usta kasap hazırlığını temsil eden görsel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-2 max-w-[15rem] rounded-2xl border border-gold/25 bg-ink p-5 text-cream shadow-xl sm:right-7">
            <HandPlatter className="text-gold" size={24} aria-hidden="true" />
            <p className="mt-3 font-display text-xl font-semibold">Nasıl isterseniz, öyle hazırlayalım.</p>
          </div>
        </Reveal>
        <Reveal>
          <SectionHeading eyebrow="Neden Akdeniz Kasabı?" title="Ustalık, hijyen ve komşuluk güveni" description="İyi bir kasap alışverişinin yalnızca ürün seçmekten ibaret olmadığına inanıyoruz. İhtiyacınızı dinliyor, ürününüzü kullanımınıza göre hazırlıyoruz." />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => <li key={reason} className="flex gap-3 rounded-xl border border-burgundy/10 bg-white p-4 text-sm font-semibold leading-6 text-ink"><Check className="mt-0.5 shrink-0 text-red" size={18} aria-hidden="true" />{reason}</li>)}
          </ul>
          <Link href="/hakkimizda" className="button-secondary mt-8">Bizi Daha Yakından Tanıyın <ArrowRight size={18} aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

export function OrderProcessSection() {
  return (
    <section className="section-space bg-cream">
      <div className="container-shell">
        <SectionHeading align="center" eyebrow="Kolay Sipariş" title="Üç adımda hazır" description="Online ödeme veya karmaşık üyelik yok. İhtiyacınızı yazın, siparişinizi size özel hazırlayalım." />
        <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-14 hidden border-t border-dashed border-burgundy/20 lg:block" />
          {orderSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08} className="relative rounded-3xl border border-burgundy/10 bg-white p-7 text-center shadow-soft">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-burgundy text-gold shadow-lg"><step.icon size={27} strokeWidth={1.6} aria-hidden="true" /></span>
              <span className="mt-6 block text-xs font-black tracking-[0.18em] text-red">ADIM {step.number}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceInfoSection() {
  return (
    <section className="section-space bg-paper">
      <div className="container-shell">
        <SectionHeading align="center" eyebrow="Sipariş Bilgileri" title="Sipariş vermeden önce bilmeniz gerekenler" description="Fiyat, stok ve teslimat uygunluğu sipariş görüşmesi sırasında netleştirilir." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.05} className="rounded-3xl border border-burgundy/10 bg-white p-6 shadow-soft">
              <span className="grid size-12 place-items-center rounded-full bg-burgundy text-gold"><item.icon size={22} aria-hidden="true" /></span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 text-center text-sm leading-7 text-muted">İlk kez sipariş verecekseniz <Link href="/blog/mersin-whatsapp-et-siparisi" className="text-red underline underline-offset-4">WhatsApp ürün listesi rehberini</Link> inceleyebilirsiniz. Teklif alırken karşılaştırılacak ayrıntılar için <Link href="/blog/mersin-kasap-fiyatlari-ucretleri" className="text-red underline underline-offset-4">et fiyatları rehberine</Link> göz atın.</p>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const publishedTestimonials = testimonials.filter(
    (testimonial) => testimonial.published && testimonial.verified && testimonial.consentConfirmed,
  );
  if (publishedTestimonials.length === 0) return null;

  return (
    <section className="section-space bg-paper">
      <div className="container-shell">
        <SectionHeading eyebrow="Müşteri Yorumları" title="Doğrulanmış müşteri deneyimleri" description="Yayın izni alınmış gerçek müşteri yorumları." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {publishedTestimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.06}>
              <blockquote className="h-full rounded-3xl border border-burgundy/10 bg-white p-7 shadow-soft">
                {testimonial.rating && (
                  <div className="flex gap-1 text-gold" aria-label={`${testimonial.rating} üzerinden ${testimonial.rating} yıldız`}>
                    {Array.from({ length: testimonial.rating }).map((_, star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)}
                  </div>
                )}
                <p className="mt-6 font-display text-2xl leading-9 text-ink">“{testimonial.quote}”</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-burgundy/10 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  <HeartHandshake className="text-red" size={18} aria-hidden="true" />
                  <span>{testimonial.customerName} · {testimonial.source}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section-space bg-cream">
      <div className="container-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        <SectionHeading eyebrow="Sık Sorulan Sorular" title="Sipariş öncesi kısa cevaplar" description="Fiyat, hazırlama ve teslim konularında en çok sorulanları tek yerde topladık." />
        <div className="divide-y divide-burgundy/10 overflow-hidden rounded-3xl border border-burgundy/10 bg-white shadow-soft">
          {faqItems.map((item) => (
            <details key={item.question} className="group px-5 py-1 sm:px-7">
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-xl font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="shrink-0 text-red transition-transform group-open:rotate-180" size={21} aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
