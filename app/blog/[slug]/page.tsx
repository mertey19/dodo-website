import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts, formatBlogDate, getBlogPost, getReadingMinutes } from "@/data/blog";
import { businessInfo } from "@/data/business";
import { buildWhatsappUrl } from "@/lib/contact";
import { productionSiteUrl } from "@/lib/seo";
import { ArrowRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article", title: post.title, description: post.description,
      url: `/blog/${post.slug}`, locale: "tr_TR", siteName: businessInfo.name,
      publishedTime: post.publishedAt, modifiedTime: post.publishedAt,
      authors: [`${productionSiteUrl}/hakkimizda`], section: post.category,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const url = `${productionSiteUrl}/blog/${post.slug}`;
  const related = blogPosts.filter((item) => post.relatedSlugs.includes(item.slug));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${url}#article`, url,
        headline: post.title, description: post.description,
        image: [new URL(post.image, productionSiteUrl).toString()],
        datePublished: post.publishedAt, dateModified: post.publishedAt,
        inLanguage: "tr-TR", articleSection: post.category,
        author: { "@type": "Organization", name: businessInfo.name, url: `${productionSiteUrl}/hakkimizda` },
        publisher: { "@id": `${productionSiteUrl}/#business` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        isPartOf: { "@type": "Blog", "@id": `${productionSiteUrl}/blog`, name: "Mersin et ve mutfak rehberi" },
        about: { "@type": "Place", name: `${post.district}, Mersin` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana sayfa", item: productionSiteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${productionSiteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="blog-surface pb-20 pt-28 sm:pt-32">
      <div className="container-shell">
        <nav aria-label="Sayfa yolu" className="blog-breadcrumb">
          <Link href="/">Ana sayfa</Link><span aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{post.title}</span>
        </nav>
        <article className="blog-article mx-auto mt-8 max-w-3xl">
          <header>
            <p className="text-sm font-bold text-red">{post.district} <span aria-hidden="true">·</span> {post.category}</p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <Link href="/hakkimizda" className="underline underline-offset-4">{businessInfo.name}</Link>
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span className="inline-flex items-center gap-2"><Clock3 size={15} aria-hidden="true" />{getReadingMinutes(post)} dk okuma</span>
            </div>
            <p className="mt-6 text-lg leading-8 text-muted">{post.intro}</p>
          </header>
          <figure className="my-8">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-paper">
              <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-xs leading-6 text-muted">Temsili ürün görseli. Kesim ve hazırlama tercihi sipariş sırasında görüşülür.</figcaption>
          </figure>
          <nav aria-label="Yazının içindekiler" className="border-y border-burgundy/15 py-6">
            <p className="mb-3 font-semibold">Bu yazıda</p>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-6">
              {post.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-red underline decoration-red/30 underline-offset-4 hover:decoration-red">{section.title}</a></li>)}
            </ol>
          </nav>
          {post.sections.map((section) => (
            <section id={section.id} key={section.id} className="scroll-mt-28 pt-9">
              <h2 className="font-display text-2xl font-semibold leading-snug sm:text-3xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-muted">{paragraph}</p>)}
              {section.tips && <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-ink">{section.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>}
            </section>
          ))}
          {post.sources && (
            <section className="mt-9 border-t border-burgundy/10 pt-6" aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="font-semibold">Kaynaklar</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                {post.sources.map((source) => <li key={source.url}><a href={source.url} className="underline underline-offset-4">{source.label}</a></li>)}
              </ul>
            </section>
          )}
          <aside className="mt-10 border-y border-burgundy/15 py-8" aria-labelledby="store-heading">
            <h2 id="store-heading" className="font-display text-2xl font-semibold">Sofranıza uygun hazırlığı birlikte seçelim</h2>
            <p className="mt-4 leading-7 text-muted">{businessInfo.name}, Toroslar’daki mağazasında {businessInfo.workingHours.weekdays.toLocaleLowerCase("tr-TR")}. Ürün, güncel fiyat ve teslim seçenekleri için bize ulaşabilirsiniz.</p>
            <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-muted"><MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />{businessInfo.address}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={buildWhatsappUrl(`Merhaba Akdeniz Kasabı, ${post.district} için hazırladığınız “${post.title}” yazısını okudum. Ürün ve hazırlama seçenekleri hakkında bilgi alabilir miyim?`)} target="_blank" rel="noopener noreferrer" className="button-primary" data-analytics="blog_whatsapp_click"><MessageCircle size={18} aria-hidden="true" />WhatsApp’tan sor</a>
              <Link href={`/urunler?kategori=${post.productCategory}`} className="button-secondary">İlgili ürünler <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </aside>
        </article>
        <section className="mt-14" aria-labelledby="related-heading">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 id="related-heading" className="font-display text-3xl font-semibold">İlgili yazılar</h2>
            <Link href="/blog" className="text-link">Tüm ilçeler ve yazılar <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
