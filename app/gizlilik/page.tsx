import { PageHero } from "@/components/common/PageHero";
import { businessInfo } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Bilgilendirmesi",
  description: "Akdeniz Kasabı web sitesi iletişim formu, WhatsApp, harita ve anonim kullanım ölçümü hakkında gizlilik bilgileri.",
  alternates: { canonical: "/gizlilik" },
};

const sections = [
  {
    title: "İletişim formu",
    text: "İletişim formuna yazdığınız ad, telefon ve mesaj bilgileri site sunucusunda saklanmaz. Form, bu bilgileri yalnızca cihazınızda bir WhatsApp mesajına dönüştürür.",
  },
  {
    title: "WhatsApp bağlantısı",
    text: "WhatsApp’ta Gönder düğmesini kullandığınızda WhatsApp veya Meta hizmetine yönlendirilirsiniz. Bu aşamadan sonraki veri işleme, kullandığınız WhatsApp hizmetinin koşullarına ve gizlilik politikasına tabidir.",
  },
  {
    title: "Google Maps",
    text: "Harita, sayfa açılır açılmaz yüklenmez. Haritayı Göster düğmesine bastığınızda Google Maps ile bağlantı kurulur; yol tarifi bağlantısı da Google Maps’i yeni sekmede açar.",
  },
  {
    title: "Anonim kullanım ölçümü",
    text: "Ölçüm özelliği yapılandırılmadığı sürece analiz isteği gönderilmez. Etkinleştirildiğinde sayfa yolu ve tıklanan eylemin türü ölçülebilir; form alanlarına yazdığınız ad, telefon, mesaj veya sipariş miktarı analiz olaylarına eklenmez.",
  },
  {
    title: "İletişim ve talepler",
    text: `Gizlilikle ilgili sorularınız için ${businessInfo.phone} numaralı telefondan ${businessInfo.name} ile iletişim kurabilirsiniz.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Gizlilik" title="Verileriniz nasıl ele alınıyor?" description="Web sitesindeki iletişim, harita ve ölçüm özellikleri hakkında açık ve kısa bilgiler." />
      <section className="section-space bg-paper">
        <div className="container-shell max-w-4xl">
          <div className="rounded-[2rem] border border-burgundy/10 bg-white p-6 shadow-soft sm:p-10">
            <p className="text-sm font-semibold text-red">Son güncelleme: 20 Temmuz 2026</p>
            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
                  <p className="mt-3 leading-8 text-muted">{section.text}</p>
                </section>
              ))}
            </div>
            <p className="mt-9 border-t border-burgundy/10 pt-6 text-sm leading-6 text-muted">
              Bu sayfa, web sitesinin mevcut teknik işleyişini açıklar. İşletmeye özel kapsamlı bir hukuki aydınlatma metni gerekiyorsa yayımdan önce hukuk danışmanı tarafından değerlendirilmelidir.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
