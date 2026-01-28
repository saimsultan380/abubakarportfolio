"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FileText, Edit, PenTool, Linkedin, Briefcase, ArrowRight, Star } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        title: "ATS-Optimized CV Writing",
        description: "Built from scratch with keywords that pass Automated Tracking Systems and catch recruiter attention.",
        icon: FileText,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "Resume Redesign",
        description: "Modernize your existing resume with a clean, professional layout that highlights your achievements.",
        icon: Edit,
        colSpan: "col-span-1",
    },
    {
        title: "Cover Letters",
        description: "Persuasive, tailored cover letters that tell your story.",
        icon: PenTool,
        colSpan: "col-span-1",
    },
    {
        title: "LinkedIn Optimization",
        description: "Full profile overhaul to increase visibility, search ranking, and connection requests.",
        icon: Linkedin,
        colSpan: "col-span-1",
    },
    {
        title: "Career-Specific CVs",
        description: "Strategically written resumes for Tech, Finance, Healthcare, and Executive roles.",
        icon: Briefcase,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    },
]

export function Services() {
    const sectionRef = React.useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
        })
    }, { scope: sectionRef })

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-zinc-50 dark:bg-black relative overflow-hidden">
            {/* Subtle background texture/grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                            <Star className="h-3 w-3 fill-primary" />
                            Premium Services
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
                            Everything You Need to <br />
                            <span className="text-primary">Stand Out.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Strategic career documents crafted to bypass bots and impress humans.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <a href="#contact" className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            Book a consultation
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <SpotlightCard
                            key={index}
                            className={cn(service.colSpan, "service-card p-8 group h-full flex flex-col justify-between")}
                            spotlightColor="rgba(var(--primary), 0.1)"
                        >
                            <div>
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-between text-sm font-medium pt-8 border-t border-border/50">
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Starting at $99</span>
                                <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                                    <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
