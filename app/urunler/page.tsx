import { PageHero } from "@/components/common/PageHero";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import { ProductBuyingGuides } from "@/components/blog/ProductBuyingGuides";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { getPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/urunler",
  "Mersin Et Çeşitleri ve Kasap Ürünleri | Akdeniz Kasabı",
  "Mersin’de dana kıyma, kuşbaşı, antrikot, kuzu, tavuk, köfte ve sucuk seçenekleri. Akdeniz Kasabı’ndan güncel fiyat ve hazırlama bilgisi alın.",
);

type ProductsPageProps = {
  searchParams: Promise<{ kategori?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  return (
    <>
      <PageHero eyebrow="Akdeniz Kasabı · Toroslar" title="Mersin’de et ve kasap ürünleri" description="Dana, kuzu, tavuk, köfte ve şarküteri seçeneklerinden listenizi hazırlayın. Kesim, miktar ve güncel fiyatı 7/24 açık Toroslar mağazamızla WhatsApp üzerinden görüşün." />
      <section className="bg-cream py-8" aria-labelledby="category-pages-heading">
        <div className="container-shell">
          <h2 id="category-pages-heading" className="mb-4 font-display text-2xl font-semibold">Ürün gruplarını yakından tanıyın</h2>
          <CategoryNavigation />
        </div>
      </section>
      <ProductExplorer initialCategory={params.kategori} />
      <ProductBuyingGuides />
    </>
  );
}
