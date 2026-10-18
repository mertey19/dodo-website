import { productionSiteUrl } from "@/lib/seo";
import { blogPosts } from "@/data/blog";
import { categories, getCategoryHref } from "@/data/products";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(productionSiteUrl);
  return [
    { url: new URL("/", baseUrl).toString(), changeFrequency: "weekly", priority: 1 },
    { url: new URL("/urunler", baseUrl).toString(), changeFrequency: "weekly", priority: 0.9 },
    { url: new URL("/hakkimizda", baseUrl).toString(), changeFrequency: "monthly", priority: 0.7 },
    { url: new URL("/iletisim", baseUrl).toString(), changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/gizlilik", baseUrl).toString(), changeFrequency: "yearly", priority: 0.3 },
    { url: new URL("/blog", baseUrl).toString(), changeFrequency: "weekly", priority: 0.8 },
    ...categories.map((category) => ({
      url: new URL(getCategoryHref(category.id), baseUrl).toString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, baseUrl).toString(),
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
