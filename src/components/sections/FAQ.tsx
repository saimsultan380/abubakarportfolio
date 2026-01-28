"use client"

import * as React from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "How long does the process take?",
        answer: "Standard delivery is within 48-72 hours. If you need it sooner, we have a 24-hour express option available in our Executive package."
    },
    {
        question: "Do you guarantee I will get interviews?",
        answer: "While we cannot legally guarantee a job, our clients report a 3x increase in interview invitations. We focus on ATS optimization and keyword alignment which are the biggest hurdles."
    },
    {
        question: "Will the new CV pass ATS bots?",
        answer: "Absolutely. We use industry-standard frameworks and clean formatting that is specifically designed to be read by all major Applicant Tracking Systems."
    },
    {
        question: "What if I'm not happy with the first draft?",
        answer: "We offer unlimited revisions on our Executive package and 2 rounds on our Professional package. We work with you until you are 100% confident in your new document."
    },
    {
        question: "Can you help with career transitions?",
        answer: "Yes, we specialize in identifying transferable skills and rebuilding your professional narrative to align with your new target industry."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <section id="faq" className="py-24 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto max-w-3xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-semibold mb-4 border border-border">
                        <HelpCircle className="h-3.5 w-3.5" />
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                        Still Have <span className="text-primary">Questions?</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "rounded-2xl border transition-all duration-300",
                                openIndex === index
                                    ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                                    : "border-border bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-bold font-heading text-foreground">{faq.question}</span>
                                <div className={cn(
                                    "h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300",
                                    openIndex === index ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary text-muted-foreground"
                                )}>
                                    {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                </div>
                            </button>

                            <div className={cn(
                                "overflow-hidden transition-all duration-500 ease-in-out",
                                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-primary text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-1">Didn't find your answer?</h3>
                        <p className="opacity-80">Message me directly on WhatsApp for a quick chat.</p>
                    </div>
                    <a
                        href="https://wa.me/1234567890"
                        className="h-12 px-8 rounded-xl bg-white text-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center hover:scale-105 transition-transform"
                    >
                        Ask on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
