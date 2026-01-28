"use client"

import * as React from "react"
import { Mail, MessageCircle, Zap, Sparkles } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function CTA() {
    const sectionRef = React.useRef<HTMLElement>(null)
    const contentRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
    }, { scope: sectionRef })

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24 bg-background relative overflow-hidden border-y border-border"
        >
            {/* Background Pro Elements */}
            <div className="absolute inset-0 bg-primary/[0.02] dark:bg-primary/[0.05] pointer-events-none" />

            {/* Mesh Gradients */}
            <div className="absolute top-0 right-[-10%] -z-10 h-[500px] w-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-50 animate-pulse" />
            <div className="absolute bottom-0 left-[-10%] -z-10 h-[400px] w-[400px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-50" />

            <div className="container px-4 mx-auto relative z-10" ref={contentRef}>
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-10 border border-primary/20">
                        <Zap className="h-4 w-4 fill-primary" />
                        Limited Availability
                    </div>

                    <h2 className="text-4xl md:text-7xl font-black font-heading mb-8 tracking-tighter leading-[1.1] text-foreground">
                        Land Your <span className="italic text-primary">Dream Role</span> <br className="hidden md:block" />
                        In Record Time.
                    </h2>

                    <p className="text-muted-foreground md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        High-performing resumes for high-performing professionals. Stop settling for less than you're worth. Let's build your future today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-2xl bg-primary text-primary-foreground px-10 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="mr-3 h-5 w-5" />
                            WhatsApp Me
                            <div className="absolute -top-2 -right-2 h-4 w-4 bg-green-500 rounded-full border-2 border-background" />
                        </a>

                        <a
                            href="mailto:hello@example.com"
                            className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm px-10 text-sm font-black uppercase tracking-widest text-foreground transition-all hover:bg-primary/10 hover:border-primary/40"
                        >
                            <Mail className="mr-3 h-5 w-5" />
                            Email Me
                        </a>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-foreground/60">
                        <div className="flex items-center gap-2 group transition-colors hover:text-primary">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Confidential</span>
                        </div>
                        <div className="flex items-center gap-2 group transition-colors hover:text-primary">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">48hr Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 group transition-colors hover:text-primary">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">ATS Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

