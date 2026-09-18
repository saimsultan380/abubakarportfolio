"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Star, ArrowRight } from "lucide-react";
import { GradientBorderCard } from "@/components/ui/GradientBorderCard";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  { text: "Written by real writers, never AI-generated" },
  { text: "Backed by research on your target role and industry" },
  { text: "Structured to match applicant tracking systems" },
  { text: "Focused on your strengths and expertise" },
  { text: "Reviewed for tone, clarity, and grammar before delivery" },
  { text: "Delivered fast, without missing a single detail" },
];

export function CoverLetterDifferent() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".diff-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
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
      ref={sectionRef}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 h-[350px] w-[350px] bg-accent-warm/5 blur-[120px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
              <Star className="h-3.5 w-3.5 fill-accent-warm" />
              The Difference
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
              What Makes Our Cover Letters{" "}
              <span className="text-primary">Different</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Anyone can write a cover letter. But not everyone can write
              job-winning cover letters. Our team focuses on quality, relevance,
              and results — not templates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {differentiators.map((item, i) => (
              <div key={i} className="diff-card">
                <GradientBorderCard className="h-full p-6 flex items-start gap-4 hover:bg-muted/50 transition-colors">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </span>
                  <p className="text-sm font-semibold text-foreground/90 leading-relaxed">
                    {item.text}
                  </p>
                </GradientBorderCard>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
