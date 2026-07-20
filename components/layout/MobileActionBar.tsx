"use client";

import { businessInfo } from "@/data/business";
import { buildWhatsappUrl } from "@/lib/contact";
import { MapPinned, MessageCircle, Phone } from "lucide-react";

const phoneHref = `tel:${businessInfo.phone.replace(/\s/g, "")}`;

export function MobileActionBar() {
  return (
    <nav
      aria-label="Hızlı iletişim"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-burgundy/10 bg-cream/95 px-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_35px_rgba(42,20,20,.12)] backdrop-blur-xl md:hidden"
    >
      <a
        href={phoneHref}
        className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-extrabold text-burgundy"
        data-analytics="mobile_phone_click"
      >
        <Phone size={20} aria-hidden="true" /> Ara
      </a>
      <a
        href={buildWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-whatsapp text-[11px] font-extrabold text-white"
        data-analytics="mobile_whatsapp_click"
      >
        <MessageCircle size={20} aria-hidden="true" /> WhatsApp
      </a>
      <a
        href={businessInfo.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-extrabold text-burgundy"
        data-analytics="mobile_directions_click"
      >
        <MapPinned size={20} aria-hidden="true" /> Yol Tarifi
      </a>
    </nav>
  );
}
