import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
export const metadata = {
  title: "Terms of Service",
  description: "Read the Resumes Uplift terms of service governing the use of our professional resume and CV writing services.",
  alternates: {
    canonical: "https://resumesuplift.com/terms/",
  },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/terms/")} />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Effective date: {new Date().toLocaleDateString("en-GB")}
          </p>
        </header>

        <section className="space-y-8 text-sm md:text-base text-foreground/90 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Overview</h2>
            <p className="text-muted-foreground">
              These Terms govern your use of the Resumes Uplift website and services. By using this website or placing
              an order, you agree to these Terms.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Services</h2>
            <p className="text-muted-foreground">
              We provide professional resume/CV writing, cover letter writing, LinkedIn profile optimization, and related
              career document services. Deliverables depend on the package you select.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Client responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Provide accurate information about your experience and career history.</li>
              <li>Review drafts and provide feedback in a timely manner.</li>
              <li>Do not request false information or misrepresentation.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Delivery & revisions</h2>
            <p className="text-muted-foreground">
              Delivery timelines and revision counts depend on the package selected and the information provided. Rush
              delivery (if offered) may require an additional fee. Revisions cover improvements within the agreed scope
              and do not include entirely new content unrelated to the original request.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Payments</h2>
            <p className="text-muted-foreground">
              Prices are shown at checkout. Payments may be processed through third-party payment providers (such as
              Stripe or PayPal). You agree to the provider&apos;s terms when completing a payment.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">No guarantee of employment</h2>
            <p className="text-muted-foreground">
              While our services can improve clarity, positioning, and ATS compatibility, we cannot guarantee interviews,
              job offers, or employment outcomes. Hiring decisions are made solely by employers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Refunds</h2>
            <p className="text-muted-foreground">
              Because services are customized and time-based, refunds are generally not offered once work has begun.
              If you believe there is an issue with delivery or quality, contact us and we will work to resolve it
              through revisions as outlined by your package.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact</h2>
            <p className="text-muted-foreground">
              Questions about these Terms? Contact{" "}
              <a className="text-primary font-semibold hover:underline" href="mailto:resumesuplift@gmail.com">
                resumesuplift@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}

