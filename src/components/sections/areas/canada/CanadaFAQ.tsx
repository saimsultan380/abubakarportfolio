"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is an ATS-friendly resume in Canada?",
    a: "An ATS-friendly resume is a clearly structured resume designed to be readable by Applicant Tracking Systems (ATS) as well as human recruiters. It typically uses standard headings, relevant job-specific keywords, consistent dates, straightforward formatting and achievement-focused content. However, ATS optimization is only one part of a strong Canadian resume. Your experience, qualifications and relevance to the specific role still need to be clear.",
  },
  {
    q: "How should I format my resume for Canadian employers?",
    a: "A Canadian resume should generally be clear, concise and focused on the experience and qualifications relevant to the position. Job Bank Canada recommends tailoring your resume to each job, highlighting relevant accomplishments, using simple language and keeping the document concise. It also advises against unnecessary personal information and says that including a photograph is not the norm in Canada.",
  },
  {
    q: "Should I use a resume or CV when applying for jobs in Canada?",
    a: "For most Canadian job applications outside academic and research settings, resume is the more common term and format. A resume focuses on relevant work experience, skills, accomplishments and qualifications for a particular position. Academic, research and certain specialised roles may require a longer CV that includes publications, research, teaching experience or other academic credentials. The appropriate document therefore depends on the industry and position.",
  },
  {
    q: "How do I make my resume ATS-friendly for a specific Canadian job?",
    a: "Start by studying the job description and identifying the skills, qualifications, responsibilities and terminology relevant to the position. Then incorporate the applicable keywords naturally into your professional summary, skills and experience sections while showing evidence of your abilities through achievements. Job Bank Canada specifically recommends customizing resumes to the position and using relevant accomplishments and keywords from the job description.",
  },
  {
    q: "Can I get a Canadian resume if I have international work experience?",
    a: "Yes. A Canadian resume can present international work experience in a way that makes your responsibilities, skills and achievements easier for Canadian employers to understand. The goal is not to remove or minimise your international background. Instead, relevant experience can be translated into clear professional language, supported by specific achievements and aligned with the requirements of your target Canadian role.",
  },
  {
    q: "Can a professional resume writer improve my existing resume for Canadian jobs?",
    a: "Yes. A professional resume writer can review an existing resume and improve its structure, wording, relevance, keyword alignment and presentation. This can be particularly useful when your current resume mainly lists responsibilities rather than achievements or uses the same version for every application. Job Bank Canada also recommends focusing the work experience section on relevant qualifications and specific accomplishments.",
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

export function CanadaFAQ() {
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
