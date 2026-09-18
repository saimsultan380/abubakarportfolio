"use client";

import * as React from "react";
import { Check, AlertCircle, Sparkles } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const signs = [
  "It hasn't been updated in over a year",
  "Your resume doesn't reflect your most recent role or achievements",
  "You're applying to many jobs but not getting interviews or jobs",
  "It still uses an old format, font, or outdated design",
  "It reads like a list of duties instead of results",
  "You've changed industries, but your resume hasn't updated yet",
  "It's missing keywords relevant to your target roles or job descriptions",
];

const included = [
  "Full review of your existing resume and career background",
  "Complete rewrite with stronger, results-focused content",
  "Modern, professional formatting and design",
  "ATS-friendly structure that passes the algorithm",
  "Keyword alignment with your target roles and industry",
  "One-on-one consultation to understand your goals",
  "100% human-written",
  "Delivered in Word and PDF formats",
  "Revisions included until you're satisfied",
];

export function ResumeRewritingSignsIncluded() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-widest mb-3 border border-accent-warm/20">
              <AlertCircle className="h-3.5 w-3.5" />
              Warning Signs
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground mb-6">
              Signs Your Resume Needs a Revamp
            </h2>
            <ul className="space-y-3 mb-8">
              {signs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-warm/10 text-accent-warm">
                    <AlertCircle className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm sm:text-[15px] font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <ImagePlaceholder
              label="Before / after resume visual"
              className="aspect-[16/10] lg:aspect-[4/3]"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                What&apos;s Included
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground mb-6">
                What&apos;s Included in Your Resume Revamp
              </h2>
              <ul className="space-y-3.5">
                {included.map((item) => (
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
      </div>
    </section>
  );
}
