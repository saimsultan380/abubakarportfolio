"use client"

import * as React from "react"
import { Linkedin } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function CTA() {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const marqueeRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Marquee Animation
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear",
        })

        // Reveal Animation
        gsap.from(".cta-content", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
    }, { scope: containerRef })

    return (
        <section id="contact" ref={containerRef} className="relative py-16 md:py-20 bg-background overflow-hidden border-t border-border z-10">
            {/* Background Marquee */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none">
                <div ref={marqueeRef} className="flex whitespace-nowrap text-[20vw] font-bold leading-none uppercase text-foreground">
                    <span className="px-4">Get Hired Now</span>
                    <span className="px-4">Get Hired Now</span>
                    <span className="px-4">Get Hired Now</span>
                    <span className="px-4">Get Hired Now</span>
                </div>
            </div>

            <div className="container px-4 mx-auto relative z-10 cta-content">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6 text-foreground">
                        Stop Getting Ignored <br />
                        <span className="text-primary">By Recruiters</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
                        Get ATS-compliant resumes, CVs, and Cover Letters that put you in the top 1% of applicants.
                    </p>
                    <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto">
                        Your next interview call is closer than you think.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/pricing"
                            className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold uppercase tracking-[0.14em] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                        >
                            Hire Resume Writer
                        </a>

                        <a
                            href="https://wa.me/447478564745"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-14 items-center justify-center px-6 rounded-full border border-border bg-card text-sm sm:text-base font-bold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                            Chat on WhatsApp
                        </a>

                        <a
                            href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-14 items-center justify-center gap-2 px-6 rounded-full border border-border bg-card text-sm sm:text-base font-bold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                            LinkedIn
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
