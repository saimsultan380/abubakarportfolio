"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Zap } from "lucide-react";
import { PLANS, type PlanId } from "@/lib/plans";

gsap.registerPlugin(ScrollTrigger);

const planExtras: Record<
  PlanId,
  { bestFor: string; popular?: boolean; features: string[] }
> = {
  entry: {
    bestFor: "Early-career professionals & recent graduates",
    features: [
      "Career-specific CV written from scratch",
      "Industry keywords & ATS-friendly format",
      "Achievement-focused content",
      "Word & PDF delivery",
      "One-on-one consultation",
      "Revisions included",
    ],
  },
  mid: {
    bestFor: "Mid-level professionals building toward management",
    popular: true,
    features: [
      "Career-specific CV written from scratch",
      "Industry & role keyword alignment",
      "Results-driven achievement writing",
      "One-on-one consultation",
      "Word & PDF delivery",
      "Revisions included",
    ],
  },
  executive: {
    bestFor: "Directors, executives & C-suite leaders",
    features: [
      "Executive-level career-specific CV",
      "Leadership & impact positioning",
      "Industry keyword & ATS alignment",
      "One-on-one consultation",
      "Word & PDF delivery",
      "Revisions included",
    ],
  },
};

export function CareerCvPricing() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ccv-pricing-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="ccv-pricing"
      ref={sectionRef}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <Zap className="h-3.5 w-3.5" />
            Packages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            Packages for{" "}
            <span className="text-primary">
              Career Specific CV Writing Services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Choose the level that matches your career stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map((plan) => {
            const resumePrice =
              plan.breakdown.find((b) => b.name === "Resume")?.priceUsd ??
              plan.priceUsd;
            const meta = planExtras[plan.id];

            return (
              <div
                key={plan.id}
                className={`ccv-pricing-card relative rounded-3xl border ${
                  meta.popular
                    ? "border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/20"
                    : "border-border/60 shadow-lg"
                } bg-card overflow-hidden flex flex-col`}
              >
                {meta.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl sm:text-5xl font-bold text-primary font-heading">
                      ${resumePrice}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">
                      / CV
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">
                    {meta.bestFor}
                  </p>
                  <ul className="space-y-3">
                    {meta.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span className="text-sm font-medium text-foreground/80 leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/checkout?plan=${plan.id}&pkg=resume`}
                    className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] ${
                      meta.popular
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                        : "border border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
