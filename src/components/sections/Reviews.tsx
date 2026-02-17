"use client"

import * as React from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Client review screenshot images from /public/brand/
const REVIEW_SCREENSHOT_FILES = [
  "WhatsApp Image 2026-02-17 at 6.48.38 AM.jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.39 AM (1).jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.39 AM.jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.40 AM (1).jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.40 AM.jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.41 AM (1).jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.41 AM.jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.42 AM.jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.43 AM (1).jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.43 AM (2).jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.43 AM.jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.44 AM (1).jpeg",
  "WhatsApp Image 2026-02-17 at 6.48.44 AM.jpeg",
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
      stagger: 0.05,
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

    try {
      el.scrollTo({ left: targetLeft, behavior: "smooth" })
    } catch {
      el.scrollLeft = targetLeft
    }

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
            Client Reviews
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
            What clients shared <br />
            <span className="text-primary">with us.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real screenshots from WhatsApp, LinkedIn, and messages from happy clients.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous"
            className="h-10 w-10 rounded-full border border-border bg-background/80 hover:bg-background transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Next"
            className="h-10 w-10 rounded-full border border-border bg-background/80 hover:bg-background transition-colors flex items-center justify-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc((100%-1rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] gap-4 lg:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2 items-stretch"
        >
          {REVIEW_SCREENSHOT_FILES.map((filename, idx) => (
            <div
              key={idx}
              data-review-slide
              className="review-slide snap-start shrink-0"
            >
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
                <Image
                  src={`/brand/${encodeURIComponent(filename)}`}
                  alt={`Client review ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain object-top rounded-[8px]"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Use arrows or swipe to browse
        </p>
      </div>
    </section>
  )
}
