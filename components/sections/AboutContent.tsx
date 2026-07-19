"use client";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Award, HeartHandshake, ScanLine, ShieldCheck, Target, Telescope } from "lucide-react";
import Image from "next/image";

const values = [
  { icon: ShieldCheck, title: "Kalite anlayışı", text: "Ürün seçiminden hazırlamaya kadar her aşamada tutarlı ve özenli bir yaklaşımı önemseriz." },
  { icon: ScanLine, title: "Hijyen yaklaşımı", text: "Çalışma alanı, ekipman ve hazırlık düzeninde hijyen kurallarını günlük rutinin parçası sayarız." },
  { icon: Award, title: "Usta kasap deneyimi", text: "Doğru kesim ve porsiyonlama için ürünü kullanım amacınıza göre hazırlarız." },
  { icon: HeartHandshake, title: "Müşteri memnuniyeti", text: "İhtiyacınızı dinleyen, açık iletişim kuran ve komşuluk güvenini koruyan bir hizmet sunarız." },
];

export function AboutContent() {
  return (
    <>
      <section className="section-space bg-paper">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone"><Image src="/images/butcher-craft.png" alt="Akdeniz Kasabı'nda usta kasap hazırlığı" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></Reveal>
          <Reveal>
            <SectionHeading eyebrow="Marka Hikâyemiz" title="Mahalle kasabı samimiyetini modern hizmetle buluşturuyoruz" />
            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <p>Akdeniz Kasabı, sofraya gelen ürünün nasıl seçildiği ve nasıl hazırlandığının önemli olduğu düşüncesiyle çalışır. Bu örnek marka metni, işletmenin gerçek hikâyesi ve değerleriyle kolayca güncellenebilir.</p>
              <p>Müşterinin ne pişireceğini dinlemek, doğru ürünü önermek ve ürünü istenen biçimde hazırlamak hizmet anlayışımızın merkezindedir. Abartılı vaatler yerine, günlük işimize gösterdiğimiz özenle güven kazanmayı hedefleriz.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-space bg-cream">
        <div className="container-shell">
          <SectionHeading align="center" eyebrow="Değerlerimiz" title="Her alışverişte aynı özen" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05} className="rounded-3xl border border-burgundy/10 bg-white p-7 shadow-soft">
                <span className="grid size-12 place-items-center rounded-full bg-burgundy text-gold"><value.icon size={22} aria-hidden="true" /></span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-ink">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-burgundy py-20 text-cream sm:py-24">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-cream/12 bg-cream/5 p-8 sm:p-10"><Target className="text-gold" size={28} aria-hidden="true" /><p className="eyebrow mt-7 text-gold">Misyonumuz</p><h2 className="mt-3 font-display text-4xl font-semibold">Günlük ihtiyacı güvenle karşılamak</h2><p className="mt-5 leading-8 text-cream/65">Et ve şarküteri ürünlerini hijyenik, özenli ve müşterinin kullanımına uygun biçimde hazırlayarak kolay bir alışveriş deneyimi sunmak.</p></Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-cream/12 bg-cream/5 p-8 sm:p-10"><Telescope className="text-gold" size={28} aria-hidden="true" /><p className="eyebrow mt-7 text-gold">Vizyonumuz</p><h2 className="mt-3 font-display text-4xl font-semibold">Yerel güveni geleceğe taşımak</h2><p className="mt-5 leading-8 text-cream/65">Mahalle kasabı kültürünün samimiyetini, modern sunum ve güçlü iletişimle bir araya getiren güvenilir bir yerel marka olmak.</p></Reveal>
        </div>
      </section>
      <ContactDetails compact />
    </>
  );
}
