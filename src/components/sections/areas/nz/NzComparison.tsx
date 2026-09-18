"use client";

import * as React from "react";
import { Check, X } from "lucide-react";

const rows = [
  {
    factor: "Keyword matching",
    diy: "Guesswork, based on your own read of the posting",
    ours: "Researched against the specific job description and role",
  },
  {
    factor: "Formatting safety",
    diy: "Risk of tables, columns, or graphics that don't parse",
    ours: "Built to parse cleanly across common ATS platforms",
  },
  {
    factor: "Human review",
    diy: "You're the only editor",
    ours: "Reviewed by a professional writer, then revised with you",
  },
  {
    factor: "Turnaround",
    diy: "As long as it takes you to get around to it",
    ours: "A structured process with a clear start and finish",
  },
];

export function NzComparison() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            DIY Resume vs. ATS-Optimized Resume from{" "}
            <span className="text-primary">Resume Uplift</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-sm">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-border/70 bg-muted/40">
                <th className="px-4 sm:px-6 py-4 text-sm font-bold font-heading text-foreground">
                  Factor
                </th>
                <th className="px-4 sm:px-6 py-4 text-sm font-bold font-heading text-muted-foreground">
                  DIY / Template Resume
                </th>
                <th className="px-4 sm:px-6 py-4 text-sm font-bold font-heading text-primary">
                  Resume Uplift ATS Resume
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.factor}
                  className={
                    i !== rows.length - 1 ? "border-b border-border/60" : ""
                  }
                >
                  <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-foreground align-top">
                    {row.factor}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-muted-foreground align-top">
                    <span className="inline-flex items-start gap-2">
                      <X className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                      {row.diy}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-foreground font-medium align-top bg-primary/[0.03]">
                    <span className="inline-flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      {row.ours}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
