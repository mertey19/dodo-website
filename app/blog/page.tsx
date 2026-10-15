import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";
import { productionSiteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const title = "Mersin Et ve Kasap Rehberi | Blog";
const description = "Mersin’in 13 ilçesi için et seçimi, mangal, günlük yemek ve alışveriş rehberleri. Toroslar’daki Akdeniz Kasabı’ndan mutfağınıza pratik notlar.";

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
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Mersin et ve mutfak rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-muted">Et seçerken, yemek planlarken ve misafir sofrası hazırlarken işinize yarayacak notlar. Mersin’in her ilçesi için farklı bir mutfak konusu.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Mağazamız Toroslar, Mithat Toroğlu Mahallesi’ndedir. Ürün, hazırlama ve teslim seçeneklerini <Link href="/iletisim" className="underline underline-offset-4">bizimle görüşebilirsiniz</Link>.</p>
        </header>
        <nav aria-label="İlçeye göre yazılar" className="border-y border-burgundy/10 py-5">
          <p className="mb-3 text-sm font-bold">İlçeler</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {blogPosts.map((post) => <li key={post.slug}><a className="blog-district-link" href={`#${post.slug}`}>{post.district}</a></li>)}
          </ul>
        </nav>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
