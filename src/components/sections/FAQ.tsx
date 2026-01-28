"use client"

import * as React from "react"
import { Plus, Minus, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
    {
        question: "How long does the process take?",
        answer: "Standard delivery is within 48-72 hours. If you need it sooner, we have a 24-hour express option available in our Executive package."
    },
    {
        question: "Do you guarantee interviews?",
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
    const containerRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Staggered reveal for FAQ items
        gsap.from(".faq-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
        })
    }, { scope: containerRef })

    return (
        <section id="faq" ref={containerRef} className="py-24 md:py-32 bg-background relative border-t border-border/50">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    {/* Sticky Sidebar: Title */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32 p-6 rounded-3xl bg-secondary/20 border border-border/50 backdrop-blur-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                <MessageCircle className="h-3 w-3" />
                                FAQ
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-foreground mb-6">
                                Everything you <br />
                                need to know.
                            </h2>
                            
                            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                                Can&apos;t find the answer you&apos;re looking for? Chat with our team directly.
                            </p>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-background ring-2 ring-border">
                                    <img 
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80" 
                                        alt="Support" 
                                        className="h-full w-full object-cover"
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
                        {faqs.map((faq, index) => (
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
                                        "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300",
                                        openIndex === index 
                                            ? "bg-primary text-primary-foreground rotate-45" 
                                            : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                    )}>
                                        {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
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
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
