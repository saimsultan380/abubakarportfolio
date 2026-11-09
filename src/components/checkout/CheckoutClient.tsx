"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  getPlanPackage,
  getRevisionsForPackage,
  type PackageId,
  type PricingPlan,
  type PlanId,
} from "@/lib/plans"
import { getCouponDiscountUsd } from "@/lib/coupons"
import { buildWhatsAppOrderUrl, type ResumeIntent } from "@/lib/whatsapp-order"
import { Lock, FileText, PenLine, Minus, Plus } from "lucide-react"

type Props = {
  initialPlanId: PlanId
  initialPackageId?: string
  plans: PricingPlan[]
}

type CustomerDetails = {
  fullName: string
  email: string
  phone: string
  country: string
  addressLine1: string
  city: string
  postalCode: string
  notes: string
}

function money(amountUsd: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amountUsd)
}

const QTY_MIN = 1
const QTY_MAX = 99

function parseCheckoutQty(raw: string | null | undefined): number {
  const n = Number.parseInt(String(raw ?? "1"), 10)
  if (!Number.isFinite(n) || n < QTY_MIN) return QTY_MIN
  return Math.min(QTY_MAX, n)
}

function normalizePackageId(raw: string | null | undefined): PackageId {
  const v = (raw ?? "").toLowerCase()
  const allowed: PackageId[] = ["cover", "linkedin", "resume", "cover_linkedin", "cover_resume", "linkedin_resume", "all"]
  return (allowed.includes(v as PackageId) ? (v as PackageId) : "all")
}

type ServiceKey = "cover" | "linkedin" | "resume"

function servicesToPackageId(services: ServiceKey[]): PackageId {
  const s = new Set(services)
  const hasCover = s.has("cover")
  const hasLinkedIn = s.has("linkedin")
  const hasResume = s.has("resume")
  const count = (hasCover ? 1 : 0) + (hasLinkedIn ? 1 : 0) + (hasResume ? 1 : 0)

  if (count === 3) return "all"
  if (hasCover && hasLinkedIn) return "cover_linkedin"
  if (hasCover && hasResume) return "cover_resume"
  if (hasLinkedIn && hasResume) return "linkedin_resume"
  if (hasCover) return "cover"
  if (hasLinkedIn) return "linkedin"
  return "resume"
}

function packageIdToServices(pkg: PackageId): ServiceKey[] {
  switch (pkg) {
    case "cover":
      return ["cover"]
    case "linkedin":
      return ["linkedin"]
    case "resume":
      return ["resume"]
    case "cover_linkedin":
      return ["cover", "linkedin"]
    case "cover_resume":
      return ["cover", "resume"]
    case "linkedin_resume":
      return ["linkedin", "resume"]
    case "all":
    default:
      return ["cover", "linkedin", "resume"]
  }
}

