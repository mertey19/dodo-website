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
import { getFaqSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toroslar Mersin Kasap",
  description: "Mithat Toroğlu, Kuvayi Milliye Caddesi'nde 7/24 açık Akdeniz Kasabı'nın et ve şarküteri ürünlerini inceleyin; WhatsApp sipariş listesi oluşturun.",
};

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
