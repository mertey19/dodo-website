"use client";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { businessInfo } from "@/data/business";
import { buildWhatsappUrl, hasConfiguredValue } from "@/lib/contact";
import { Clock3, ExternalLink, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

const detailItems = [
  { icon: Phone, label: "Telefon", value: businessInfo.phone },
  { icon: MessageCircle, label: "WhatsApp", value: businessInfo.whatsapp },
  { icon: MapPin, label: "Adres", value: businessInfo.address },
  { icon: Clock3, label: "Çalışma Saatleri", value: `Pzt–Cmt ${businessInfo.workingHours.weekdays} · Pazar ${businessInfo.workingHours.sunday}` },
];

export function MapPanel() {
  if (hasConfiguredValue(businessInfo.mapEmbedUrl)) {
    return (
      <iframe
        src={businessInfo.mapEmbedUrl}
        title="Akdeniz Kasabı konumu"
        className="h-full min-h-[380px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_65%_35%,rgba(197,154,69,.22),transparent_25%),linear-gradient(135deg,#2a1b1e,#3f111a)] p-8 text-center text-cream">
      <div className="absolute left-8 top-8 size-28 rounded-full border border-cream/10" />
      <div className="absolute bottom-8 right-8 size-48 rounded-full border border-cream/10" />
      <div className="relative max-w-sm">
        <span className="mx-auto grid size-16 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold"><Navigation size={28} aria-hidden="true" /></span>
        <h3 className="mt-5 font-display text-3xl font-semibold">Konum bilgisi yakında</h3>
        <p className="mt-3 text-sm leading-6 text-cream/65">İşletme adresi ve harita bağlantısı merkezi ayarlardan eklendiğinde harita burada otomatik olarak görünür.</p>
      </div>
    </div>
  );
}

type ContactDetailsProps = {
  compact?: boolean;
};

export function ContactDetails({ compact = false }: ContactDetailsProps) {
  return (
    <section id="iletisim" className={`scroll-mt-24 bg-paper ${compact ? "py-16 sm:py-20" : "section-space"}`}>
      <div className="container-shell">
        {!compact && (
          <SectionHeading eyebrow="Bize Ulaşın" title="Siparişiniz ve sorularınız için buradayız" description="Ürün, miktar ve hazırlama tercihinizi WhatsApp üzerinden iletebilir; çalışma saatleri içinde bize ulaşabilirsiniz." />
        )}
        <div className={`${compact ? "" : "mt-12"} grid overflow-hidden rounded-[2rem] border border-burgundy/10 bg-white shadow-soft lg:grid-cols-[.9fr_1.1fr]`}>
          <Reveal className="p-6 sm:p-9 lg:p-10">
            <div className="grid gap-4">
              {detailItems.map((item) => (
                <div key={item.label} className="flex gap-4 rounded-2xl bg-paper p-4 sm:p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-burgundy text-gold"><item.icon size={19} aria-hidden="true" /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-red">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-ink">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={buildWhatsappUrl()} target="_blank" rel="noreferrer" className="button-primary flex-1 justify-center"><MessageCircle size={18} aria-hidden="true" /> WhatsApp’tan Yaz</a>
              {hasConfiguredValue(businessInfo.mapUrl) ? (
                <a href={businessInfo.mapUrl} target="_blank" rel="noreferrer" className="button-secondary flex-1 justify-center">Yol Tarifi <ExternalLink size={17} aria-hidden="true" /></a>
              ) : (
                <span className="button-disabled flex-1 justify-center" aria-disabled="true">Yol Tarifi <ExternalLink size={17} aria-hidden="true" /></span>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="min-h-[380px]"><MapPanel /></Reveal>
        </div>
      </div>
    </section>
  );
}
