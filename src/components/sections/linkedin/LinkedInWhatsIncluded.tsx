"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  Search,
  FileText,
  UserCheck,
  Target,
  Clock,
  Layers,
  Globe,
  ClipboardCheck,
  ThumbsUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GradientBorderCard } from "@/components/ui/GradientBorderCard";

gsap.registerPlugin(ScrollTrigger);

const featurePillars = [
  {
    pillar: "Pillar 1: Recruiter Search & SEO",
    tag: "Algorithmic Placement",
    icon: Search,
    title: "Headhunter Visibility & Keyword SEO",
    description:
      "We reverse-engineer LinkedIn's search algorithm to guarantee your profile surfaces in high-intent recruiter queries.",
    deliverables: [
      "Top-tier ranking in recruiter search filters and Boolean queries",
      "Semantic keyword indexing across headline, summary, and skills",
      "Comprehensive pre-optimization profile audit & gap analysis",
      "Custom clean LinkedIn URL setup for professional credibility",
    ],
  },
  {
    pillar: "Pillar 2: Executive Narrative & Brand",
    tag: "High-Converting Story",
    icon: FileText,
    title: "Headline, About & Experience Revamp",
    description:
      "Transforming boring job descriptions into an authoritative career narrative that compels hiring managers to reach out.",
    deliverables: [
      "High-impact, keyword-rich headline that hooks recruiters instantly",
      "Personalized, persuasive About/Summary narrative that sells your value",
      "Experience section restructured around quantifiable achievements & metrics",
      "Written 100% by certified career writers with zero generic AI copy",
    ],
  },
  {
    pillar: "Pillar 3: Authority & Alignment",
    tag: "Career Consistency",
    icon: ShieldCheck,
    title: "Skills Endorsements & Career Cohesion",
    description:
      "Ensuring your LinkedIn profile perfectly mirrors your resume while showcasing executive authority and social proof.",
    deliverables: [
      "Strategic skills alignment prioritizing top in-demand competencies",
      "Featured media recommendations to showcase your work samples",
      "Recommendations & endorsement strategy playbook",
      "Rapid 24-to-48 hour turnaround with 1-on-1 revision support",
    ],
  },
];

export function LinkedInWhatsIncluded() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".li-pillar-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
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
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            Complete Service Breakdown
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            What&apos;s Included in Our{" "}
            <span className="text-primary">LinkedIn Optimization</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A comprehensive, data-backed makeover designed to elevate your profile from an unnoticed CV into a high-converting inbound opportunity engine.
          </p>
        </div>

        {/* 3 Executive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {featurePillars.map((pillar, index) => (
            <div key={index} className="li-pillar-card">
              <GradientBorderCard className="h-full p-7 flex flex-col justify-between hover:bg-muted/30 transition-colors">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <pillar.icon className="h-6 w-6" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Included
                    </span>
                  </div>

                  <span className="text-xs font-bold text-accent-warm uppercase tracking-widest block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-heading leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-border/50">
                    {pillar.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">{pillar.pillar}</span>
                  <span className="flex items-center gap-1 font-medium text-foreground">
                    100% Tailored
                  </span>
                </div>
              </GradientBorderCard>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-98 transition-all"
          >
            Optimize My Profile Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
