"use client";

import * as React from "react";
import {
  MessageSquare,
  Search,
  PenTool,
  Layout,
  RotateCcw,
  Download,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a conversation about your background, target roles, and the industries you're applying to. This shapes everything that follows.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Research",
    description:
      "Our writers study the job descriptions and industries you're targeting to identify the language, skills, and keywords that matter most.",
    icon: Search,
  },
  {
    number: "03",
    title: "Drafting",
    description:
      "Your resume is written from scratch, built around measurable achievements and the specific terms New Zealand employers and ATS systems look for in your field.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Formatting & ATS Check",
    description:
      "We format for clean parsing, using structure that both applicant tracking systems and human recruiters can read without friction.",
    icon: Layout,
  },
  {
    number: "05",
    title: "Revision",
    description:
      "You review the draft, and we refine it based on your feedback until it accurately reflects your experience and goals.",
    icon: RotateCcw,
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "You receive your finished resume in the file formats you need for online applications, email, and LinkedIn.",
    icon: Download,
  },
];

export function NzProcess() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Our ATS-Friendly Resume/CV Writing Process for{" "}
            <span className="text-primary">New Zealand&apos;s Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-border/60 bg-card p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold tracking-widest text-muted-foreground/50">
                  Step {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
