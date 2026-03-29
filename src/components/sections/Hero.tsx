"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { HeroVisual } from "@/components/sections/HeroVisual";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const leftContentRef = React.useRef<HTMLDivElement>(null);
  const rightContentRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(leftContentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      }).from(
        rightContentRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.8",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-40 pb-20 md:pt-36 md:pb-32 lg:pt-44 overflow-x-hidden overflow-y-visible bg-background"
    >
      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-accent-cool/20 blur-[100px] rounded-full mix-blend-multiply opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] bg-accent-warm/15 blur-[100px] rounded-full mix-blend-multiply opacity-40" />

      <div className="container mx-auto pl-5 pr-5 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div
            ref={leftContentRef}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 text-sm font-medium text-accent-warm backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-accent-warm" />
                Rated #1 CV Service
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cool/30 bg-accent-cool/10 px-3 py-1 text-sm font-medium text-accent-cool backdrop-blur-sm">
                <CheckCircle2 className="h-3.5 w-3.5" />
                ATS-Optimized
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-heading mb-6 leading-[1.05]">
              <span className="text-primary">ATS-Optimized</span> Resumes &amp;
              CVs That Land You <span className="text-primary">Interviews</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Stop getting filtered out by ATS. I craft recruiter-approved CVs,
              resumes, and LinkedIn profiles that highlight your impact and
              match your target role.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/cv-review"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Review My CV
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/samples"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-card px-8 text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Samples
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[11, 12, 13, 14].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/64?img=${id}`}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <div>
                <span className="font-bold text-accent-cool">800+</span> Clients
                Hired
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div
            ref={rightContentRef}
            className="relative w-full flex justify-center lg:justify-end perspective-[1200px] overflow-visible mt-12 lg:mt-0"
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
