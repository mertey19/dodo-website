import { BlogCard } from "@/components/blog/BlogCard";
import { BusinessStatus } from "@/components/common/BusinessStatus";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { ProductCard } from "@/components/products/ProductCard";
import { blogPosts } from "@/data/blog";
import { businessInfo } from "@/data/business";
import { categoryContent } from "@/data/product-categories";
import { categories, getCategoryHref, products } from "@/data/products";
import { buildWhatsappUrl } from "@/lib/contact";
import { getPageMetadata, productionSiteUrl } from "@/lib/seo";
import { ArrowRight, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

function getCategory(slug: string) {
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  return category;
}

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  const content = categoryContent[category.id];
  const metadata = getPageMetadata(getCategoryHref(category.id), content.title, content.description);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, images: [{ url: category.image, alt: `${category.title} için temsili ürün sunumu` }] },
    twitter: { ...metadata.twitter, images: [category.image] },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).slug);
  const content = categoryContent[category.id];
  const selectedProducts = content.productIds.flatMap((id) => products.filter((product) => product.id === id));
  const guides = content.guideSlugs.flatMap((slug) => blogPosts.filter((post) => post.slug === slug));
  const url = `${productionSiteUrl}${getCategoryHref(category.id)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", "@id": `${url}#webpage`, url,
        name: content.title, description: content.description, inLanguage: "tr-TR",
        isPartOf: { "@id": `${productionSiteUrl}/#website` },
        publisher: { "@id": `${productionSiteUrl}/#business` },
        mainEntity: {
          "@type": "ItemList", numberOfItems: selectedProducts.length,
          itemListElement: selectedProducts.map((product, index) => ({
            "@type": "ListItem", position: index + 1, name: product.name, url: `${url}#${product.id}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana sayfa", item: productionSiteUrl },
          { "@type": "ListItem", position: 2, name: "Ürünler", item: `${productionSiteUrl}/urunler` },
          { "@type": "ListItem", position: 3, name: category.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="bg-cream pb-20 pt-28 sm:pt-32">
      <div className="container-shell">
        <nav aria-label="Sayfa yolu" className="blog-breadcrumb">
          <Link href="/">Ana sayfa</Link><span aria-hidden="true">/</span>
          <Link href="/urunler">Ürünler</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{category.title}</span>
        </nav>
        <header className="grid items-center gap-8 py-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <p className="eyebrow text-red">Akdeniz Kasabı · Toroslar, Mersin</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">{content.heading}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{content.intro}</p>
            <div className="mt-5"><BusinessStatus /></div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#urun-secimi" className="button-primary">Ürünleri incele <ArrowRight size={18} aria-hidden="true" /></a>
              <a
                href={buildWhatsappUrl(`Merhaba Akdeniz Kasabı, ${category.title} seçenekleri için güncel fiyat ve stok bilgisi almak istiyorum. Ürün, miktar ve hazırlama tercihini sizinle netleştirebilir miyim?`)}
                target="_blank" rel="noopener noreferrer" className="button-secondary" data-analytics="category_whatsapp_click"
              ><MessageCircle size={18} aria-hidden="true" />Güncel fiyatı sor</a>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper">
              <Image src={category.image} alt={`${category.title} için temsili ürün sunumu`} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-xs leading-6 text-muted">Temsili görsel. Güncel ürün, içerik ve hazırlama seçenekleri işletmeyle teyit edilir.</figcaption>
          </figure>
        </header>
        <div className="border-y border-burgundy/10 py-5"><CategoryNavigation current={category.id} /></div>
        <section id="urun-secimi" aria-labelledby="products-heading" className="scroll-mt-28 py-12">
          <h2 id="products-heading" className="font-display text-3xl font-semibold">İnceleyebileceğiniz ürünler</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">Her ürünün düğmesinden doğrudan bilgi isteyebilir veya <Link href={`/urunler?kategori=${category.id}`} className="text-red underline underline-offset-4">sipariş listenizi hazırlayabilirsiniz</Link>. Stok, kilogram fiyatı ve toplam tutar görüşme sırasında netleşir.</p>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selectedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
        <section aria-labelledby="selection-heading" className="border-t border-burgundy/10 py-10">
          <h2 id="selection-heading" className="font-display text-3xl font-semibold">Seçim ve sipariş notları</h2>
          <div className="mt-7 grid gap-7 lg:grid-cols-3">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="font-display text-2xl font-semibold">{section.heading}</h3>
                <p className="mt-4 leading-7 text-muted">{section.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section aria-labelledby="questions-heading" className="py-8">
          <h2 id="questions-heading" className="font-display text-3xl font-semibold">Sipariş öncesi sorular</h2>
          <div className="mt-6 divide-y divide-burgundy/10 rounded-2xl border border-burgundy/10 bg-white px-5 sm:px-7">
            {content.questions.map((item) => <details key={item.question} className="py-5"><summary className="cursor-pointer font-semibold leading-7">{item.question}</summary><p className="mt-3 leading-7 text-muted">{item.answer}</p></details>)}
          </div>
        </section>
        <aside className="my-9 rounded-3xl bg-burgundy p-6 text-cream sm:p-9" aria-labelledby="pickup-heading">
          <h2 id="pickup-heading" className="font-display text-3xl font-semibold">Toroslar mağazamızdan bilgi alın</h2>
          <p className="mt-4 flex items-start gap-2 leading-7 text-cream/80"><MapPin size={19} className="mt-1 shrink-0" aria-hidden="true" />{businessInfo.address}</p>
          <p className="mt-3 leading-7 text-cream/80">{businessInfo.workingHours.display}. Gelmeden önce istediğiniz ürünün stokunu ve hazırlanma zamanını sorun. Teslimat bölgesi ve uygunluğu ayrıca görüşülür.</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href={`tel:${businessInfo.phone.replace(/\s/g, "")}`} className="button-gold" data-analytics="category_phone_click"><Phone size={18} aria-hidden="true" />{businessInfo.phone}</a>
            <a href={businessInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="button-light-outline" data-analytics="category_directions_click"><Navigation size={18} aria-hidden="true" />Yol tarifi</a>
          </div>
        </aside>
        <section aria-labelledby="guides-heading" className="pt-6">
          <h2 id="guides-heading" className="font-display text-3xl font-semibold">Seçiminize yardımcı rehberler</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-2">{guides.map((post) => <BlogCard key={post.slug} post={post} headingLevel={3} />)}</div>
          <Link href="/blog/mersin-kasap-fiyatlari-ucretleri" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-red underline underline-offset-4">Güncel fiyat isterken hangi bilgileri paylaşmalısınız?<ArrowRight size={17} aria-hidden="true" /></Link>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
