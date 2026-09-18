"use client";

import * as React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Sparkles,
  TrendingUp,
  Star,
  Eye,
  ShieldCheck,
  Award,
  Phone,
  Check,
} from "lucide-react";

gsap.registerPlugin(useGSAP);

export function LinkedInHero() {
  const containerRef = React.useRef<HTMLElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
      }).from(
        cardRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14 overflow-hidden bg-background"
    >
      {/* Mesh Ambient Glows - Strict Brand Orange and Accents */}
      <div className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] bg-primary/20 blur-[130px] rounded-full mix-blend-multiply opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 -z-10 h-[400px] w-[400px] bg-accent-warm/15 blur-[120px] rounded-full mix-blend-multiply opacity-35" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[350px] w-[350px] bg-primary/10 blur-[110px] rounded-full opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div
            ref={contentRef}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Dual Eyebrow Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-primary shrink-0" />
                Certified Profile Optimization
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 text-xs sm:text-sm font-semibold text-accent-warm backdrop-blur-sm">
                <TrendingUp className="h-3.5 w-3.5 shrink-0" />
                +90% Recruiter Outreach
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading mb-4 leading-[1.12]">
              Professional LinkedIn Profile Optimization to{" "}
              <span className="text-primary">Dominate Recruiter Searches</span> &amp;{" "}
              <span className="text-primary">Win Interviews</span>
            </h1>

            {/* Recruiter Stat Callout */}
            <div className="mb-4 p-3.5 sm:p-4 rounded-2xl bg-card border border-border/80 shadow-sm text-left max-w-2xl">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-1.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                    87% of recruiters vet your LinkedIn profile before even reviewing your resume.
                  </p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                    An unoptimized profile keeps your accomplishments hidden. We re-engineer your profile so headhunters and hiring teams find and contact you first.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Our certified career strategists overhaul your headline, About section, core competencies, and quantifiable achievements with targeted algorithmic SEO keywords, positioning you among the top 1% of talent in your field.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#pricing"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-6 text-sm sm:text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-98 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Book Profile Optimization
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <Link
                href="https://wa.me/447478564745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-input bg-card px-5 text-sm sm:text-base font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Phone className="h-4 w-4 text-primary" />
                WhatsApp Consultation
              </Link>

              <Link
                href="/cv-review"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl border border-transparent text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Free Profile Evaluation &rarr;
              </Link>
            </div>

            {/* Social Proof Avatars */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3.5 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[21, 22, 23, 24].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/64?img=${id}`}
                    alt="Client avatar"
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-foreground">1,000+</span> Profiles Optimized &amp; Hired Worldwide
              </div>
            </div>
          </div>

          {/* Right Column: Pro Recruiter Search Appearance Card */}
          <div ref={cardRef} className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Recruiter View Preview
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold text-primary">
                  <Sparkles className="h-3 w-3" />
                  Top 1% Ranked
                </span>
              </div>

              {/* Candidate Snippet */}
              <div className="flex items-start gap-4 mb-5">
                <div className="relative h-14 w-14 rounded-2xl border border-border bg-muted/60 overflow-hidden shadow-sm flex-shrink-0 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Candidate Profile"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-card" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-foreground truncate font-heading">
                      Senior Executive
                    </h3>
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <p className="text-xs font-semibold text-primary leading-tight mt-0.5">
                    VP of Product &amp; Growth Strategy
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    London, UK · 500+ Connections
                  </p>
                </div>
              </div>

              {/* High-Impact Keyword Match Tags */}
              <div className="mb-5">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Target Recruiter Keywords Matched
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Product Strategy",
                    "P&L Leadership",
                    "SaaS Growth",
                    "Cross-Functional Scaling",
                  ].map((kw, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted/70 text-[11px] font-medium text-foreground border border-border/50"
                    >
                      <Check className="h-3 w-3 text-emerald-500" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Metric Stats Box */}
              <div className="rounded-2xl bg-muted/40 p-4 border border-border/60 space-y-3 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Eye className="h-3.5 w-3.5 text-primary" />
                    Recruiter Search Appearances
                  </span>
                  <span className="font-bold text-foreground">40x Increase</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Search className="h-3.5 w-3.5 text-accent-warm" />
                    Inbound Interview Inquiries
                  </span>
                  <span className="font-bold text-primary">+90% Boost</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Award className="h-3.5 w-3.5 text-emerald-500" />
                    Recruiter Callback Rate
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    +71% Higher
                  </span>
                </div>
              </div>

              {/* Footer Trust Guarantee */}
              <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Profile Status</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  All-Star Recruiter Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
