"use client";

import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const reasons = [
  "ATS-friendly structure for modern digital applications",
  "Targeted content based on your career direction",
  "Relevant keyword integration without keyword stuffing",
  "Achievement-focused writing based on your real experience",
  "Professional formatting designed for clarity",
  "Canadian market relevance for candidates targeting Canadian employers",
  "Supporting career services including cover letters, resume revamps and LinkedIn optimisation",
];

export function CanadaWhyChoose() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4">
            Why Choose Resume Uplift for Resume Writing in{" "}
            <span className="text-primary">Canada?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
            A professional resume should not simply make your career history
            look polished. It should make your professional value easier to
            understand.
          </p>
          <p className="text-sm font-semibold text-foreground">
            Resume Uplift combines:
          </p>
        </div>

        <ul className="max-w-2xl mx-auto space-y-3 mb-6">
          {reasons.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5 shadow-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <span className="text-sm font-medium text-foreground/90 leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
          The result is a resume that gives your experience a clearer structure
          and a stronger professional presentation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Hire Resume Writer
          </Link>
          <Link
            href="https://wa.me/447478564745"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-input bg-card px-6 text-sm font-medium hover:bg-accent transition-all"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
