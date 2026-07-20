import { businessInfo } from "@/data/business";
import { faqItems } from "@/data/faq";
import { hasConfiguredValue } from "@/lib/contact";

export const siteDescription =
  "Toroslar, Mersin'deki Akdeniz Kasabı'nın dana, kuzu, tavuk, kasap köfte, sucuk ve ızgaralık ürünlerini inceleyin; WhatsApp üzerinden bilgi alın.";

export const siteKeywords = [
  "Akdeniz Kasabı",
  "kasap",
  "taze et",
  "dana eti",
  "kuzu eti",
  "kasap köfte",
  "sucuk",
  "ızgaralık et",
  "mahalle kasabı",
  "Toroslar kasap",
  "Mersin kasap",
  "Kuvayi Milliye kasap",
  "Toroslar taze et",
  "Mersin kasap köfte",
];

const schemaDayNames: Record<keyof typeof businessInfo.openingHours, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    return new URL(configuredUrl ?? "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

export function getLocalBusinessSchema(baseUrl: URL): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Butcher", "FoodEstablishment", "LocalBusiness"],
    "@id": new URL("/#business", baseUrl).toString(),
    name: businessInfo.name,
    description: siteDescription,
    url: baseUrl.toString(),
    image: new URL("/images/hero-butcher.jpg", baseUrl).toString(),
    logo: new URL("/favicon.svg", baseUrl).toString(),
    openingHoursSpecification: Object.entries(businessInfo.openingHours).map(
      ([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: schemaDayNames[day as keyof typeof businessInfo.openingHours],
        opens: hours.opens,
        closes: hours.closes,
      }),
    ),
  };

  if (hasConfiguredValue(businessInfo.phone)) schema.telephone = businessInfo.phone;
  if (hasConfiguredValue(businessInfo.address)) {
    schema.address = { "@type": "PostalAddress", ...businessInfo.structuredAddress };
  }
  if (hasConfiguredValue(businessInfo.mapUrl)) schema.hasMap = businessInfo.mapUrl;
  if (hasConfiguredValue(businessInfo.instagramUrl)) schema.sameAs = [businessInfo.instagramUrl];

  return schema;
}

export function getFaqSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
