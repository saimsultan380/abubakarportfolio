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
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24 bg-background">
      <div className="absolute top-0 left-0 w-[50%] h-[60%] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-accent-cool/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold border border-border">
            Secure Checkout
          </div>
          <h1 className="mt-5 text-3xl md:text-5xl font-black font-heading tracking-tight">
            Checkout
          </h1>
          <p className="mt-3 text-muted-foreground font-medium">
            Enter your details and choose how you want to pay. Your selected plan is pre-filled below.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 text-sm text-muted-foreground font-semibold">
              Loading checkout…
            </div>
          }
        >
          <CheckoutClient initialPlanId={selected.id} plans={PLANS} />
        </Suspense>
      </div>
    </section>
  )
}

