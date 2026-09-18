"use client";

import * as React from "react";
import {
  BookOpen,
  Target,
  MessageSquare,
  UserCheck,
  FileSearch,
} from "lucide-react";

const points = [
  {
    title: "Real Industry Knowledge",
    description:
      "Your CV reflects a clear understanding of your industry and presents what employers actually want or require.",
    icon: BookOpen,
  },
  {
    title: "Outcome-Focused Writing",
    description:
      "We highlight your achievements and measurable results, not just your daily responsibilities.",
    icon: Target,
  },
  {
    title: "One-on-One Consultation",
    description:
      "Every CV begins with a personal discussion about your experience, goals, and target roles.",
    icon: MessageSquare,
  },
  {
    title: "100% Human-Written",
    description:
      "Each CV is written from scratch by a professional team of CV writers.",
    icon: UserCheck,
  },
  {
    title: "ATS-Friendly by Design",
    description:
      "Professionally structured with the right keywords to pass ATS and impress hiring managers.",
    icon: FileSearch,
  },
];

export function CareerCvApart() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            What Sets Our CV Writing Service{" "}
            <span className="text-primary">Apart</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {points.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm hover:border-primary/40 transition-all ${
                i === points.length - 1 && points.length % 3 === 2
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              } ${i === points.length - 1 && points.length % 3 === 1 ? "lg:col-start-2" : ""}`}
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
