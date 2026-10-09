"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-14 md:py-20 overflow-hidden bg-background"
    >
      {/* Top divider accent under hero */}
      <div className="absolute top-0 inset-x-0 h-px bg-border" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-[3px] rounded-full bg-primary" />

      <div className="absolute top-16 right-0 -z-10 h-[380px] w-[380px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] bg-primary/5 blur-[100px] rounded-full opacity-40" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <Building2 className="h-3.5 w-3.5" />
              About Us
            </div>

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-card shadow-sm overflow-hidden">
              <Image
                src="/brand/new%20logo.png"
                alt={`${CONTACT.legalName} logo`}
                width={64}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-3 leading-[1.1]">
              {CONTACT.legalName}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Professional ATS resume writing, CV writing, cover letters, and
              LinkedIn optimization — built to get you hired.
            </p>
            <p className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              {CONTACT.addressLine1}, {CONTACT.addressLine2}
            </p>
          </div>

          {/* Story + mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 md:mb-12">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                Who we are
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">
                  {CONTACT.legalName}
                </strong>{" "}
                is a professional resume writing company helping job seekers
                worldwide land more interviews. We create ATS-friendly resumes,
                CVs, cover letters, and LinkedIn profiles that make your value
                obvious to both hiring software and real recruiters.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every document is written by certified writers who understand
                how modern applicant tracking systems parse applications — and
                how hiring managers decide who gets the interview.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                What we believe
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A strong career document should reflect real achievements, not
                generic buzzwords. We work one-on-one with clients across
                industries and career levels — from recent graduates to
                executives — so your application is targeted, clear, and
                competitive.
              </p>
              <ul className="space-y-2.5 pt-1">
                {[
                  "No AI-generated content",
                  "No one-size-fits-all templates",
                  "Unlimited revisions until you're satisfied",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-medium text-foreground/90"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl border border-primary/25 bg-primary/5 px-6 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">
                  2,000+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Clients helped
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">
                  80+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Industries served
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-primary">
                  7+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Years of expertise
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Work With {CONTACT.legalName}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
