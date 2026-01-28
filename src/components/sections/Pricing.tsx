"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Rocket, Shield, Zap, ArrowRight, Sparkles } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PLANS, type PlanId } from "@/lib/plans"

gsap.registerPlugin(ScrollTrigger)

const planMeta: Record<PlanId, { icon: typeof Rocket }> = {
  entry: { icon: Rocket },
  mid: { icon: Zap },
  executive: { icon: Shield },
}

export function Pricing() {
  const containerRef = React.useRef<HTMLElement>(null)
  const cardsRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const trigger = containerRef.current
    if (!trigger) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top 85%",
        end: "bottom 20%",
      },
    })

    tl.fromTo(
      ".pricing-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        ".pricing-title",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".pricing-subtitle",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".pricing-card",
        { y: 48, scale: 0.96, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.1)",
          overwrite: "auto",
        },
        "-=0.25"
      )
      .fromTo(
        ".pricing-payment",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.5"
      )

    // Hover lift + scale on cards (GSAP-driven)
    const cards = cardsRef.current?.querySelectorAll(".pricing-card") ?? []
    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      gsap.to(el, { y: -6, scale: 1.02, duration: 0.3, ease: "power2.out", overwrite: "auto" })
    }
    const onLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      gsap.to(el, { y: 0, scale: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" })
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
      className="relative py-24 md:py-32 overflow-hidden border-t border-border/50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.4] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[50%] bg-accent-cool/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <div className="pricing-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            Investment
          </div>
          <h2 className="pricing-title text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-foreground mb-5">
            Invest in your{" "}
            <span className="text-primary">future self.</span>
          </h2>
          <p className="pricing-subtitle text-lg md:text-xl text-muted-foreground font-medium">
            Transparent pricing. No hidden fees. 100% human-crafted.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const meta = planMeta[plan.id]
            const Icon = meta.icon

            return (
              <div
                key={plan.id}
                className="pricing-card group relative flex flex-col rounded-2xl border border-border bg-card transition-all duration-300 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-black font-heading tracking-tight text-foreground mb-0.5">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-base font-bold text-muted-foreground">$</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                      {plan.priceUsd}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.deliveryDays} days delivery
                  </p>

                  <div className="pt-5 border-t border-border flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm font-medium text-foreground/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/checkout?plan=${plan.id}`}
                    className="mt-6 w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Order Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Payment methods */}
        <div className="pricing-payment mt-16 md:mt-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Secure checkout · Visa, Mastercard, PayPal
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground/50 text-sm font-bold">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Stripe</span>
          </div>
        </div>
      </div>
    </section>
  )
}
