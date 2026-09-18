"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const atsLooksFor = [
  "Job titles",
  "Skills",
  "Qualifications",
  "Certifications",
  "Work experience",
  "Keywords connected to the vacancy",
];

export function AusAtsKeyword() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              ATS-Friendly Does Not Mean{" "}
              <span className="text-primary">Keyword Stuffing</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
              <p>
                An ATS is software used by employers and recruiters to organise
                and screen applications. It may look for information such as:
              </p>
            </div>

            <ul className="space-y-2.5 mb-6">
              {atsLooksFor.map((item) => (
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

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              <p className="font-semibold text-foreground">
                But simply filling a resume with keywords is not a strategy.
              </p>
              <p>
                The better approach is to connect relevant keywords with genuine
                experience.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Weak
                </p>
                <p className="text-sm text-foreground/90 italic">
                  &quot;Experienced in project management.&quot;
                </p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Stronger
                </p>
                <p className="text-sm text-foreground/90">
                  &quot;Managed cross-functional projects from planning through
                  delivery, coordinating stakeholders, timelines, and project
                  reporting.&quot;
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              The second version gives the keyword context while showing what
              the candidate actually did. SEEK recommends reviewing the job
              description, identifying relevant terms, and customizing the
              resume for each application rather than relying on ATS tricks.
            </p>

            <Link
              href="/resume-request"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Make My Resume ATS-Friendly
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ImagePlaceholder label="ATS keyword alignment visual" />
        </div>
      </div>
    </section>
  );
}
