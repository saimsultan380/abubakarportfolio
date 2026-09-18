"use client";

import * as React from "react";
import {
  GraduationCap,
  RefreshCw,
  Briefcase,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const audiences = [
  {
    title: "Graduates applying to structured graduate schemes",
    description:
      "These schemes often use ATS software alongside strict application windows, so a resume needs to hit the right keywords the first time.",
    icon: GraduationCap,
  },
  {
    title: "Mid-career professionals moving into a new sector",
    description:
      "Transferable skills don't always show up in the language an ATS system expects. We help translate your experience into terms the new sector recognises.",
    icon: RefreshCw,
  },
  {
    title: "Senior candidates applying for leadership roles",
    description:
      "Longer careers often mean resumes that have grown cluttered. We help focus the document on the achievements and scope that matter for a leadership audience.",
    icon: Briefcase,
  },
  {
    title: "People returning to work after a career break",
    description:
      "Gaps can be handled clearly and confidently, without drawing unnecessary attention away from your skills and experience.",
    icon: Clock,
  },
];

const mistakes = [
  {
    title: "Keyword stuffing",
    description:
      "Repeating the same terms unnaturally can look like manipulation to both ATS software and human readers, and it rarely helps.",
  },
  {
    title: "Tables, columns, and graphics",
    description:
      "These often break when an ATS system tries to parse them, scrambling your work history or losing sections entirely.",
  },
  {
    title: "Generic personal statements",
    description:
      "A personal statement that could apply to any candidate for any job tells an ATS system, and a recruiter, very little.",
  },
  {
    title: "Ignoring the exact wording of the job advert",
    description:
      "ATS systems often look for specific phrasing. Close synonyms don't always register as a match.",
  },
  {
    title: "Submitting in the wrong file format",
    description:
      "Some systems struggle with certain file types or resumes saved as images. Following the employer's stated format matters.",
  },
];

export function UkWhoAndMistakes() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10 space-y-14 md:space-y-16">
        {/* Who This Is For */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-6">
              Who This <span className="text-primary">Is For</span>
            </h2>
            <div className="space-y-4">
              {audiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold font-heading text-foreground pt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[52px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ImagePlaceholder label="UK job seekers / audience visual" />
        </div>

        {/* Common Mistakes */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-widest mb-3 border border-accent-warm/20">
              <AlertTriangle className="h-3.5 w-3.5" />
              Avoid These
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground">
              Common Mistakes Job Seekers Make with{" "}
              <span className="text-primary">ATS Resumes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
              >
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
      </div>
    </section>
  );
}
