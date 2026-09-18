import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedATS } from "@/components/sections/TrustedATS";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { Services } from "@/components/sections/Services";
import { SuccessStats } from "@/components/sections/SuccessStats";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Reviews } from "@/components/sections/Reviews";
import { RecentWork } from "@/components/sections/RecentWork";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best ATS Friendly Resume & CV Writing Services to Get Hired",
  description:
    "Hire a certified professional ATS Resume & CV writer. Book our ATS-friendly Resume writing services that help you get hired and win interviews. Get more Jobs",
  openGraph: {
    title: "Best ATS Friendly Resume & CV Writing Services to Get Hired",
    description:
      "Hire a certified professional ATS Resume & CV writer. Book our ATS-friendly Resume writing services that help you get hired and win interviews. Get more Jobs",
    url: canonicalUrl("/"),
  },
  twitter: {
    title: "Best ATS Friendly Resume & CV Writing Services to Get Hired",
    description:
      "Hire a certified professional ATS Resume & CV writer. Book our ATS-friendly Resume writing services that help you get hired and win interviews. Get more Jobs",
  },
  alternates: {
    canonical: canonicalUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[]} />
      <Hero />
      <TrustedATS />
      <CompanyMarquee />
      <Services />
      <SuccessStats />
      <WhyChooseMe />
      <Reviews />
      <RecentWork />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
