"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const HIGHLIGHTS = [
  "ATS-friendly resumes & CVs",
  "Human-written, never AI-generated",
  "Unlimited revisions until you're happy",
] as const;

export function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-16 bg-background"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-border" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-[3px] rounded-full bg-primary" />
      <div className="absolute top-20 right-0 -z-10 h-[320px] w-[320px] bg-primary/10 blur-[120px] rounded-full opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: title + content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <Building2 className="h-3.5 w-3.5" />
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-heading tracking-tight text-foreground mb-4 leading-[1.15]">
              About{" "}
              <span className="text-primary">{CONTACT.legalName}</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground font-semibold">
                {CONTACT.legalName}
              </strong>{" "}
              is a professional resume writing company helping job seekers land
              more interviews with clear, ATS-friendly resumes, CVs, cover
              letters, and LinkedIn profiles.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Our certified writers shape your real achievements so both hiring
              software and recruiters see your value, across industries and
              career levels.
            </p>

            <ul className="space-y-2.5 mb-8">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-foreground/90"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Work With {CONTACT.legalName}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: about image */}
          <div className="order-1 lg:order-2 relative overflow-visible">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none overflow-visible">
              <Image
                src="/about-image.png"
                alt={`${CONTACT.legalName} — ATS-friendly resume writing, expert review, and human-written career documents`}
                width={2714}
                height={1598}
                className="w-full h-auto max-w-none object-contain"
                priority={false}
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
