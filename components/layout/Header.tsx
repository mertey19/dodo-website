"use client";

import { Logo } from "@/components/common/Logo";
import { navigation } from "@/data/business";
import { buildWhatsappUrl } from "@/lib/contact";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-black/5 bg-cream/95 py-3 shadow-[0_10px_35px_rgba(42,20,20,0.08)] backdrop-blur-xl"
          : "border-transparent bg-cream/90 py-4 backdrop-blur-md"
      }`}
    >
      <div className="container-shell flex items-center justify-between gap-6">
        <Logo compact />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="button-primary hidden xl:inline-flex"
          >
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp Sipariş
          </a>
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full border border-burgundy/15 text-burgundy transition-colors hover:bg-burgundy hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-burgundy/10 bg-cream shadow-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[34rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col py-5" aria-label="Mobil menü">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-burgundy/8 py-4 font-semibold text-ink transition-colors hover:text-red"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-5 justify-center"
          >
            <MessageCircle aria-hidden="true" size={19} />
            WhatsApp’tan Sipariş Ver
          </a>
        </nav>
      </div>
    </header>
  );
}
