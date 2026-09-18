"use client";

import * as React from "react";
import {
  Upload,
  Compass,
  PenTool,
  Target,
  Search,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Information",
    description:
      "Provide your current resume and relevant career information.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Define Your Target",
    description:
      "We identify the type of Australian role, industry, or career direction you want to pursue.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Restructure & Rewrite",
    description:
      "Your experience is organised into a clearer professional narrative.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Optimise for the Role",
    description:
      "Relevant keywords, skills, achievements, and qualifications are incorporated naturally.",
    icon: Target,
  },
  {
    number: "05",
    title: "Refine the Final Resume",
    description:
      "The finished document is checked for clarity, consistency, readability, and professional presentation.",
    icon: Search,
  },
];

export function AusProcess() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            From Existing Resume to{" "}
            <span className="text-primary">Job-Ready Application</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our process is designed to keep the focus on your actual career
            story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold tracking-widest text-muted-foreground/50">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base font-semibold text-foreground max-w-2xl mx-auto">
          The goal is simple: a resume that is easier to understand, easier to
          scan and more relevant to the jobs you want.
        </p>
      </div>
    </section>
  );
}
