"use client";

import * as React from "react";
import { ArrowRight, X, Check } from "lucide-react";

const rows = [
  {
    old: "Lists duties and responsibilities",
    next: "Highlights measurable achievements",
  },
  {
    old: "Outdated format and design",
    next: "Clean, modern & professional layout",
  },
  {
    old: "Missing relevant keywords",
    next: "Aligned with your target job description",
  },
  {
    old: "Hard to scan quickly",
    next: "Clear and skimmable structure",
  },
  {
    old: "Generic, one-size-fits-all",
    next: "Personalized to your industry and goals",
  },
  {
    old: "Struggles with ATS parsing",
    next: "Built to parse cleanly through ATS",
  },
];

export function ResumeRewritingComparison() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Old Resume vs.{" "}
            <span className="text-primary">Revamped Resume</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            See the difference a professional rewrite makes to how recruiters
            and ATS systems read your application.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm">
          <div className="grid grid-cols-2 border-b border-border/70 bg-muted/40">
            <div className="px-4 sm:px-6 py-4 text-center font-bold font-heading text-muted-foreground">
              Old Resume
            </div>
            <div className="px-4 sm:px-6 py-4 text-center font-bold font-heading text-primary border-l border-border/70">
              Revamped Resume
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.old}
              className={`grid grid-cols-2 ${
                i !== rows.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3 px-4 sm:px-6 py-4 text-sm text-muted-foreground">
                <X className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                <span>{row.old}</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 px-4 sm:px-6 py-4 text-sm text-foreground font-medium border-l border-border/60 bg-primary/[0.03]">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{row.next}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Turn your old resume into a job-winning document
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
