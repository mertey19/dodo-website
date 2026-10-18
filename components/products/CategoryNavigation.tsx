import { categories, getCategoryHref } from "@/data/products";
import type { ProductCategory } from "@/types";
import Link from "next/link";

export function CategoryNavigation({ current }: { current?: ProductCategory }) {
  return (
    <nav aria-label="Ürün grupları" className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={getCategoryHref(category.id)}
          aria-current={current === category.id ? "page" : undefined}
          data-analytics="category_navigation_click"
          className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 ${current === category.id ? "border-burgundy bg-burgundy text-cream" : "border-burgundy/15 bg-white text-burgundy hover:bg-paper"}`}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  );
}
