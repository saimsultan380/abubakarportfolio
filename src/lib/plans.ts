export type PlanId = "professional" | "executive" | "transition"

export type PricingPlan = {
  id: PlanId
  name: string
  priceUsd: number
  currency: "USD"
  description: string
  features: string[]
}

export const PLANS: PricingPlan[] = [
  {
    id: "professional",
    name: "Professional Resume",
    priceUsd: 149,
    currency: "USD",
    description: "Perfect for entry to mid-level professionals seeking a competitive edge.",
    features: [
      "ATS-Optimized Resume Writing",
      "Strategic Keyword Research",
      "Industry-Specific Formatting",
      "2 Rounds of Revisions",
      "48-Hour Delivery",
    ],
  },
  {
    id: "executive",
    name: "The Executive",
    priceUsd: 299,
    currency: "USD",
    description: "A complete overhaul for senior leaders and executive-level candidates.",
    features: [
      "Everything in Professional",
      "LinkedIn Profile Optimization",
      "Targeted Cover Letter",
      "Unlimited Revisions",
      "Direct WhatsApp Priority",
      "Post-Interview Guide",
    ],
  },
  {
    id: "transition",
    name: "Career Transition",
    priceUsd: 199,
    currency: "USD",
    description: "Designed for those changing industries or returning to the workforce.",
    features: [
      "Transferable Skills Audit",
      "Career Pivot Strategy",
      "Strategic Cover Letter",
      "ATS Framework Refresh",
      "Job Search Guide",
    ],
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

