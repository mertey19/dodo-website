import { PageHero } from "@/components/common/PageHero";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description: "Toroslar, Mersin Akdeniz Kasabı'nın dana, kuzu, tavuk, köfte, şarküteri ve ızgaralık ürünlerini inceleyin; WhatsApp sipariş listesi oluşturun.",
  alternates: { canonical: "/urunler" },
};

type ProductsPageProps = {
  searchParams: Promise<{ kategori?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  return (
    <>
      <PageHero eyebrow="Ürünlerimiz" title="Sofranız için özenle hazırlanan seçenekler" description="İhtiyacınıza uygun ürünü bulun; kesim, miktar ve güncel fiyat bilgisi için WhatsApp üzerinden bize yazın." />
      <ProductExplorer initialCategory={params.kategori} />
    </>
  );
}
