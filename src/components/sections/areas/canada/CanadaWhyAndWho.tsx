"use client";

import * as React from "react";
import { Check, Users, Briefcase } from "lucide-react";
import { ImagePlaceholder } from "@/components/sections/resume-rewriting/ImagePlaceholder";

const audiences = [
  "Students and recent graduates entering the workforce",
  "Entry-level professionals building their first strong resume",
  "Mid-career professionals seeking better opportunities",
  "Senior professionals and managers",
  "Executives changing or advancing their careers",
  "Professionals moving into a new industry",
  "Career changers highlighting transferable skills",
  "Newcomers to Canada presenting international experience",
  "Professionals returning to work after a career break",
];

export function CanadaWhyAndWho() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden border-y border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4 leading-snug">
              Why an ATS-Friendly Resume Matters in the{" "}
              <span className="text-primary">Canadian Job Market</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                Applying for jobs in Canada often means submitting your resume
                through an online application system. Your document may be
                processed by an Applicant Tracking System (ATS) before a
                recruiter reviews it, so the way your information is structured
                can matter.
              </p>
              <p>
                An ATS-friendly resume uses clear headings, readable formatting,
                relevant keywords, and straightforward content. However, ATS
                optimization is not about filling a resume with keywords or
                trying to &quot;beat&quot; a system. A strong resume still needs
                to communicate your experience to a real person.
              </p>
              <p>
                Canadian employment guidance also places strong emphasis on
                tailoring your resume to the position, highlighting relevant
                accomplishments and using information that demonstrates your
                qualifications. Job Bank Canada recommends reviewing the job
                description and focusing your resume on experience and
                achievements related to the position.
              </p>
              <p className="font-semibold text-foreground">
                That is the approach we take at Resume Uplift. Instead of
                treating your resume as a generic document, we structure it
                around your experience, target role, and career goals.
              </p>
            </div>
          </div>
          <ImagePlaceholder label="Canadian job market / ATS visual" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <ImagePlaceholder label="Canadian professionals audience visual" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
              <Users className="h-3.5 w-3.5" />
              Who Benefits
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-4">
              Who Can Benefit From a Professional Resume in{" "}
              <span className="text-primary">Canada?</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Resume Uplift can help job seekers at different stages of their
              careers, including:
            </p>
            <ul className="space-y-2.5 mb-5">
              {audiences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium text-foreground/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For internationally trained professionals, the goal is not to hide
              where your experience came from. It is to present your
              qualifications, responsibilities, and achievements in a way that
              Canadian employers can understand clearly.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground pt-1.5">
              Resume Writing for Different Industries and Career Levels
            </h2>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-[52px]">
            <p>
              The right resume structure depends on the role you are targeting.
            </p>
            <p>
              A technology professional may need to highlight technical skills,
              systems, projects and measurable results. A healthcare
              professional may need to emphasise qualifications, clinical
              experience and relevant credentials. A finance professional may
              need to focus on reporting, analysis, compliance or financial
              outcomes.
            </p>
            <p>
              Similarly, a recent graduate requires a different approach from an
              experienced manager or executive.
            </p>
            <p className="font-semibold text-foreground">
              Resume Uplift tailors the content according to your career level,
              professional background, and target position rather than forcing
              every applicant into the same template.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
