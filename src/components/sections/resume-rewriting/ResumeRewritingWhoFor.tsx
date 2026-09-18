"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Users } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const audiences = [
  "Professionals who haven't updated their resume in years",
  "Job seekers applying often but not getting responses",
  "Career changers moving into a new industry",
  "Professionals returning to work after a break",
  "Anyone whose resume no longer reflects their current experience",
];

export function ResumeRewritingWhoFor() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest mb-3">
              <Users className="h-3.5 w-3.5" />
              WHO IT&apos;S FOR
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
              Who This{" "}
              <span className="text-primary">Service Is For?</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Whether you&apos;re stuck in application silence or ready for a
              career shift, a resume revamp puts your experience in a format
              that recruiters and ATS systems can actually act on.
            </p>

            <ul className="space-y-3 mb-7">
              {audiences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-[15px] sm:text-base font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/resume-revamp"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Start Your Resume Revamp
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ImagePlaceholder label="Ideal client / career visual" />
        </div>
      </div>
    </section>
  );
}
