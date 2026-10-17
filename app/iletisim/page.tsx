import { PageHero } from "@/components/common/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildWhatsappUrl } from "@/lib/contact";
import { getPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/iletisim",
  "Akdeniz Kasabı İletişim ve Yol Tarifi | Mersin",
  "Mersin Toroslar, Mithat Toroğlu, Kuvayi Milliye Cd. üzerindeki Akdeniz Kasabı’nın telefon ve yol tarifi: 0553 776 61 62. Her gün 24 saat açık.",
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Mersin · Toroslar" title="Akdeniz Kasabı adresi ve iletişim" description="Mithat Toroğlu Mahallesi, Kuvayi Milliye Caddesi’ndeki mağazamız 7/24 açık. Telefon, WhatsApp veya mevcut konumunuzdan yol tarifi için aşağıdaki bağlantıları kullanın." />
      <ContactDetails compact />
      <section className="section-space bg-cream pt-0">
        <div className="container-shell grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-red">Mesaj Bırakın</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">Size nasıl yardımcı olabiliriz?</h2>
            <p className="mt-5 leading-7 text-muted">Adınızı, telefonunuzu ve sorunuzu yazdığınızda form mesajınızı hazırlayıp WhatsApp’a aktarır. Site, form alanlarına yazdığınız bilgileri sunucuda saklamaz.</p>
            <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="button-secondary mt-7" data-analytics="contact_page_whatsapp_click">WhatsApp’ı Aç</a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
