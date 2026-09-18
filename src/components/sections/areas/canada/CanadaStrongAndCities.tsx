"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

const elements = [
  {
    element: "Clear structure",
    why: "Helps employers find important information quickly",
  },
  {
    element: "Relevant keywords",
    why: "Connects your experience with the requirements of the target role",
  },
  {
    element: "Achievement-focused content",
    why: "Shows what you contributed rather than only listing duties",
  },
  {
    element: "Consistent dates",
    why: "Makes your career history easier to understand",
  },
  {
    element: "Simple formatting",
    why: "Supports readability and digital processing",
  },
  {
    element: "Structured information",
    why: "Keeps the resume relevant to the specific opportunity",
  },
  {
    element: "Professional language",
    why: "Presents your qualifications clearly and confidently",
  },
];

const cities = [
  "Toronto",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Montreal",
  "Winnipeg",
  "Halifax",
  "Mississauga",
  "Brampton",
];

export function CanadaStrongAndCities() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10 space-y-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
              What Makes a Resume Strong for{" "}
              <span className="text-primary">Canadian Job Applications?</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm mb-5">
            <div className="grid grid-cols-2 border-b border-border/70 bg-muted/40">
              <div className="px-4 sm:px-6 py-4 font-bold font-heading text-foreground text-sm">
                Resume Element
              </div>
              <div className="px-4 sm:px-6 py-4 font-bold font-heading text-primary text-sm border-l border-border/70">
                Why It Matters
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
                  {row.why}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Government of Canada employment resources also advise applicants to
            keep resumes clear, relevant and tailored, while providing concrete
            evidence of their experience and qualifications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-foreground pt-1">
              Resume Writing Services Across Canada
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
            Whether you are applying for opportunities in Toronto, Vancouver,
            Calgary, Edmonton, Ottawa, Montreal, Winnipeg, Halifax, Mississauga,
            Brampton or elsewhere in Canada, your resume should be relevant to
            the role you are pursuing.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-flex rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground/80"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            We support professionals targeting Canadian opportunities across
            different industries and career levels, including candidates
            applying for remote positions. For applicants targeting federal or
            public-sector roles, additional application requirements may apply.
            Government of Canada guidance, for example, highlights the
            importance of tailoring applications and providing specific evidence
            of required qualifications. Your resume should therefore be
            developed around the actual opportunity, not simply filled with
            general career statements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Hire Our Team
            </Link>
            <Link
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-input bg-card px-6 text-sm font-medium hover:bg-accent transition-all"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
