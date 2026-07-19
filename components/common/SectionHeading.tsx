type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "text-gold" : "text-red"}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl ${light ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-cream/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
