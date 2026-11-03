import { ContactDetails } from "@/components/sections/ContactDetails";
import { BlogPreview } from "@/components/blog/BlogPreview";
import { AdaklikSection } from "@/components/sections/AdaklikSection";
import { MediaShowcase } from "@/components/media/MediaShowcase";
import { getMediaGallerySchema } from "@/lib/media-seo";
import { businessPhotos } from "@/data/media";
import {
  CampaignsSection,
  CategoriesSection,
  FeaturedProductsSection,
  FAQSection,
  HeroSection,
  OrderProcessSection,
  ServiceInfoSection,
  TestimonialsSection,
  TrustSection,
  WhyUsSection,
} from "@/components/sections/HomeSections";
import { getFaqSchema, getPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/",
  "Mersin Kasap | 7/24 Açık Akdeniz Kasabı",
  "Mersin Toroslar’daki Akdeniz Kasabı 7/24 açık. Dana, kuzu, tavuk, kıyma ve kasap köfte ürünlerini inceleyin; güncel fiyatı WhatsApp’tan öğrenin.",
  { url: businessPhotos[3].src, width: businessPhotos[3].width, height: businessPhotos[3].height, alt: businessPhotos[3].alt },
);

export default function HomePage() {
  const faqSchema = getFaqSchema();
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AdaklikSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <CampaignsSection />
      <WhyUsSection />
      <MediaShowcase />
      <OrderProcessSection />
      <ServiceInfoSection />
      <TestimonialsSection />
      <BlogPreview />
      <FAQSection />
      <ContactDetails />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getMediaGallerySchema("/")).replace(/</g, "\\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
