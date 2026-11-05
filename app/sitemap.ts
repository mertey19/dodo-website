import { productionSiteUrl } from "@/lib/seo";
import { blogPosts } from "@/data/blog";
import { categories, getCategoryHref } from "@/data/products";
import type { MetadataRoute } from "next";
import { businessPhotos, businessVideos, getVideoPath, mediaPublishedAt } from "@/data/media";
import { adaklikService } from "@/data/adaklik";
import { catalog } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(productionSiteUrl);
  const adaklikUpdatedAt = new Date(Math.max(Date.parse(mediaPublishedAt), Date.parse(adaklikService.updatedAt)));
  return [
    { url: new URL("/", baseUrl).toString(), lastModified: new Date(Math.max(adaklikUpdatedAt.getTime(), Date.parse(catalog.updatedAt))), changeFrequency: "weekly", priority: 1, images: businessPhotos.map((photo) => new URL(photo.src, baseUrl).toString()) },
    { url: new URL(catalog.path, baseUrl).toString(), lastModified: catalog.updatedAt, changeFrequency: "monthly", priority: 0.9 },
    { url: new URL("/urunler", baseUrl).toString(), changeFrequency: "weekly", priority: 0.9 },
    { url: new URL("/mersin-adaklik", baseUrl).toString(), lastModified: adaklikUpdatedAt, changeFrequency: "monthly", priority: 0.9, images: businessPhotos.map((photo) => new URL(photo.src, baseUrl).toString()) },
    { url: new URL("/hakkimizda", baseUrl).toString(), changeFrequency: "monthly", priority: 0.7 },
    { url: new URL("/iletisim", baseUrl).toString(), changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/gizlilik", baseUrl).toString(), changeFrequency: "yearly", priority: 0.3 },
    { url: new URL("/blog", baseUrl).toString(), changeFrequency: "weekly", priority: 0.8 },
    ...businessVideos.map((video) => ({
      url: new URL(getVideoPath(video.slug), baseUrl).toString(),
      lastModified: video.uploadDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [new URL(video.poster, baseUrl).toString()],
      videos: [{
        title: video.title,
        description: video.description,
        thumbnail_loc: new URL(video.poster, baseUrl).toString(),
        content_loc: new URL(video.src, baseUrl).toString(),
        duration: Math.round(video.durationSeconds),
        publication_date: video.uploadDate,
      }],
    })),
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
