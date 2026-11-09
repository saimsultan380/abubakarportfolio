"use client"

import * as React from "react"
import Link from "next/link"
import { Check, ArrowRight, Star, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  PLANS,
  REVISIONS_ALL_IN_ONE,
  REVISIONS_PARTIAL_PACKAGE,
  type PlanId,
} from "@/lib/plans"

gsap.registerPlugin(ScrollTrigger)

const PLAN_BADGE: Partial<Record<PlanId, string>> = {
  mid: "Most Popular",
}

const PLAN_TITLE: Record<
  PlanId,
  { eyebrow: string; titleClass: string; priceClass: string }
> = {
  entry: {
    eyebrow: "Start here",
    titleClass: "text-foreground",
    priceClass: "text-foreground",
  },
  mid: {
    eyebrow: "Best value",
    titleClass: "text-accent-warm",
    priceClass: "text-accent-warm",
  },
  executive: {
    eyebrow: "Premium",
    titleClass: "text-primary",
    priceClass: "text-primary",
  },
}

export function Pricing() {
  const containerRef = React.useRef<HTMLElement>(null)
  const cardsRef = React.useRef<HTMLDivElement>(null)
  const [openCombined, setOpenCombined] = React.useState<string | null>(null)

  useGSAP(() => {
    const trigger = containerRef.current
    if (!trigger) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top 85%",
        end: "bottom 20%",
        once: true,
      },
    })

    tl.fromTo(
      ".pricing-badge",
      { y: 20 },
      { y: 0, duration: 0.5, ease: "power3.out", clearProps: "transform" }
    )
      .fromTo(
        ".pricing-title",
        { y: 28 },
        { y: 0, duration: 0.6, ease: "power3.out", clearProps: "transform" },
        "-=0.3"
      )
      .fromTo(
        ".pricing-subtitle",
        { y: 16 },
        { y: 0, duration: 0.5, ease: "power3.out", clearProps: "transform" },
        "-=0.4"
      )
      .fromTo(
        ".pricing-card",
        { y: 36 },
        {
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
          overwrite: "auto",
        },
        "-=0.25"
      )
      .fromTo(
        ".pricing-payment",
        { y: 16 },
        { y: 0, duration: 0.45, ease: "power3.out", clearProps: "transform" },
        "-=0.4"
      )

    const cards = cardsRef.current?.querySelectorAll(".pricing-card") ?? []
    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      gsap.to(el, { y: -4, duration: 0.28, ease: "power2.out", overwrite: "auto" })
    }
    const onLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      gsap.to(el, { y: 0, duration: 0.32, ease: "power2.out", overwrite: "auto" })
    }
    cards.forEach((card) => {
      card.addEventListener("mouseenter", onEnter)
      card.addEventListener("mouseleave", onLeave)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", onEnter)
        card.removeEventListener("mouseleave", onLeave)
      })
    }
  }, { scope: containerRef })

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden border-t border-border/50 bg-background"
    >
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
          <div className="pricing-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <Star className="h-3.5 w-3.5" />
            Investment
          </div>
          <h2 className="pricing-title text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground mb-2">
            Invest in your{" "}
            <span className="text-primary">future self.</span>
          </h2>
          <p className="pricing-subtitle text-sm sm:text-base text-muted-foreground">
            Transparent pricing. No hidden fees. 100% human-crafted.
          </p>
          <Link
            href="/pricing"
            className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View all pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-stretch max-w-7xl mx-auto pt-4"
        >
          {PLANS.map((plan) => {
            const breakdownSum = plan.breakdown.reduce((s, b) => s + b.priceUsd, 0)
            const bundleSavingsUsd = Math.max(0, breakdownSum - plan.priceUsd)
            const badge = PLAN_BADGE[plan.id]
            const titleMeta = PLAN_TITLE[plan.id]
            const isFeatured = plan.id === "mid"

            return (
              <div
                key={plan.id}
                className={cn(
                  "pricing-card group relative flex flex-col rounded-2xl border bg-card transition-colors duration-300",
                  isFeatured
                    ? "border-accent-warm/60 shadow-xl shadow-accent-warm/15 ring-1 ring-accent-warm/25 md:-translate-y-1"
                    : plan.id === "executive"
                      ? "border-primary/35 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                      : "border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
                )}
              >
                {badge ? (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-accent-warm to-[#f0b04a] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-accent-warm/40 ring-2 ring-white/80 dark:ring-background">
                      <Star className="h-3 w-3 fill-current" />
                      {badge}
                    </span>
                  </div>
                ) : null}

                <div className="p-4 sm:p-5 flex flex-col flex-1 text-center">
                  <p
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5",
                      isFeatured
                        ? "text-accent-warm"
                        : plan.id === "executive"
                          ? "text-primary"
                          : "text-muted-foreground",
                    )}
                  >
                    {titleMeta.eyebrow}
                  </p>
                  <h3
                    className={cn(
                      "font-bold font-heading tracking-tight",
                      titleMeta.titleClass,
                      isFeatured
                        ? "text-2xl sm:text-[1.65rem]"
                        : "text-lg sm:text-xl",
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                    {plan.description}
                  </p>

                  <div className="mt-4 border-b border-border pb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          isFeatured || plan.id === "executive"
                            ? titleMeta.priceClass
                            : "text-muted-foreground",
                        )}
                      >
                        $
                      </span>
                      <span
                        className={cn(
                          "font-bold tracking-tight tabular-nums leading-none",
                          titleMeta.priceClass,
                          isFeatured
                            ? "text-4xl sm:text-[2.75rem]"
                            : "text-3xl sm:text-4xl",
                        )}
                      >
                        {plan.priceUsd}
                      </span>
                      <span className="ml-1 text-xs font-semibold text-muted-foreground">USD</span>
                    </div>
                  </div>

                  <div className="pt-4 flex-1 space-y-3">
                    <div className="text-left">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        What&apos;s included
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 min-w-0">
                            <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="text-sm font-medium text-foreground/90 whitespace-nowrap truncate">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-muted/30 overflow-hidden text-left">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenCombined((prev) => (prev === plan.id ? null : plan.id))
                        }
                        aria-expanded={openCombined === plan.id}
                        className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="min-w-0">
                          <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                            All combined
                          </span>
                          <span className="mt-0.5 block text-sm font-semibold text-foreground tabular-nums">
                            ${plan.priceUsd}
                            {bundleSavingsUsd > 0 ? (
                              <span className="ml-2 text-[11px] font-semibold text-primary normal-case tracking-normal">
                                Save ${bundleSavingsUsd}
                              </span>
                            ) : null}
                          </span>
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                            openCombined === plan.id && "rotate-180",
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-200 ease-out",
                          openCombined === plan.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-border/60 px-3 py-2.5 space-y-2">
                            <dl className="grid grid-cols-1 gap-1.5 text-xs text-muted-foreground">
                              <div className="flex items-center justify-between gap-3">
                                <dt>Delivery</dt>
                                <dd className="font-semibold text-foreground/80">
                                  {plan.deliveryDays} days
                                </dd>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <dt>12-hour rush</dt>
                                <dd className="font-semibold text-foreground/80">
                                  +${plan.rush12hFeeUsd}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <dt>Revisions (All in One)</dt>
                                <dd className="font-semibold text-foreground/80">
                                  {REVISIONS_ALL_IN_ONE}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between gap-3">
                                <dt>Other packages</dt>
                                <dd className="font-semibold text-foreground/80 text-right">
                                  {REVISIONS_PARTIAL_PACKAGE} revisions · same delivery window
                                </dd>
                              </div>
                            </dl>
                            {bundleSavingsUsd > 0 ? (
                              <p className="text-center text-[11px] font-semibold text-primary sm:text-xs">
                                Save ${bundleSavingsUsd} vs ordering items separately
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/checkout?plan=${plan.id}`}
                    className="mt-4 w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Order Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="pricing-payment mt-16 md:mt-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Order via WhatsApp · package details sent automatically
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground/50 text-sm font-bold">
            <span>WhatsApp</span>
            <span>Fast confirmation</span>
            <span>Secure payment instructions</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Not sure which package is right for you?
          </p>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            Choose Your Package
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
