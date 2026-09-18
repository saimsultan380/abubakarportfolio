"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Should I include a photo on my resume?",
    a: "No. UK resumes traditionally exclude a photo, along with date of birth, marital status, and National Insurance number. Including these can look out of step with UK hiring norms and adds nothing an ATS system needs.",
  },
  {
    q: "Can ATS software read a two-page resume properly?",
    a: "Yes. A two-page resume is standard in the UK regardless of career stage, and ATS platforms are built to parse documents of that length. What matters more is clear section headings and consistent formatting throughout.",
  },
  {
    q: "Do NHS and civil service roles use resumes or application forms?",
    a: "Many NHS and civil service positions use structured application forms instead of, or alongside, a traditional resume. We can help you adapt your content to fit these formats where relevant.",
  },
  {
    q: "How long does the resume writing process take?",
    a: "Most projects are completed within a few business days, typically around 24 to 48 hours for standard resumes once we have your details. Timelines can vary depending on the complexity of your career history and how quickly you return feedback during revisions. Faster delivery options are available when needed.",
  },
  {
    q: "Will an ATS-optimised resume guarantee an interview?",
    a: "No service can guarantee an interview. What an ATS-optimised resume does is improve the chance that your application is actually seen by a person, rather than filtered out at the first stage.",
  },
  {
    q: "Do you write resumes for every industry and career stage?",
    a: "Yes. Our writers tailor structure, tone, and keyword focus to your specific sector and experience level, from graduate applications through to senior leadership roles.",
  },
  {
    q: "Can you help with both my resume and my LinkedIn profile?",
    a: "Yes. Many clients update both together, since recruiters often check LinkedIn before or alongside reviewing a resume. Keeping the language consistent across both strengthens how you show up in searches.",
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

export function UkFAQ() {
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
