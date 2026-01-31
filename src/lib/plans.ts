export type PlanId = "entry" | "mid" | "executive"

export type PricingPlan = {
  id: PlanId
  name: string
  priceUsd: number
  currency: "USD"
  description: string
  deliveryDays: number
  rush12hFeeUsd: number
  revisions: string
  breakdown: { name: string; priceUsd: number }[]
  features: string[]
}

export const PLANS: PricingPlan[] = [
  {
    id: "entry",
    name: "Entry Level",
    priceUsd: 120,
    currency: "USD",
    description: "ATS-optimized (0–2 years exp…)",
    deliveryDays: 2,
    rush12hFeeUsd: 20,
    revisions: "3",
    breakdown: [
      { name: "Cover Letter", priceUsd: 30 },
      { name: "LinkedIn Profile Optimization", priceUsd: 30 },
      { name: "Resume", priceUsd: 60 },
    ],
    features: ["Resume", "Cover Letter", "LinkedIn Profile Optimization"],
  },
  {
    id: "mid",
    name: "Mid Level",
    priceUsd: 150,
    currency: "USD",
    description: "ATS-optimized (2–10 years exp…)",
    deliveryDays: 2,
    rush12hFeeUsd: 30,
    revisions: "5",
    breakdown: [
      { name: "Cover Letter", priceUsd: 40 },
      { name: "LinkedIn Profile Optimization", priceUsd: 40 },
      { name: "Resume", priceUsd: 70 },
    ],
    features: ["Resume", "Cover Letter", "LinkedIn Profile Optimization"],
  },
  {
    id: "executive",
    name: "Executive Level",
    priceUsd: 180,
    currency: "USD",
    description: "ATS-optimized (10+ years exp…)",
    deliveryDays: 2,
    rush12hFeeUsd: 40,
    revisions: "Unlimited",
    breakdown: [
      { name: "Cover Letter", priceUsd: 50 },
      { name: "LinkedIn Profile Optimization", priceUsd: 50 },
      { name: "Resume", priceUsd: 80 },
    ],
    features: ["Resume", "Cover Letter", "LinkedIn Profile Optimization"],
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

