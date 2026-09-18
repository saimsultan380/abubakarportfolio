"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Edit, Linkedin, Briefcase } from "lucide-react";

const services = [
  {
    title: "Cover Letter Writing",
    description:
      "A UK job application often still expects a customized cover letter, particularly for roles that ask for one specifically or route through a recruiter. We write cover letters that pick up the keywords from your resume and speak directly to the role advertised.",
    href: "/cover-letter",
    icon: FileText,
  },
  {
    title: "Resume Revamp",
    description:
      "If you already have a resume but it hasn't been updated in years, or it's been rejected without explanation, we rebuild it. That means stronger content, current formatting standards, and the keywords ATS software expects to see.",
    href: "/resume-rewriting",
    icon: Edit,
  },
  {
    title: "LinkedIn Profile Optimisation",
    description:
      "Recruiter-led hiring is common across the UK job market, and many recruiters search LinkedIn before a candidate even applies. We optimise your profile summary and keywords so you're easier to find and easier to shortlist.",
    href: "/linkedin-optimization",
    icon: Linkedin,
  },
  {
    title: "Career-Specific Resume Writing",
    description:
      "A graduate applying to a structured graduate scheme needs a very different document to a senior candidate applying for a leadership role. We tailor structure, tone and emphasis to your experience level and target industry.",
    href: "/career-specific-cv",
    icon: Briefcase,
  },
];

export function UkOtherServices() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            What&apos;s Included:{" "}
            <span className="text-primary">Beyond the Resume</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
