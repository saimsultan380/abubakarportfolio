"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Upload,
  MessageSquare,
  PenTool,
  RotateCcw,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Share Your Background",
    description:
      "Send your current CV, career history, and target role or industry.",
    icon: Upload,
  },
  {
    number: "02",
    title: "One-on-One Consultation",
    description:
      "We discuss your goals, achievements, and the roles you're aiming for.",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "CV Written From Scratch",
    description:
      "Our experts design your CV according to your industry, career stage, and target position.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Review and Revise",
    description:
      "You review the draft and share feedback about the CV until it's exactly right.",
    icon: RotateCcw,
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "You will get your finished CV in Word and PDF, and you can send it for applying to jobs.",
    icon: Download,
  },
];

export function CareerCvProcess() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ccv-process-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
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
      id="ccv-process"
      ref={sectionRef}
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            How the Process <span className="text-primary">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className={cn(
                "ccv-process-card group relative flex flex-col rounded-2xl border border-border/60 bg-white dark:bg-zinc-900/50 p-5 shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
              )}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="font-heading text-xs font-bold tracking-widest text-muted-foreground/50">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
