"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Code,
  Megaphone,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const transformations = [
  {
    category: "TECH",
    role: "Senior Frontend Developer",
    icon: Code,
    accent: "primary", // Standard
    before: {
      issues: ["Generic template", "No ATS keywords", "Weak impact metrics"],
    },
    after: {
      achievements: [
        "Metrics-driven layout",
        "React/TS optimized",
        "FAANG-ready format",
      ],
    },
    result: {
      metric: "98%",
      label: "ATS SCORE",
      outcome: "Interviews at Meta & Google",
    },
  },
  {
    category: "DIGITAL AGENCY",
    role: "Marketing Director",
    icon: Megaphone,
    accent: "highlight", // Highlighted
    before: {
      issues: [
        "3-page clunky layout",
        "Buried ROI data",
        "No visual hierarchy",
      ],
    },
    after: {
      achievements: [
        "Executive summary lead",
        "Data visualization",
        "Strategic positioning",
      ],
    },
    result: {
      metric: "2.5x",
      label: "CALL RATE",
      outcome: "VP role secured in 14 days",
    },
  },
  {
    category: "BUSINESS ADMIN",
    role: "Fresh Graduate",
    icon: GraduationCap,
    accent: "primary", // Standard
    before: {
      issues: ["Zero visibility", "No internship calls", "Template-based"],
    },
    after: {
      achievements: [
        "Skill-first approach",
        "Project showcase",
        "Personal branding",
      ],
    },
    result: {
      metric: "100%",
      label: "SUCCESS",
      outcome: "Landed first Top-Tier role",
    },
  },
];

export function Impact() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".transformation-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".transformations-grid",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".hero-image",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-zinc-50 dark:bg-black/40 relative overflow-hidden text-center md:text-left"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start mb-12 md:mb-14">
          {/* Left: Text Content */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 mx-auto lg:mx-0">
              <TrendingUp className="h-3 w-3" />
              SUCCESS STORIES
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight text-foreground leading-[1.1]">
              Real <span className="text-primary">Transformations</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From &ldquo;Ghosted&rdquo; to &ldquo;Hired&rdquo; see how
              data-backed strategies deliver results.
            </p>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-7 hero-image relative mx-auto lg:mx-0 w-full max-w-[480px] lg:max-w-[560px] xl:max-w-[600px] lg:justify-self-end">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border aspect-[4/5] sm:aspect-[5/4] lg:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Professional Success"
                  className="w-full h-full object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                {/* Bottom Info Integrated into Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-12 w-12 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden"
                        >
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            alt="Client"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="h-12 w-12 rounded-full bg-primary border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">
                        800+
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm tracking-wide">
                        Clients Hired
                      </p>
                      <p className="text-white/70 text-xs">
                        Top tech companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "ATS Score" Badge */}
              <div className="absolute top-4 right-4 bg-white/85 dark:bg-zinc-900/80 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-border flex items-center gap-3 z-20">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                    ATS Score
                  </p>
                  <p className="text-2xl font-black text-foreground">98%</p>
                </div>
              </div>

              {/* Floating "Interview Rate" Badge */}
              <div className="absolute top-4 left-4 bg-white/85 dark:bg-zinc-900/80 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-border flex items-center gap-3 z-20">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                    Interview Rate
                  </p>
                  <p className="text-2xl font-black text-foreground">+250%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Cards */}
        <div className="transformations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {transformations.map((item, index) => (
            <div
              key={index}
              className={cn(
                "transformation-card group relative flex flex-col rounded-2xl bg-card border transition-all duration-300 overflow-hidden text-left",
                item.accent === "highlight"
                  ? "border-primary/40 shadow-xl shadow-primary/10 scale-[1.02] z-10 ring-1 ring-primary/20"
                  : "border-border shadow-sm hover:shadow-lg hover:-translate-y-1",
              )}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={cn(
                      "h-12 w-12 rounded-xl flex items-center justify-center",
                      item.accent === "highlight"
                        ? "bg-primary/10 text-primary"
                        : "bg-zinc-100 dark:bg-zinc-800 text-foreground",
                    )}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase",
                      item.accent === "highlight"
                        ? "bg-primary/10 text-primary"
                        : "bg-zinc-100 dark:bg-zinc-800 text-muted-foreground",
                    )}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {item.role}
                </h3>
              </div>

              {/* Before/After List */}
              <div className="px-6 flex-grow space-y-6">
                {/* Before */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                      Before
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.before.issues.map((issue, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2.5"
                      >
                        <span className="text-red-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider Arrow */}
                <div className="flex justify-center md:justify-start">
                  <ArrowRight className="h-5 w-5 text-muted-foreground/30 rotate-90 md:rotate-0" />
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">
                      After
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.after.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground font-medium flex items-start gap-2.5"
                      >
                        <span className="text-green-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result Footer */}
              <div
                className={cn(
                  "mt-8 p-6 border-t",
                  item.accent === "highlight"
                    ? "bg-primary/5 border-primary/10"
                    : "bg-zinc-50 dark:bg-zinc-900/50 border-border",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Result
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.result.outcome}
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={cn(
                        "text-3xl font-black font-heading leading-none mb-1",
                        item.accent === "highlight"
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {item.result.metric}
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                      {item.result.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider"
          >
            START YOUR TRANSFORMATION
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-xs text-muted-foreground font-medium">
            Limited slots available each month
          </p>
        </div>
      </div>
    </section>
  );
}
