"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Clock, Search, UserCheck } from "lucide-react";
import { GradientBorderCard } from "@/components/ui/GradientBorderCard";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "100% Human-Written",
    description:
      "No AI generators. Every sentence is crafted to highlight your unique value.",
    icon: UserCheck,
    accent: "primary",
  },
  {
    title: "ATS-Friendly Formats",
    description:
      "Clean layouts ensuring your CV passes the bots and reaches the recruiter.",
    icon: Search,
    accent: "accent-cool",
  },
  {
    title: "Industry-Specific Strategy",
    description:
      "Keywords and phrasing tailored to your target role and sector.",
    icon: CheckCircle,
    accent: "accent-warm",
  },
  {
    title: "Fast Turnaround",
    description:
      "Get your new CV in as little as 48 hours without compromising quality.",
    icon: Clock,
    accent: "primary",
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
      className="py-24 bg-zinc-50 dark:bg-black/40 relative z-10 overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="trust-image relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[800px] border border-border/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
              alt="Professional Career Coach"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                <UserCheck className="h-3 w-3" />
                Expert Guidance
              </div>
              <blockquote className="text-white text-xl md:text-2xl font-bold font-heading leading-tight max-w-md">
                &ldquo;Your career story deserves to be told with power,
                precision, and purpose.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right: Content */}
          <div className="trust-content">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-cool/10 border border-accent-cool/20 text-accent-cool text-xs font-bold tracking-wide mb-4">
                THE DIFFERENCE
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
                Why Trust Me With Your{" "}
                <span className="text-primary">Career?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Most resume writers just fix grammar. I rebuild your
                professional narrative to position you as the high-value
                candidate companies are fighting for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
