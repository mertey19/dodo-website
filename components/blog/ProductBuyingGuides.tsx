import { productGuidePosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductBuyingGuides() {
  return (
    <section className="blog-surface border-t border-burgundy/10 py-14 sm:py-20" aria-labelledby="product-guides-heading">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-red">Seçiminizi kolaylaştıralım</p>
          <h2 id="product-guides-heading" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Et alışverişi ve sipariş rehberleri</h2>
          <p className="mt-4 leading-7 text-muted">Hangi kesimi istediğinizden emin değilseniz yemeğinize göre hazırlığı karşılaştırın. Bu rehberler ürün, miktar ve paketleme tercihinizi anlatmanıza yardımcı olur.</p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {productGuidePosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-burgundy/10 bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red">{post.category}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold"><a href={`/blog/${post.slug}`} className="underline decoration-burgundy/20 underline-offset-4 hover:decoration-burgundy">{post.title}</a></h3>
              <p className="mt-3 text-sm leading-7 text-muted">{post.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-3xl leading-7 text-muted">Fiyatlar ürün, miktar ve hazırlama tercihine göre görüşmede netleşir. <Link href="/blog/mersin-kasap-fiyatlari-ucretleri" className="text-red underline underline-offset-4">Mersin kasap fiyatlarını karşılaştırma rehberinde</Link> teklif alırken sorulacak ayrıntıları bulabilirsiniz.</p>
        <Link href="/blog" className="text-link mt-5">Tüm et ve mutfak rehberleri <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
