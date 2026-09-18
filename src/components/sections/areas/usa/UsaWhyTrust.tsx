"use client";

import * as React from "react";
import {
  Award,
  FileSearch,
  MapPinned,
  UserCheck,
  RefreshCw,
  Zap,
} from "lucide-react";

const reasons = [
  {
    title: "Certified Resume Writers",
    description:
      "Trained and certified in resume writing standards recognized by US employers and recruiters.",
    icon: Award,
  },
  {
    title: "ATS-Friendly for US Hiring Systems",
    description:
      "Every resume is optimized to pass the applicant tracking systems used by major US companies.",
    icon: FileSearch,
  },
  {
    title: "Proven Results Nationwide",
    description:
      "Hundreds of professionals across the US landed interviews faster with optimized, results-driven resumes.",
    icon: MapPinned,
  },
  {
    title: "100% Human-Written",
    description:
      "No AI shortcuts. Every resume is written by a real writer who understands the US job market.",
    icon: UserCheck,
  },
  {
    title: "Unlimited Revisions",
    description:
      "Your satisfaction matters, so we keep refining your resume until it's exactly right.",
    icon: RefreshCw,
  },
  {
    title: "Fast Turnaround",
    description:
      "Get your finished resume within 24 to 48 hours, without compromising on quality.",
    icon: Zap,
  },
];

export function UsaWhyTrust() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Why Professionals Across the USA Trust{" "}
            <span className="text-primary">Resume Uplift</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {reasons.map((item) => (
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
