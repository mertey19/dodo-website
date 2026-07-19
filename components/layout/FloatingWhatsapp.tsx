"use client";

import { buildWhatsappUrl } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(21,128,61,0.35)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-4 sm:bottom-7 sm:right-7"
      aria-label="WhatsApp üzerinden Akdeniz Kasabı'na yazın"
    >
      <MessageCircle aria-hidden="true" size={24} />
      <span className="hidden sm:inline">Hızlı Sipariş</span>
    </a>
  );
}