export function CheckoutClient({ initialPlanId, initialPackageId, plans }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()

  const [planId, setPlanId] = React.useState<PlanId>(initialPlanId)
  const plan = React.useMemo(() => plans.find((p) => p.id === planId) ?? plans[0], [planId, plans])
  const [packageId, setPackageId] = React.useState<PackageId>(normalizePackageId(initialPackageId))
  const pkg = React.useMemo(() => getPlanPackage(plan, packageId) ?? getPlanPackage(plan, "all")!, [plan, packageId])

  const [selectedServices, setSelectedServices] = React.useState<ServiceKey[]>(() =>
    packageIdToServices(normalizePackageId(initialPackageId))
  )
  const [rush12h, setRush12h] = React.useState<boolean>(() => (sp.get("rush") ?? "") === "1")
  const [intent, setIntent] = React.useState<ResumeIntent>(() => {
    const raw = (sp.get("intent") ?? "").toLowerCase()
    if (raw === "revamp" || raw === "scratch") return raw
    return ""
  })
  const [couponCode, setCouponCode] = React.useState("")
  const couponDiscountUsd = React.useMemo(() => getCouponDiscountUsd(couponCode), [couponCode])

  const qtyParam = sp.get("qty")
  const [quantity, setQuantity] = React.useState(() => parseCheckoutQty(qtyParam))
  React.useEffect(() => {
    setQuantity(parseCheckoutQty(qtyParam))
  }, [qtyParam])

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const [customer, setCustomer] = React.useState<CustomerDetails>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    notes: "",
  })

  React.useEffect(() => {
    const urlPlan = sp.get("plan")
    if (!urlPlan) return
    if (plans.some((p) => p.id === urlPlan)) {
      setPlanId(urlPlan as PlanId)
    }
  }, [sp, plans])

  React.useEffect(() => {
    const urlPkg = sp.get("pkg")
    const nextPkg = normalizePackageId(urlPkg)
    setPackageId(nextPkg)
    setSelectedServices(packageIdToServices(nextPkg))
  }, [sp])

  React.useEffect(() => {
    setRush12h((sp.get("rush") ?? "") === "1")
  }, [sp])

  React.useEffect(() => {
    const raw = (sp.get("intent") ?? "").toLowerCase()
    if (raw === "revamp" || raw === "scratch") setIntent(raw)
    else setIntent("")
  }, [sp])

  function updateCustomer<K extends keyof CustomerDetails>(key: K, value: CustomerDetails[K]) {
    setCustomer((prev) => ({ ...prev, [key]: value }))
  }

  const includesResume = selectedServices.includes("resume")

  function validate(): string | null {
    if (!customer.fullName.trim()) return "Please enter your full name."
    if (!customer.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(customer.email.trim())) return "Please enter a valid email."
    if (!customer.phone.trim()) return "Please enter your phone number."
    if (!customer.country.trim()) return "Please enter your country."
    if (!customer.addressLine1.trim()) return "Please enter your address."
    if (!customer.city.trim()) return "Please enter your city."
    if (!customer.postalCode.trim()) return "Please enter your postal/zip code."
    if (includesResume && intent !== "scratch" && intent !== "revamp") {
      return "Please select a resume type (from scratch or revamp)."
    }
    return null
  }

  function buildParams(next: {
    plan?: PlanId
    pkg?: PackageId
    rush?: boolean
    intent?: ResumeIntent
    qty?: number
  }) {
    const nextParams = new URLSearchParams(sp.toString())
    if (next.plan) nextParams.set("plan", next.plan)
    if (next.pkg) nextParams.set("pkg", next.pkg)
    const rushValue = typeof next.rush === "boolean" ? next.rush : rush12h
    if (rushValue) nextParams.set("rush", "1")
    else nextParams.delete("rush")
    const intentValue = typeof next.intent === "string" ? next.intent : intent
    if (intentValue) nextParams.set("intent", intentValue)
    else nextParams.delete("intent")
    const q = typeof next.qty === "number" ? next.qty : quantity
    if (q > QTY_MIN) nextParams.set("qty", String(q))
    else nextParams.delete("qty")
    return nextParams
  }

  function commitQuantity(nextQty: number) {
    const q = Math.min(QTY_MAX, Math.max(QTY_MIN, Math.round(nextQty)))
    setQuantity(q)
    const nextParams = buildParams({ plan: planId, pkg: packageId, qty: q })
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
  }

  function onPlanChange(next: PlanId) {
    setPlanId(next)
    const nextParams = buildParams({ plan: next, pkg: packageId })
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
  }

  function toggleService(service: ServiceKey) {
    setSelectedServices((prev) => {
      const s = new Set(prev)
      if (s.has(service)) s.delete(service)
      else s.add(service)
      const next = Array.from(s) as ServiceKey[]
      if (next.length === 0) return prev // prevent empty selection

      const nextPkg = servicesToPackageId(next)
      setPackageId(nextPkg)

      const nextIntent: ResumeIntent = next.includes("resume") ? intent : ""
      if (!next.includes("resume")) setIntent("")

      const nextParams = buildParams({ plan: planId, pkg: nextPkg, intent: nextIntent })
      router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
      return next
    })
  }

  function setAllCombined() {
    const nextServices: ServiceKey[] = ["cover", "linkedin", "resume"]
    setSelectedServices(nextServices)
    const nextPkg: PackageId = "all"
    setPackageId(nextPkg)
    const nextParams = buildParams({ plan: planId, pkg: nextPkg })
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
  }

  function toggleRush(next: boolean) {
    setRush12h(next)
    const nextParams = buildParams({ plan: planId, pkg: packageId, rush: next })
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
  }

  const rushPerUnitUsd = rush12h ? plan.rush12hFeeUsd : 0
  const subtotalUsd = pkg.priceUsd * quantity + rushPerUnitUsd * quantity
  const totalUsd = Math.max(0, subtotalUsd - couponDiscountUsd)

  function selectResumeIntent(next: ResumeIntent) {
    setIntent(next)
    const nextParams = buildParams({ plan: planId, pkg: packageId, intent: next })
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
  }

  function orderViaWhatsApp() {
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setError(null)
    setIsSubmitting(true)
    try {
      const url = buildWhatsAppOrderUrl({
        plan,
        planId,
        packageId,
        quantity,
        rush12h,
        intent: includesResume ? intent : "",
        couponCode: couponCode.trim() || undefined,
        couponDiscountUsd,
        customer,
      })
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to open WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
      <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-heading tracking-tight">Your details</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Used only to deliver your service and confirm your order.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Secure
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Full name" required>
            <input
              value={customer.fullName}
              onChange={(e) => updateCustomer("fullName", e.target.value)}
              className={inputClass}
              placeholder="Your name"
              autoComplete="name"
            />
          </Field>
          <Field label="Email" required>
            <input
              value={customer.email}
              onChange={(e) => updateCustomer("email", e.target.value)}
              className={inputClass}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
            />
          </Field>
          <Field label="Phone" required>
            <input
              value={customer.phone}
              onChange={(e) => updateCustomer("phone", e.target.value)}
              className={inputClass}
              placeholder="+1 555 000 0000"
              autoComplete="tel"
              inputMode="tel"
            />
          </Field>
          <Field label="Country" required>
            <input
              value={customer.country}
              onChange={(e) => updateCustomer("country", e.target.value)}
              className={inputClass}
              placeholder="Country"
              autoComplete="country-name"
            />
          </Field>
          <Field label="Address" required className="md:col-span-2">
            <input
              value={customer.addressLine1}
              onChange={(e) => updateCustomer("addressLine1", e.target.value)}
              className={inputClass}
              placeholder="Street address"
              autoComplete="street-address"
            />
          </Field>
          <Field label="City" required>
            <input
              value={customer.city}
              onChange={(e) => updateCustomer("city", e.target.value)}
              className={inputClass}
              placeholder="City"
              autoComplete="address-level2"
            />
          </Field>
          <Field label="Postal code" required>
            <input
              value={customer.postalCode}
              onChange={(e) => updateCustomer("postalCode", e.target.value)}
              className={inputClass}
              placeholder="ZIP / Postal"
              autoComplete="postal-code"
            />
          </Field>
          <Field label="Notes (optional)" className="md:col-span-2">
            <textarea
              value={customer.notes}
              onChange={(e) => updateCustomer("notes", e.target.value)}
              className={cn(inputClass, "min-h-[96px]")}
              placeholder="Anything you want me to know (target role, industry, deadlines, etc.)"
            />
          </Field>
        </div>

        {includesResume ? (
          <div className="mt-8 rounded-2xl border border-border bg-muted/20 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-heading tracking-tight">Resume type</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Choose how you want your resume handled.
                </p>
              </div>
              <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => selectResumeIntent("scratch")}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-semibold text-left transition-colors",
                  intent === "scratch"
                    ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/40",
                )}
              >
                Resume from scratch
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => selectResumeIntent("revamp")}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-semibold text-left transition-colors",
                  intent === "revamp"
                    ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/40",
                )}
              >
                Resume revamp
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PenLine className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        ) : null}

        <div className="mt-8 border-t border-border pt-8">
          <h3 className="text-base sm:text-lg font-bold font-heading tracking-tight">Place order</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Send your package details on WhatsApp and we&apos;ll confirm payment instructions.
          </p>

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-sm font-semibold text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="mt-5">
            <button
              type="button"
              onClick={orderViaWhatsApp}
              disabled={isSubmitting}
              className={cn(
                "w-full h-12 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2",
                "bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1da851]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2",
                isSubmitting && "opacity-60 pointer-events-none",
              )}
            >
              {isSubmitting ? "Opening WhatsApp…" : `Order ${money(totalUsd)} via WhatsApp`}
            </button>
            <p className="mt-2.5 text-xs text-muted-foreground">
              Opens WhatsApp with your plan, package, total, and contact details ready to send.
            </p>
          </div>
        </div>
      </div>

      <aside className="lg:col-span-2 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 h-fit lg:sticky lg:top-28">
        <h2 className="text-xl md:text-2xl font-bold font-heading tracking-tight">Order summary</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Select your plan and review the total.
        </p>

        <div className="mt-6">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Plan
          </label>
          <select
            value={planId}
            onChange={(e) => onPlanChange(e.target.value as PlanId)}
            className={cn(inputClass, "mt-2")}
          >
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} - {money(p.priceUsd)}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Package breakdown
          </label>
          <div className="mt-3 rounded-2xl border border-border bg-background/40 p-4">
            <div className="space-y-3">
              <BreakdownRow
                checked={selectedServices.includes("cover")}
                label="Cover Letter"
                priceUsd={plan.breakdown.find((b) => b.name === "Cover Letter")?.priceUsd ?? 0}
                onChange={() => toggleService("cover")}
              />
              <BreakdownRow
                checked={selectedServices.includes("linkedin")}
                label="LinkedIn Profile Optimization"
                priceUsd={plan.breakdown.find((b) => b.name === "LinkedIn Profile Optimization")?.priceUsd ?? 0}
                onChange={() => toggleService("linkedin")}
              />
              <BreakdownRow
                checked={selectedServices.includes("resume")}
                label="Resume"
                priceUsd={plan.breakdown.find((b) => b.name === "Resume")?.priceUsd ?? 0}
                onChange={() => toggleService("resume")}
              />
            </div>

            <div className="mt-4 border-t border-border/70 pt-4">
              <button
                type="button"
                onClick={setAllCombined}
                className={cn(
                  "w-full rounded-xl border px-4 py-3 text-sm font-bold flex items-center justify-between transition-colors",
                  packageId === "all" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/40"
                )}
              >
                <span className="uppercase tracking-widest text-muted-foreground text-xs">All combined</span>
                <span className="text-foreground">{money(plan.priceUsd)}</span>
              </button>

              <label className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:bg-muted/40 transition-colors cursor-pointer">
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rush12h}
                    onChange={(e) => toggleRush(e.target.checked)}
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                    <span>
                      12 hours delivery{" "}
                      <span className="text-muted-foreground font-bold">
                        (+{money(plan.rush12hFeeUsd)} / item)
                      </span>
                    </span>
                </span>
              </label>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3">
                <span className="text-sm font-semibold text-foreground">Quantity</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={quantity <= QTY_MIN}
                    onClick={() => commitQuantity(quantity - 1)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors",
                      quantity <= QTY_MIN
                        ? "cursor-not-allowed opacity-40"
                        : "hover:border-primary/40 hover:bg-primary/5"
                    )}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[2.25rem] text-center text-sm font-bold tabular-nums">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    disabled={quantity >= QTY_MAX}
                    onClick={() => commitQuantity(quantity + 1)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors",
                      quantity >= QTY_MAX
                        ? "cursor-not-allowed opacity-40"
                        : "hover:border-primary/40 hover:bg-primary/5"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-bold">{plan.name} - {pkg.name}</div>
              <div className="mt-1 text-xs text-muted-foreground font-semibold italic">
                &ldquo;{plan.description}&rdquo;
              </div>
              <div className="mt-2 text-xs font-semibold text-muted-foreground">
                {quantity} × {money(pkg.priceUsd)} per package
              </div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-sm font-bold">{money(totalUsd)}</div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span>{plan.deliveryDays} days delivery</span>
            <span>Revisions: {getRevisionsForPackage(packageId)}</span>
          </div>
          {rush12h ? (
            <div className="mt-1 flex items-center justify-between text-xs font-semibold text-muted-foreground">
              <span>Express 12 hours (all items)</span>
              <span>+{money(rushPerUnitUsd * quantity)}</span>
            </div>
          ) : null}
          <div className="mt-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Coupon</label>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Code"
              className={cn(inputClass, "mt-1.5")}
            />
            {couponDiscountUsd > 0 && (
              <p className="mt-1 text-xs font-semibold text-primary">−{money(couponDiscountUsd)} applied</p>
            )}
          </div>
          <div className="mt-4 border-t border-border/70 pt-4 space-y-1">
            {couponDiscountUsd > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{money(subtotalUsd)}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total</div>
              <div className="text-lg font-bold">{money(totalUsd)}</div>
            </div>
          </div>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-foreground/80 font-medium">
          {pkg.includes.slice(0, 5).map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

function BreakdownRow({
  checked,
  label,
  priceUsd,
  onChange,
}: {
  checked: boolean
  label: string
  priceUsd: number
  onChange: () => void
}) {
  return (
    <label className="flex items-center justify-between gap-3 text-sm font-semibold cursor-pointer">
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
        />
        <span>{label}</span>
      </span>
      <span className="text-foreground">{money(priceUsd)}</span>
    </label>
  )
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={cn("block", className)}>
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label} {required ? <span className="text-primary">*</span> : null}
      </div>
      {children}
    </label>
  )
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 placeholder:text-muted-foreground/70"

