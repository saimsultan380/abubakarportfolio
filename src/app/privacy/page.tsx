export const metadata = {
  title: "Privacy Policy",
  description: "Read the Resumes Uplift privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://resumesuplift.com/privacy/",
  },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Effective date: {new Date().toLocaleDateString("en-GB")}
          </p>
        </header>

        <section className="space-y-8 text-sm md:text-base text-foreground/90 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Overview</h2>
            <p className="text-muted-foreground">
              This Privacy Policy explains how Resumes Uplift collects, uses, and protects your information when you use
              our website and services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <span className="text-foreground font-semibold">Contact details</span> such as your name, email address,
                phone number, and any details you submit through forms.
              </li>
              <li>
                <span className="text-foreground font-semibold">Service details</span> such as your target job roles,
                notes, and other information you provide for your resume/CV, cover letter, or LinkedIn optimization.
              </li>
              <li>
                <span className="text-foreground font-semibold">Files you share</span> such as your CV/resume (PDF/DOCX)
                if you choose to provide it.
              </li>
              <li>
                <span className="text-foreground font-semibold">Basic usage data</span> (e.g., pages visited) may be
                collected by standard website analytics and logs.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">How we use your information</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>To provide, improve, and deliver the requested services.</li>
              <li>To communicate with you about your request, order, or support.</li>
              <li>To process payments and prevent fraud (when applicable).</li>
              <li>To maintain the security and performance of the website.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Payments</h2>
            <p className="text-muted-foreground">
              Payments may be processed by third-party providers (e.g., Stripe or PayPal). We do not store your full card
              details on our servers. Payment providers may collect and process information according to their own
              privacy policies.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Sharing of information</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share information only when necessary to provide the
              service (for example, payment processing) or when required by law.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Data retention</h2>
            <p className="text-muted-foreground">
              We retain personal information only for as long as needed to provide services, meet legal obligations, and
              resolve disputes. You may request deletion of your data where applicable.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Security</h2>
            <p className="text-muted-foreground">
              We use reasonable safeguards to protect your information. However, no online method of transmission or
              storage is 100% secure.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a className="text-primary font-semibold hover:underline" href="mailto:resumesuplift@gmail.com">
                resumesuplift@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

