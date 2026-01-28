export type PlanId = "entry" | "mid" | "executive"

export type PricingPlan = {
  id: PlanId
  name: string
  priceUsd: number
  currency: "USD"
  description: string
  deliveryDays: number
  features: string[]
}

export const PLANS: PricingPlan[] = [
  {
    id: "entry",
    name: "Entry Level",
    priceUsd: 180,
    currency: "USD",
    description: "ATS-optimized (0–2 years exp…)",
    deliveryDays: 2,
    features: ["Resume/CV", "Cover Letter", "LinkedIn Profile"],
  },
  {
    id: "mid",
    name: "Mid Level",
    priceUsd: 220,
    currency: "USD",
    description: "ATS-optimized (2–10 years exp…)",
    deliveryDays: 2,
    features: ["Resume/CV", "Cover Letter", "LinkedIn Profile"],
  },
  {
    id: "executive",
    name: "Executive Level",
    priceUsd: 300,
    currency: "USD",
    description: "ATS-optimized (10+ years exp…)",
    deliveryDays: 3,
    features: ["Resume/CV", "Cover Letter", "LinkedIn Profile"],
  },
]

export function getPlanById(planId: string | undefined | null) {
  if (!planId) return null
  return PLANS.find((p) => p.id === planId) ?? null
}

export function planAmountCents(planId: string) {
  const plan = getPlanById(planId)
  if (!plan) return null
  return Math.round(plan.priceUsd * 100)
}

