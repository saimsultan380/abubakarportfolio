"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";

gsap.registerPlugin(useGSAP);

const stats = [
  { value: "83%", label: "More likely to be hired" },
  { value: "70%", label: "Higher interview requests" },
  { value: "3.5×", label: "Higher interview rates" },
  { value: "63%", label: "Employers prefer career-specific CVs" },
];

export function CanadaHero() {
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
                <MapPin className="h-3 w-3 shrink-0" />
                Canada Resume Writing
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 text-xs sm:text-sm font-medium text-accent-warm backdrop-blur-sm">
                <Star className="h-3 w-3 fill-accent-warm shrink-0" />
                #1 Resume Writers
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-4 leading-[1.1]">
              Top ATS Resume Writing Services in Canada:{" "}
              <span className="text-primary">#1 Resume Writers</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              A Canadian resume needs to do more than list your experience. It
              needs to present your skills, achievements, and career direction
              clearly while using a structure that works well for modern online
              applications.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              At Resume Uplift, we create professionally written, ATS-friendly
              resumes according to your target role and the Canadian job market.
              Whether you are a recent graduate, experienced professional,
              career changer, or newcomer to Canada, we focus on making your
              experience easier for employers and recruitment systems to
              understand.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-card/80 px-3 py-4 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-muted-foreground leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/samples"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-input bg-card px-5 text-sm sm:text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground"
              >
                ATS Resume Work Samples
              </Link>
              <Link
                href="/cv-review"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-input bg-card px-5 text-sm sm:text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <CheckCircle2 className="h-4 w-4" />
                Free Resume Review
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                Hire Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
