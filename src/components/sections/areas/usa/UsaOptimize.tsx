"use client";

import * as React from "react";
import {
  Monitor,
  Flag,
  KeyRound,
  BarChart3,
  MapPin,
  Scale,
  Layout,
  Link2,
  Crosshair,
  Building2,
} from "lucide-react";

const points = [
  {
    title: "US-Specific ATS Formatting",
    description:
      "Every resume is structured to pass systems like Workday, Taleo, and iCIMS, the platforms most commonly used by US employers.",
    icon: Monitor,
  },
  {
    title: "American Resume Standards",
    description:
      "Your resume follows US formatting conventions, including reverse-chronological structure, no photo, and the right length for your experience level.",
    icon: Flag,
  },
  {
    title: "Industry-Relevant Keywords",
    description:
      "We match your resume to the exact terms and phrases used in US job postings within your target industry.",
    icon: KeyRound,
  },
  {
    title: "Quantified Achievements",
    description:
      "We convert job duties into measurable results, since US employers respond strongly to numbers and impact, not task lists.",
    icon: BarChart3,
  },
  {
    title: "Location and Work Authorization Clarity",
    description:
      "We format your location and work eligibility clearly, avoiding common mistakes that confuse US recruiters and ATS systems.",
    icon: MapPin,
  },
  {
    title: "State and Industry Compliance Awareness",
    description:
      "We stay aware of formatting expectations that vary by industry and region across the US, from tech hubs to government roles.",
    icon: Scale,
  },
  {
    title: "Modern, Recruiter-Friendly Design",
    description:
      "Clean layouts that meet US hiring expectations while remaining easy for both ATS software and human recruiters to scan.",
    icon: Layout,
  },
  {
    title: "LinkedIn and Resume Alignment",
    description:
      "Since most US recruiters cross-check LinkedIn, we keep your resume and profile consistent in tone, structure, and content.",
    icon: Link2,
  },
  {
    title: "Career-Specific Customization",
    description:
      "Your resume is tailored to your exact industry, whether that's healthcare, tech, finance, or another US-specific job market.",
    icon: Crosshair,
  },
  {
    title: "Federal and Corporate Format Options",
    description:
      "For US government roles, we follow federal resume standards, separate from standard corporate resume formatting.",
    icon: Building2,
  },
];

export function UsaOptimize() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            How Resume Uplift Optimizes Your Resume for the{" "}
            <span className="text-primary">US Job Market</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {points.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm hover:border-primary/40 transition-all"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
