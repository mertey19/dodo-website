"use client";

import { Logo } from "@/components/common/Logo";
import { businessInfo, navigation } from "@/data/business";
import { buildWhatsappUrl, hasConfiguredValue } from "@/lib/contact";
import { Camera, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-cream/60">
            Günlük ihtiyaçlarınızdan özel sofralara, et ve şarküteri ürünlerini özenle hazırlayan yerel kasabınız.
          </p>
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="button-gold mt-7"
            data-analytics="footer_whatsapp_click"
          >
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp’tan Yazın
          </a>
        </div>
        <div>
          <h2 className="footer-title">Hızlı Menü</h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/65">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">İletişim</h2>
          <ul className="mt-5 space-y-4 text-sm text-cream/65">
            <li className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-gold" size={17} aria-hidden="true" />
              <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold" data-analytics="footer_phone_click">{businessInfo.phone}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-gold" size={17} aria-hidden="true" />
              <a href={businessInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold" data-analytics="footer_directions_click">{businessInfo.address}</a>
            </li>
            {hasConfiguredValue(businessInfo.instagramUrl) && (
              <li>
                <a
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Camera size={17} aria-hidden="true" /> Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Çalışma Saatleri</h2>
          <div className="mt-5 flex gap-3 text-sm text-cream/65">
            <Clock3 className="mt-0.5 shrink-0 text-gold" size={17} aria-hidden="true" />
            <div className="space-y-3">
              <p><span className="block text-cream">Her gün</span>{businessInfo.workingHours.display}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-shell flex flex-col gap-2 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Akdeniz Kasabı. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link href="/gizlilik" className="transition-colors hover:text-gold">Gizlilik</Link>
            <p>Yerel güven, günlük özen.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
