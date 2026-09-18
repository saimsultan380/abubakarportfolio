"use client";

import * as React from "react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

export function CareerCvExecutive() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder label="Professional / executive CV visual" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
              Every Career Stage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Professional &amp; Executive CV Writing Services for Every Stage
              of Your Career
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Employers don&apos;t hire history; they hire potential impact.
                Our expert CV writers align your skills, achievements, and
                experience to convert hiring decisions in your favour.
              </p>
              <p>
                Every CV starts with your real career story. We pull out the
                results that matter, the ones that show scope, growth, and
                impact, not just tasks completed.
              </p>
              <p>
                Whether you&apos;re targeting a first management role, a senior
                position, or a C-suite seat, the goal stays the same. Make the
                reader stop, take notice, and want to meet you.
              </p>
              <p>
                Our team positions your CV around what employers actually
                evaluate. Leadership shown through outcomes. Growth backed by
                numbers. Value proven, not just claimed.
              </p>
              <p className="font-semibold text-foreground">
                The result is a CV that doesn&apos;t just describe your career.
                It builds a case for hiring you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
