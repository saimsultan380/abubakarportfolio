"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileText, ClipboardCheck, Users } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

export function NzSamplesAndExtras() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
              <FileText className="h-3.5 w-3.5" />
              Templates &amp; Samples
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4">
              ATS-friendly Resume/CV Writing Templates for the{" "}
              <span className="text-primary">New Zealand Audience</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Browse ATS-optimised resume and CV samples built for New Zealand
              employers — clean formatting, role-matched keywords, and writing
              that works for both screening systems and recruiters.
            </p>
            <Link
              href="/samples"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              View ATS Resume Samples
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ImagePlaceholder label="NZ ATS resume templates visual" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground mb-3">
              Free ATS Resume Score Check
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Before you commit to anything, you can find out where your current
              resume actually stands. Send it over, and we&apos;ll check how
              it&apos;s likely to parse, whether your formatting is ATS-safe,
              and where the gaps are against a real job description.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              This isn&apos;t a sales pitch disguised as a &quot;score.&quot;
              It&apos;s a straightforward look at what an ATS would see when it
              scans your file, so you know whether the problem is your resume or
              something else in your job search.
            </p>
            <Link
              href="/cv-review"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary text-primary px-5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get Free Resume Check
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground mb-3">
              Who Writes Your Resume
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Every resume is assigned to a writer with a background in your
              industry, not handed to whoever is next in the queue. A finance
              resume and a software engineering resume don&apos;t need the same
              vocabulary, and they shouldn&apos;t sound like they came from the
              same template.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Writers work directly with you during the consultation and
              revision stages, so the person shaping your resume actually
              understands the role you&apos;re targeting, not just the job
              title.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
