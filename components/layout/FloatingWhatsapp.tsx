"use client";

import { buildWhatsappUrl } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-7 right-7 z-40 hidden min-h-14 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(21,128,61,0.35)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-4 md:inline-flex"
      aria-label="WhatsApp üzerinden Akdeniz Kasabı'na yazın"
      data-analytics="floating_whatsapp_click"
    >
      <MessageCircle aria-hidden="true" size={24} />
      <span>Hızlı Sipariş</span>
    </a>
  );
}
