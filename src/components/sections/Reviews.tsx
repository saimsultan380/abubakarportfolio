"use client"

import * as React from "react"
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type ReviewProfile = { label: string; href?: string }

// Add your real profile links here for verifiable proof (optional).
const REVIEW_PROFILES: ReviewProfile[] = [
    { label: "Google Reviews", href: "" },
    { label: "Trustpilot", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Upwork", href: "" },
]

const reviews = [
    {
        name: "Sarah M.",
        role: "Marketing Specialist",
        location: "UK",
        platform: "Direct Client",
        content: "I started getting interviews within two weeks. My resume was completely restructured and optimized for ATS. The difference was immediate.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Ahmed R.",
        role: "Software Engineer",
        location: "UAE",
        platform: "LinkedIn",
        content: "Professional, honest, and very strategic. The CV felt tailored exactly to my role. Highly recommended.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Jessica T.",
        role: "Project Manager",
        location: "US",
        platform: "Upwork",
        content: "The turnaround was fast, but the quality was incredible. He highlighted achievements I didn't even think were important.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "David K.",
        role: "Financial Analyst",
        location: "Canada",
        platform: "Direct Client",
        content: "Worth every penny. The LinkedIn optimization alone doubled my profile views in 3 days. Got hired at a Big 4 firm.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        name: "Emily W.",
        role: "UX Designer",
        location: "Germany",
        platform: "LinkedIn",
        content: "He knows exactly what recruiters are looking for. The design was clean but the content strategy was the real game changer.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Michael B.",
        role: "Sales Director",
        location: "Australia",
        platform: "Referral",
        content: "I was skeptical about hiring a writer, but this was a game changer. Landed a VP role in 3 weeks.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Linda C.",
        role: "Nurse Practitioner",
        location: "USA",
        platform: "Direct Client",
        content: "Helped me transition from clinical work to administration. The new CV positioned my transferable skills perfectly.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
        name: "Raj P.",
        role: "Data Scientist",
        location: "India/Remote",
        platform: "Upwork",
        content: "Technically accurate and well formatted. The ATS scan report provided was very reassuring.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        name: "Sophie L.",
        role: "Content Writer",
        location: "France",
        platform: "LinkedIn",
        content: "As a writer myself, I'm picky. But his ability to synthesize my career into a punchy 2-pager was impressive.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
        name: "James H.",
        role: "Graduate",
        location: "UK",
        platform: "Direct Client",
        content: "Got my first grad scheme offer after using this CV. The structure really helped hide my lack of experience.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
        name: "Maria G.",
        role: "HR Manager",
        location: "Spain",
        platform: "LinkedIn",
        content: "I see resumes all day. This is exactly what we want to see. Clean, relevant, and no fluff.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
        name: "Tom W.",
        role: "Operations Lead",
        location: "USA",
        platform: "Referral",
        content: "Responsive, professional, and delivered early. The cover letter was specific to the company I applied for.",
        rating: 5,
        photoUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    }
]

export function Reviews() {
    const sectionRef = React.useRef<HTMLElement>(null)
    const trackRef = React.useRef<HTMLDivElement>(null)
    const isInViewRef = React.useRef(false)
    const isPausedRef = React.useRef(false)
    const intervalRef = React.useRef<number | null>(null)
    const resumeTimeoutRef = React.useRef<number | null>(null)

    useGSAP(() => {
        gsap.from(".reviews-header", {
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
        })
        gsap.from(".review-slide", {
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            y: 24,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
        })
    }, { scope: sectionRef })

    const getStepInfo = React.useCallback(() => {
        const el = trackRef.current
        if (!el) return null
        const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-review-slide]"))
        if (!slides.length) return null
        const cs = window.getComputedStyle(el)
        const gap = Number.parseFloat(cs.columnGap || cs.gap || "0") || 0
        const step = (slides[0]?.getBoundingClientRect().width || el.clientWidth) + gap
        if (!step) return null
        const maxIndex = Math.max(0, slides.length - 1)
        const currentIndex = Math.round(el.scrollLeft / step)
        return { el, step, maxIndex, currentIndex }
    }, [])

    const stopAutoPlay = React.useCallback(() => {
        if (intervalRef.current != null) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, [])

    const startAutoPlay = React.useCallback(() => {
        if (!isInViewRef.current || isPausedRef.current) return
        if (intervalRef.current != null) return

        intervalRef.current = window.setInterval(() => {
            if (!isInViewRef.current || isPausedRef.current) return
            const info = getStepInfo()
            if (!info) return
            const { el, step, maxIndex, currentIndex } = info
            const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
            const targetLeft = Math.round(nextIndex * step)
            try {
                el.scrollTo({ left: targetLeft, behavior: "smooth" })
            } catch {
                el.scrollLeft = targetLeft
            }
        }, 4200)
    }, [getStepInfo])

    const scheduleResume = React.useCallback((delayMs: number) => {
        stopAutoPlay()
        isPausedRef.current = true
        if (resumeTimeoutRef.current != null) {
            window.clearTimeout(resumeTimeoutRef.current)
            resumeTimeoutRef.current = null
        }
        resumeTimeoutRef.current = window.setTimeout(() => {
            isPausedRef.current = false
            resumeTimeoutRef.current = null
            startAutoPlay()
        }, delayMs)
    }, [startAutoPlay, stopAutoPlay])

    const scrollByCards = (dir: -1 | 1) => {
        const el = trackRef.current
        if (!el) return

        const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-review-slide]"))
        if (!slides.length) return

        const cs = window.getComputedStyle(el)
        const gap = Number.parseFloat(cs.columnGap || cs.gap || "0") || 0
        const step = (slides[0]?.getBoundingClientRect().width || el.clientWidth) + gap
        if (!step) return

        const maxIndex = Math.max(0, slides.length - 1)
        const currentIndex = Math.round(el.scrollLeft / step)
        const nextIndex = Math.max(0, Math.min(maxIndex, currentIndex + dir))
        const targetLeft = Math.round(nextIndex * step)

        // Native scrolling is more reliable on mobile than JS-driven scrollLeft animation
        try {
            el.scrollTo({ left: targetLeft, behavior: "smooth" })
        } catch {
            el.scrollLeft = targetLeft
        }

        // Pause autoplay briefly after manual navigation
        scheduleResume(7000)
    }

    React.useEffect(() => {
        if (typeof window === "undefined") return
        const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
        if (prefersReducedMotion) return

        const sectionEl = sectionRef.current
        if (!sectionEl) return

        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                isInViewRef.current = !!entry?.isIntersecting
                if (isInViewRef.current) startAutoPlay()
                else stopAutoPlay()
            },
            { threshold: 0.25 }
        )
        io.observe(sectionEl)

        return () => {
            io.disconnect()
            stopAutoPlay()
            if (resumeTimeoutRef.current != null) window.clearTimeout(resumeTimeoutRef.current)
        }
    }, [startAutoPlay, stopAutoPlay])

    React.useEffect(() => {
        const el = trackRef.current
        if (!el) return

        const onPointerEnter = () => {
            stopAutoPlay()
            isPausedRef.current = true
        }
        const onPointerLeave = () => {
            isPausedRef.current = false
            startAutoPlay()
        }
        const onTouchStart = () => scheduleResume(9000)
        const onWheel = () => scheduleResume(5000)
        const onScroll = () => scheduleResume(3000)

        el.addEventListener("pointerenter", onPointerEnter)
        el.addEventListener("pointerleave", onPointerLeave)
        el.addEventListener("touchstart", onTouchStart, { passive: true })
        el.addEventListener("wheel", onWheel, { passive: true })
        el.addEventListener("scroll", onScroll, { passive: true })

        return () => {
            el.removeEventListener("pointerenter", onPointerEnter)
            el.removeEventListener("pointerleave", onPointerLeave)
            el.removeEventListener("touchstart", onTouchStart)
            el.removeEventListener("wheel", onWheel)
            el.removeEventListener("scroll", onScroll)
        }
    }, [scheduleResume, startAutoPlay, stopAutoPlay])

    return (
        <section ref={sectionRef} id="reviews" className="py-24 bg-zinc-50 dark:bg-black/40 relative overflow-hidden">
            <div className="container px-4 mx-auto mb-10 md:mb-14">
                <div className="reviews-header text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
                        <Star className="h-3 w-3 fill-current" />
                        Verified Reviews
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
                        Loved by Professionals <br />
                        <span className="text-primary">Globally.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        See how we&apos;ve helped clients stand out and land interviews.
                    </p>

                    {/* Review profile links (optional) */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                        {REVIEW_PROFILES.map((p) =>
                            p.href ? (
                                <a
                                    key={p.label}
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                                >
                                    {p.label}
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            ) : (
                                <span
                                    key={p.label}
                                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground/70"
                                    title="Add your review profile link"
                                >
                                    {p.label}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-end gap-2 mb-4">
                    <button
                        type="button"
                        onClick={() => scrollByCards(-1)}
                        aria-label="Previous reviews"
                        className="h-10 w-10 rounded-full border border-border bg-background/80 hover:bg-background transition-colors flex items-center justify-center"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCards(1)}
                        aria-label="Next reviews"
                        className="h-10 w-10 rounded-full border border-border bg-background/80 hover:bg-background transition-colors flex items-center justify-center"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                <div
                    ref={trackRef}
                    className="no-scrollbar grid grid-flow-col auto-cols-[100%] sm:auto-cols-[70%] md:auto-cols-[440px] lg:auto-cols-[480px] gap-0 sm:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2"
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            data-review-slide
                            className="review-slide snap-start"
                        >
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

type Review = (typeof reviews)[number]

function ReviewCard({ review }: { review: Review }) {
    return (
        <div
            data-review-card
            className="h-full rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
        >
            <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <img
                        src={review.photoUrl}
                        alt={`${review.name} avatar`}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover border border-border bg-muted"
                        loading="lazy"
                    />
                    <div className="min-w-0">
                        <div className="font-bold text-base text-foreground truncate">{review.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                            {review.role} • {review.location}
                        </div>
                    </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                    {review.platform}
                </div>
            </div>

            <div className="mb-5 text-primary/30">
                <Quote className="h-8 w-8 fill-current" />
            </div>
            <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                “{review.content}”
            </p>

            <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                </div>
                <span className="text-xs font-semibold text-muted-foreground">Verified</span>
            </div>
        </div>
    )
}
