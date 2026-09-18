"use client";

import * as React from "react";
import { Check, Target, Layers } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const careerSpecific = [
  "Written by professionals familiar with your industry",
  "Structured around achievements relevant to your target role",
  "Uses terminology and keywords specific to your field",
  "Aligned with current hiring standards in your career stage",
  "Formatted to match expectations for your seniority level",
  "Built to pass ATS screening without losing readability",
  "Positions you against the exact competition you're facing",
];

const stages = [
  "Early-career professionals and recent graduates",
  "Mid-level professionals building toward management",
  "Senior managers and department heads",
  "Directors, executives, and C-suite leaders",
  "Career changers moving into a new industry",
  "Professionals returning to work after a break",
];

export function CareerCvSpecificAndStages() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 space-y-12 md:space-y-16">
        {/* What Makes a CV Career-Specific */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
              <Target className="h-3.5 w-3.5" />
              Career-Specific
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-6">
              What Makes a CV{" "}
              <span className="text-primary">Career-Specific</span>
            </h2>
            <ul className="space-y-3">
              {careerSpecific.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm sm:text-[15px] font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder label="Career-specific CV example" />
        </div>

        {/* Written for Every Career Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder label="Career stages visual" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-widest mb-3 border border-accent-warm/20">
              <Layers className="h-3.5 w-3.5" />
              Career Stages
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-6">
              Written for Every{" "}
              <span className="text-primary">Career Stage</span>
            </h2>
            <ul className="space-y-3">
              {stages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-sm sm:text-[15px] font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
