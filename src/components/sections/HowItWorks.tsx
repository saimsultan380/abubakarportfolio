"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FileUp, Search, PenTool, Sparkles, ArrowRight } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        number: "01",
        title: "Onboarding & Audit",
        description: "Upload your current documents. I perform a clinical audit of your existing CV against ATS standards.",
        icon: FileUp,
        color: "from-blue-500/20 to-blue-600/20"
    },
    {
        number: "02",
        title: "Market Alignment",
        description: "I research your target industry and senior-level keywords to ensure your profile ranks at the top.",
        icon: Search,
        color: "from-purple-500/20 to-purple-600/20"
    },
    {
        number: "03",
        title: "The Crafting Phase",
        description: "Your new CV is built line-by-line. No generic AI bullet points; every sentence is a career win.",
        icon: PenTool,
        color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
        number: "04",
        title: "Launch & Hired",
        description: "Receive your final ATS-optimized package, plus a LinkedIn guide to boost search visibility.",
        icon: Sparkles,
        color: "from-amber-500/20 to-amber-600/20"
    }
]

export function HowItWorks() {
    const sectionRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".process-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        })
    }, { scope: sectionRef })

    return (
        <section id="process" ref={sectionRef} className="py-24 bg-zinc-50 dark:bg-black relative overflow-hidden border-t border-border">
            {/* Background Decorative Mesh */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary blur-[150px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">
                        Workflow
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight text-foreground">
                        Your Roadmap to <br />
                        <span className="text-primary italic">The Next Level.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        A streamlined, white-glove process designed for high-performing professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting Path Visual (Desktop) */}
                    <div className="hidden lg:block absolute top-[100px] left-0 w-full h-0.5 border-t-2 border-dashed border-primary/20 -z-10" />

                    {steps.map((step, index) => (
                        <SpotlightCard
                            key={index}
                            className="process-card group relative p-8 h-full flex flex-col bg-card border-border shadow-lg transition-transform hover:-translate-y-2 duration-500"
                            spotlightColor="rgba(var(--primary), 0.05)"
                        >
                            {/* Step Header */}
                            <div className="relative mb-8">
                                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-xl border border-white/10 group-hover:scale-110 transition-transform duration-500 ring-4 ring-background z-10 relative`}>
                                    <step.icon className="h-8 w-8 text-foreground" />
                                </div>
                                <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 italic select-none group-hover:text-primary/10 transition-colors">
                                    {step.number}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="flex-grow pt-4">
                                <h3 className="text-2xl font-black font-heading mb-4 text-foreground group-hover:text-primary transition-colors leading-tight italic">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>

                            {/* Progress Connector (Mobile/Tablet) */}
                            <div className="mt-8 lg:hidden flex justify-center">
                                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                {/* Bottom CTA Placeholder */}
                <div className="mt-20 flex justify-center">
                    <a href="#contact" className="flex items-center gap-4 p-1 pr-6 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all group">
                        <span className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                            <ArrowRight className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-bold tracking-tight">Ready to see the difference? Book Now</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
