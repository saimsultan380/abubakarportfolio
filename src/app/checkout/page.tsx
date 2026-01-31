import { getPlanById, PLANS } from "@/lib/plans"
import { CheckoutClient } from "../../components/checkout/CheckoutClient"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const rawPlan = Array.isArray(searchParams.plan) ? searchParams.plan[0] : searchParams.plan
  const selected = getPlanById(rawPlan) ?? PLANS[0]

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
            Checkout
          </h1>
        </div>

        <Suspense
          fallback={
            <div className="text-sm text-muted-foreground font-medium animate-pulse">
              Loading checkout...
            </div>
          }
        >
          <CheckoutClient initialPlanId={selected.id} plans={PLANS} />
        </Suspense>
      </div>
    </section>
  )
}

