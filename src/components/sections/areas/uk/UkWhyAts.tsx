"use client";

import * as React from "react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const blocks = [
  {
    title: "How the screening actually works",
    body: "Platforms such as Workday, SAP SuccessFactors and Oracle Taleo are built into the hiring process at most large UK organisations, from retail groups to NHS trusts and civil service departments. When you submit a resume, the system parses it into fields such as job titles, dates, skills and qualifications. It then scores or ranks that parsed data against the wording used in the job advert.\n\nThis means two resumes with identical experience can produce very different results. One written with the employer's own language in mind will match cleanly. One written in general terms, without those specific phrases, may score lower even though the candidate is equally, or more, qualified.",
  },
  {
    title: "Where UK conventions come into it",
    body: 'British hiring norms shape how ATS optimisation should be approached here. A resume of around two pages is standard practice regardless of seniority, and it should exclude a photo, date of birth, marital status and National Insurance number, all of which add nothing to an ATS scan and can look dated to a UK recruiter. Section headings also matter more than people expect. Systems trained on standard UK formats read headings like "Work Experience," "Education" and "Key Skills" far more reliably than creative alternatives.',
  },
  {
    title: "Why formatting breaks resumes before content ever gets a chance",
    body: "Even strong content can fail if the file itself confuses the parser. Text boxes, multi-column layouts, tables, and embedded graphics are common causes of scrambled or missing information once a resume passes through an ATS. A resume can look polished on screen and still arrive at the recruiter's desk as a jumbled mess of text, simply because of how it was built.",
  },
  {
    title: "The practical outcome",
    body: "Getting ATS optimisation right isn't about tricking software. It's about presenting real experience in a structure and language that both a parsing system and a UK recruiter can follow without friction. That combination, clean formatting plus advert-matched wording, is what actually moves an application from the database into someone's inbox.",
  },
];

export function UkWhyAts() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Why ATS Optimisation Matters in the{" "}
              <span className="text-primary">UK</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              UK hiring has moved almost entirely online, and the first reader
              of your resume usually isn&apos;t a person at all. Large
              employers, recruitment agencies and public sector bodies now run
              every application through an applicant tracking system before a
              recruiter ever sees a name. Understanding how that software works
              is the difference between an application that gets read and one
              that quietly disappears.
            </p>

            <div className="space-y-5">
              {blocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
                >
                  <h3 className="text-base sm:text-lg font-bold font-heading text-foreground mb-2">
                    {block.title}
                  </h3>
                  {block.body.split("\n\n").map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <ImagePlaceholder label="UK ATS hiring / screening visual" />
          </div>
        </div>
      </div>
    </section>
  );
}
