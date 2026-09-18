"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Why should I choose a professional CV writer?",
    a: "A professionally written CV presents your experience clearly, highlights your achievements, and shows employers the value you bring. It gives you a stronger chance of getting noticed and securing more interviews.",
  },
  {
    q: "How does the Resume Uplift process work?",
    a: "We start by learning about your background, career goals, and target roles. After reviewing your information, we create a personalized CV that reflects your experience and the expectations of your industry.",
  },
  {
    q: "Can you guarantee I'll get a job?",
    a: "No. No professional CV service can honestly guarantee a job offer. What we do guarantee is a well-written, professionally structured CV designed to help you stand out and increase your interview opportunities.",
  },
  {
    q: "How long will it take to receive my CV or LinkedIn profile?",
    a: "Most projects are completed within a few business days. If you need your documents sooner, we also offer faster delivery options whenever possible.",
  },
  {
    q: "What's the difference between a CV and a resume?",
    a: "A resume is usually a shorter document that gives a quick overview of your skills and experience. A CV provides more detailed information about your career, qualifications, and professional achievements. The right choice depends on the role and country you're applying to.",
  },
  {
    q: "Do you provide services beyond CV writing?",
    a: "Yes. We also offer resume writing, LinkedIn profile optimisation, cover letters, personal statements, and other career documents to support your job search.",
  },
  {
    q: "What makes Resume Uplift different?",
    a: "Every CV is written from scratch after understanding your career goals. We don't use generic templates or AI-generated content. Our focus is on creating a CV that reflects your experience and speaks to your target employers.",
  },
  {
    q: "Will my CV be ATS-friendly?",
    a: "Yes. We use a clean layout, clear formatting, and relevant industry keywords to help your CV perform well with Applicant Tracking Systems while remaining easy for recruiters to read.",
  },
  {
    q: "Can you help if I'm changing careers?",
    a: "Absolutely. We know how to present your transferable skills, relevant experience, and strengths to help you confidently move into a new industry or role.",
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

export function CareerCvFAQ() {
  return (
    <section
      id="ccv-faq"
      className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden"
    >
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
