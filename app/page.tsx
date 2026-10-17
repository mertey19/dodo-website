import { ContactDetails } from "@/components/sections/ContactDetails";
import { BlogPreview } from "@/components/blog/BlogPreview";
import {
  CampaignsSection,
  CategoriesSection,
  FeaturedProductsSection,
  FAQSection,
  HeroSection,
  OrderProcessSection,
  ServiceInfoSection,
  StoreGallerySection,
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
);

export default function HomePage() {
  const faqSchema = getFaqSchema();
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <CampaignsSection />
      <WhyUsSection />
      <StoreGallerySection />
      <OrderProcessSection />
      <ServiceInfoSection />
      <TestimonialsSection />
      <BlogPreview />
      <FAQSection />
      <ContactDetails />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
