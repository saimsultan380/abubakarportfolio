"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const shouldMakeEasy = [
  "What role you are targeting",
  "What skills you bring",
  "Where you have used those skills",
  "What results you achieved",
  "Which qualifications or certifications support your application",
  "Why your experience is relevant to the specific position",
];

export function AusWhyMatters() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Your Resume Has to Work Before You Get the{" "}
              <span className="text-primary">Interview</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              <p>
                Australian employers are recruiting across a wide range of
                occupations, but competition for suitable roles can still make
                the first stage of your application important.
              </p>
              <p>
                Jobs and Skills Australia reported a 48% national recruitment
                rate among employers in April 2025, with 23% expecting to
                increase staffing in the following three months.
              </p>
              <p className="font-semibold text-foreground">
                That means opportunities exist, but your resume still needs to
                communicate your suitability quickly.
              </p>
              <p>
                A strong Australian resume should make it easy to understand:
              </p>
            </div>

            <ul className="space-y-2.5 mb-6">
              {shouldMakeEasy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              <p>
                It should also be easy for an Applicant Tracking System, or ATS,
                to read.
              </p>
              <p>
                SEEK advises Australian job seekers to use simple formatting,
                relevant keywords, clear headings and tailored content. It also
                warns that graphics, overly complex layouts and
                difficult-to-read designs can interfere with ATS processing.
              </p>
              <p className="font-semibold text-foreground">
                Your resume should not simply describe your career. It should
                position you for your next role.
              </p>
            </div>

            <Link
              href="/resume-request"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Resume Professionally Written
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ImagePlaceholder label="Australian job market / ATS visual" />
        </div>
      </div>
    </section>
  );
}
