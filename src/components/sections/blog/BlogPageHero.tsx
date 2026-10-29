type BlogPageHeroProps = {
  title: string;
  eyebrow?: string;
};

export function BlogPageHero({
  title,
  eyebrow = "Blog",
}: BlogPageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background min-h-[55vh] flex items-center">
      <div className="absolute top-0 right-0 -z-10 h-[420px] w-[420px] bg-primary/15 blur-[120px] rounded-full opacity-40" />
      <div className="absolute bottom-0 left-0 -z-10 h-[320px] w-[320px] bg-primary/10 blur-[100px] rounded-full opacity-30" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-5">
            {eyebrow}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground leading-[1.1]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
