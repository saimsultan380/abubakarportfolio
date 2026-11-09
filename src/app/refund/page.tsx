import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";

export const metadata = {
  title: "Refund Policy",
  description:
    "Read the Resumes Uplift refund policy for cancellations, partial refunds, missed deadlines, and how to contact us about an order.",
  alternates: {
    canonical: "https://resumesuplift.com/refund/",
  },
  robots: { index: false, follow: false },
};

export default function RefundPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/refund/")} />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
        <div className="container px-4 mx-auto max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
              Refund Policy
            </h1>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Effective date: {new Date().toLocaleDateString("en-GB")}
            </p>
          </header>

          <section className="space-y-8 text-sm md:text-base text-foreground/90 leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Before work begins
              </h2>
              <p className="text-muted-foreground">
                You can cancel for a full refund until a writer starts on your
                project.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                After work begins
              </h2>
              <p className="text-muted-foreground">
                If you cancel after work has started but before your first draft
                is delivered, you will receive a 50% refund.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                After your first draft
              </h2>
              <p className="text-muted-foreground">
                Once a first draft is delivered, the order is not refundable.
                Instead, you can request revisions within the limits of your
                package. Revisions cover changes for the same target role.
                Rewriting for a different role or level is a new project.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Missed deadlines
              </h2>
              <p className="text-muted-foreground">
                If we miss your delivery deadline by more than 3 business days,
                and the delay was not caused by missing information from you, you
                may request a full refund.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Results
              </h2>
              <p className="text-muted-foreground">
                We do not guarantee interviews, job offers, or hiring outcomes,
                and refunds are not given based on them.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Inactive orders
              </h2>
              <p className="text-muted-foreground">
                If we do not hear from you for 30 days after a draft is
                delivered, your order is considered complete.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Contact us first
              </h2>
              <p className="text-muted-foreground">
                If you have a problem, email{" "}
                <a
                  className="text-primary font-semibold hover:underline"
                  href="mailto:resumesuplift@gmail.com"
                >
                  resumesuplift@gmail.com
                </a>
                . We respond within 48 hours and will work with you to resolve
                it.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-border">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Related policies
              </h2>
              <p className="text-muted-foreground">
                See also our{" "}
                <a
                  className="text-primary font-semibold hover:underline"
                  href="/terms/"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="text-primary font-semibold hover:underline"
                  href="/privacy/"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
