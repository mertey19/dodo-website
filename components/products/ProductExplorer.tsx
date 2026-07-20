"use client";

import { ProductCard } from "@/components/products/ProductCard";
import { OrderBuilder } from "@/components/products/OrderBuilder";
import { categories, products } from "@/data/products";
import { trackAnalyticsEvent } from "@/lib/analytics";
import type { ProductCategory } from "@/types";
import { Search, ShoppingBasket, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type FilterValue = "all" | ProductCategory;

type ProductExplorerProps = {
  initialCategory?: string;
};

const storageKey = "akdeniz-order-list-v1";

function isCategory(value?: string): value is ProductCategory {
  return categories.some((category) => category.id === value);
}

export function ProductExplorer({ initialCategory }: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [storageReady, setStorageReady] = useState(false);
  const [orderBuilderOpen, setOrderBuilderOpen] = useState(false);
  const orderButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>(
    isCategory(initialCategory) ? initialCategory : "all",
  );

  useEffect(() => {
    const restoreSelections = () => {
      try {
        const storedValue = window.localStorage.getItem(storageKey);
        const parsedValue = storedValue ? (JSON.parse(storedValue) as unknown) : null;
        if (parsedValue && typeof parsedValue === "object" && !Array.isArray(parsedValue)) {
          const validProductIds = new Set(products.map((product) => product.id));
          const validSelections = Object.fromEntries(
            Object.entries(parsedValue)
              .filter(([productId, quantity]) => validProductIds.has(productId) && typeof quantity === "string"),
          );
          setSelections(validSelections as Record<string, string>);
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      } finally {
        setStorageReady(true);
      }
    };

    const timeout = window.setTimeout(restoreSelections, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    window.localStorage.setItem(storageKey, JSON.stringify(selections));
  }, [selections, storageReady]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${product.name} ${product.categoryLabel} ${product.description}`
          .toLocaleLowerCase("tr-TR")
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const selectCategory = (value: FilterValue) => {
    setSelectedCategory(value);
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("kategori");
    else url.searchParams.set("kategori", value);
    window.history.replaceState({}, "", `${url.pathname}${url.search}`);
  };

  const toggleProduct = (productId: string) => {
    setSelections((current) => {
      if (Object.hasOwn(current, productId)) {
        const nextSelections = { ...current };
        delete nextSelections[productId];
        return nextSelections;
      }
      trackAnalyticsEvent("order_list_start");
      return { ...current, [productId]: "" };
    });
  };

  const selectedCount = Object.keys(selections).length;

  return (
    <section className="section-space bg-paper">
      <div className="container-shell">
        <div className="rounded-3xl border border-burgundy/10 bg-white p-4 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-md">
              <span className="sr-only">Ürün ara</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ürün adı veya kategori ara..."
                className="form-control pl-12"
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted">
                <SlidersHorizontal size={18} aria-hidden="true" />
                {filteredProducts.length} ürün gösteriliyor
              </div>
              <button
                ref={orderButtonRef}
                type="button"
                onClick={() => setOrderBuilderOpen(true)}
                className="button-primary justify-center"
                aria-haspopup="dialog"
              >
                <ShoppingBasket size={18} aria-hidden="true" />
                Sipariş Listem
                <span className="grid min-w-6 place-items-center rounded-full bg-gold px-1.5 py-1 text-[11px] leading-none text-ink" aria-hidden="true">
                  {selectedCount}
                </span>
              </button>
              <span className="sr-only" aria-live="polite">Sipariş listenizde {selectedCount} ürün var.</span>
            </div>
          </div>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2" aria-label="Ürün kategorileri">
            <button
              type="button"
              className={`filter-button ${selectedCategory === "all" ? "filter-button-active" : ""}`}
              onClick={() => selectCategory("all")}
              aria-pressed={selectedCategory === "all"}
            >
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`filter-button ${selectedCategory === category.id ? "filter-button-active" : ""}`}
                onClick={() => selectCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selected={Object.hasOwn(selections, product.id)}
                onToggleOrder={() => toggleProduct(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-burgundy/20 bg-white px-6 py-16 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink">Aradığınız ürün bulunamadı</h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Arama ifadenizi değiştirin veya tüm kategorileri yeniden görüntüleyin.
            </p>
            <button
              type="button"
              className="button-secondary mt-6"
              onClick={() => {
                setQuery("");
                selectCategory("all");
              }}
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
      <OrderBuilder
        open={orderBuilderOpen}
        selections={selections}
        onClose={() => {
          setOrderBuilderOpen(false);
          window.requestAnimationFrame(() => orderButtonRef.current?.focus());
        }}
        onQuantityChange={(productId, quantity) => {
          setSelections((current) => ({ ...current, [productId]: quantity }));
        }}
        onRemove={(productId) => {
          setSelections((current) => {
            const nextSelections = { ...current };
            delete nextSelections[productId];
            return nextSelections;
          });
        }}
        onClear={() => setSelections({})}
      />
    </section>
  );
}
