"use client"

import * as React from "react"
import Link from "next/link"
import { PLANS, getPlanPackage, type PackageId, type PlanId } from "@/lib/plans"
import { ArrowRight, Check, FileText, Linkedin, Sparkles, Layers, FileSignature } from "lucide-react"

const PACKAGE_ORDER: { id: PackageId; icon: React.ElementType }[] = [
  { id: "cover", icon: FileSignature },
  { id: "linkedin", icon: Linkedin },
  { id: "resume", icon: FileText },
  { id: "cover_linkedin", icon: Layers },
  { id: "cover_resume", icon: Layers },
  { id: "all", icon: Sparkles },
]

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
            <Sparkles className="h-3 w-3" />
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
        <div className="relative flex flex-wrap items-center justify-center gap-2 mb-10">
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

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Plan summary */}
          <aside className="lg:col-span-4 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-7">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {plan.name}
            </div>
            <h2 className="mt-2 text-2xl font-bold font-heading tracking-tight text-foreground">
              {plan.description}
            </h2>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl border border-border bg-background/50 px-3 py-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Delivery</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{plan.deliveryDays} days</div>
              </div>
              <div className="rounded-2xl border border-border bg-background/50 px-3 py-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Rush (12h)</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{money(plan.rush12hFeeUsd)}</div>
              </div>
              <div className="rounded-2xl border border-border bg-background/50 px-3 py-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Revisions</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{plan.revisions}</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Base items
              </div>
              <div className="space-y-2">
                {plan.breakdown.map((b) => (
                  <div key={b.name} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-foreground/90">{b.name}</span>
                    <span className="text-sm font-semibold text-foreground">{money(b.priceUsd)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/checkout?plan=${plan.id}&pkg=all`}
              className="mt-7 inline-flex w-full h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              All‑in‑One Checkout
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-3 text-xs text-muted-foreground text-center">
              Prefer a smaller service? Choose a package on the right.
            </p>
          </aside>

          {/* Packages */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {PACKAGE_ORDER.map((p) => {
                const pkg = getPlanPackage(plan, p.id)
                if (!pkg) return null
                const Icon = p.icon
                const isAll = p.id === "all"
                const hasResume = pkg.includes.some((inc) => inc.toLowerCase().includes("resume"))
                return (
                  <div
                    key={p.id}
                    className={[
                      "group rounded-3xl border bg-card/60 backdrop-blur-sm p-6 flex flex-col transition-all duration-300",
                      "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                      isAll ? "border-primary/40 ring-1 ring-primary/20" : "border-border",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      {isAll ? (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          Recommended
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {pkg.name}
                    </h3>

                    <div className="mt-3 flex items-baseline gap-2">
                      <div className="text-3xl font-bold tracking-tight text-foreground">
                        {money(pkg.priceUsd)}
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground">USD</div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {pkg.includes.map((inc) => (
                        <span
                          key={inc}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-semibold text-muted-foreground"
                        >
                          <Check className="h-3.5 w-3.5 text-primary" />
                          {includeLabel(inc)}
                        </span>
                      ))}
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
      </div>
    </section>
  )
}

