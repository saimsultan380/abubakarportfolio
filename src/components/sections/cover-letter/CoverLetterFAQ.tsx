"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What's included in your cover letter writing service?",
    a: "Every cover letter includes a one-on-one consultation, ATS-friendly formatting, keyword alignment with your target role, and revisions until you're satisfied. You'll receive the final version in Word and PDF.",
  },
  {
    q: "What's the difference between a personalized and a general cover letter?",
    a: "A personalized cover letter is written for one specific job and company, matching the exact job description. A general cover letter is built around your industry and career level, designed for multiple applications.",
  },
  {
    q: "Is a personalized cover letter more effective than a generic one?",
    a: "Yes. Research shows personalized, job-specific cover letters produce significantly higher callback rates than generic ones, since hiring managers can tell when a letter has been customized for the role.",
  },
  {
    q: "What information do you need to write my cover letter?",
    a: "We need your resume, your target role, and the job description if available. This helps us align your experience with the employer requirements.",
  },
  {
    q: "Will my cover letter be customized to the exact job description?",
    a: "Yes, for our personalized cover letter service. Our experts match the language, requirements, and priorities from the job posting to your relevant skills and experience.",
  },
  {
    q: "Can you write a cover letter if I only have a job advert, without a full resume?",
    a: "Yes. We can work from a job advert alone, though sharing your resume or career details helps us write a stronger, more accurate letter.",
  },
  {
    q: "Do recruiters and hiring managers still read cover letters?",
    a: "Yes. Most hiring managers read cover letters regularly, and many say a cover letter directly influences their decision on who gets an interview.",
  },
  {
    q: "Can a cover letter help my application pass ATS and online systems?",
    a: "Yes. We format every cover letter with ATS-friendly structure and relevant keywords, so it's readable by applicant tracking systems as well as recruiters.",
  },
  {
    q: "Will the cover letter repeat what's already on my resume?",
    a: "No. Your cover letter highlights strengths and context that your resume doesn't fully cover. We do not repeat the same information.",
  },
  {
    q: "Can you help if I don't meet every requirement in the job posting?",
    a: "Yes. Our experts focus on your strongest, most relevant qualifications or expertise and present you as the best candidate for the role with confidence, even if you don't tick every box.",
  },
  {
    q: "Can you write a speculative cover letter with no specific vacancy?",
    a: "Surely, we can write a speculative cover letter aimed at a target company or industry. These are useful for networking or unadvertised opportunities.",
  },
  {
    q: "Can you write an application email instead of a formal cover letter?",
    a: "Yes. If the application process calls for a short email instead of a formal letter, we can write an application email and it matches the same personalized approach as a cover letter.",
  },
  {
    q: "Do you write cover letters for senior or executive applications?",
    a: "Yes. We write cover letters for senior, management, and executive-level roles. We maintain the exact tone and content to match that level of seniority in cover letters.",
  },
  {
    q: "Can you write a cover letter for C-suite roles?",
    a: "Yes. Our team writes executive and C-suite cover letters that reflect strategic leadership experience and high-level achievements.",
  },
  {
    q: "Can you make my cover letter sound more senior and authoritative?",
    a: "Yes. We adjust tone, language, and structure to reflect your seniority level and leadership experience.",
  },
  {
    q: "How long should an executive cover letter be?",
    a: "One page is standard, even for executive roles. It should be concise enough to read quickly while still making a strong case for your candidacy.",
  },
  {
    q: "Can you write a cover letter for board or advisory roles?",
    a: "Yes. We write cover letters for board, advisory, and non-executive positions. Our written cover letters focused on governance experience and strategic contribution.",
  },
  {
    q: "Can you write cover letters for government or public sector roles?",
    a: "Yes. We write cover letters aligned with government and public sector application requirements, including relevant formatting and language.",
  },
  {
    q: "Can you write a cover letter for the Gulf region, including Saudi Arabia and the UAE?",
    a: "Of course, we write cover letters suited to Gulf region hiring standards. Our experts use the same formatting and tone expected by employers in Saudi Arabia and the UAE.",
  },
  {
    q: "Can you write cover letters for UK, US, European, or international applications?",
    a: "Definitely. We write cover letters according to UK, US, European, and other international hiring standards. We completely adjust the cover letters for regional expectations, so you get high chances of getting a job.",
  },
  {
    q: "Will my cover letter match my resume and LinkedIn profile?",
    a: "Yes. Our experts keep tone, formatting, and messaging consistent across your resume, cover letter, and LinkedIn profile for a cohesive application.",
  },
  {
    q: "Can you update or improve an existing cover letter?",
    a: "Yes, we can revise and strengthen an existing cover letter rather than writing it from scratch.",
  },
  {
    q: "Can you create a reusable cover letter template I can adapt?",
    a: "Yes. We can build a flexible cover letter that you can adjust or edit for similar roles. It saves your time and money on future applications.",
  },
  {
    q: "Can you turn around a cover letter quickly for an urgent deadline?",
    a: "Yes. We offer fast turnaround options for urgent applications. After contacting our team, just tell them the deadline and we will complete your task within your given time.",
  },
  {
    q: "Do you deliver the cover letter in Word and PDF?",
    a: "Yes. Every finished cover letter is delivered in both Word and PDF formats.",
  },
  {
    q: "Is the cover letter reviewed for quality before delivery?",
    a: "Yes. Our team reviews every cover letter for tone, clarity, grammar, and ATS compatibility before delivering to you.",
  },
  {
    q: "Can I request edits after I receive my cover letter?",
    a: "Yes, you can request edits in the draft until the final version meets your required cover letter document.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = React.useState(false);

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
        id={`cl-faq-q-${index}`}
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
        aria-labelledby={`cl-faq-q-${index}`}
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

export function CoverLetterFAQ() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-header",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="cl-faq"
      ref={sectionRef}
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 -z-10 h-[350px] w-[350px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="faq-header text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Everything you need to know about our cover letter writing service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
