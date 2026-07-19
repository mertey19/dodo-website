"use client";

import { ProductCard } from "@/components/products/ProductCard";
import { categories, products } from "@/data/products";
import type { ProductCategory } from "@/types";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

type FilterValue = "all" | ProductCategory;

type ProductExplorerProps = {
  initialCategory?: string;
};

function isCategory(value?: string): value is ProductCategory {
  return categories.some((category) => category.id === value);
}

export function ProductExplorer({ initialCategory }: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>(
    isCategory(initialCategory) ? initialCategory : "all",
  );

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
            <div className="flex items-center gap-2 text-sm font-semibold text-muted">
              <SlidersHorizontal size={18} aria-hidden="true" />
              {filteredProducts.length} ürün gösteriliyor
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
              <ProductCard key={product.id} product={product} />
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
    </section>
  );
}
