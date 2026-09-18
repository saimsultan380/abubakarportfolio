"use client";

import * as React from "react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

export function NzWhyAts() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Why ATS Optimization Matters in{" "}
              <span className="text-primary">New Zealand</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                An Applicant Tracking System is software that collects, scans,
                and ranks resumes before a recruiter reads them. At mid-size and
                large New Zealand employers, this is standard practice, not the
                exception. Platforms like Workday, iCIMS, and Taleo are common
                across corporate hiring, and many companies rely on them to
                narrow hundreds of applicants down to a shortlist.
              </p>
              <p>
                The problem isn&apos;t that ATS software is malicious. It&apos;s
                that it reads resumes literally. It looks for keyword matches to
                the job description, parses your work history into structured
                fields, and often struggles with tables, columns, graphics, or
                unusual fonts. A resume that looks polished to a human eye can
                still get misread or ranked low by the system reading it first.
              </p>
              <p>
                This matters more in competitive New Zealand industries like
                tech, finance, and healthcare, where a single posting can draw
                hundreds of applications within days. If your resume isn&apos;t
                built with parsing and keyword matching in mind, you can lose
                ground before anyone reviews your actual experience.
              </p>
            </div>
          </div>
          <ImagePlaceholder label="New Zealand ATS hiring visual" />
        </div>
      </div>
    </section>
  );
}
