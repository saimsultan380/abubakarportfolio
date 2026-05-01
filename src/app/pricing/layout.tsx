import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Resume & CV Writing Packages",
  description:
    "Choose from Entry, Mid, or Executive level resume packages. Cover letter, LinkedIn optimization, and full bundles available. Transparent pricing, no hidden fees.",
  alternates: {
    canonical: "https://resumesuplift.com/pricing/",
  },
  openGraph: {
    title: "Pricing — Resume & CV Writing Packages | Resumes Uplift",
    description:
      "Choose from Entry, Mid, or Executive level resume packages. Cover letter, LinkedIn optimization, and full bundles available.",
    url: "https://resumesuplift.com/pricing/",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
