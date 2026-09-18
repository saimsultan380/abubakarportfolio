"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Layers, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const comboBenefits = [
  "Consistent messaging across all documents",
  "Stronger overall application package",
  "Save time with one coordinated writing process",
];

export function CoverLetterPair() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".pair-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
      className="py-10 md:py-14 bg-background relative overflow-hidden border-y border-border"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-accent-warm/5" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="pair-content max-w-4xl mx-auto rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner border border-primary/20">
              <Layers className="h-10 w-10" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
              Pair It With Your{" "}
              <span className="text-primary">Resume and LinkedIn Profile</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A cover letter works best when it matches your resume and LinkedIn
              profile in tone, structure, and message. Our team can create all
              three together, so your entire application feels consistent and
              professional from every angle.
            </p>

            <ul className="space-y-3 mb-8">
              {comboBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary text-primary px-6 text-sm font-bold hover:bg-primary hover:text-white transition-colors"
            >
              Explore Combo Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
