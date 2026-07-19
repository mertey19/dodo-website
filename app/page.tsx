import { ContactDetails } from "@/components/sections/ContactDetails";
import {
  CampaignsSection,
  CategoriesSection,
  FeaturedProductsSection,
  HeroSection,
  OrderProcessSection,
  TestimonialsSection,
  TrustSection,
  WhyUsSection,
} from "@/components/sections/HomeSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Günlük Taze Et ve Şarküteri",
  description: "Dana eti, kuzu eti, kasap köfte, sucuk ve ızgaralık ürünleri inceleyin; Akdeniz Kasabı'na WhatsApp üzerinden hızlıca ulaşın.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <CampaignsSection />
      <WhyUsSection />
      <OrderProcessSection />
      <TestimonialsSection />
      <ContactDetails />
    </>
  );
}
