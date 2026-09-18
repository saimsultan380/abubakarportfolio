"use client";

import * as React from "react";
import {
  DoorOpen,
  Eye,
  Crosshair,
  BadgeCheck,
  Sparkles,
  Trophy,
  Layers,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

const benefits = [
  {
    title: "A Stronger First Impression",
    description:
      "Your CV opens doors rather than being filtered out before anyone reads it.",
    icon: DoorOpen,
  },
  {
    title: "Increased Recruiter Visibility",
    description:
      "Optimized for search across LinkedIn and job portals, so the right people find you.",
    icon: Eye,
  },
  {
    title: "Better Role Alignment",
    description:
      "Your experience gets framed around the roles you're targeting, not the ones you're leaving behind.",
    icon: Crosshair,
  },
  {
    title: "Clearer Professional Positioning",
    description:
      "Your value and seniority become instantly apparent to recruiters and hiring managers.",
    icon: BadgeCheck,
  },
  {
    title: "A CV That Captures Attention",
    description:
      "Written to stand out in competitive shortlists, at any career level.",
    icon: Sparkles,
  },
  {
    title: "Leadership Impact on the Page",
    description:
      "We highlight your real contribution, not just a list of past job titles.",
    icon: Trophy,
  },
  {
    title: "A Cohesive Personal Brand",
    description:
      "Consistent positioning across your CV, LinkedIn profile, and other career documents.",
    icon: Layers,
  },
  {
    title: "Confidence in Every Application",
    description:
      "You apply knowing your CV genuinely represents what you bring to the table.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Support",
    description:
      "Updates and edits included, so your CV stays sharp as your goals evolve.",
    icon: LifeBuoy,
  },
];

export function CareerCvWhatYouGet() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            What You Get from{" "}
            <span className="text-primary">Resume Uplift?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
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
