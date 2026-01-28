import Link from "next/link"

export default function CheckoutCancelPage() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-black uppercase tracking-widest border border-border">
            Payment cancelled
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-black font-heading tracking-tight">
            No worries.
          </h1>
          <p className="mt-4 text-muted-foreground font-medium">
            Your payment wasn’t completed. You can try again anytime.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/checkout"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground px-8 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary/90 transition"
            >
              Back to Checkout
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-background/60 px-8 text-sm font-black uppercase tracking-widest text-foreground hover:bg-background/80 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

