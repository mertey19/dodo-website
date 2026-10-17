import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts, districtPosts, guidePosts } from "@/data/blog";
import { productionSiteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const title = "Mersin Et ve Kasap Rehberi | Blog";
const description = "Mersin kasap rehberi: kıyma, antrikot, bonfile, sucuk, tavuk ve et fiyatları hakkında pratik bilgiler. WhatsApp siparişi ve 13 ilçe için mutfak yazıları.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website", title, description, url: "/blog", locale: "tr_TR", siteName: "Akdeniz Kasabı",
    images: [{ url: "/og.jpg", alt: "Akdeniz Kasabı Mersin et ve mutfak rehberi" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${productionSiteUrl}/blog#webpage`,
    url: `${productionSiteUrl}/blog`, name: title, description, inLanguage: "tr-TR",
    isPartOf: { "@id": `${productionSiteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem", position: index + 1,
        name: post.title, url: `${productionSiteUrl}/blog/${post.slug}`,
      })),
    },
  };
  return (
    <div className="blog-surface pb-20 pt-28 sm:pt-32">
      <div className="container-shell">
        <nav aria-label="Sayfa yolu" className="blog-breadcrumb"><Link href="/">Ana sayfa</Link><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
        <header className="max-w-3xl pb-9 pt-7">
          <p className="text-sm font-bold text-red">Akdeniz Kasabı · Kasaptan notlar</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Mersin kasap ve et alışverişi rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-muted">Kıyma, antrikot, tavuk ve sucuk seçimi; fiyat karşılaştırması ve sipariş için pratik bilgiler. İhtiyacınıza göre alışveriş rehberlerini veya Mersin’in 13 ilçesi için hazırladığımız mutfak yazılarını keşfedin.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Mağazamız Toroslar, Mithat Toroğlu Mahallesi’ndedir. Ürün, hazırlama ve teslim seçeneklerini <Link href="/iletisim" className="underline underline-offset-4">bizimle görüşebilirsiniz</Link>.</p>
        </header>
        <nav aria-label="Rehber bölümleri" className="flex flex-wrap gap-3 pb-6">
          <a className="button-primary" href="#alisveris-rehberleri">Alışveriş rehberleri</a>
          <a className="button-secondary" href="#ilce-rehberleri">İlçe rehberleri</a>
        </nav>
        <aside aria-label="Alışverişe nereden başlamalı?" className="mb-8 rounded-lg border border-burgundy/10 bg-paper p-5 sm:p-6">
          <h2 className="font-display text-2xl font-semibold">İlk kez mi alışveriş yapıyorsunuz?</h2>
          <p className="mt-3 leading-7 text-muted"><Link href="/blog/mersin-kasap-secimi-rehberi" className="text-red underline underline-offset-4">Kasap seçerken sorulacak sorularla</Link> başlayın. Bütçenizi planlamak için <Link href="/blog/mersin-kasap-fiyatlari-ucretleri" className="text-red underline underline-offset-4">fiyat karşılaştırma rehberini</Link>, listeniz hazırsa <Link href="/blog/mersin-whatsapp-et-siparisi" className="text-red underline underline-offset-4">WhatsApp sipariş adımlarını</Link> inceleyin.</p>
        </aside>
        <section id="alisveris-rehberleri" className="scroll-mt-28 border-t border-burgundy/10 pt-8" aria-labelledby="shopping-guides-heading">
          <h2 id="shopping-guides-heading" className="font-display text-3xl font-semibold">Kasap alışverişine dair merak ettikleriniz</h2>
          <p className="mt-3 leading-7 text-muted">Ürün seçimi, bütçe ve mağaza bilgileri: sipariş öncesi sorularınıza yanıtlar.</p>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidePosts.map((post) => <BlogCard key={post.slug} post={post} headingLevel={3} />)}
          </div>
        </section>
        <section id="ilce-rehberleri" className="mt-14 scroll-mt-28" aria-labelledby="district-guides-heading">
          <h2 id="district-guides-heading" className="font-display text-3xl font-semibold">Mersin’in ilçelerinden mutfak notları</h2>
          <p className="mt-3 leading-7 text-muted">Her ilçe için farklı bir yemek ve alışveriş konusu. Mağazamız Toroslar’dadır; bu yazılar diğer ilçelerde şubemiz olduğu anlamına gelmez.</p>
          <nav aria-label="İlçeye göre yazılar" className="mt-6 border-y border-burgundy/10 py-5">
            <p className="mb-3 text-sm font-bold">İlçeler</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {districtPosts.map((post) => <li key={post.slug}><a className="blog-district-link" href={`#${post.slug}`}>{post.district}</a></li>)}
            </ul>
          </nav>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {districtPosts.map((post) => <BlogCard key={post.slug} post={post} headingLevel={3} />)}
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
