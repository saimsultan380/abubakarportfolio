"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Search, UserCheck, Shield, TrendingUp, RefreshCw } from "lucide-react";
import { GradientBorderCard } from "@/components/ui/GradientBorderCard";
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.from(".trust-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".trust-content",
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".trust-card",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative z-10 overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="trust-image relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[540px] border border-border/50 shadow-2xl">
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
            <img
              src="/THE%20DIFFERENCE-IMAGE.jpeg"
              alt="Professional Career Coach"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3">
                <UserCheck className="h-3 w-3" />
                Expert Guidance
              </div>
              <blockquote className="text-white text-lg md:text-xl font-bold font-heading leading-tight max-w-md">
                &ldquo;Your career story deserves to be told with power,
                precision, and purpose.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right: Content */}
          <div className="trust-content">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-cool/10 border border-accent-cool/20 text-accent-cool text-xs font-bold tracking-wide mb-3">
                THE DIFFERENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 tracking-tight text-foreground">
                Why Trust{" "}
                <span className="text-primary">Us</span> With Your Career?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We provide career-winning resumes and CVs built by certified
                professionals who know what recruiters and ATS systems are looking for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="trust-card">
                  <GradientBorderCard className="h-full p-6 flex flex-col items-start text-left hover:bg-muted/50 transition-colors">
                    <div
                      className={cn(
                        "mb-4 p-3 rounded-xl ring-1 ring-border/50",
                        feature.accent === "primary" &&
                          "bg-primary/10 text-primary",
                        feature.accent === "accent-warm" &&
                          "bg-accent-warm/10 text-accent-warm",
                        feature.accent === "accent-cool" &&
                          "bg-accent-cool/10 text-accent-cool",
                      )}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </GradientBorderCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
