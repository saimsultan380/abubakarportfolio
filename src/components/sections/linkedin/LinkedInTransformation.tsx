"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Shield,
  KeyRound,
  Sparkles,
  TrendingUp,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Target,
  Briefcase,
  Zap,
} from "lucide-react";
import { GradientBorderCard } from "@/components/ui/GradientBorderCard";

gsap.registerPlugin(ScrollTrigger);

const beforeAfterData = {
  before: {
    title: "Before Optimization",
    subtitle: "What happens with a standard, unoptimized profile",
    points: [
      "Buried on page 10+ in recruiter candidate search queries",
      "Generic job duties pasted from old CV without keyword hooks",
      "Zero inbound messages or interview invitations from headhunters",
      "Disconnect between your resume credentials and LinkedIn narrative",
      "Missed out on unadvertised executive and remote opportunities",
    ],
  },
  after: {
    title: "After Resumes Uplift",
    subtitle: "What hiring managers see after professional optimization",
    points: [
      "Ranked in top 1% of recruiter candidate search appearances",
      "High-impact headline and About story that commands immediate respect",
      "Frequent inbound InMails and private interview screening requests",
      "Unified narrative across Resume, Cover Letter, and LinkedIn",
      "Perceived as an in-demand leader in your specialized domain",
    ],
  },
};

const pillars = [
  {
    title: "Algorithmic Search Indexing",
    description:
      "Strategic semantic keyword placement targeting both LinkedIn search algorithms and recruiter Boolean strings.",
    icon: KeyRound,
  },
  {
    title: "Executive Storytelling",
    description:
      "A compelling first-person narrative in your About section that turns casual profile visitors into interested recruiters.",
    icon: Sparkles,
  },
  {
    title: "Quantifiable Impact Framing",
    description:
      "Restructuring mundane task lists into measurable, achievement-oriented bullet points that prove your ROI.",
    icon: TrendingUp,
  },
  {
    title: "Targeted Industry Positioning",
    description:
      "Aligning your skills and career history to match the exact competencies top companies in your sector are hiring for.",
    icon: Target,
  },
  {
    title: "Career Pivot & Credibility",
    description:
      "Highlighting transferable leadership skills so transitioners and executives are taken seriously by new industries.",
    icon: Shield,
  },
  {
    title: "Long-Term Inbound Magnet",
    description:
      "Building an enduring personal brand asset that continuously attracts consulting, executive, and board inquiries.",
    icon: Briefcase,
  },
];

export function LinkedInTransformation() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".li-transform-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-wider mb-3 border border-accent-warm/20">
            <Zap className="h-3.5 w-3.5" />
            Measurable Transformation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            The Difference Professional Optimization Makes
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            From an invisible digital resume into a high-visibility recruiter magnet that accelerates your career trajectory.
          </p>
        </div>

        {/* Before vs After Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
          {/* Before Card */}
          <div className="li-transform-card rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <XCircle className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {beforeAfterData.before.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                {beforeAfterData.before.subtitle}
              </p>

              <div className="space-y-3.5 pt-4 border-t border-border/50">
                {beforeAfterData.before.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      &times;
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/50 text-xs text-muted-foreground font-medium">
              Result: Endless job applications with low response rates
            </div>
          </div>

          {/* After Card (Highlighted) */}
          <div className="li-transform-card rounded-3xl border-2 border-primary bg-card p-7 sm:p-9 flex flex-col justify-between shadow-xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              Optimized
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {beforeAfterData.after.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                {beforeAfterData.after.subtitle}
              </p>

              <div className="space-y-3.5 pt-4 border-t border-border/50">
                {beforeAfterData.after.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/50 text-xs text-primary font-bold">
              Result: +90% boost in recruiter outreach &amp; interview callbacks
            </div>
          </div>
        </div>

        {/* 6-Pillar Strategic Framework */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-2">
            The 6 Pillars of Our Optimization Architecture
          </h3>
          <p className="text-sm text-muted-foreground">
            A comprehensive methodology developed from hundreds of successful client placements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="li-transform-card">
              <GradientBorderCard className="h-full p-6 flex flex-col justify-between hover:bg-muted/40 transition-colors">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2 font-heading leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </GradientBorderCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
