"use client";

import * as React from "react";
import {
  Layout,
  FileText,
  Trophy,
  KeyRound,
  ListChecks,
  Sparkles,
} from "lucide-react";

const covers = [
  {
    title: "ATS-Friendly Resume Structure",
    description:
      "We organise your resume using clear sections and readable formatting that can support digital application systems while remaining easy for recruiters to review.",
    icon: Layout,
  },
  {
    title: "Professional Summary",
    description:
      "Your opening summary should quickly communicate who you are, what you specialise in, and what value you bring to your target role. We write it around your actual experience rather than relying on generic statements.",
    icon: FileText,
  },
  {
    title: "Experience and Achievement Writing",
    description:
      "Instead of simply repeating job duties, we focus on meaningful contributions, responsibilities, and measurable achievements where genuine figures are available.",
    icon: Trophy,
  },
  {
    title: "Keyword Alignment",
    description:
      "Relevant terminology from your target position can help make your resume more closely aligned with the role. We incorporate appropriate keywords naturally without turning your resume into a list of search terms.",
    icon: KeyRound,
  },
  {
    title: "Skills and Qualifications",
    description:
      "We organise relevant technical, professional, and transferable skills so employers can identify your strongest capabilities quickly.",
    icon: ListChecks,
  },
  {
    title: "Clean Professional Formatting",
    description:
      "Your resume should look professional without relying on excessive graphics, complicated layouts, or decorative elements that may interfere with readability.",
    icon: Sparkles,
  },
];

export function CanadaCovers() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            What Our Canada Resume Writing Service{" "}
            <span className="text-primary">Covers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {covers.map((item) => (
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
