import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { NzHero } from "@/components/sections/areas/nz/NzHero";
import { NzTrusted } from "@/components/sections/areas/nz/NzTrusted";
import { NzProcess } from "@/components/sections/areas/nz/NzProcess";
import { NzOtherServices } from "@/components/sections/areas/nz/NzOtherServices";
import { NzWhyAts } from "@/components/sections/areas/nz/NzWhyAts";
import { NzSamplesAndExtras } from "@/components/sections/areas/nz/NzSamplesAndExtras";
import { NzComparison } from "@/components/sections/areas/nz/NzComparison";
import { NzWhoAndMistakes } from "@/components/sections/areas/nz/NzWhoAndMistakes";
import { NzFAQ } from "@/components/sections/areas/nz/NzFAQ";
import { NzCTA } from "@/components/sections/areas/nz/NzCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Top ATS-friendly Resume or CV Writing Services in New Zealand",
  description:
    "Hire us for personally written, ATS-friendly Resume Writing services in New Zealand. Certified New Zealand resume writers create your resume at cheap prices",
  openGraph: {
    url: "https://resumesuplift.com/areas/new-zealand/",
    title: "Top ATS-friendly Resume or CV Writing Services in New Zealand",
    description:
      "Hire us for personally written, ATS-friendly Resume Writing services in New Zealand. Certified New Zealand resume writers create your resume at cheap prices",
  },
  twitter: {
    title: "Top ATS-friendly Resume or CV Writing Services in New Zealand",
    description:
      "Hire us for personally written, ATS-friendly Resume Writing services in New Zealand. Certified New Zealand resume writers create your resume at cheap prices",
  },
  alternates: {
    canonical: "https://resumesuplift.com/areas/new-zealand/",
  },
};

export default function NewZealandAreaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/areas/new-zealand/")} />
      <NzHero />
      <NzTrusted />
      <NzProcess />
      <NzOtherServices />
      <NzWhyAts />
      <Pricing />
      <Reviews />
      <NzSamplesAndExtras />
      <NzComparison />
      <NzWhoAndMistakes />
      <NzFAQ />
      <NzCTA />
    </>
  );
}
