"use client";

import * as React from "react";
import Link from "next/link";
import {
  Upload,
  Compass,
  PenTool,
  Search,
  Download,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Career Information",
    description:
      "Provide your existing resume, career background, and relevant information about the roles you are targeting.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Identify Your Career Direction",
    description:
      "We consider your target position, professional strengths, and the type of opportunities you want to pursue.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Rewrite and Structure Your Resume",
    description:
      "Your experience is organised into a clear structure with stronger professional language, relevant keywords, and achievement-focused content.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Review and Refine",
    description:
      "The document is reviewed for clarity, consistency, relevance, grammar, and overall presentation.",
    icon: Search,
  },
  {
    number: "05",
    title: "Receive Your Final Resume",
    description:
      "You receive a polished resume designed to present your professional background clearly for modern job applications.",
    icon: Download,
  },
];

export function CanadaProcess() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            How Our Resume Writing Process{" "}
            <span className="text-primary">Works</span>
          </h2>
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

        <div className="flex justify-center">
          <Link
            href="/resume-request"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Create My Resume
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
