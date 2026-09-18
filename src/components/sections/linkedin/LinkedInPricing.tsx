"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  Zap,
  Star,
  ArrowRight,
  ShieldCheck,
  Building2,
  User,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const standaloneFeatures = [
  "Comprehensive Profile & Visibility Audit",
  "Target Industry Keyword & Boolean Search Optimization",
  "High-Converting, Keyword-Rich Headline",
  "Compelling, First-Person About / Summary Section",
  "Achievement-Oriented Experience Restructuring",
  "Skills Section Optimization & Endorsement Strategy",
  "Featured Section Setup & Portfolio Guidance",
  "Custom Clean LinkedIn URL Configuration",
  "Recommendations Strategy & Direct Message Templates",
  "Fast 24-48h Turnaround with Revisions Included",
];

const completePackageFeatures = [
  "Complete LinkedIn Profile Optimization ($80 value)",
  "Full ATS-Optimized Resume Rewrite ($130 value)",
  "Custom Targeted Cover Letter ($70 value)",
  "Seamless Narrative Alignment Across All 3 Assets",
  "100% Human-Written by Certified Senior Writers",
  "Editable Word & PDF Formats Included",
  "Priority 24-Hour Expedited Delivery Option",
  "Unlimited Iterations & Satisfaction Guarantee",
  "Direct 1-on-1 WhatsApp & Email Writer Support",
  "Save Over $50 with Bundled Career Pricing",
];

const individualFeatures = [
  "Complete Personal Profile Audit and Gap Analysis",
  "Keyword-Optimized Headline for Target Career Level",
  "Compelling, Personalized Executive About Section",
  "Experience Section Rewritten with Quantifiable Wins",
  "Skills and Endorsements Prioritization for Recruiters",
  "Featured Section Setup and Media Recommendations",
  "Profile Photo and Banner Presentation Best Practices",
  "Custom Professional LinkedIn URL Setup",
  "Strategic Recommendations & Endorsement Guidance",
  "One-on-One Support with Your Dedicated Writer",
];

const companyFeatures = [
  "Complete Company Page Audit and Competitor Benchmarking",
  "Optimized Page Name, Tagline, and Value Proposition",
  "Keyword-Rich Company Overview for SEO Visibility",
  "Cover Banner and Brand Identity Presentation Guidance",
  "Industry, Company Size, and Specialties Configuration",
  "Showcase Pages Strategy for Key Products/Services",
  "Employee Advocacy and Tagging Playbook",
  "Content Pillar Recommendations for Organic Growth",
  "Careers Tab and Job Posting Optimization Tips",
  "Growth Recommendations to Attract Clients and Talent",
];

export function LinkedInPricing() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".li-pricing-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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
      id="pricing"
      ref={sectionRef}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-t border-border/50"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
            <Zap className="h-3.5 w-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Invest in Your Profile, <br />
            <span className="text-primary">Unlock High-Paying Opportunities</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Choose between standalone profile optimization or our complete career suite to boost your interview callback rate by +90%.
          </p>
        </div>

        {/* 2 Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Plan 1: Standalone Optimization */}
          <div className="pricing-card li-pricing-card rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:border-primary/40 transition-all duration-300 relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                  Standalone Service
                </span>
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  24-48h Delivery
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-heading mb-3">
                LinkedIn Profile Optimization
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-foreground font-heading">
                  $80
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  / one-time investment
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                An authoritative LinkedIn presence brings top recruiters directly to your profile. Our specialists rewrite your headline, About section, skills, and experience with high-impact keywords so you rank at the top of candidate searches.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 pt-4 border-t border-border/60">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  What&apos;s Included
                </p>
                {standaloneFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/checkout?plan=mid&pkg=linkedin"
                className="w-full inline-flex h-13 items-center justify-center rounded-xl bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-base transition-all duration-200 shadow-sm active:scale-98"
              >
                Order LinkedIn Makeover ($80)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Plan 2: Complete Career Package (Featured) */}
          <div className="pricing-card li-pricing-card rounded-3xl border-2 border-primary bg-card p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-accent-warm text-primary-foreground text-xs font-bold uppercase tracking-widest px-6 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <Star className="h-3 w-3 fill-white" />
              Complete Package · Best Value
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                  All-in-One Career Suite
                </span>
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Full Alignment
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-heading mb-1">
                Complete Career Package
              </h3>
              <p className="text-xs sm:text-sm font-bold text-primary mb-3">
                (ATS Resume + Cover Letter + LinkedIn Optimization)
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-primary font-heading">
                  $300
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  / total career suite
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Applying for roles is ineffective when your resume, cover letter, and LinkedIn present conflicting stories. We harmonize all three assets into a synchronized executive presence that maximizes your interview callback rate.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 pt-4 border-t border-border/60">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Package Highlights
                </p>
                {completePackageFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="leading-snug font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href="/checkout?plan=executive&pkg=all"
                className="w-full inline-flex h-13 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base transition-all duration-200 shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-98"
              >
                Get Complete Package ($300)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Service Breakdown: Individual vs Company */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-3">
              Comprehensive Service Deliverables
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Tailored optimization for both individual job seekers and corporate organization pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Package Breakdown */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-border/60">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-foreground">
                    Individual Profile Optimization
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    For job seekers, mid-level professionals &amp; executives
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {individualFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Page Breakdown */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-border/60">
                <div className="p-3 rounded-2xl bg-accent-warm/10 text-accent-warm">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-foreground">
                    Company Page Optimization
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    For brands, agencies, startups &amp; corporate pages
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {companyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
