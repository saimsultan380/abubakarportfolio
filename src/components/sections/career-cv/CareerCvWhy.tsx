"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const points = [
  "Written by a specialist in your target industry",
  "Built around your personal value proposition",
  "100% human-written, no AI, no recycled templates",
  "One-on-one consultation to understand your career goals",
];

export function CareerCvWhy() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Your CV Isn&apos;t Getting You Interviews or Jobs.{" "}
              <span className="text-primary">Here&apos;s Why.</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Most CVs read like a list of duties. What actually gets you hired
              is proof of what you achieved. We build every CV around that
              difference, so hiring managers see your impact in seconds, not
              just your job history.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((item) => (
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

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/resume-request"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cv-review"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-input bg-card px-6 text-sm font-medium hover:bg-accent transition-all"
              >
                Free CV Review
              </Link>
            </div>
          </div>

          <ImagePlaceholder label="Career-specific CV visual" />
        </div>
      </div>
    </section>
  );
}
