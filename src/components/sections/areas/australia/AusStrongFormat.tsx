"use client";

import * as React from "react";
import { Check } from "lucide-react";

const elements = [
  {
    element: "Format",
    aim: "Clean, readable and ATS-friendly",
  },
  {
    element: "Length",
    aim: "Focused on relevant experience rather than unnecessary detail",
  },
  {
    element: "Summary",
    aim: "Targeted to the position",
  },
  {
    element: "Experience",
    aim: "Achievements and relevant responsibilities",
  },
  {
    element: "Keywords",
    aim: "Naturally aligned with the job description",
  },
  {
    element: "Skills",
    aim: "Relevant technical and transferable capabilities",
  },
  {
    element: "Education",
    aim: "Clearly presented qualifications",
  },
  {
    element: "Contact details",
    aim: "Professional and easy to find",
  },
  {
    element: "Personal information",
    aim: "Only information relevant to the application",
  },
  {
    element: "File format",
    aim: "Based on the employer's submission instructions",
  },
];

const leaveOut = [
  "Irrelevant old experience",
  "Generic career objectives",
  "Excessive graphics",
  "Decorative elements that interfere with readability",
  "Unsupported claims",
  "Keyword stuffing",
  "Long paragraphs that hide your achievements",
];

export function AusStrongFormat() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10 space-y-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
              What Makes a Strong{" "}
              <span className="text-primary">Australian Resume?</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm mb-5">
            <div className="grid grid-cols-2 border-b border-border/70 bg-muted/40">
              <div className="px-4 sm:px-6 py-4 font-bold font-heading text-foreground text-sm">
                Resume Element
              </div>
              <div className="px-4 sm:px-6 py-4 font-bold font-heading text-primary text-sm border-l border-border/70">
                What We Aim For
              </div>
            </div>
            {elements.map((row, i) => (
              <div
                key={row.element}
                className={`grid grid-cols-2 ${
                  i !== elements.length - 1 ? "border-b border-border/60" : ""
                }`}
              >
                <div className="px-4 sm:px-6 py-4 text-sm font-semibold text-foreground">
                  {row.element}
                </div>
                <div className="px-4 sm:px-6 py-4 text-sm text-muted-foreground border-l border-border/60">
                  {row.aim}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            SEEK&apos;s current Australian guidance recommends keeping resumes
            concise, focusing on recent and relevant experience, avoiding
            unnecessary personal information and following the employer&apos;s
            requested submission format.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 text-center">
            Australian Resume Format: What Should You{" "}
            <span className="text-primary">Leave Out?</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            <p>
              A professional resume is not about adding everything you have ever
              done. It is about selecting what supports your application.
            </p>
            <p>
              For most Australian applications, unnecessary personal information
              such as age, marital status, religion, nationality and date of
              birth should not be included. SEEK also advises that photos are
              not standard for Australian resumes except in certain fields where
              they may specifically be requested.
            </p>
            <p className="font-semibold text-foreground">
              We also avoid filling your resume with:
            </p>
          </div>

          <ul className="max-w-2xl mx-auto space-y-2.5 mb-6">
            {leaveOut.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span className="text-sm font-medium text-foreground/90 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-semibold text-foreground text-center max-w-2xl mx-auto">
            More information does not automatically make a resume stronger. More
            relevant information does.
          </p>
        </div>
      </div>
    </section>
  );
}
