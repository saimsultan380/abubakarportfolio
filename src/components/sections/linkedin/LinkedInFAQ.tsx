"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Do I need to provide you with my LinkedIn password?",
    a: "No, never! We take your privacy and security seriously. We deliver your complete optimized profile in an easy-to-read, structured Master Guide (Word/PDF). It contains your exact new headline, About narrative, bulleted experiences, skills, and formatting instructions so you can copy and paste everything directly into your profile in minutes.",
  },
  {
    q: "How fast is the turnaround time for my LinkedIn optimization?",
    a: "Our standard delivery turnaround is 24 to 48 hours. If you are applying for high-priority positions or have upcoming recruiter interviews, we also offer an expedited 24-hour delivery option.",
  },
  {
    q: "How does LinkedIn profile optimization increase recruiter visibility?",
    a: "Over 87% of corporate recruiters and executive search firms use LinkedIn Recruiter search filters, searching for specific role keywords, skills, and Boolean queries. If your profile lacks these exact industry terms, you remain buried on page 10+. We strategically optimize your headline, About section, and experience bullets with target keywords so you rank in the top 1% of recruiter search results.",
  },
  {
    q: "Can you optimize my profile if I'm switching careers or industries?",
    a: "Absolutely! Career pivots and transitions are our specialty. We restructure your career narrative to spotlight transferable leadership, analytical, and operational achievements, demonstrating to prospective employers why your diverse background makes you an exceptional hire.",
  },
  {
    q: "Will my LinkedIn profile match my resume?",
    a: "Yes. Consistency across your application materials is essential. When you order our Complete Career Package or provide your resume, we ensure your LinkedIn narrative reinforces and complements your CV without merely repeating it verbatim.",
  },
  {
    q: "What if I want revisions or changes made?",
    a: "Revisions are fully included with our service. Once you review the optimization draft, you can request adjustments or refinement with your dedicated writer until you are 100% satisfied.",
  },
  {
    q: "Do you also optimize Company LinkedIn pages for businesses?",
    a: "Yes, we provide dedicated Company Page Optimization for startups, agencies, and corporations. We craft compelling brand taglines, overview copy, employee advocacy guidelines, and showcase pages to attract both high-value clients and top-tier talent.",
  },
  {
    q: "What information do you need from me to get started?",
    a: "To get started, simply share your current LinkedIn profile link and your current resume (if you have one). If you don't have an updated resume, you can simply tell us your target job titles, desired industry, and key achievements.",
  },
];

export function LinkedInFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".li-faq-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Have questions about our LinkedIn profile optimization service? Here are answers to our most common client inquiries.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "li-faq-item rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-primary/50 bg-card shadow-md"
                    : "border-border/70 bg-card/60 hover:border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-foreground font-heading leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200",
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-180"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0">
                    <div className="pt-2 border-t border-border/50 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout */}
        <div className="rounded-3xl border border-border/80 bg-zinc-50 dark:bg-black/40 p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-2">
            Still have questions before getting started?
          </h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            Our certified career consultants are available on WhatsApp to discuss your profile goals.
          </p>
          <Link
            href="https://wa.me/447478564745"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            Chat with an Expert on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
