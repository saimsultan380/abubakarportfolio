"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X, ArrowRight, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "General Cover Letter",
    price: "$65",
    description:
      "A flexible and professional cover letter that fits your industry and career level. The template is easy to adjust, so you can apply to multiple positions. If you're applying to several roles in the same field, it is the best choice for you.",
    bestFor: "Multiple applications, general use",
    accent: "primary",
    features: [
      { label: "Written for your industry and career level", included: true },
      { label: "Customized for one specific job and company", included: false },
      { label: "Matches the exact job description", included: false },
      { label: "One-on-one consultation with your writer", included: true },
      { label: "ATS-friendly formatting and keyword alignment", included: true },
      { label: "100% human-written, no AI", included: true },
      { label: "Delivered in Word and PDF formats", included: true },
      { label: "Revisions included until you're satisfied", included: true },
    ],
  },
  {
    name: "Personalized & Role-Specific Cover Letter",
    price: "$80",
    description:
      "This cover letter is for one specific job and company. We write about the role, reflect the job description, and show the employer your interest & expertise, and exactly why you fit for the role. Best for competitive or high-priority applications.",
    bestFor: "Competitive or high-priority roles",
    accent: "accent-warm",
    popular: true,
    features: [
      { label: "Written for your industry and career level", included: true },
      { label: "Customized for one specific job and company", included: true },
      { label: "Matches the exact job description", included: true },
      { label: "One-on-one consultation with your writer", included: true },
      { label: "ATS-friendly formatting and keyword alignment", included: true },
      { label: "100% human-written, no AI", included: true },
      { label: "Delivered in Word and PDF formats", included: true },
      { label: "Revisions included until you're satisfied", included: true },
    ],
  },
];

export function CoverLetterPricing() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cl-pricing-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
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
      id="cl-pricing"
      ref={sectionRef}
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <Zap className="h-3.5 w-3.5" />
            Pricing Plans
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            Discounted Pricing Plans for{" "}
            <span className="text-primary">Cover Letter Writing</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Pick the Cover Letter That Fits Your Application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`cl-pricing-card relative rounded-3xl border ${plan.popular ? "border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/20" : "border-border/60 shadow-lg"} bg-card overflow-hidden flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary to-accent-warm" />
              )}
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold text-primary font-heading">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">
                      / letter
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${feat.included ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground/40"}`}
                        >
                          {feat.included ? (
                            <Check className="h-3 w-3 stroke-[3]" />
                          ) : (
                            <X className="h-3 w-3 stroke-[3]" />
                          )}
                        </span>
                        <span
                          className={`text-sm leading-snug ${feat.included ? "text-foreground/80 font-medium" : "text-muted-foreground/50 line-through"}`}
                        >
                          {feat.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    Best for
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {plan.bestFor}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="https://wa.me/447478564745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] ${plan.popular ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90" : "border border-primary text-primary hover:bg-primary/5"}`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
