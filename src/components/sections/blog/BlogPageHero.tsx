type BlogPageHeroProps = {
  title: string;
  eyebrow?: string;
};

export function BlogPageHero({
  title,
  eyebrow = "Blog",
}: BlogPageHeroProps) {
  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden bg-background border-b border-border">
      <div className="absolute top-0 right-0 -z-10 h-[280px] w-[280px] bg-primary/15 blur-[100px] rounded-full opacity-40" />
      <div className="absolute bottom-0 left-0 -z-10 h-[200px] w-[200px] bg-primary/10 blur-[80px] rounded-full opacity-30" />
      {/* Soft center accent on the hero divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            {eyebrow}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground leading-[1.15]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
