"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
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
        <section ref={containerRef} className="relative py-32 bg-background overflow-hidden border-t border-border z-10">
            {/* Background Marquee */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none">
                <div ref={marqueeRef} className="flex whitespace-nowrap text-[20vw] font-black leading-none uppercase text-foreground">
                    <span className="px-4">Ready to Scale</span>
                    <span className="px-4">Ready to Scale</span>
                    <span className="px-4">Ready to Scale</span>
                    <span className="px-4">Ready to Scale</span>
                </div>
            </div>

            <div className="container px-4 mx-auto relative z-10 cta-content">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-8 text-foreground">
                        Let's Build <br />
                        <span className="text-primary">Your Future.</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Stop blending in. Get the career documents that put you in the top 1% of applicants.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#contact"
                            className="group relative inline-flex h-20 px-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Start Now
                                <ArrowUpRight className="h-6 w-6" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        
                        <a
                            href="https://wa.me/447478564745"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
