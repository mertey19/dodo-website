import { PageHero } from "@/components/common/PageHero";
import { AboutContent } from "@/components/sections/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Toroslar, Mersin'deki Akdeniz Kasabı'nın ürün hazırlama, hijyen, usta kasap deneyimi ve müşteri iletişimi yaklaşımını tanıyın.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Hakkımızda" title="İyi ürün, doğru hazırlık ve güvenilir esnaf yaklaşımı" description="Akdeniz Kasabı; günlük özen, usta hazırlık ve samimi iletişim üzerine kurulu yerel bir kasap deneyimi sunmayı amaçlar." />
      <AboutContent />
    </>
  );
}
