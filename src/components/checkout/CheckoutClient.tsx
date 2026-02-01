"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { cn } from "@/lib/utils"
import { getPlanPackage, type PackageId, type PricingPlan, type PlanId } from "@/lib/plans"
import { Lock, ShieldCheck } from "lucide-react"
import { MastercardLogo, PaypalLogo, VisaLogo } from "./PaymentIcons"

type Props = {
  initialPlanId: PlanId
  initialPackageId?: string
  plans: PricingPlan[]
}

type PaymentMethod = "card" | "paypal"

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

  const [method, setMethod] = React.useState<PaymentMethod>("card")
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

  function updateCustomer<K extends keyof CustomerDetails>(key: K, value: CustomerDetails[K]) {
    setCustomer((prev) => ({ ...prev, [key]: value }))
  }

  function validate(): string | null {
    if (!customer.fullName.trim()) return "Please enter your full name."
    if (!customer.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(customer.email.trim())) return "Please enter a valid email."
    if (!customer.phone.trim()) return "Please enter your phone number."
    if (!customer.country.trim()) return "Please enter your country."
    if (!customer.addressLine1.trim()) return "Please enter your address."
    if (!customer.city.trim()) return "Please enter your city."
    if (!customer.postalCode.trim()) return "Please enter your postal/zip code."
    return null
  }

  function onPlanChange(next: PlanId) {
    setPlanId(next)
    const nextParams = new URLSearchParams(sp.toString())
    nextParams.set("plan", next)
    nextParams.set("pkg", packageId)
    if (rush12h) nextParams.set("rush", "1")
    else nextParams.delete("rush")
    router.replace(`${pathname}?${nextParams.toString()}`)
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

      const nextParams = new URLSearchParams(sp.toString())
      nextParams.set("plan", planId)
      nextParams.set("pkg", nextPkg)
      if (rush12h) nextParams.set("rush", "1")
      else nextParams.delete("rush")
      router.replace(`${pathname}?${nextParams.toString()}`)
      return next
    })
  }

  function setAllCombined() {
    const nextServices: ServiceKey[] = ["cover", "linkedin", "resume"]
    setSelectedServices(nextServices)
    const nextPkg: PackageId = "all"
    setPackageId(nextPkg)
    const nextParams = new URLSearchParams(sp.toString())
    nextParams.set("plan", planId)
    nextParams.set("pkg", nextPkg)
    if (rush12h) nextParams.set("rush", "1")
    else nextParams.delete("rush")
    router.replace(`${pathname}?${nextParams.toString()}`)
  }

  function toggleRush(next: boolean) {
    setRush12h(next)
    const nextParams = new URLSearchParams(sp.toString())
    nextParams.set("plan", planId)
    nextParams.set("pkg", packageId)
    if (next) nextParams.set("rush", "1")
    else nextParams.delete("rush")
    router.replace(`${pathname}?${nextParams.toString()}`)
  }

  const totalUsd = pkg.priceUsd + (rush12h ? plan.rush12hFeeUsd : 0)

  async function payWithCard() {
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/checkout/stripe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ planId, packageId, rush12h, customer }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok || !data.url) throw new Error(data.error ?? "Unable to start card checkout.")
      window.location.href = data.url
    } catch (e) {
      setError(e instanceof Error ? e.message : "Payment failed.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? ""
  type PayPalApproveData = { orderID: string }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-heading tracking-tight">Your details</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">
              We only use this information to deliver your service and send your confirmation.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <Lock className="h-4 w-4" />
            SSL secure
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

        <div className="mt-10">
          <h3 className="text-lg font-bold font-heading tracking-tight">Payment method</h3>

          <div className="mt-4 flex flex-col gap-3">
            <label
              className={cn(
                "relative flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-300 hover:bg-muted/50",
                method === "card"
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-background"
              )}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment_method"
                  value="card"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <div className="text-sm font-bold text-foreground">Pay with Card</div>
              </div>
              <div className="flex items-center gap-2">
                <VisaLogo className="h-6 w-auto" />
                <MastercardLogo className="h-6 w-auto" />
              </div>
            </label>

            <label
              className={cn(
                "relative flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-300 hover:bg-muted/50",
                method === "paypal"
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-background"
              )}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment_method"
                  value="paypal"
                  checked={method === "paypal"}
                  onChange={() => setMethod("paypal")}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <div className="text-sm font-bold text-foreground">PayPal</div>
              </div>
              <PaypalLogo className="h-5 w-auto" />
            </label>
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-semibold text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          {method === "card" && (
            <div className="mt-6">
              <button
                type="button"
                onClick={payWithCard}
                disabled={isSubmitting}
                className={cn(
                  "w-full h-12 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2",
                  "bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90",
                  isSubmitting && "opacity-60 pointer-events-none"
                )}
              >
                Pay {money(totalUsd)} with Card <ShieldCheck className="h-5 w-5" />
              </button>
              <p className="mt-3 text-xs text-muted-foreground font-medium">
                You’ll be redirected to a secure Stripe checkout page to complete your payment.
              </p>
            </div>
          )}

          {method === "paypal" && (
            <div className="mt-6">
              {!paypalClientId ? (
                <div className="rounded-2xl border border-border bg-background/40 p-4 text-sm text-muted-foreground font-semibold">
                  PayPal is not configured yet. Add <code className="font-mono">NEXT_PUBLIC_PAYPAL_CLIENT_ID</code> to your environment.
                </div>
              ) : (
                <PayPalScriptProvider options={{ clientId: paypalClientId, currency: "USD", intent: "capture" }}>
                  <div className="rounded-2xl border border-border bg-background/40 p-4">
                    <PayPalButtons
                      style={{ layout: "vertical", shape: "rect" }}
                      disabled={isSubmitting}
                      createOrder={async () => {
                        const v = validate()
                        if (v) {
                          setError(v)
                          throw new Error(v)
                        }
                        setError(null)
                        setIsSubmitting(true)
                        try {
                          const res = await fetch("/api/checkout/paypal/create-order", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ planId, packageId, rush12h, customer }),
                          })
                          const data = (await res.json()) as { orderId?: string; error?: string }
                          if (!res.ok || !data.orderId) throw new Error(data.error ?? "Unable to create PayPal order.")
                          return data.orderId
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                      onApprove={async (data: PayPalApproveData) => {
                        setIsSubmitting(true)
                        try {
                          const res = await fetch("/api/checkout/paypal/capture-order", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ orderId: data.orderID }),
                          })
                          const payload = (await res.json()) as { ok?: boolean; error?: string }
                          if (!res.ok || !payload.ok) throw new Error(payload.error ?? "Unable to capture PayPal payment.")
                          router.push(`/checkout/success?provider=paypal&orderId=${encodeURIComponent(data.orderID)}`)
                        } catch (e) {
                          setError(e instanceof Error ? e.message : "PayPal payment failed.")
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                      onError={(err: unknown) => {
                        setError(err instanceof Error ? err.message : "PayPal error.")
                      }}
                    />
                  </div>
                </PayPalScriptProvider>
              )}
            </div>
          )}
        </div>
      </div>

      <aside className="lg:col-span-2 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 h-fit">
        <h2 className="text-xl md:text-2xl font-bold font-heading tracking-tight">Order summary</h2>
        <p className="mt-2 text-sm text-muted-foreground font-medium">
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
                {p.name} — {money(p.priceUsd)}
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
                    <span className="text-muted-foreground font-bold">(+{money(plan.rush12hFeeUsd)})</span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-bold">{plan.name} — {pkg.name}</div>
              <div className="mt-1 text-xs text-muted-foreground font-semibold italic">
                &ldquo;{plan.description}&rdquo;
              </div>
            </div>
            <div className="text-sm font-bold">{money(totalUsd)}</div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span>{plan.deliveryDays} days delivery</span>
            <span>Revisions: {plan.revisions}</span>
          </div>
          {rush12h ? (
            <div className="mt-1 flex items-center justify-between text-xs font-semibold text-muted-foreground">
              <span>12 hours</span>
              <span>+{money(plan.rush12hFeeUsd)}</span>
            </div>
          ) : null}
          <div className="mt-4 border-t border-border/70 pt-4 flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total</div>
            <div className="text-lg font-bold">{money(totalUsd)}</div>
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
  "w-full rounded-[4px] border border-border bg-background/60 px-4 py-3 text-sm font-semibold text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 placeholder:text-muted-foreground/70"

