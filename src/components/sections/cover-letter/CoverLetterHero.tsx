"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Star, FileText, Phone } from "lucide-react";

gsap.registerPlugin(useGSAP);

export function CoverLetterHero() {
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
      className="relative pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14 overflow-x-hidden overflow-y-visible bg-background"
    >
      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-primary/10 blur-[100px] rounded-full mix-blend-multiply opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[350px] w-[350px] bg-accent-warm/10 blur-[100px] rounded-full mix-blend-multiply opacity-40" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div ref={contentRef} className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
                <Star className="h-3 w-3 fill-primary shrink-0" />
                Professional Cover Letter Writing
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 text-xs sm:text-sm font-medium text-accent-warm backdrop-blur-sm">
                <FileText className="h-3 w-3 shrink-0" />
                +77% Job Chances
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-4 leading-[1.1]">
              Professional Cover Letter Writing Service that{" "}
              <span className="text-primary">Uplifts Interviews</span> &amp;{" "}
              Job Chances by <span className="text-primary">+77%</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              80%+ Recruiters give preference to candidates who attach a
              professional Cover Letter along with a Resume. With our Cover
              Letter Writing Services, you get noticed by hiring managers, and
              your chances of getting a job increase.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="https://wa.me/447478564745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/447478564745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-input bg-card px-5 text-sm sm:text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Phone className="h-4 w-4" />
                Book a Free Call
              </Link>
            </div>

            {/* Social proof mini */}
            <div className="mt-6 flex items-center justify-center gap-3.5 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[21, 22, 23, 24].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/64?img=${id}`}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <div>
                <span className="font-bold text-primary">1000+</span> Clients
                Hired Globally
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
