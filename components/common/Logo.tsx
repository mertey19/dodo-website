"use client";

import { Beef } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
      aria-label="Akdeniz Kasabı ana sayfa"
    >
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-full border ${
          light
            ? "border-cream/25 bg-cream/10 text-gold"
            : "border-burgundy/15 bg-burgundy text-cream"
        } transition-transform group-hover:-rotate-6`}
      >
        <Beef aria-hidden="true" size={22} strokeWidth={1.7} />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold tracking-tight ${light ? "text-cream" : "text-ink"}`}>
          Akdeniz Kasabı
        </span>
        {!compact && (
          <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] ${light ? "text-cream/60" : "text-muted"}`}>
            Günlük Taze Et ve Şarküteri
          </span>
        )}
      </span>
    </Link>
  );
}
