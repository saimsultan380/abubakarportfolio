"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SearchCheck,
  Compass,
  FileEdit,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    phase: "Phase 1",
    title: "Audit & Diagnostics",
    description:
      "We perform an in-depth audit of your existing LinkedIn profile, identifying keyword gaps, algorithmic blind spots, and messaging weaknesses.",
    icon: SearchCheck,
  },
  {
    number: "02",
    phase: "Phase 2",
    title: "Keyword & SEO Strategy",
    description:
      "Our senior strategists analyze your target roles and reverse-engineer the exact search queries and skills headhunters use to source candidates.",
    icon: Compass,
  },
  {
    number: "03",
    phase: "Phase 3",
    title: "Executive Profile Rewrite",
    description:
      "We rewrite your headline, narrative About section, experience bullets, and skills to showcase quantifiable accomplishments and authority.",
    icon: FileEdit,
  },
  {
    number: "04",
    phase: "Phase 4",
    title: "Review & Implementation",
    description:
      "You receive your organized optimization guide. We iterate with you until you are 100% satisfied and provide our recruiter outreach playbook.",
    icon: CheckCircle2,
  },
];

export function LinkedInProcess() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".li-process-step",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
            <ClipboardList className="h-3.5 w-3.5" />
            Proven Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Our 4-Step Optimization Roadmap
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A seamless, consultative process tailored to elevate your career story without any guesswork.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div
              key={index}
              className="li-process-step relative rounded-3xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold font-heading text-muted-foreground/30">
                    {item.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </span>
                </div>

                <span className="text-xs font-bold text-accent-warm uppercase tracking-widest block mb-1">
                  {item.phase}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Step {index + 1} of 4</span>
                {index < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/60" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
