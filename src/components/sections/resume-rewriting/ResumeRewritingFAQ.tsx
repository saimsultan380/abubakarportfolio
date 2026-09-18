"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What's the difference between a resume revamp and starting from scratch?",
    a: "A resume revamp improves the resume you already have instead of creating a brand-new one. Your real experience, skills, and achievements stay the same, but the content, layout, and wording are updated to make your resume stronger, more professional, and easier to read. It keeps your story while presenting it in a way that attracts employers and recruiters.",
  },
  {
    q: "How long does a resume revamp take?",
    a: "Most resume revamps are completed within 3 to 5 business days, depending on your experience level and the package you choose. If your resume requires more detailed work or additional services, it may take a little longer. We always focus on delivering a polished, high-quality resume rather than rushing the process.",
  },
  {
    q: "Will my revamped resume still sound like me?",
    a: "Yes. The goal is to improve how your experience is presented, not to change who you are or make your resume sound artificial. Your achievements, skills, and career story remain authentic while being written in a clearer, more professional, and confident way.",
  },
  {
    q: "Do you rewrite the entire resume or just the formatting?",
    a: "We improve both the content and the design of your resume. Every section is reviewed and rewritten where needed to highlight your strengths, while the formatting is updated to create a clean, modern, and easy-to-read layout. This gives you a resume that looks professional and communicates your value more effectively.",
  },
  {
    q: "Can you revamp my resume for a career change?",
    a: "Yes. If you're moving into a new industry or changing careers, your resume will be adjusted to highlight your transferable skills, relevant experience, and achievements. The focus is on showing employers why your background makes you a strong fit for your new career path.",
  },
  {
    q: "Will the revamped resume be ATS-friendly?",
    a: "Yes. Every resume is designed using a clean, ATS-friendly format that works well with applicant tracking systems. We also include relevant keywords for your target role and industry to improve your chances of getting noticed by both software and hiring managers.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Getting started is simple. Just send us your current resume and let us know the type of job you're applying for. If you have a job description or a specific role in mind, sharing it will help us personalize your resume even more closely to your career goals.",
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

export function ResumeRewritingFAQ() {
  return (
    <section id="rr-faq" className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Everything you need to know about our resume revamp service.
          </p>
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
