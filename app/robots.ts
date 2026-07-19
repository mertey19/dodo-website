import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();
  return { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", baseUrl).toString() };
}
