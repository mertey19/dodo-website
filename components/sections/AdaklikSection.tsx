import { businessInfo } from "@/data/business";
import { adaklikService } from "@/data/adaklik";
import { ArrowRight, Clock3, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { adaklikCover } from "@/data/media";

export function AdaklikSection() {
  return (
    <section id="mersin-adaklik" aria-labelledby="home-adaklik-heading" className="scroll-mt-24 bg-paper py-12 sm:py-16">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-burgundy p-7 text-cream sm:p-10 lg:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border border-gold/20" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold">Akdeniz Kasabı · Mersin geneli</p>
              <h2 id="home-adaklik-heading" className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">Mersin adaklık koyun ve keçi</h2>
              <p className="mt-5 max-w-2xl leading-7 text-cream/80">Adaklık seçimi, kesim ve teslimat için bize ulaşın. Güncel fiyatı ve ihtiyacınıza uygun planı tek görüşmede netleştirelim.</p>
              <p className="mt-5 max-w-2xl font-semibold leading-7 text-gold">{adaklikService.freePreparation.text}</p>
              <p className="mt-2 max-w-2xl text-xs leading-6 text-cream/70">{adaklikService.freePreparation.scopeNote}</p>
              <Link href={adaklikService.path} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded text-sm font-bold text-gold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" data-analytics="home_adaklik_details_click">
                Adaklık hizmetini inceleyin <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-cream/20 bg-ink/25">
              <Link href="/mersin-adaklik#adaklik-galeri" aria-label="Adaklık fotoğraf ve videolarını inceleyin"><Image src={adaklikCover.src} alt={adaklikCover.alt} width={1200} height={1600} sizes="(max-width: 1023px) 100vw, 40vw" className="aspect-[4/3] w-full object-cover object-[center_43%]" /></Link>
              <div className="p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-gold"><Clock3 size={18} aria-hidden="true" /> 7/24 telefonla bilgi</p>
              <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="mt-5 block rounded font-display text-3xl font-semibold tracking-tight hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:text-4xl" data-analytics="home_adaklik_phone_click">0553 776 61 62</a>
              <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="button-gold mt-6 w-full justify-center" data-analytics="home_adaklik_phone_click"><Phone size={18} aria-hidden="true" /> Adaklık İçin Arayın</a>
              <p className="mt-4 text-xs leading-6 text-cream/70">Kesim ve teslimat zamanı görüşmede planlanır. Güncel seçenekler ve fiyat için arayın.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
