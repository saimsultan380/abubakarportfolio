"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ClipboardCheck, Target, Pencil, Rocket, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        number: "01",
        title: "Onboarding & Audit",
        description: "Upload your current documents. I perform a clinical audit of your existing CV against ATS standards.",
        icon: ClipboardCheck,
    },
    {
        number: "02",
        title: "Market Alignment",
        description: "I research your target industry and senior-level keywords to ensure your profile ranks at the top.",
        icon: Target,
    },
    {
        number: "03",
        title: "The Crafting Phase",
        description: "Your new CV is built line-by-line. No generic AI bullet points; every sentence is a career win.",
        icon: Pencil,
    },
    {
        number: "04",
        title: "Launch & Hired",
        description: "Receive your final ATS-optimized package, plus a LinkedIn guide to boost search visibility.",
        icon: Rocket,
    }
]

export function HowItWorks() {
    const sectionRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.fromTo(".process-card",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            }
        )
    }, { scope: sectionRef })

    return (
        <section id="process" ref={sectionRef} className="py-20 md:py-28 bg-zinc-50 dark:bg-black/40 relative overflow-hidden text-center md:text-left">
            <div className="container px-4 mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                        Workflow
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
                        Your Roadmap to <br />
                        <span className="text-primary">The Next Level.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        A streamlined, white-glove process designed for high-performing professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="process-card group relative p-8 h-full flex flex-col bg-white dark:bg-zinc-900/50 border border-border/60 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Top Row: Icon & Number */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="h-14 w-14 rounded-2xl bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <step.icon className="h-7 w-7" />
                                </div>
                                <span className="text-xs font-bold tracking-widest text-muted-foreground/50 font-heading">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-grow text-left">
                                <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-8 text-base font-bold text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        Ready to see the difference?
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
