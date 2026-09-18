"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  "First-time job seekers entering the workforce",
  "Professionals switching careers or industries",
  "Senior and management-level applicants",
  "Candidates returning to work after a break",
  "Job seekers applying to competitive or high-demand roles",
];

export function CoverLetterWhoFor() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".who-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
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
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 -z-10 h-[350px] w-[350px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Content */}
          <div className="who-card">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cool/10 border border-primary/20 text-primary text-xs font-bold tracking-widest mb-3">
              <Users className="h-3.5 w-3.5" />
              WHO IT&apos;S FOR
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
              Who This{" "}
              <span className="text-primary">Service Is For</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
              Our cover letter writing service is the best for job seekers at
              every career stage. Whether you&apos;re applying for your first
              role, switching industries, or targeting a senior position, our
              team creates a cover letter that fits exactly where you are.
            </p>

            <ul className="space-y-3 mb-6">
              {audiences.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-[15px] sm:text-base font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Hire Your Cover Letter Writer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Visual Card */}
          <div className="who-card relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-gradient-to-br from-primary/5 to-accent-warm/5 p-8 shadow-2xl">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent-warm" />

              <div className="space-y-5">
                {audiences.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-border/40 shadow-sm hover:shadow-md transition-all hover:border-primary/20 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Check className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
