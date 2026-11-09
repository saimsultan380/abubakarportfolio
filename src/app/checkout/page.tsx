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
  const rawPkg = Array.isArray(searchParams.pkg) ? searchParams.pkg[0] : searchParams.pkg
  const selected = getPlanById(rawPlan) ?? PLANS[0]

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-8 md:mb-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-foreground">
            Checkout
          </h1>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Confirm your details and package, then send your order on WhatsApp.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground font-medium animate-pulse">
              Loading checkout...
            </div>
          }
        >
          <CheckoutClient initialPlanId={selected.id} initialPackageId={rawPkg} plans={PLANS} />
        </Suspense>
      </div>
    </section>
  )
}
