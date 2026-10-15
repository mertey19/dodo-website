import { type BlogPost, getReadingMinutes } from "@/data/blog";
import { ArrowRight, Clock3 } from "lucide-react";
import Image from "next/image";

export function BlogCard({ post, headingLevel = 2 }: { post: BlogPost; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <article id={post.slug} className="blog-card scroll-mt-28">
      <a href={`/blog/${post.slug}`} className="blog-card-link">
        <div className="relative aspect-[3/2] overflow-hidden bg-paper">
          <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-sm font-semibold text-red">{post.district ?? "Mersin"} <span aria-hidden="true">·</span> {post.category}</p>
          <Heading className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">{post.title}</Heading>
          <p className="mt-3 flex-1 text-sm leading-7 text-muted">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-burgundy/10 pt-4 text-sm">
            <span className="inline-flex items-center gap-2 text-muted"><Clock3 size={15} aria-hidden="true" />{getReadingMinutes(post)} dk okuma</span>
            <span className="inline-flex items-center gap-2 font-bold text-red">Yazıyı oku <ArrowRight size={17} aria-hidden="true" /></span>
          </div>
        </div>
      </a>
    </article>
  );
}
