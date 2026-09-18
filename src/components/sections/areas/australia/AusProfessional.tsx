"use client";

import * as React from "react";
import {
  Layout,
  KeyRound,
  FileText,
  Trophy,
  ListChecks,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  {
    title: "ATS-friendly structure",
    description:
      "Standard headings, readable formatting, and a logical information hierarchy make your resume easier for recruitment systems and people to process.",
    icon: Layout,
  },
  {
    title: "Keyword alignment",
    description:
      "We identify important skills, qualifications, job titles, and terminology relevant to your target position and integrate them naturally into the document.",
    icon: KeyRound,
  },
  {
    title: "Professional summary",
    description:
      "Instead of a generic career objective, your opening section quickly communicates your professional background, strengths, and target direction.",
    icon: FileText,
  },
  {
    title: "Achievement-focused experience",
    description:
      "Your work history should not read like a job description. We help turn responsibilities into evidence of contribution, performance and capability.",
    icon: Trophy,
  },
  {
    title: "Relevant skills",
    description:
      "Technical, professional and transferable skills are prioritised according to the type of Australian role you are pursuing.",
    icon: ListChecks,
  },
  {
    title: "Clean Australian resume format",
    description:
      "Australian resume guidance generally favours clear, professional presentation over excessive design. SEEK recommends focusing on substance and keeping the layout functional and easy to read.",
    icon: Sparkles,
  },
];

export function AusProfessional() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4">
            Professional Resume Writing Services in{" "}
            <span className="text-primary">Australia</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            A generic resume can explain what you have done.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            A professionally written resume should explain why that experience
            matters for the job you want next.
          </p>
          <p className="text-sm sm:text-base font-semibold text-foreground leading-relaxed">
            Our core resume writing service focuses on turning your existing
            career information into a clearer, more targeted, and more
            competitive application document.
          </p>
        </div>

        <p className="text-center text-sm font-semibold text-foreground mb-6">
          What we focus on
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {focusAreas.map((item) => (
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
