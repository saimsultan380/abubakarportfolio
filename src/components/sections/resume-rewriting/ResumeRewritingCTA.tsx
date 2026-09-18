"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ResumeRewritingCTA() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      gsap.fromTo(
        ".rr-cta-content",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="rr-contact"
      ref={containerRef}
      className="relative py-16 md:py-20 bg-background overflow-hidden border-t border-border z-10"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[20vw] font-bold leading-none uppercase text-foreground"
        >
          <span className="px-4">Revamp Your Resume</span>
          <span className="px-4">Revamp Your Resume</span>
          <span className="px-4">Revamp Your Resume</span>
          <span className="px-4">Revamp Your Resume</span>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10 rr-cta-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6 text-foreground">
            Ready for a Resume That{" "}
            <span className="text-primary">Actually Works</span> for You?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Your experience deserves better than an outdated document.
            Let&apos;s revamp your resume into something that gets read, gets
            noticed, and gets you interviews.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/resume-revamp"
              className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold uppercase tracking-[0.14em] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors hover:scale-105"
            >
              Get My Resume Revamped
            </Link>

            <Link
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center px-6 rounded-full border border-border bg-card text-sm sm:text-base font-bold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
