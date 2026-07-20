"use client";

import { getBusinessStatus, type BusinessStatusValue } from "@/lib/business-status";
import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

type BusinessStatusProps = {
  dark?: boolean;
};

export function BusinessStatus({ dark = false }: BusinessStatusProps) {
  const [status, setStatus] = useState<BusinessStatusValue | null>(null);

  useEffect(() => {
    const updateStatus = () => setStatus(getBusinessStatus());
    updateStatus();
    const interval = window.setInterval(updateStatus, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const label = status?.label ?? "Çalışma saatleri yükleniyor";
  const stateClass = status?.isOpen ? "bg-emerald-500" : "bg-gold";

  return (
    <span
      className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 text-xs font-bold ${
        dark
          ? "border-cream/20 bg-ink/45 text-cream"
          : "border-burgundy/10 bg-white text-ink"
      }`}
      aria-live="polite"
    >
      <span className={`size-2 rounded-full ${stateClass}`} aria-hidden="true" />
      <Clock3 size={14} aria-hidden="true" />
      {label}
    </span>
  );
}
