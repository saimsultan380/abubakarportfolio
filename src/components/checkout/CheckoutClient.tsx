"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { cn } from "@/lib/utils"
import type { PricingPlan, PlanId } from "@/lib/plans"
import { CreditCard, Lock, ShieldCheck, Wallet } from "lucide-react"

type Props = {
  initialPlanId: PlanId
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

export function CheckoutClient({ initialPlanId, plans }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()

  const [planId, setPlanId] = React.useState<PlanId>(initialPlanId)
  const plan = React.useMemo(() => plans.find((p) => p.id === planId) ?? plans[0], [planId, plans])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    router.replace(`${pathname}?${nextParams.toString()}`)
  }

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
        body: JSON.stringify({ planId, customer }),
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black font-heading tracking-tight">Your details</h2>
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
          <h3 className="text-lg font-black font-heading tracking-tight">Payment method</h3>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setMethod("card")}
              className={cn(
                methodCardBase,
                method === "card"
                  ? "border-primary/50 ring-2 ring-primary/20 bg-primary/[0.06]"
                  : "border-border bg-background/40 hover:bg-background/60"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(iconWrapBase, method === "card" ? "bg-primary/10 border-primary/20" : "bg-secondary")}>
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black uppercase tracking-widest">Card</div>
                  <div className="text-xs text-muted-foreground font-semibold">Visa, Mastercard, Amex & more</div>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMethod("paypal")}
              className={cn(
                methodCardBase,
                method === "paypal"
                  ? "border-primary/50 ring-2 ring-primary/20 bg-primary/[0.06]"
                  : "border-border bg-background/40 hover:bg-background/60"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(iconWrapBase, method === "paypal" ? "bg-primary/10 border-primary/20" : "bg-secondary")}
                >
                  <Wallet className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black uppercase tracking-widest">PayPal</div>
                  <div className="text-xs text-muted-foreground font-semibold">Pay with PayPal balance or bank</div>
                </div>
              </div>
            </button>
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
                  "w-full h-12 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2",
                  "bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90",
                  isSubmitting && "opacity-60 pointer-events-none"
                )}
              >
                Pay {money(plan.priceUsd)} with Card <ShieldCheck className="h-5 w-5" />
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
                            body: JSON.stringify({ planId, customer }),
                          })
                          const data = (await res.json()) as { orderId?: string; error?: string }
                          if (!res.ok || !data.orderId) throw new Error(data.error ?? "Unable to create PayPal order.")
                          return data.orderId
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                      onApprove={async (data: any) => {
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
                      onError={(err: any) => {
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
        <h2 className="text-xl md:text-2xl font-black font-heading tracking-tight">Order summary</h2>
        <p className="mt-2 text-sm text-muted-foreground font-medium">
          Select your plan and review the total.
        </p>

        <div className="mt-6">
          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
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

        <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-black">{plan.name}</div>
              <div className="mt-1 text-xs text-muted-foreground font-semibold italic">"{plan.description}"</div>
            </div>
            <div className="text-sm font-black">{money(plan.priceUsd)}</div>
          </div>
          <div className="mt-4 border-t border-border/70 pt-4 flex items-center justify-between">
            <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total</div>
            <div className="text-lg font-black">{money(plan.priceUsd)}</div>
          </div>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-foreground/80 font-medium">
          {plan.features.slice(0, 5).map((f) => (
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
      <div className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
        {label} {required ? <span className="text-primary">*</span> : null}
      </div>
      {children}
    </label>
  )
}

const inputClass =
  "w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-semibold text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 placeholder:text-muted-foreground/70"

const methodCardBase =
  "rounded-2xl border p-4 transition-all duration-300 flex items-center justify-between"

const iconWrapBase =
  "h-11 w-11 rounded-2xl border border-border flex items-center justify-center text-foreground"

