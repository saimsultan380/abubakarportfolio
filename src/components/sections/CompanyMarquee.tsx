"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Building2 } from "lucide-react";

// Slugs verified against Simple Icons - use jsDelivr for reliability
const COMPANIES = [
  { name: "Google", slug: "google" },
  { name: "Tesla", slug: "tesla" },
  { name: "OpenAI", slug: "openai" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Amazon", slug: "amazon" },
  { name: "Apple", slug: "apple" },
  { name: "Meta", slug: "meta" },
  { name: "Netflix", slug: "netflix" },
  { name: "Spotify", slug: "spotify" },
  { name: "Uber", slug: "uber" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "IBM", slug: "ibm" },
  { name: "Accenture", slug: "accenture" },
  { name: "Atlassian", slug: "atlassian" },
  { name: "Adobe", slug: "adobe" },
  { name: "Intel", slug: "intel" },
  { name: "Nvidia", slug: "nvidia" },
  { name: "Barclays", slug: "barclays" },
  { name: "HSBC", slug: "hsbc" },
  { name: "British Airways", slug: "britishairways" },
  { name: "Emirates", slug: "emirates" },
  { name: "Etihad Airways", slug: "etihadairways" },
  { name: "Qatar Airways", slug: "qatarairways" },
  { name: "SAP", slug: "sap" },
];

// Use both CDNs - simpleicons for color, jsDelivr as fallback
function getIconUrl(slug: string) {
  return `https://cdn.simpleicons.org/${slug}`;
}

function CompanyLogo({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex shrink-0 items-center justify-center gap-3 px-6 py-3 rounded-xl bg-muted/50 dark:bg-muted/20 border border-border/50 hover:border-primary/30 transition-colors">
      {imgError ? (
        <div className="h-8 w-8 flex items-center justify-center text-muted-foreground">
          <Building2 className="h-6 w-6" />
        </div>
      ) : (
        <img
          src={getIconUrl(slug)}
          alt={name}
          className="h-8 w-8 object-contain min-w-8 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all dark:invert dark:opacity-90 dark:hover:opacity-100"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}
      <span className="text-sm font-semibold text-muted-foreground hidden sm:inline whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function CompanyMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Wait for layout to calculate width
    const totalWidth = scroller.scrollWidth / 2;
    const duration = totalWidth / 50; // 50px per second

    const animation = gsap.to(scroller, {
      x: -totalWidth,
      duration,
      ease: "none",
      repeat: -1,
      onComplete: () => {
        gsap.set(scroller, { x: 0 });
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  const duplicated = [...COMPANIES, ...COMPANIES];

  return (
    <section className="relative py-8 overflow-hidden bg-muted/30 dark:bg-muted/10 border-y border-border/50">
      <p className="text-center text-sm font-medium text-muted-foreground mb-6 px-4">
        Clients hired at companies like
      </p>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          ref={scrollerRef}
          className="flex gap-4 w-max will-change-transform"
        >
          {duplicated.map((company, i) => (
            <CompanyLogo key={`${company.slug}-${i}`} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}
