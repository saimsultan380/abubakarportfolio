"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CheckCircle2, Linkedin, Star, X, UserRound } from "lucide-react";

const TEAM_INTRO_PARAGRAPHS = [
  "Muhammad Abu Bakar is a Certified Professional Resume Writer and ATS Optimization Specialist dedicated to helping professionals get noticed and get hired. With over 7 years of experience in resume writing, LinkedIn optimization, and executive career branding, he has supported more than 2,000 clients across 50 plus industries in securing interviews, increasing recruiter engagement, and advancing their careers with confidence.",
  "He specializes in ATS optimized resumes, executive CV writing, custom cover letters, and LinkedIn profile optimization tailored to each client's target role and industry. His approach combines strategic keyword integration, achievement focused storytelling, modern resume formatting, and in depth understanding of applicant tracking systems to ensure every document performs effectively in today's competitive job market.",
  "Muhammad has helped clients increase interview callbacks by up to 70 to 80 percent, improve LinkedIn visibility by more than two times, and generate significantly more recruiter messages within weeks. From entry level professionals to senior executives, he creates career documents that position clients as top candidates and align their experience with employer expectations.",
  "Through Resumes Uplift, his mission is to transform professional backgrounds into powerful personal brands that open doors to better opportunities, stronger offers, and long term career growth.",
];

function TeamIntroModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-intro-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative flex w-full max-w-xl max-h-[min(88dvh,800px)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl ring-1 ring-black/5 dark:ring-white/10 animate-in zoom-in-95 fill-mode-forwards duration-200 sm:rounded-3xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <UserRound className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h2
                id="team-intro-title"
                className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl"
              >
                About Muhammad Abu Bakar
              </h2>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Expert Writing Head · Resumes Uplift
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close introduction"
          >
            <X className="h-5 w-5" />
          </button>
        </header>
        {/* Single scroll region — avoids nested scrollbars with the page */}
        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-gutter:stable]">
          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <div className="mx-auto max-w-prose space-y-5 text-[15px] leading-[1.7] text-foreground/90 sm:text-base sm:leading-relaxed">
              {TEAM_INTRO_PARAGRAPHS.map((paragraph, i) => (
                <p key={i} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function HeroVisual() {
  const [introOpen, setIntroOpen] = React.useState(false);

  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0 perspective-[1000px] group">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity duration-700" />

      {/* Floating Decorative Elements — stay below full-screen overlays (modals use portal + z-10000) */}
      <div className="absolute -top-6 -right-6 z-0 animate-float-slow delay-700 hidden sm:block pointer-events-none">
        <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl shadow-primary/5 border border-white/50 dark:border-white/5 rotate-12 transition-transform group-hover:rotate-6">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
        </div>
      </div>

      {/* Main Card — click to read full introduction (LinkedIn stays separate) */}
      <div
        className="relative bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:shadow-primary/10 cursor-pointer"
        onClick={() => setIntroOpen(true)}
      >
        {/* Header Label */}
        <div className="flex items-center gap-2 mb-6 opacity-80">
          <div className="h-6 px-2.5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Meet Our Team
            </span>
          </div>
        </div>

        {/* Profile Block */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          {/* Image */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800 shrink-0 group-hover:scale-105 transition-transform duration-500">
            <Image
              src="/brand/WhatsApp%20Image%202026-01-31%20at%2012.05.58%20AM.jpeg"
              alt="Muhammad Abu Bakar"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Name & Title */}
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground tracking-tight transition-colors hover:text-primary cursor-default">
              Muhammad Abu Bakar
            </h3>
            <a
              href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center sm:justify-start gap-2 mt-0.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
              aria-label="Open LinkedIn profile"
              onClick={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
            >
              <span>Expert Writing Head</span>
              <Linkedin className="h-4 w-4 shrink-0 text-primary" />
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-3 h-3 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="text-[10px] font-medium text-muted-foreground ml-1">
                Top Rated
              </span>
            </div>
          </div>
        </div>

        {/* Credentials headline */}
        <div className="relative z-10 mt-5">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
            Certified Professional Resume Writer · LinkedIn Optimization
            Specialist · Cover Letter Expert · ATS-Compliant Creator · Executive
            Career Branding · Job-Winning Resumes
          </p>
        </div>

        {/* Bottom Tags */}
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
              Recruiter Approved
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300">
              ATS Optimized
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIntroOpen(true);
          }}
          aria-label="Read full introduction about Muhammad Abu Bakar"
          className="mt-4 w-full text-center sm:text-left text-[11px] font-semibold text-primary hover:text-primary/90 inline-flex items-center justify-center sm:justify-start gap-1.5 rounded-lg py-1.5 -mx-1 px-1 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <UserRound className="w-3.5 h-3.5 shrink-0" />
          Read full intro
        </button>
      </div>

      <TeamIntroModal isOpen={introOpen} onClose={() => setIntroOpen(false)} />
    </div>
  );
}
