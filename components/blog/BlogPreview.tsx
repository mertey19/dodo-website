import { BlogCard } from "@/components/blog/BlogCard";
import { guidePosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogPreview() {
  const featured = guidePosts.slice(0, 3);
  return (
    <section className="blog-surface border-y border-burgundy/10 py-16 sm:py-20" aria-labelledby="blog-heading">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-red">Kasaptan notlar</p>
            <h2 id="blog-heading" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Mersin için et ve mutfak rehberi</h2>
            <p className="mt-4 leading-7 text-muted">Kasap seçimi, fiyat karşılaştırması ve tavuk alışverişi için pratik bilgiler; Mersin’in 13 ilçesi için mutfak notları.</p>
          </div>
          <Link href="/blog" className="text-link">Tüm yazılar <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => <BlogCard key={post.slug} post={post} headingLevel={3} />)}
        </div>
      </div>
    </section>
  );
}
