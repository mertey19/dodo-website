import { businessInfo } from "@/data/business";
import { hasConfiguredValue } from "@/lib/contact";

export const siteDescription =
  "Akdeniz Kasabı'nın günlük taze et, dana eti, kuzu eti, kasap köfte, sucuk ve ızgaralık ürünlerini inceleyin; WhatsApp üzerinden hızlıca bilgi alın.";

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
];

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
    name: businessInfo.name,
    description: siteDescription,
    url: baseUrl.toString(),
    image: new URL("/images/hero-butcher.png", baseUrl).toString(),
    priceRange: "₺₺",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  if (hasConfiguredValue(businessInfo.phone)) schema.telephone = businessInfo.phone;
  if (hasConfiguredValue(businessInfo.address)) {
    schema.address = { "@type": "PostalAddress", streetAddress: businessInfo.address };
  }
  if (hasConfiguredValue(businessInfo.mapUrl)) schema.hasMap = businessInfo.mapUrl;

  return schema;
}
