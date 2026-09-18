"use client";

import * as React from "react";
import { X, Check } from "lucide-react";

const rows = [
  {
    their: "Same template for every client",
    ours: "Custom ATS and standard formats",
  },
  {
    their: "Overload resumes with trendy jargon",
    ours: "Naturally beats ATS, no keyword stuffing",
  },
  {
    their: "Copy-paste job descriptions",
    ours: "100% human-written content",
  },
  {
    their: "AI-generated content",
    ours: "Experts across 90+ industries",
  },
  {
    their: "Ignore client feedback",
    ours: "One-on-one live session with your writer",
  },
  {
    their: "No industry-specific expertise",
    ours: "Career-specific resumes for every industry",
  },
  {
    their: "Slow resume delivery time",
    ours: "Fast delivery within 24 hours",
  },
  {
    their: "Not built for US ATS systems like Workday or Taleo",
    ours: "Optimized for US applicant tracking systems",
  },
];

export function UsaComparison() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Stop Settling for Generic Resumes.{" "}
            <span className="text-primary">Here&apos;s the Difference</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm">
          <div className="grid grid-cols-2 border-b border-border/70 bg-muted/40">
            <div className="px-4 sm:px-6 py-4 text-center font-bold font-heading text-muted-foreground">
              Their Way
            </div>
            <div className="px-4 sm:px-6 py-4 text-center font-bold font-heading text-primary border-l border-border/70">
              Resume Uplift&apos;s Way
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.their}
              className={`grid grid-cols-2 ${
                i !== rows.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3 px-4 sm:px-6 py-4 text-sm text-muted-foreground">
                <X className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                <span>{row.their}</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 px-4 sm:px-6 py-4 text-sm text-foreground font-medium border-l border-border/60 bg-primary/[0.03]">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{row.ours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
