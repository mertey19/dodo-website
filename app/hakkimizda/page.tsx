import { PageHero } from "@/components/common/PageHero";
import { AboutContent } from "@/components/sections/AboutContent";
import { getPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/hakkimizda",
  "Akdeniz Kasabı Hakkında | Toroslar, Mersin",
  "Mersin Toroslar’daki Akdeniz Kasabı’nı tanıyın. Et hazırlama yaklaşımımız, ürün seçenekleri ve 7/24 açık mağazamızla iletişim bilgileri.",
);

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Hakkımızda" title="İyi ürün, doğru hazırlık ve güvenilir esnaf yaklaşımı" description="Akdeniz Kasabı; günlük özen, usta hazırlık ve samimi iletişim üzerine kurulu yerel bir kasap deneyimi sunmayı amaçlar." />
      <AboutContent />
    </>
  );
}
