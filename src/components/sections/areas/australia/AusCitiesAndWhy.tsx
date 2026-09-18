"use client";

import * as React from "react";
import { MapPin, Check } from "lucide-react";

const cities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Hobart",
  "Darwin",
  "Gold Coast",
  "Newcastle",
  "Wollongong",
  "Geelong",
];

const reasons = [
  {
    title: "Clear writing",
    description: "No unnecessary corporate language.",
  },
  {
    title: "Real achievements",
    description: "Your resume is built around information you can support.",
  },
  {
    title: "ATS awareness",
    description: "Readable formatting and relevant keyword alignment.",
  },
  {
    title: "Australian relevance",
    description:
      "Content follows current Australian resume guidance and conventions.",
  },
  {
    title: "Career targeting",
    description:
      "Your resume is written around your desired role rather than copied from a generic template.",
  },
  {
    title: "Human readability",
    description:
      "ATS optimisation is important, but the final document still needs to make sense to a recruiter or hiring manager.",
  },
];

export function AusCitiesAndWhy() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10 space-y-14">
        <div className="max-w-5xl mx-auto rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-foreground pt-1">
              Resume Writing for Job Seekers Across Australia
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
            Whether you are applying in a major city, regional area or remotely,
            your resume should be built around the role, not simply your
            location. We support job seekers targeting opportunities across:
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-flex rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground/80"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Australia&apos;s labour market also differs across regions and
            occupations. Jobs and Skills Australia reported that 91% of
            Australian regions had employment rates above 70% in March 2025,
            while regional and remote areas can still experience different
            labour market conditions from major cities. That makes targeted
            positioning particularly useful when you are applying across
            different locations or industries.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4">
              Why Choose <span className="text-primary">Resume Uplift?</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
              You do not need another resume filled with generic phrases.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
              You need a document that reflects your actual experience and
              connects it with the requirements of the roles you are targeting.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Our approach focuses on:
            </p>
          </div>

          <ul className="space-y-3">
            {reasons.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5 shadow-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <div>
                  <span className="text-sm font-bold text-foreground">
                    {item.title}
                  </span>
                  <p className="text-sm text-muted-foreground leading-snug mt-0.5">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
