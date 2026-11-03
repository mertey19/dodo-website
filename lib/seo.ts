import { businessInfo } from "@/data/business";
import { faqItems } from "@/data/faq";
import { businessPhotos } from "@/data/media";
import { hasConfiguredValue } from "@/lib/contact";
import type { Metadata } from "next";

export const productionSiteUrl = "https://www.akdenizkasabi.com.tr";

export function getPageMetadata(path: string, title: string, description: string, image = { url: "/og.jpg", width: 1536, height: 1024, alt: "Akdeniz Kasabı, Toroslar Mersin" }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website", title, description, url: path,
      locale: "tr_TR", siteName: businessInfo.name,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export const siteDescription =
  "Toroslar, Mersin'de 7/24 açık Akdeniz Kasabı'nın dana, kuzu, tavuk, kasap köfte, sucuk ve ızgaralık ürünlerini inceleyin; WhatsApp üzerinden bilgi alın.";

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
  return new URL(productionSiteUrl);
}

export function getLocalBusinessSchema(baseUrl: URL): Record<string, unknown> {
  const logoUrl = new URL("/logo-720.png", baseUrl).toString();
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    "@id": new URL("/#business", baseUrl).toString(),
    name: businessInfo.name,
    description: siteDescription,
    url: baseUrl.toString(),
    image: [businessPhotos[3].src, businessPhotos[0].src].map((path) => new URL(path, baseUrl).toString()),
    logo: {
      "@type": "ImageObject",
      "@id": new URL("/#logo", baseUrl).toString(),
      url: logoUrl,
      contentUrl: logoUrl,
      width: 720,
      height: 720,
      caption: businessInfo.name,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude,
    },
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

export function getWebsiteSchema(baseUrl: URL): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": new URL("/#website", baseUrl).toString(),
    url: baseUrl.toString(),
    name: businessInfo.name,
    alternateName: "Akdeniz Kasabı Mersin",
    inLanguage: "tr-TR",
    publisher: { "@id": new URL("/#business", baseUrl).toString() },
  };
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
