"use client"

import * as React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ClipboardCheck, Target, Pencil, Rocket, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        number: "01",
        title: "Research & Analysis",
        description: "Our team of experts studies your career background, industry, and target role. This helps us identify the right keywords and skills to highlight in your resume.",
        icon: Target,
    },
    {
        number: "02",
        title: "Resume Drafting",
        description: "Your ATS-friendly resume gets written from scratch, with a focus on achievements, measurable results, and job-specific keywords that match your target position.",
        icon: Pencil,
    },
    {
        number: "03",
        title: "ATS Optimization Check",
        description: "Your resume runs through ATS resume checkers to confirm proper formatting, keyword placement, and compatibility with applicant tracking systems used by employers.",
        icon: CheckCircle2,
    },
    {
        number: "04",
        title: "Revisions",
        description: "After this, we refine the resume based on your feedback, working closely with you until every detail reflects your goals and career story accurately.",
        icon: ClipboardCheck,
    },
    {
        number: "05",
        title: "Final Delivery",
        description: "Finally, your finished, ATS-friendly resume in your preferred format, ready to send to recruiters and apply for jobs with confidence.",
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

    /** Scroll only the horizontal track — never scrollIntoView (that scrolls the page and yanks the viewport here). */
    const scrollCarouselToIndex = React.useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
        const container = scrollerRef.current
        const child = container?.children[index] as HTMLElement | undefined
        if (!container || !child) return
        const cRect = container.getBoundingClientRect()
        const chRect = child.getBoundingClientRect()
        const delta = chRect.left + chRect.width / 2 - (cRect.left + cRect.width / 2)
        const nextLeft = container.scrollLeft + delta
        const max = Math.max(0, container.scrollWidth - container.clientWidth)
        container.scrollTo({ left: Math.max(0, Math.min(nextLeft, max)), behavior })
    }, [])

    function isProcessSectionInView(): boolean {
        const section = sectionRef.current
        if (!section) return false
        const rect = section.getBoundingClientRect()
        const vh = window.innerHeight
        return rect.bottom > vh * 0.12 && rect.top < vh * 0.88
    }

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
            if (!isProcessSectionInView()) return
            setActiveIndex((prev) => {
                const next = (prev + 1) % steps.length
                requestAnimationFrame(() => scrollCarouselToIndex(next, "smooth"))
                return next
            })
        }, AUTO_SLIDE_MS)
        return () => {
            if (autoSlideRef.current) clearInterval(autoSlideRef.current)
        }
    }, [isMobileCarousel, scrollCarouselToIndex])

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
            className="relative overflow-hidden bg-zinc-50 py-12 md:py-16 text-center dark:bg-black/40 md:text-left"
        >
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                        Our Process
                    </div>
                    <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                        How Our Resume Writing <br />
                        <span className="text-primary">Process Works</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        A simple, transparent 5-step process designed to get you hired faster.
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
                                    scrollCarouselToIndex(i, "smooth")
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
                <div className="relative hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card-desktop">
                            <StepCard step={step} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:mt-16">
                    <a
                        href="/pricing"
                        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90 active:scale-95"
                    >
                        Hire a Resume Writer
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
