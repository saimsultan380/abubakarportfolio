"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Edit, Linkedin, Briefcase } from "lucide-react";

const services = [
  {
    title: "Cover Letter Writing",
    description:
      "A targeted cover letter can connect your experience with the specific opportunity and explain why your background is relevant.",
    href: "/cover-letter",
    icon: FileText,
  },
  {
    title: "Resume Revamp",
    description:
      "Already have a resume, but it feels outdated, generic, or difficult to read? A resume revamp can restructure and strengthen the document without starting from zero.",
    href: "/resume-rewriting",
    icon: Edit,
  },
  {
    title: "LinkedIn Profile Optimisation",
    description:
      "Your LinkedIn profile should communicate the same professional direction as your resume while giving you a stronger online career presence.",
    href: "/linkedin-optimization",
    icon: Linkedin,
  },
  {
    title: "Career-Specific CV Writing",
    description:
      "If you are targeting a specialised profession, we can structure your document around the terminology, skills, and experience relevant to that career path.",
    href: "/career-specific-cv",
    icon: Briefcase,
  },
];

export function AusOtherServices() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Need More Than a <span className="text-primary">Resume?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
            Your resume is often only one part of the application. Resume Uplift
            also provides complementary career documents that can support your
            job search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-8">
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/#services"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary text-primary px-6 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Explore All Resume &amp; Career Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
