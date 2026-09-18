"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Edit, Linkedin, Briefcase } from "lucide-react";

const services = [
  {
    title: "Cover Letter Writing",
    description:
      "A professional cover letter can provide additional context around your experience and explain how your skills relate to the position you are pursuing.",
    href: "/cover-letter",
    icon: FileText,
  },
  {
    title: "Resume Revamp",
    description:
      "Already have a resume but feel it no longer represents your experience? Our Resume Revamp service focuses on improving existing content, structure, formatting, and professional positioning.",
    href: "/resume-rewriting",
    icon: Edit,
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Your LinkedIn profile should support the professional identity presented in your resume. We help refine your profile content, keywords, summary, and career positioning.",
    href: "/linkedin-optimization",
    icon: Linkedin,
  },
  {
    title: "Career-Specific CV Writing",
    description:
      "Different roles require different approaches. A technology professional, healthcare worker, finance specialist, and senior manager may need very different ways of presenting their experience. Career-specific writing keeps the document relevant to the field and position you are targeting.",
    href: "/career-specific-cv",
    icon: Briefcase,
  },
];

export function CanadaOtherServices() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Other Career Services for{" "}
            <span className="text-primary">Canadian Job Seekers</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
            Your resume is often only one part of your professional application.
            Resume Uplift also provides supporting career-document services to
            help maintain a consistent professional profile.
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
            Explore Our Career Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
