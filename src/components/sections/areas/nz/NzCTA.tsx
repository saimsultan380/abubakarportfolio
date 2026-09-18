"use client";

import * as React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function NzCTA() {
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
        ".nz-cta-content",
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
      ref={containerRef}
      className="relative py-16 md:py-20 bg-background overflow-hidden border-t border-border z-10"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[14vw] font-bold leading-none uppercase text-foreground"
        >
          <span className="px-4">Get Hired in New Zealand</span>
          <span className="px-4">Get Hired in New Zealand</span>
          <span className="px-4">Get Hired in New Zealand</span>
          <span className="px-4">Get Hired in New Zealand</span>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10 nz-cta-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tighter mb-6 text-foreground">
            Your Next Application Deserves a{" "}
            <span className="text-primary">Fair Shot</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            If your resume has been going out and coming back to silence,
            that&apos;s worth investigating before you send out another dozen. A
            resume that&apos;s misread by an ATS never gets the chance to be
            judged on your actual experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold uppercase tracking-[0.14em] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors hover:scale-105"
            >
              Hire Resume Writer
            </Link>

            <Link
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center px-6 rounded-full border border-border bg-card text-sm sm:text-base font-bold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Chat on WhatsApp
            </Link>

            <Link
              href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 px-6 rounded-full border border-border bg-card text-sm sm:text-base font-bold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              LinkedIn
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
