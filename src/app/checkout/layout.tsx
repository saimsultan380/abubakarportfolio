import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Complete Your Resume Order",
  description:
    "Complete your resume or CV writing order securely. Choose your package, enter your details, and pay with card via Stripe.",
  alternates: {
    canonical: "https://resumesuplift.com/checkout/",
  },
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
