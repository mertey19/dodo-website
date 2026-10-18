"use client";

import { buildProductWhatsappUrl } from "@/lib/contact";
import type { Product } from "@/types";
import { ArrowUpRight, Check, MessageCircle, ShoppingBasket } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  selected?: boolean;
  onToggleOrder?: () => void;
};

export function ProductCard({ product, selected = false, onToggleOrder }: ProductCardProps) {
  return (
    <article id={product.id} className="product-card group scroll-mt-28">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone">
        <Image
          src={product.image}
          alt={`${product.name} için temsili ürün sunumu`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-md">
          {product.categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-2xl font-semibold text-ink">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{product.description}</p>
        <div className="mt-5 border-t border-burgundy/10 pt-4">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-red">
            Güncel fiyat için iletişime geçin
          </p>
          {onToggleOrder ? (
            <div className="mt-4 space-y-3">
              <button
                type="button"
                onClick={onToggleOrder}
                aria-pressed={selected}
                className={`inline-flex min-h-11 w-full items-center justify-between rounded-xl px-4 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 ${
                  selected
                    ? "border border-burgundy/15 bg-paper text-burgundy"
                    : "bg-burgundy text-cream hover:bg-red"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {selected ? <Check aria-hidden="true" size={17} /> : <ShoppingBasket aria-hidden="true" size={17} />}
                  {selected ? "Sipariş Listesinde" : "Listeye Ekle"}
                </span>
                <span aria-hidden="true">{selected ? "✓" : "+"}</span>
              </button>
              <a
                href={buildProductWhatsappUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-between rounded-xl px-2 text-sm font-bold text-red transition-colors hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
                aria-label={`${product.name} için doğrudan WhatsApp'tan bilgi alın`}
                data-analytics="product_whatsapp_click"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle aria-hidden="true" size={17} /> Tek Ürünü Sor
                </span>
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          ) : (
            <a
              href={buildProductWhatsappUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 w-full items-center justify-between rounded-xl bg-burgundy px-4 text-sm font-bold text-cream transition-colors hover:bg-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2"
              aria-label={`${product.name} için WhatsApp'tan bilgi alın`}
              data-analytics="product_whatsapp_click"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle aria-hidden="true" size={17} /> WhatsApp’tan Sor
              </span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
