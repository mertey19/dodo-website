import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return [
    { url: new URL("/", baseUrl).toString(), changeFrequency: "weekly", priority: 1 },
    { url: new URL("/urunler", baseUrl).toString(), changeFrequency: "weekly", priority: 0.9 },
    { url: new URL("/hakkimizda", baseUrl).toString(), changeFrequency: "monthly", priority: 0.7 },
    { url: new URL("/iletisim", baseUrl).toString(), changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/gizlilik", baseUrl).toString(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
