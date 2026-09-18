"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ScanSearch,
  FileWarning,
  Eye,
} from "lucide-react";

const cards = [
  {
    title: "The ATS Reality",
    body: "Nearly all major employers now use some form of applicant tracking system, and how well your resume is structured directly affects whether it gets seen.",
    stat: "98%",
    statLabel: "of Fortune 500 companies use an ATS",
    icon: ScanSearch,
  },
  {
    title: "Where Most Resumes Fall Short",
    body: "Yet research shows over half of resumes are far from ready. On average, more than half the important terms from a job posting are missing entirely — even when the candidate is qualified.",
    stat: "51%",
    statLabel: "of resumes score below 50/100 on ATS compatibility",
    icon: FileWarning,
  },
  {
    title: "What Recruiters Actually Care About",
    body: "What actually matters most to recruiters is simple: a document that's easy to scan quickly. Relevant experience and skills followed closely at 88%, while natural keyword use came in at 76% and simple, consistent formatting at 68%.",
    stat: "92%",
    statLabel: "rank clear, skimmable structure as their top priority",
    icon: Eye,
  },
];

export function ResumeRewritingWhy() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="absolute top-0 right-0 -z-0 h-[320px] w-[320px] bg-primary/10 blur-[100px] rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-0 h-[280px] w-[280px] bg-primary/5 blur-[90px] rounded-full opacity-50 pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <AlertTriangle className="h-3.5 w-3.5" />
            Why It Matters
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
            Why Your Resume Might Be Holding You Back &amp; Not Getting You
            Recruited
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Most resumes don&apos;t fail because of a mysterious algorithm. They
            fail because of weak structure, missing keywords, and outdated
            formatting that&apos;s hard for both software and humans to read
            quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto mb-8 md:mb-10">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col rounded-3xl border border-border/70 bg-card p-6 sm:p-7 shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <card.icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-none tracking-tight">
                    {card.stat}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {card.body}
              </p>
              <p className="text-xs font-semibold text-foreground/80 leading-snug pt-4 border-t border-border/60">
                {card.statLabel}
              </p>
            </article>
          ))}
        </div>

        <div className="max-w-6xl mx-auto rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-2">
                The Fix — Resume Uplift&apos;s Professional Resume Rewriting
                Services
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                This is exactly what a professional resume revamp fixes. No
                gimmicks, no keyword stuffing, just a clear &amp; well-structured
                ATS resume that is genuinely easy to read. Resume Uplift
                rewrites your content and formatting so you compete stronger for
                every role you apply to.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/resume-revamp"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Revamp Your Resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cv-review"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-input bg-card px-6 text-sm font-medium hover:bg-accent transition-all"
                >
                  Submit Resume for Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
