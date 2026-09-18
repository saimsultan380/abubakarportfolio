"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const focusPoints = [
  "A clear and professional resume structure",
  "Job-specific keyword alignment",
  "Strong professional summaries",
  "Achievement-focused experience sections",
  "Relevant skills and qualifications",
  "Clean, readable formatting",
  "Consistent career information",
  "Canadian job-market relevance",
  "Professional language and proofreading",
];

export function CanadaProfessional() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Professional Resume Writing Services in{" "}
              <span className="text-primary">Canada</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Your experience may be strong, but a poorly structured resume can
              make it difficult for an employer to see its value quickly.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Resume Uplift helps turn your existing experience into a clear,
              professional career document built around the roles you want to
              pursue.
            </p>

            <p className="text-sm font-semibold text-foreground mb-3">
              Our ATS-friendly resume writing services in Canada focus on:
            </p>
            <ul className="space-y-2.5 mb-6">
              {focusPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We do not add achievements that you did not earn or exaggerate
              your experience. Instead, we identify the strongest parts of your
              actual background and present them more effectively.
            </p>

            <Link
              href="/resume-request"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Start Your Resume Writing Request
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ImagePlaceholder label="Canadian resume writing visual" />
        </div>
      </div>
    </section>
  );
}
