"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GitCommitVertical } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const detailedSteps = [
  { step: 1, label: "Submit Your Details" },
  { step: 2, label: "Initial Review" },
  { step: 3, label: "Get Your Quote" },
  { step: 4, label: "Writer Assigned" },
  { step: 5, label: "Role & Industry Research" },
  { step: 6, label: "First Draft Written" },
  { step: 7, label: "Quality & ATS Check" },
  { step: 8, label: "Draft Delivered" },
  { step: 9, label: "Revisions" },
  { step: 10, label: "Final Delivery" },
];

export function CoverLetterDetailedProcess() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".step-item",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
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
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[350px] w-[350px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <GitCommitVertical className="h-3.5 w-3.5" />
            Full Journey
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            From First Message to{" "}
            <span className="text-primary">Delivered Cover Letter</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every step is handled with care, from your initial message to the
            final polished document in your inbox.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block" />

            <div className="space-y-4">
              {detailedSteps.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "step-item group flex items-center gap-5 rounded-2xl border border-border/60 bg-white dark:bg-zinc-900/50 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5",
                    i === detailedSteps.length - 1 &&
                      "border-primary/40 bg-primary/5 dark:bg-primary/10",
                  )}
                >
                  {/* Step circle */}
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-bold text-sm font-heading transition-all duration-300 group-hover:scale-110 relative z-10",
                      i === detailedSteps.length - 1
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                        : "border-primary/30 bg-white dark:bg-zinc-900 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white",
                    )}
                  >
                    {String(item.step).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-0.5">
                      Step {item.step}
                    </p>
                    <h3
                      className={cn(
                        "text-base font-bold font-heading transition-colors group-hover:text-primary",
                        i === detailedSteps.length - 1
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {item.label}
                    </h3>
                  </div>

                  {i === detailedSteps.length - 1 && (
                    <div className="ml-auto shrink-0">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        Done ✓
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
