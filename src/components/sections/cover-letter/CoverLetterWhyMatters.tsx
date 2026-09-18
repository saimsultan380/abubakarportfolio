"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    percent: "78%",
    label:
      "of recruiters prefer candidates who include a cover letter with their application",
    color: "primary",
  },
  {
    percent: "53%",
    label:
      "higher callback rate for applicants who submit a personalized, job-specific letter",
    color: "accent-warm",
  },
  {
    percent: "45%",
    label: "of hiring managers read a cover letter before opening the resume",
    color: "primary",
  },
  {
    percent: "94%",
    label:
      "of hiring managers consider cover letters influential when deciding who to interview",
    color: "accent-warm",
  },
];

export function CoverLetterWhyMatters() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cl-stat-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 h-[350px] w-[350px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <TrendingUp className="h-3.5 w-3.5" />
            Why It Matters
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Why a Cover Letter Still Matters{" "}
            <span className="text-primary">While Applying for a Job</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Most recruiters skim resumes in seconds. Therefore, a strong cover
            letter is what makes them stop and pay attention. In this way, your
            chances of getting an interview call and getting hired increase in
            the highly competitive job market.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="cl-stat-card relative rounded-2xl border border-border/60 bg-white dark:bg-zinc-900/50 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent-warm" />
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 font-heading">
                {stat.percent}
              </div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm font-semibold text-foreground/80 mb-5 max-w-2xl mx-auto">
          Hence, candidates who include a professional cover letter are
          significantly more likely to receive an interview call.
        </p>

        <div className="flex justify-center">
          <Link
            href="https://wa.me/447478564745"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Contact Us for a Personalized Cover Letter
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
