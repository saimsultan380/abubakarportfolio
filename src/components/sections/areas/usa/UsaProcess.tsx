"use client";

import * as React from "react";
import { Upload, UserCheck, MessageSquare, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Resume",
    description:
      "Choose the package that fits your goals and submit your current resume. Our team reviews it right away.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Get Matched With a Writer",
    description:
      "Based on your industry and career path, we match you with a professional resume writer experienced in your field.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Collaborate on Your Draft",
    description:
      "Your writer reaches out directly to confirm details and make sure nothing about your experience gets missed.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Receive Your Finished Resume",
    description:
      "Your resume is delivered in Word and PDF format. Need changes? Revisions continue until you're fully satisfied.",
    icon: Download,
  },
];

export function UsaProcess() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Our Simple <span className="text-primary">4-Step Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
