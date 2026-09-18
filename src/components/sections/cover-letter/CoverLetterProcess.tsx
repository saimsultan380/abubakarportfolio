"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, PenTool, RotateCcw, Download } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Send us your resume, target role, and job description if you have one. After this, our team requires these details to start your work.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "We Write Your Letter",
    description:
      "Our writers write your cover letter according to your experience, the target role, and the company you're applying to. You get an internal copy edit before the draft.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Review and Revise",
    description:
      "You review the draft and share your feedback. We refine it together until it's exactly right.",
    icon: RotateCcw,
  },
  {
    number: "04",
    title: "Get It Delivered",
    description:
      "You will get the finished cover letter within 24 hours, in both Word and PDF formats.",
    icon: Download,
  },
];

export function CoverLetterProcess() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cl-process-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
      id="cl-process"
      ref={sectionRef}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            How It Works &mdash;{" "}
            <span className="text-primary">
              Our Cover Letter Writing Process
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A simple, 4-step process designed to get your cover letter done
            fast, without compromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "cl-process-card group relative flex flex-col rounded-2xl border border-border/60 bg-white dark:bg-zinc-900/50 p-5 sm:p-6 shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
              )}
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="font-heading text-xs font-bold tracking-widest text-muted-foreground/50">
                  {step.number}
                </span>
              </div>
              <div className="flex-grow text-left">
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
