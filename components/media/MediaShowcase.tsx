/* eslint-disable @next/next/no-img-element -- Local, pre-sized WebP assets use explicit responsive sources. */
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Film } from "lucide-react";
import { businessInfo } from "@/data/business";
import { businessPhotos, businessVideos, formatVideoDuration, getVideoPath } from "@/data/media";

export function MediaShowcase({ adaklik = false }: { adaklik?: boolean }) {
  const id = adaklik ? "adaklik-galeri" : "galeri";
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section-space bg-paper">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-red">Akdeniz Kasabı’ndan gerçek çekimler</p>
            <h2 id={`${id}-heading`} className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {adaklik ? "Adaklık seçeneklerini yakından görün." : "Bizden kareler, bizden videolar."}
            </h2>
            <p className="mt-5 leading-7 text-muted">Koyun ve keçilerden tezgâhta hazırlanan etlere, işletmemizin paylaştığı fotoğraflar ve kısa videolar. Güncel seçenekler ve fiyat için bizimle iletişime geçin.</p>
          </div>
          <a href={businessInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="button-secondary shrink-0 self-start" data-analytics="gallery_instagram_click">
            <Camera size={18} aria-hidden="true" /> @akdenizkasabi33 <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">Instagram profili, yeni sekmede açılır</span>
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3 border-b border-burgundy/15 pb-4">
          <Camera size={20} aria-hidden="true" className="text-red" />
          <h3 className="font-semibold">Fotoğraflar</h3><span className="text-sm text-muted">{businessPhotos.length} kare</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {businessPhotos.map((photo) => (
            <figure key={photo.id} className="overflow-hidden rounded-2xl border border-burgundy/10 bg-cream">
              <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.caption} — fotoğrafı yeni sekmede büyüt`} className="group relative block overflow-hidden rounded-t-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red">
                <img src={photo.thumbnail} srcSet={`${photo.thumbnail} 640w, ${photo.src} ${photo.width}w`} sizes="(max-width: 1023px) 50vw, 25vw" width={photo.width} height={photo.height} loading="lazy" decoding="async" alt={photo.alt} className="aspect-[3/4] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
                <span aria-hidden="true" className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-cream/95 text-burgundy"><ArrowUpRight size={16} /></span>
              </a>
              <figcaption className="p-3 text-sm leading-6 text-muted sm:p-4">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mb-6 mt-12 flex flex-wrap items-center justify-between gap-3 border-b border-burgundy/15 pb-4">
          <div className="flex items-center gap-3"><Film size={20} aria-hidden="true" className="text-red" /><h3 className="font-semibold">Kısa videolar</h3><span className="text-sm text-muted">{businessVideos.length} video</span></div>
          <p className="text-xs text-muted">Diğer videolar için yatay kaydırın →</p>
        </div>
        <div role="region" aria-label="Kısa videolar; yatay kaydırılabilir liste" tabIndex={0} className="flex snap-x snap-mandatory gap-5 overflow-x-auto rounded-2xl pb-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red">
          {businessVideos.map((video) => (
            <article key={video.slug} className="w-[min(76vw,18rem)] shrink-0 snap-start overflow-hidden rounded-2xl border border-burgundy/10 bg-cream">
              <video controls playsInline preload="none" poster={video.poster} width={576} height={1024} aria-label={video.title} aria-describedby={`${id}-${video.slug}-description`} className="aspect-[9/16] w-full bg-ink object-contain">
                <source src={video.src} type="video/mp4" />
                Tarayıcınız videoyu oynatamıyor. <a href={video.src}>MP4 videoyu açın.</a>
              </video>
              <div className="p-5">
                <p className="text-xs font-semibold tracking-wide text-red">{formatVideoDuration(video.durationSeconds)} · İşletme çekimi</p>
                <h4 className="mt-2 font-display text-xl font-semibold"><Link href={getVideoPath(video.slug)} className="hover:underline">{video.title}</Link></h4>
                <p id={`${id}-${video.slug}-description`} className="mt-3 text-sm leading-6 text-muted">{video.description}</p>
                <Link href={getVideoPath(video.slug)} className="text-link mt-4">Videoyu incele <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-6 text-muted">Görüntüler işletmemiz tarafından paylaşılmıştır; belirli bir hayvanın veya ürünün hâlen mevcut olduğu anlamına gelmez. Müsaitlik, fiyat, kesim ve teslimat ayrıntıları görüşmede teyit edilir.</p>
      </div>
    </section>
  );
}
