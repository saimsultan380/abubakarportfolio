"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is an ATS-friendly resume in Australia?",
    a: "An ATS-friendly resume uses clear headings, readable formatting, relevant keywords and a logical structure that can be processed by Applicant Tracking Systems. Australian guidance from SEEK recommends avoiding overly complex designs, graphics and formatting that may interfere with ATS readability.",
  },
  {
    q: "What is the best resume format for Australian jobs?",
    a: "A clean, easy-to-read resume is generally the safest approach. SEEK identifies reverse-chronological resumes as a common format, particularly when your recent work experience is relevant to the position. Career changers or applicants with unusual employment histories may benefit from a hybrid approach.",
  },
  {
    q: "How long should a resume be in Australia?",
    a: "There is no single length that works for every candidate. SEEK's current guidance suggests one to two pages for many Australian job seekers, while more experienced professionals may require additional pages when the information is relevant. The priority should be relevance and clarity rather than adding content simply to increase length.",
  },
  {
    q: "Should I include a photo on my Australian resume?",
    a: "Generally, no. Photos are not standard on Australian resumes and are usually unnecessary unless the employer or particular profession specifically requests one.",
  },
  {
    q: "Should I use the same resume for every Australian job application?",
    a: "It is better to tailor your resume to each relevant position. Review the job advertisement, identify the important skills and requirements, then adjust your summary, skills and experience to emphasise your strongest match. Both SEEK and Indeed Australia recommend tailoring resumes to individual job descriptions.",
  },
  {
    q: "Can you rewrite my existing resume for Australian jobs?",
    a: "Yes. An existing resume can be restructured and rewritten around your target Australian role. This can include improving the professional summary, rewriting experience into achievement-focused content, strengthening keyword alignment, simplifying the format and removing information that does not support your application.",
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

export function AusFAQ() {
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
