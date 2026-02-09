import Link from "next/link"
import { ClearCheckoutDraft } from "@/components/checkout/ClearCheckoutDraft"

export const dynamic = "force-dynamic"

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const provider = Array.isArray(searchParams.provider) ? searchParams.provider[0] : searchParams.provider
  const orderId = Array.isArray(searchParams.orderId) ? searchParams.orderId[0] : searchParams.orderId
  const intent = Array.isArray(searchParams.intent) ? searchParams.intent[0] : searchParams.intent
  const orderNumber = Math.floor(10000 + Math.random() * 90000)
  const isRevamp = intent === "revamp"

  return (
    <section className="py-16 md:py-24 bg-background">
      <ClearCheckoutDraft />
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
            Payment successful
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-black font-heading tracking-tight">
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
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition"
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground px-8 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary/90 transition"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/447478564745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-background/60 px-8 text-sm font-black uppercase tracking-widest text-foreground hover:bg-background/80 transition"
            >
              Message on WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-abubakar-resumewriter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-background/60 px-8 text-sm font-black uppercase tracking-widest text-foreground hover:bg-background/80 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

