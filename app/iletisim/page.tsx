import { PageHero } from "@/components/common/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildWhatsappUrl } from "@/lib/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Akdeniz Kasabı telefon, WhatsApp, adres, çalışma saatleri ve yol tarifi bilgilerine ulaşın.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="İletişim" title="Ürün ve sipariş sorularınız için bize ulaşın" description="En hızlı iletişim için WhatsApp üzerinden ürün, miktar ve hazırlama tercihinizi paylaşabilirsiniz." />
      <ContactDetails compact />
      <section className="section-space bg-cream pt-0">
        <div className="container-shell grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-red">Mesaj Bırakın</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">Size nasıl yardımcı olabiliriz?</h2>
            <p className="mt-5 leading-7 text-muted">Form altyapısı henüz bağlı değildir. Acil ve siparişle ilgili konularda WhatsApp üzerinden doğrudan iletişim kurabilirsiniz.</p>
            <a href={buildWhatsappUrl()} target="_blank" rel="noreferrer" className="button-secondary mt-7">WhatsApp’ı Aç</a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
