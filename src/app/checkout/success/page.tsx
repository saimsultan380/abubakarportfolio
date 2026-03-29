import Link from "next/link"
import { ClearCheckoutDraft } from "@/components/checkout/ClearCheckoutDraft"

export const dynamic = "force-dynamic"

function formatUsd(value: string | undefined): string {
  const n = value ? parseFloat(value) : NaN
  if (Number.isNaN(n)) return "$0"
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n)
}

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const provider = Array.isArray(searchParams.provider) ? searchParams.provider[0] : searchParams.provider
  const orderId = Array.isArray(searchParams.orderId) ? searchParams.orderId[0] : searchParams.orderId
  const amountParam = Array.isArray(searchParams.amount) ? searchParams.amount[0] : searchParams.amount
  const intent = Array.isArray(searchParams.intent) ? searchParams.intent[0] : searchParams.intent
  const orderNumber = Math.floor(10000 + Math.random() * 90000)
  const isRevamp = intent === "revamp"
  const isDirectPayment = provider === "direct"
  const amountDisplay = formatUsd(amountParam)

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 bg-background">
      <ClearCheckoutDraft />
      <div className="w-full max-w-2xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 md:p-10">
          {isDirectPayment ? (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                Order confirmed
              </div>
              <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight">
                Next steps
              </h1>
              <p className="mt-4 text-foreground font-medium">
                Thank you. Your order total is <span className="font-bold text-primary">{amountDisplay}</span>.
              </p>
              <p className="mt-3 text-sm text-muted-foreground font-medium leading-relaxed">
                We’ll contact you on WhatsApp shortly with secure payment instructions and to confirm your project
                details.
              </p>
              <p className="mt-3 text-sm text-muted-foreground font-medium">
                If you applied a coupon, use the discounted amount we confirm in that message.
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                Payment successful
              </div>
              <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight">
                You’re all set.
              </h1>
              <p className="mt-4 text-muted-foreground font-medium">
                Thanks for confirming the order and trusting our services. Your order number is{" "}
                <span className="font-bold text-foreground">#{orderNumber}</span>.
              </p>
              <p className="mt-2 text-muted-foreground font-medium">
                {isRevamp
                  ? "Please share the required revamp details so we can get started right away."
                  : "If we need any further details, our writing expert will reach out on WhatsApp or LinkedIn."}
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-background/40 p-4 text-sm text-muted-foreground font-medium">
                {isRevamp ? (
                  <>
                    <div className="font-bold text-foreground mb-2">Required for Resume Revamp</div>
                    <ul className="space-y-1">
                      <li>- Attach your current resume</li>
                      <li>- Share target job roles</li>
                      <li>- Provide WhatsApp number</li>
                      <li>- Provide LinkedIn profile URL</li>
                    </ul>
                    <div className="mt-3">
                      <Link
                        href="/resume-revamp"
                        className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition"
                      >
                        Fill Revamp Form
                      </Link>
                    </div>
                  </>
                ) : (
                  <span>
                    Keep an eye on your inbox and WhatsApp. We’ll guide you through the next steps.
                  </span>
                )}
              </div>

              {(provider || orderId) && (
                <div className="mt-6 rounded-2xl border border-border bg-background/40 p-4 text-sm text-muted-foreground font-medium">
                  {provider ? <div><span className="font-bold">Provider:</span> {provider}</div> : null}
                  {orderId ? <div><span className="font-bold">Order:</span> {orderId}</div> : null}
                </div>
              )}
            </>
          )}

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground px-6 sm:px-8 text-sm font-semibold uppercase tracking-wider shadow-xl shadow-primary/20 hover:bg-primary/90 transition"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-2xl border border-border bg-background/60 px-6 sm:px-8 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-background/80 transition"
            >
              Message on WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-2xl border border-border bg-background/60 px-6 sm:px-8 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-background/80 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

