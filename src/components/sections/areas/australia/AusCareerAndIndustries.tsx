"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Users,
  Crown,
  RefreshCw,
} from "lucide-react";

const stages = [
  {
    title: "Students & Graduates",
    description:
      "Highlight education, projects, internships, placements, volunteering, part-time work and transferable skills where relevant.",
    icon: GraduationCap,
  },
  {
    title: "Early-Career Professionals",
    description:
      "Focus on practical experience, skills development and measurable contributions rather than filling the document with unrelated history.",
    icon: Briefcase,
  },
  {
    title: "Mid-Career Professionals",
    description:
      "Bring career progression, specialist capabilities, achievements and leadership responsibilities to the front.",
    icon: TrendingUp,
  },
  {
    title: "Senior Professionals & Managers",
    description:
      "Emphasise strategic contribution, leadership, commercial outcomes, stakeholder management and organisational impact.",
    icon: Users,
  },
  {
    title: "Executives",
    description:
      "Position your leadership experience around business outcomes, strategic direction, transformation and senior-level responsibility.",
    icon: Crown,
  },
  {
    title: "Career Changers",
    description:
      "Build a clearer connection between your existing experience and the skills required for your target industry.",
    icon: RefreshCw,
  },
];

const industries = [
  "Information Technology",
  "Healthcare",
  "Engineering",
  "Construction",
  "Accounting and Finance",
  "Sales",
  "Marketing",
  "Administration",
  "Human Resources",
  "Education",
  "Hospitality",
  "Retail",
  "Logistics and Transport",
  "Project Management",
  "Trades",
  "Government and Public Sector",
  "Professional Services",
];

export function AusCareerAndIndustries() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10 space-y-14">
        <div>
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
              Resume Services for Different Australian{" "}
              <span className="text-primary">Career Stages</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Your resume should change as your career changes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm hover:border-primary/40 transition-all"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stage.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-foreground mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-foreground mb-3">
            Resume Writing for Australia&apos;s Major Industries
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
            We can structure your resume around the language and expectations
            relevant to your target field. Common areas include:
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground/80"
              >
                {industry}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Jobs and Skills Australia continues to publish labour market and
            skills information across Australian occupations and industries,
            helping job seekers understand where skills and employment
            opportunities are concentrated.
          </p>
          <Link
            href="/career-specific-cv"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Create My Career-Specific Resume
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
