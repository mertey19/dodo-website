import { Reveal } from "@/components/common/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-burgundy pb-20 pt-36 text-cream sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(197,154,69,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="absolute -right-20 top-24 size-72 rounded-full border border-cream/10" />
      <div className="container-shell relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/75">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
