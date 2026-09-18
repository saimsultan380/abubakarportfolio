"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Edit, Linkedin, Briefcase } from "lucide-react";

const services = [
  {
    title: "Cover Letter Writing",
    description:
      "For roles that ask for one, or when you want to explain a career pivot, a relocation, or a gap in your own words. We write it to complement your resume, not repeat it.",
    href: "/cover-letter",
    icon: FileText,
  },
  {
    title: "Resume Revamp",
    description:
      "If your last resume update was years ago, or you're getting silence after dozens of applications, this rebuilds your existing document with current formatting and stronger, keyword-aligned content.",
    href: "/resume-rewriting",
    icon: Edit,
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Many US recruiters search LinkedIn directly instead of waiting for applications. We optimize your headline, summary, and experience sections so you show up in those searches.",
    href: "/linkedin-optimization",
    icon: Linkedin,
  },
  {
    title: "Career-Specific CV Writing",
    description:
      "Switching industries, moving from individual contributor to management, or targeting a niche field. We write your resume around the expectations of that specific path, not a generic template.",
    href: "/career-specific-cv",
    icon: Briefcase,
  },
];

export function UsaOtherServices() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Our Other <span className="text-primary">Services</span>
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
