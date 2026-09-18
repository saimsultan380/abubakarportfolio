"use client";

import * as React from "react";
import {
  GraduationCap,
  RefreshCw,
  Briefcase,
  Clock,
  AlertTriangle,
} from "lucide-react";

const audiences = [
  {
    title: "Recent graduates",
    description:
      "Entering a job market where every entry-level posting gets flooded with applicants, and a thin resume needs to work harder.",
    icon: GraduationCap,
  },
  {
    title: "Mid-career professionals switching industries",
    description:
      "Whose experience is strong but doesn't obviously map onto the new field's keywords yet.",
    icon: RefreshCw,
  },
  {
    title: "Executives",
    description:
      "Who need a resume that reads as a leadership narrative, not a list of duties, while still passing the same ATS filters as everyone else.",
    icon: Briefcase,
  },
  {
    title: "Professionals returning after a gap",
    description:
      "Whether from caregiving, health, or a layoff, who need the story framed clearly and confidently.",
    icon: Clock,
  },
];

const mistakes = [
  {
    title: "Keyword stuffing",
    description:
      'Repeating terms unnaturally to "game" the system usually reads as awkward to a human and doesn\'t guarantee a better score.',
  },
  {
    title: "Tables, columns, and graphics",
    description:
      "These often confuse ATS parsers, scrambling your work history or dropping sections entirely.",
  },
  {
    title: "Generic summaries",
    description:
      "A summary that could apply to anyone applying to anything tells the ATS, and the recruiter, nothing useful.",
  },
  {
    title: "Ignoring the job description's language",
    description:
      'If the posting says "project management" and your resume says "coordinated initiatives," the system may not connect the two.',
  },
  {
    title: "Submitting the wrong file format",
    description:
      "Some systems handle PDFs well, others prefer Word documents. Using the wrong one can affect how cleanly your resume parses.",
  },
];

export function NzWhoAndMistakes() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10 space-y-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-8 text-center">
            Who This <span className="text-primary">Is For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-bold uppercase tracking-widest mb-3 border border-accent-warm/20">
              <AlertTriangle className="h-3.5 w-3.5" />
              Avoid These
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground">
              Common Mistakes Job Seekers Make With{" "}
              <span className="text-primary">ATS Resumes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
              >
                <h3 className="text-base font-bold font-heading text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
