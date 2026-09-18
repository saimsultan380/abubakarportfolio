"use client"

import * as React from "react"
import { Plus, X, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
    {
        question: "Who can benefit from your CV and LinkedIn services?",
        answer: "Our services are designed for professionals at all career stages, including fresh graduates, mid-level professionals, career switchers, and senior or executive candidates seeking a competitive edge in the job market."
    },
    {
        question: "How is an ATS-optimized resume different from a traditional resume?",
        answer: "An ATS-optimized resume is structured and written to meet the technical requirements of applicant tracking systems while remaining clear and compelling for human recruiters. This ensures maximum visibility and shortlisting potential."
    },
    {
        question: "Do you use templates or create resumes individually?",
        answer: "Every resume is written individually and strategically. We do not rely on generic templates. Each document is customized based on your experience, career goals, and target roles."
    },
    {
        question: "How do you ensure my resume aligns with my target job role?",
        answer: "We study role-specific job descriptions and industry expectations to align skills, keywords, and achievements with employer requirements."
    },
    {
        question: "Will my resume be optimized for both ATS and recruiters?",
        answer: "Yes. Our resumes balance technical ATS compliance with professional storytelling to appeal equally to automated systems and hiring managers."
    },
    {
        question: "What information do you need to start the process?",
        answer: "We require your existing resume if available, target job titles, industry preference, and career goals. Additional details such as achievements or projects help enhance results."
    },
    {
        question: "Can you rewrite my resume without changing my experience?",
        answer: "Yes. We focus on improving structure, wording, and presentation without misrepresenting your background. All content remains accurate and ethical."
    },
    {
        question: "What does the resume revamp service include?",
        answer: "The service includes content refinement, achievement-focused writing, modern formatting, keyword optimization, and overall professional enhancement."
    },
    {
        question: "Are your cover letters customized for specific roles?",
        answer: "Yes. Each cover letter is tailored to your role, company type, and career narrative to ensure relevance and authenticity."
    },
    {
        question: "Do recruiters still read cover letters?",
        answer: "Many recruiters do, especially for professional, technical, and executive roles. A strong cover letter can significantly improve your chances of selection."
    },
    {
        question: "What is included in LinkedIn profile optimization?",
        answer: "LinkedIn optimization includes headline enhancement, keyword-rich summary writing, experience restructuring, skills optimization, and overall profile alignment with recruiter search behavior."
    },
    {
        question: "Will LinkedIn optimization increase profile visibility?",
        answer: "Yes. Proper keyword placement and strategic formatting improve search rankings and increase inbound recruiter engagement."
    },
    {
        question: "Do you offer industry-specific resumes?",
        answer: "Yes. We specialize in career-specific CVs for Technology, Finance, Healthcare, and Executive roles, using industry-appropriate terminology and standards."
    },
    {
        question: "Can you help with international job applications?",
        answer: "Yes. We follow globally accepted resume formats suitable for the US, UK, Canada, Europe, and remote roles."
    },
    {
        question: "How long does the service take?",
        answer: "Standard delivery typically takes three to five business days, depending on the service and complexity."
    },
    {
        question: "Do you provide revisions?",
        answer: "Yes. We include revisions to ensure complete satisfaction and alignment with your expectations."
    },
    {
        question: "Is my information kept confidential?",
        answer: "Absolutely. All client information and documents are handled with strict confidentiality and data privacy."
    },
    {
        question: "Will you guarantee interviews or job placement?",
        answer: "While no service can guarantee job placement, our professionally written and optimized documents significantly improve your chances of securing interviews."
    },
    {
        question: "How do I get started?",
        answer: "You can get started by contacting us through the website or booking a consultation to discuss your career goals."
    },
]

const INITIAL_FAQ_COUNT = 4

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)
    const [showAllFaqs, setShowAllFaqs] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const hasMoreFaqs = faqs.length > INITIAL_FAQ_COUNT

    function toggleShowAllFaqs() {
        if (showAllFaqs) {
            setOpenIndex((prev) =>
                prev !== null && prev >= INITIAL_FAQ_COUNT ? null : prev
            )
        }
        setShowAllFaqs((v) => !v)
    }

    useGSAP(() => {
        // Staggered reveal for FAQ items
        gsap.fromTo(".faq-item",
            {
                y: 30,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    once: true,
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                force3D: true,
            }
        )
    }, { scope: containerRef })

    return (
        <section id="faq" ref={containerRef} className="py-12 md:py-16 bg-zinc-50 dark:bg-black/40 relative border-t border-border/50">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Sticky Sidebar: Title */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-28 p-6 rounded-3xl bg-secondary/20 border border-border/50 backdrop-blur-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                                <MessageCircle className="h-3 w-3" />
                                FAQ
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-3">
                                Frequently Asked <br />
                                Questions
                            </h2>

                            <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
                                Can&apos;t find the answer you&apos;re looking for? Chat with our team directly.
                            </p>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-background ring-2 ring-border bg-card flex items-center justify-center">
                                    <img
                                        src="/brand/new%20logo.png"
                                        alt="Resumes Uplift"
                                        className="h-full w-full object-contain p-1"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">Still have questions?</p>
                                    <p className="text-xs text-muted-foreground">We usually reply in minutes.</p>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/447478564745"
                                className="w-full inline-flex h-12 items-center justify-center px-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 group"
                            >
                                Ask on WhatsApp
                                <Plus className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Accordion List */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => {
                            const isHidden = !showAllFaqs && index >= INITIAL_FAQ_COUNT
                            if (isHidden) return null
                            return (
                            <div
                                key={index}
                                className={cn(
                                    "faq-item group rounded-2xl border transition-all duration-300 overflow-hidden",
                                    openIndex === index
                                        ? "bg-card border-primary/50 shadow-lg shadow-primary/5"
                                        : "bg-card/50 border-border hover:border-primary/30 hover:bg-card"
                                )}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-panel-${index}`}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                >
                                    <span className={cn(
                                        "text-lg md:text-xl font-bold font-heading transition-colors pr-8",
                                        openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary/80"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300",
                                        openIndex === index
                                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                            : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                    )}>
                                        {openIndex === index
                                            ? <X className="h-5 w-5" />
                                            : <Plus className="h-5 w-5" />
                                        }
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div id={`faq-panel-${index}`} className="px-6 md:px-8 pb-6 md:pb-8">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                            )
                        })}
                        {hasMoreFaqs ? (
                            <button
                                type="button"
                                onClick={toggleShowAllFaqs}
                                aria-expanded={showAllFaqs}
                                className="w-full flex items-center justify-center gap-2 rounded-2xl border border-primary/25 bg-primary/5 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary/10 hover:border-primary/40"
                            >
                                {showAllFaqs ? (
                                    <>
                                        Show less
                                        <ChevronUp className="h-4 w-4 shrink-0" aria-hidden />
                                    </>
                                ) : (
                                    <>
                                        Show more ({faqs.length - INITIAL_FAQ_COUNT} questions)
                                        <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
                                    </>
                                )}
                            </button>
                        ) : null}
                    </div>

                </div>
            </div>
        </section>
    )
}
