"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Search, UserCheck, Shield, TrendingUp, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Certified Resume Writers",
    description:
      "Trained and certified in professional resume writing standards worldwide.",
    icon: UserCheck,
    accent: "primary",
  },
  {
    title: "100% ATS-Friendly Guarantee",
    description:
      "Every resume passes applicant tracking systems used by top employers.",
    icon: Shield,
    accent: "accent-cool",
  },
  {
    title: "Proven Track Record",
    description:
      "Our hundreds of clients got hired faster with ATS-optimized resumes.",
    icon: TrendingUp,
    accent: "accent-warm",
  },
  {
    title: "100% Human-Written",
    description:
      "No AI content, 100% human Resume/CV writing with proper optimization.",
    icon: Search,
    accent: "primary",
  },
  {
    title: "Unlimited Revisions",
    description:
      "Clients' satisfaction matters to us. Hence, edits continue until it's perfect.",
    icon: RefreshCw,
    accent: "accent-cool",
  },
  {
    title: "Fast Turnaround",
    description:
      "Get your new CV or Resume within 24 hours, without compromising quality.",
    icon: Clock,
    accent: "accent-warm",
  },
];

export function WhyChooseMe() {
  const containerRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".trust-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap.from(".trust-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-16 bg-background relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="trust-content mx-auto mb-8 md:mb-10 max-w-2xl text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-cool/10 border border-accent-cool/20 text-accent-cool text-xs font-bold tracking-wide mb-3">
            THE DIFFERENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 tracking-tight text-foreground">
            Why Trust <span className="text-primary">Us</span> With Your Career?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We provide career-winning resumes and CVs built by certified
            professionals who know what recruiters and ATS systems are looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="trust-card h-full rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={cn(
                  "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  feature.accent === "primary" && "bg-primary/10 text-primary",
                  feature.accent === "accent-warm" && "bg-accent-warm/10 text-accent-warm",
                  feature.accent === "accent-cool" && "bg-accent-cool/10 text-accent-cool",
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground font-heading">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
