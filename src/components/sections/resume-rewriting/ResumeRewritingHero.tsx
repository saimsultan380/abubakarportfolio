"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Check, Phone, RefreshCw, Star } from "lucide-react";

gsap.registerPlugin(useGSAP);

const chips = [
  "100% Human-written",
  "Modern format",
  "Personalized",
  "Fast turnaround",
  "Real results",
];

export function ResumeRewritingHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14 overflow-x-hidden bg-background"
    >
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-primary/10 blur-[100px] rounded-full mix-blend-multiply opacity-30" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div ref={contentRef} className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
                <RefreshCw className="h-3 w-3 shrink-0" />
                ATS Resume Rewriting
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 text-xs sm:text-sm font-medium text-accent-warm backdrop-blur-sm">
                <Star className="h-3 w-3 fill-accent-warm shrink-0" />
                +90% Job Chances
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-4 leading-[1.1]">
              Best Resume Revamp Services:{" "}
              <span className="text-primary">ATS Resume Rewriting</span> by
              Experts
            </h1>

            <p className="text-base sm:text-lg font-semibold text-foreground/85 mb-3 max-w-3xl mx-auto">
              Your Resume Is Not Optimized &amp; Does Not Land You Interviews?
              Let&apos;s Revamp It!
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              An outdated resume costs you interviews you&apos;re actually
              qualified for. Get your outdated resume revamped by expert resume
              writers. ATS-friendly formatting, keyword optimization, modern
              design, and stronger content that boosts your job chances by +90%.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-7">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  <Check className="h-3 w-3 text-primary" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="https://wa.me/447478564745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/447478564745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-input bg-card px-5 text-sm sm:text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
