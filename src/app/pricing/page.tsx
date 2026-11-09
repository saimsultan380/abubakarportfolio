"use client"

import * as React from "react"
import Link from "next/link"
import {
  PLANS,
  REVISIONS_ALL_IN_ONE,
  REVISIONS_PARTIAL_PACKAGE,
  getPlanPackage,
  type PackageId,
  type PlanId,
} from "@/lib/plans"
import { ArrowRight, Check, Star } from "lucide-react"

/** Same package grid for every tier. */
function packageOrder(): PackageId[] {
  return ["cover", "linkedin", "resume", "linkedin_resume", "cover_resume"]
}

function money(amountUsd: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amountUsd)
}

function includeLabel(name: string) {
  if (name === "Resume") return "Resume/CV"
  return name
}

function planLabel(id: PlanId) {
  switch (id) {
    case "entry":
      return "Entry Level"
    case "mid":
      return "Mid Level"
    case "executive":
      return "Executive Level"
    default:
      return id
  }
}

export default function PricingPage() {
  const [selected, setSelected] = React.useState<PlanId>("entry")
  const plan = React.useMemo(() => PLANS.find((p) => p.id === selected) ?? PLANS[0], [selected])
  const breakdownSum = React.useMemo(
    () => plan.breakdown.reduce((s, b) => s + b.priceUsd, 0),
    [plan]
  )
  const allInOnePrice = plan.priceUsd
  const bundleSavingsUsd = Math.max(0, breakdownSum - allInOnePrice)

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 bg-background relative overflow-hidden">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-60px] h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="relative text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-5 border border-primary/20">
            <Star className="h-3 w-3" />
            Pricing
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-4">
            Choose the package that fits your{" "}
            <span className="text-primary">goal</span>.
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a level, then pick one of the 6 packages. Checkout in seconds.
          </p>
        </div>

        {/* Level switcher */}
        <div className="relative flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {PLANS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              className={[
                "h-10 px-4 rounded-full border text-sm font-semibold transition-colors",
                selected === p.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card/60 border-border text-foreground hover:border-primary/30 hover:bg-card",
              ].join(" ")}
            >
              {planLabel(p.id)}
            </button>
          ))}
        </div>

        {/* Plan summary — tier details + All in One total */}
        <aside className="relative mb-6 sm:mb-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-sm shadow-black/5 dark:shadow-black/20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" />
          <div className="relative p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
              <div className="min-w-0 flex-1 space-y-5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                    {plan.name}
                  </div>
                  <h2 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl leading-snug">
                    {plan.description}
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg">
                  <div className="rounded-2xl border border-border/80 bg-background/60 px-2 py-3 text-center sm:px-3 sm:py-3.5">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                      Delivery
                    </div>
                    <div className="mt-1 text-sm font-bold text-foreground sm:text-base">
                      {plan.deliveryDays} days
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-background/60 px-2 py-3 text-center sm:px-3 sm:py-3.5">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                      Rush (12h)
                    </div>
                    <div className="mt-1 text-sm font-bold text-foreground sm:text-base">
                      {money(plan.rush12hFeeUsd)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-background/60 px-2 py-3 text-center sm:px-3 sm:py-3.5">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                      Revisions
                    </div>
                    <div className="mt-1 text-[10px] font-semibold leading-tight text-foreground sm:text-xs">
                      <span className="block">{REVISIONS_ALL_IN_ONE}</span>
                      <span className="mt-0.5 block text-[9px] font-medium text-muted-foreground">
                        All in One · {REVISIONS_PARTIAL_PACKAGE} others
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5 sm:text-xs">
                    Services included
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {plan.breakdown.map((b) => (
                      <span
                        key={b.name}
                        className="inline-flex items-center rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs font-semibold text-foreground sm:text-sm"
                      >
                        {b.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6 lg:max-w-sm lg:flex-1 lg:border-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                    All in One total
                  </p>
                  <p className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground tabular-nums sm:text-5xl">
                    {money(allInOnePrice)}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">USD · full bundle checkout</p>
                  {bundleSavingsUsd > 0 ? (
                    <p className="mt-3 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Save {money(bundleSavingsUsd)} vs ordering items separately
                    </p>
                  ) : (
                    <p className="mt-3 text-xs text-muted-foreground">
                      Includes resume, cover letter &amp; LinkedIn optimization.
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Link
                    href={`/checkout?plan=${plan.id}&pkg=all`}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                  >
                    All‑in‑One Checkout
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                  <p className="text-center text-[11px] text-muted-foreground sm:text-xs">
                    Prefer a smaller service? Pick a package in the grid below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Packages — full width grid */}
        <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {packageOrder().map((packageId) => {
                const pkg = getPlanPackage(plan, packageId)
                if (!pkg) return null
                const isAll = packageId === "all"
                const hasResume = pkg.includes.some((inc) => inc.toLowerCase().includes("resume"))
                return (
                  <div
                    key={packageId}
                    className={[
                      "group rounded-2xl border bg-card p-5 sm:p-6 flex flex-col transition-all duration-300",
                      "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                      isAll ? "border-primary/40 ring-1 ring-primary/20" : "border-border",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {pkg.name}
                      </h3>
                      {isAll ? (
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          Recommended
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3 flex items-baseline gap-2">
                      <div className="text-3xl font-bold tracking-tight text-foreground tabular-nums">
                        {money(pkg.priceUsd)}
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground">USD</div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {pkg.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-center gap-2 text-sm font-medium text-foreground/90"
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          {includeLabel(inc)}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 border-t border-border/60 pt-4 text-xs text-muted-foreground space-y-1.5">
                      <div className="flex items-center justify-between gap-3">
                        <span>Delivery</span>
                        <span className="font-semibold text-foreground/80">{plan.deliveryDays} days</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span>Revisions</span>
                        <span className="font-semibold text-foreground/80">
                          {isAll ? REVISIONS_ALL_IN_ONE : REVISIONS_PARTIAL_PACKAGE}
                        </span>
                      </div>
                    </div>

                    {hasResume ? (
                      <div className="mt-6 grid grid-cols-1 gap-2">
                        <Link
                          href={`/resume-request?plan=${plan.id}&pkg=${pkg.id}`}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-muted/40 transition-colors"
                        >
                          Resume from scratch
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/checkout?plan=${plan.id}&pkg=${pkg.id}&intent=revamp`}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                        >
                          Resume revamp
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    ) : (
                      <Link
                        href={`/checkout?plan=${plan.id}&pkg=${pkg.id}`}
                        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                      >
                        Order Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </section>
  )
}

