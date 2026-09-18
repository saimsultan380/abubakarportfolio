"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const highlights = [
  "100% Human-Written Cover Letters, Zero AI",
  "Personalized to Your Target Role & Company",
  "ATS-Friendly Formatting & Keyword Alignment",
  "Written by Certified Professional Writers",
  "One-on-One Consultation Included",
  "Revisions Until You're 100% Satisfied",
  "Delivered in Word & PDF Within 24 Hours",
];

export function CoverLetterTrust() {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] opacity-50" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Worldwide
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2 leading-[1.15]">
            Best Cover Letter Writing Services{" "}
            <span className="text-primary">to Impress Employers</span>
          </h2>

          <p className="text-lg font-semibold text-foreground/80 mb-2">
            Get a Cover Letter That Gets You Read, Not Ignored by Hiring
            Managers
          </p>

          <p className="mx-auto mb-6 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
            A great resume gets your foot in the door. A great cover letter gets
            it opened first. Our team of experts writes personalized,
            ATS-friendly cover letters that highlight your genuine interest in a
            particular role and organization. We present your skills, qualities,
            and expertise, connecting your experience to the exact role
            you&apos;re applying for. Hence, employers consider you among the
            top 1% of candidates, and your chances of getting a job increase.
          </p>

          <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-[15px] sm:text-base font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-6 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02]"
            >
              Get Your Cover Letter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/samples"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-input bg-card px-6 text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground"
            >
              View Samples
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
