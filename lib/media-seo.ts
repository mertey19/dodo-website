import { businessPhotos, type BusinessVideo, getVideoPath } from "@/data/media";
import { productionSiteUrl } from "@/lib/seo";

export function getMediaGallerySchema(path: string) {
  const url = `${productionSiteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${url}#fotograflar`,
    url: `${url}#${path === "/" ? "galeri" : "adaklik-galeri"}`,
    name: "Akdeniz Kasabı’ndan gerçek fotoğraflar",
    isPartOf: { "@id": `${url}#webpage` },
    image: businessPhotos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: `${productionSiteUrl}${photo.src}`,
      thumbnailUrl: `${productionSiteUrl}${photo.thumbnail}`,
      name: photo.caption,
      description: photo.alt,
      caption: photo.caption,
      width: photo.width,
      height: photo.height,
    })),
  };
}

export function getVideoSchema(video: BusinessVideo) {
  const url = `${productionSiteUrl}${getVideoPath(video.slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${url}#video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: `${productionSiteUrl}${video.poster}`,
    contentUrl: `${productionSiteUrl}${video.src}`,
    uploadDate: video.uploadDate,
    duration: `PT${video.durationSeconds}S`,
    publisher: { "@id": `${productionSiteUrl}/#business` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "tr-TR",
  };
}
