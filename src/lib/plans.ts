export type PlanId = "entry" | "mid" | "executive"

export type PackageId =
  | "cover"
  | "linkedin"
  | "resume"
  | "cover_linkedin"
  | "cover_resume"
  | "linkedin_resume"
  | "all"

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
    priceUsd: 150,
    currency: "USD",
    description: "Perfect for students, fresh graduates, and early-career professionals",
    deliveryDays: 2,
    rush12hFeeUsd: 20,
    revisions: "2",
    breakdown: [
      { name: "Resume", priceUsd: 70 },
      { name: "Cover Letter", priceUsd: 40 },
      { name: "LinkedIn Profile Optimization", priceUsd: 40 },
    ],
    features: ["Resume", "Cover Letter", "LinkedIn Profile Optimization"],
  },
  {
    id: "mid",
    name: "Mid Level",
    priceUsd: 200,
    currency: "USD",
    description: "Ideal for professionals ready for growth, promotions, and better roles",
    deliveryDays: 2,
    rush12hFeeUsd: 40,
    revisions: "5",
    breakdown: [
      { name: "Resume", priceUsd: 100 },
      { name: "Cover Letter", priceUsd: 50 },
      { name: "LinkedIn Profile Optimization", priceUsd: 50 },
    ],
    features: ["Resume", "Cover Letter", "LinkedIn Profile Optimization"],
  },
  {
    id: "executive",
    name: "Executive Level",
    priceUsd: 270,
    currency: "USD",
    description: "Best for managers, directors, and executives who want to lead with authority",
    deliveryDays: 2,
    rush12hFeeUsd: 50,
    revisions: "Unlimited",
    breakdown: [
      { name: "Resume", priceUsd: 150 },
      { name: "Cover Letter", priceUsd: 60 },
      { name: "LinkedIn Profile Optimization", priceUsd: 60 },
    ],
    features: ["Resume", "Cover Letter", "LinkedIn Profile Optimization"],
  },
]

export type PlanPackage = {
  id: PackageId
  name: string
  priceUsd: number
  includes: string[]
}

export function getPlanById(planId: string | undefined | null) {
  if (!planId) return null
  return PLANS.find((p) => p.id === planId) ?? null
}

export function planAmountCents(planId: string) {
  const plan = getPlanById(planId)
  if (!plan) return null
  return Math.round(plan.priceUsd * 100)
}

function getBreakdownPrice(plan: PricingPlan, itemName: string) {
  const found = plan.breakdown.find((b) => b.name.toLowerCase() === itemName.toLowerCase())
  return found?.priceUsd ?? null
}

export function getPlanPackage(plan: PricingPlan, packageId: PackageId): PlanPackage | null {
  const cover = getBreakdownPrice(plan, "Cover Letter")
  const linkedin = getBreakdownPrice(plan, "LinkedIn Profile Optimization")
  const resume = getBreakdownPrice(plan, "Resume")
  if (cover == null || linkedin == null || resume == null) return null

  switch (packageId) {
    case "cover":
      return { id: "cover", name: "Cover Letter", priceUsd: cover, includes: ["Cover Letter"] }
    case "linkedin":
      return {
        id: "linkedin",
        name: "LinkedIn Profile Optimization",
        priceUsd: linkedin,
        includes: ["LinkedIn Profile Optimization"],
      }
    case "resume":
      return { id: "resume", name: "Resume/CV", priceUsd: resume, includes: ["Resume"] }
    case "cover_linkedin":
      return {
        id: "cover_linkedin",
        name: "Cover Letter + LinkedIn Optimization",
        priceUsd: cover + linkedin,
        includes: ["Cover Letter", "LinkedIn Profile Optimization"],
      }
    case "cover_resume":
      return {
        id: "cover_resume",
        name: "Resume & Cover Letter",
        priceUsd: cover + resume,
        includes: ["Cover Letter", "Resume"],
      }
    case "linkedin_resume":
      return {
        id: "linkedin_resume",
        name: "Resume & LinkedIn Profile Optimization",
        priceUsd: linkedin + resume,
        includes: ["LinkedIn Profile Optimization", "Resume"],
      }
    case "all":
      return {
        id: "all",
        name: "All in One",
        priceUsd: plan.priceUsd,
        includes: [...plan.features],
      }
    default:
      return null
  }
}

export function getPlanPackageById(planId: string | undefined | null, packageId: string | undefined | null) {
  const plan = getPlanById(planId)
  if (!plan) return null
  const pkg = (packageId ?? "all") as PackageId
  return getPlanPackage(plan, pkg)
}

export function packageAmountCents(planId: string, packageId: string | undefined | null) {
  const plan = getPlanById(planId)
  if (!plan) return null
  const pkgId = (packageId ?? "all") as PackageId
  const pkg = getPlanPackage(plan, pkgId)
  if (!pkg) return null
  return Math.round(pkg.priceUsd * 100)
}
