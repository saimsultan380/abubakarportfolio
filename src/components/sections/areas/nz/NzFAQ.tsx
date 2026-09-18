"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is an ATS, and why does my resume need to be optimized for it?",
    a: "An ATS, or Applicant Tracking System, is software companies use to collect, scan, and rank resumes before a recruiter ever opens one. It checks your resume against the job posting for keyword matches and reads your formatting to sort your work history into fields. If the system misreads your layout or doesn't find the terms it's scanning for, it can rank your resume low or skip it, regardless of how qualified you are.",
  },
  {
    q: "How does your resume writing process actually work?",
    a: "It starts with a consultation about your background and target roles, followed by research into the language and keywords your target jobs use. From there, your writer builds a first draft, checks it for clean ATS formatting, and revises it with you until it's ready. Most clients move through consultation, drafting, and revision in days, not weeks.",
  },
  {
    q: "Do you offer a guarantee?",
    a: "We don't promise a specific number of interviews, because no resume writer can control an employer's hiring decision, and any service that claims otherwise is overselling. What we do guarantee is unlimited revisions until you're satisfied with the final document, so you're not stuck with a draft that doesn't represent you well.",
  },
  {
    q: "Who actually writes my resume, and are they qualified for my industry?",
    a: "Your resume is written by a professional writer matched to your industry and career level, not assigned at random from a general pool. During onboarding, we look at your background and target roles and pair you with someone who understands the vocabulary and expectations of that specific field.",
  },
  {
    q: "Does this include a cover letter and LinkedIn profile, or do I need to buy those separately?",
    a: "Resume writing, cover letter writing, and LinkedIn optimization are offered as separate services, so you only pay for what you actually need. Many clients bundle a cover letter or LinkedIn update with their resume, especially if they're relying on recruiter outreach or applying to roles that request one, but none of them are forced add-ons.",
  },
  {
    q: "Can you help me if I'm changing careers or industries?",
    a: "Yes, career changes are one of the more common reasons people come to us. Your writer focuses on your transferable skills and measurable results, framing your experience in language that makes sense to hiring managers and ATS software in your new target field, instead of just listing your old job duties.",
  },
  {
    q: "Can I get a free review of my current resume before I pay for anything?",
    a: "Yes. You can send us your current resume for a free check that looks at how it's likely to parse through an ATS and where the formatting or keyword gaps are. It's meant to show you where you actually stand before you decide whether a full rewrite makes sense.",
  },
  {
    q: "How long does the process take from start to finish?",
    a: "Timelines depend on the package and how quickly you send feedback during revisions, but most projects move from consultation to a finished draft within about a week, with revisions following after. Your writer will confirm a specific timeframe with you once you've started.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = React.useState(index === 0);

  return (
    <div
      className={cn(
        "border border-border/60 rounded-2xl overflow-hidden transition-all duration-300",
        open && "border-primary/30 shadow-md shadow-primary/5",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-zinc-900/50 hover:bg-muted/40 transition-colors group"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180 text-primary",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 pt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function NzFAQ() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
