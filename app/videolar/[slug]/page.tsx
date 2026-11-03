import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Camera, Phone } from "lucide-react";
import { businessVideos, formatVideoDuration, getVideoPath } from "@/data/media";
import { businessInfo } from "@/data/business";
import { getPageMetadata, productionSiteUrl } from "@/lib/seo";
import { getVideoSchema } from "@/lib/media-seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return businessVideos.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = businessVideos.find((item) => item.slug === slug);
  if (!video) notFound();
  return getPageMetadata(getVideoPath(video.slug), `${video.title} | Akdeniz Kasabı Mersin`, video.description, {
    url: video.poster, width: 576, height: 1024, alt: video.title,
  });
}

export default async function VideoPage({ params }: Props) {
  const { slug } = await params;
  const video = businessVideos.find((item) => item.slug === slug);
  if (!video) notFound();
  const canonical = `${productionSiteUrl}${getVideoPath(slug)}`;
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${productionSiteUrl}/` },
      { "@type": "ListItem", position: 2, name: video.title, item: canonical },
    ],
  };
  return (
    <article className="bg-paper pb-20 pt-28 sm:pt-32">
      <div className="container-shell">
        <nav aria-label="Sayfa yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-muted"><Link href="/" className="hover:underline">Ana Sayfa</Link><span aria-hidden="true">/</span><span aria-current="page">{video.title}</span></nav>
        <p className="eyebrow text-red">Akdeniz Kasabı · İşletmemizden video</p>
        <h1 className="mb-7 mt-4 font-display text-3xl font-semibold sm:text-5xl">{video.title}</h1>
        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <video controls playsInline preload="metadata" poster={video.poster} width={576} height={1024} aria-label={video.title} aria-describedby="video-description" className="max-h-[72vh] min-h-80 w-full rounded-2xl bg-ink object-contain">
            <source src={video.src} type="video/mp4" />
            Tarayıcınız videoyu oynatamıyor. <a href={video.src}>MP4 videoyu açın.</a>
          </video>
          <div className="rounded-2xl border border-burgundy/10 bg-cream p-6 sm:p-8">
            <p className="text-sm font-semibold text-red">{formatVideoDuration(video.durationSeconds)} · Gerçek çekim</p>
            <p id="video-description" className="mt-4 leading-8 text-muted">{video.description}</p>
            <p className="mt-4 text-xs leading-6 text-muted">Siteye eklenme: <time dateTime={video.uploadDate}>3 Kasım 2026</time>. Bu tarih çekim tarihi değildir. Görüntüler güncel stok veya fiyat taahhüdü oluşturmaz.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="button-primary" data-analytics="video_phone_click"><Phone size={18} aria-hidden="true" /> 0553 776 61 62</a>
              <Link href="/mersin-adaklik" className="button-secondary">Adaklık bilgisi <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-red underline underline-offset-4"><Camera size={18} aria-hidden="true" /> Instagram: @akdenizkasabi33<span className="sr-only"> (yeni sekmede)</span></a>
            <Link href="/#galeri" className="mt-4 block text-sm text-muted underline underline-offset-4">Tüm fotoğraf ve videolara dön</Link>
          </div>
        </div>
        <section aria-labelledby="related-videos-heading" className="mt-14">
          <h2 id="related-videos-heading" className="font-display text-3xl font-semibold">Diğer videolarımız</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {businessVideos.filter((item) => item.slug !== slug).map((item) => (
              <Link key={item.slug} href={getVideoPath(item.slug)} className="overflow-hidden rounded-2xl border border-burgundy/10 bg-cream hover:shadow-soft">
                <Image src={item.poster} alt={item.title} width={576} height={1024} unoptimized className="aspect-[3/4] w-full object-cover" />
                <span className="block p-4 text-sm font-semibold leading-6">{item.title}<span className="mt-2 block text-xs text-muted">{formatVideoDuration(item.durationSeconds)} · İzle →</span></span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoSchema(video)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    </article>
  );
}
