"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type BlogFaqItem = {
  q: string;
  a: string;
};

type BlogFaqAccordionProps = {
  title?: string;
  items: BlogFaqItem[];
};

export function BlogFaqAccordion({
  title = "Frequently asked questions",
  items,
}: BlogFaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground pt-4">
        {title}
      </h2>
      <div className="rounded-2xl border border-border/60 overflow-hidden divide-y divide-border/60">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className="bg-background">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
