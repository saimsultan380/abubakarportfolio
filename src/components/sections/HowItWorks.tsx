"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ClipboardCheck, Target, Pencil, Rocket, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
    },
]

const AUTO_SLIDE_MS = 4500
const MD_BREAKPOINT = 768

function StepCard({
    step,
    className,
}: {
    step: (typeof steps)[0]
    className?: string
}) {
    return (
        <div
            className={cn(
                "group relative flex h-full flex-col rounded-2xl border border-border/60 bg-white p-8 shadow-sm transition-all duration-300 dark:bg-zinc-900/50",
                "hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5",
                className
            )}
        >
            <div className="mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-600 transition-transform duration-300 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400 group-hover:scale-110">
                    <step.icon className="h-7 w-7" />
                </div>
                <span className="font-heading text-xs font-bold tracking-widest text-muted-foreground/50">
                    {step.number}
                </span>
            </div>
            <div className="flex-grow text-left">
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-500">
                    {step.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
        </div>
    )
}

export function HowItWorks() {
    const sectionRef = React.useRef<HTMLElement>(null)
    const scrollerRef = React.useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isMobileCarousel, setIsMobileCarousel] = React.useState(false)
    const dragRef = React.useRef({ active: false, startX: 0, scrollLeft: 0, pointerId: -1 })
    const autoSlideRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

    React.useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${MD_BREAKPOINT - 1}px)`)
        const apply = () => setIsMobileCarousel(mq.matches)
        apply()
        mq.addEventListener("change", apply)
        return () => mq.removeEventListener("change", apply)
    }, [])

    const updateActiveFromScroll = React.useCallback(() => {
        const el = scrollerRef.current
        if (!el) return
        const center = el.scrollLeft + el.clientWidth / 2
        let best = 0
        let bestDist = Infinity
        for (let i = 0; i < el.children.length; i++) {
            const child = el.children[i] as HTMLElement
            const mid = child.offsetLeft + child.offsetWidth / 2
            const d = Math.abs(mid - center)
            if (d < bestDist) {
                bestDist = d
                best = i
            }
        }
        setActiveIndex(best)
    }, [])

    const scrollToIndex = React.useCallback((i: number) => {
        const el = scrollerRef.current
        const child = el?.children[i] as HTMLElement | undefined
        child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }, [])

    React.useEffect(() => {
        if (!isMobileCarousel) return
        const el = scrollerRef.current
        if (!el) return
        const onScroll = () => updateActiveFromScroll()
        el.addEventListener("scroll", onScroll, { passive: true })
        return () => el.removeEventListener("scroll", onScroll)
    }, [isMobileCarousel, updateActiveFromScroll])

    React.useEffect(() => {
        if (!isMobileCarousel) return
        autoSlideRef.current = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % steps.length
                const el = scrollerRef.current
                const child = el?.children[next] as HTMLElement | undefined
                requestAnimationFrame(() =>
                    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
                )
                return next
            })
        }, AUTO_SLIDE_MS)
        return () => {
            if (autoSlideRef.current) clearInterval(autoSlideRef.current)
        }
    }, [isMobileCarousel])

    function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
        if (!isMobileCarousel || e.button !== 0) return
        if (e.pointerType !== "mouse") return
        const el = scrollerRef.current
        if (!el) return
        dragRef.current = {
            active: true,
            startX: e.clientX,
            scrollLeft: el.scrollLeft,
            pointerId: e.pointerId,
        }
        el.setPointerCapture(e.pointerId)
    }

    function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
        const el = scrollerRef.current
        if (!el || !dragRef.current.active || e.pointerId !== dragRef.current.pointerId) return
        if (e.pointerType === "mouse") e.preventDefault()
        const dx = e.clientX - dragRef.current.startX
        el.scrollLeft = dragRef.current.scrollLeft - dx
    }

    function endDrag(e: React.PointerEvent<HTMLDivElement>) {
        const el = scrollerRef.current
        if (!dragRef.current.active || e.pointerId !== dragRef.current.pointerId) return
        dragRef.current.active = false
        try {
            el?.releasePointerCapture(e.pointerId)
        } catch {
            /* ignore */
        }
        updateActiveFromScroll()
    }

    useGSAP(() => {
        gsap.fromTo(
            ".process-card-desktop",
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
        <section
            id="process"
            ref={sectionRef}
            className="relative overflow-hidden bg-zinc-50 py-20 text-center md:py-28 dark:bg-black/40 md:text-left"
        >
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Workflow
                    </div>
                    <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                        Your Roadmap to <br />
                        <span className="text-primary">The Next Level.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        A streamlined, white-glove process designed for high-performing professionals.
                    </p>
                </div>

                {/* Mobile: horizontal snap + drag + auto */}
                <div className="md:hidden">
                    <div
                        ref={scrollerRef}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                        className={cn(
                            "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2",
                            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                            "scroll-px-4 px-4 [scroll-padding-inline:1rem]",
                            isMobileCarousel ? "cursor-grab active:cursor-grabbing touch-pan-x" : ""
                        )}
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="w-[min(100%,18rem)] shrink-0 snap-center sm:w-[min(100%,20rem)]"
                            >
                                <StepCard step={step} className="min-h-[280px]" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                        {steps.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to step ${i + 1}`}
                                onClick={() => {
                                    setActiveIndex(i)
                                    scrollToIndex(i)
                                }}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    i === activeIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: grid */}
                <div className="relative hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card-desktop">
                            <StepCard step={step} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:mt-16">
                    <a
                        href="#contact"
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-8 text-base font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:scale-105 hover:bg-orange-700 active:scale-95"
                    >
                        Ready to see the difference?
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
