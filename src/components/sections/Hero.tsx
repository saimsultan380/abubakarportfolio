"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Carousel360 } from "@/components/ui/Carousel360";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(sliderRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.35,
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
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-accent-cool/20 blur-[100px] rounded-full mix-blend-multiply opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] bg-accent-warm/15 blur-[100px] rounded-full mix-blend-multiply opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Content */}
          <div
            ref={contentRef}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex flex-nowrap justify-center lg:justify-start items-center gap-1.5 sm:gap-3 mb-4">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-sm font-medium text-accent-warm backdrop-blur-sm whitespace-nowrap">
                <Star className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-accent-warm shrink-0" />
                Rated #1 Resume Service
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-accent-cool/30 bg-accent-cool/10 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-sm font-medium text-accent-cool backdrop-blur-sm whitespace-nowrap">
                <CheckCircle2 className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 shrink-0" />
                ATS-Optimized
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-4 leading-[1.12]">
              Best <span className="text-primary">ATS Friendly</span> Resume
              &amp; CV Writing Services to Get Hired &amp;{" "}
              <span className="text-primary">Win Interviews</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Boost your Interview Response Rate by 90%+. Hire us for
              job-winning, ATS-friendly Resume or CV writing, Cover Letter
              writing &amp; Resume Revamp services with Special Discounted
              Offers.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/samples"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-lg border border-input bg-card px-5 text-sm sm:text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                ATS Resume Work Samples
              </Link>
              <Link
                href="/cv-review"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-lg border border-input bg-card px-5 text-sm sm:text-base font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Free Resume Review
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-6 text-sm sm:text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Hire Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3.5 text-xs text-muted-foreground">
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

          {/* Right: 3D 360 Carousel */}
          <div
            ref={sliderRef}
            className="lg:col-span-5 w-full flex items-center justify-center relative"
          >
            <Carousel360 />
          </div>
        </div>
      </div>
    </section>
  );
}

