import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbsForPath } from "@/lib/seo";
import { CanadaHero } from "@/components/sections/areas/canada/CanadaHero";
import { CanadaProfessional } from "@/components/sections/areas/canada/CanadaProfessional";
import { CanadaCovers } from "@/components/sections/areas/canada/CanadaCovers";
import { CanadaOtherServices } from "@/components/sections/areas/canada/CanadaOtherServices";
import { CanadaProcess } from "@/components/sections/areas/canada/CanadaProcess";
import { CanadaSamples } from "@/components/sections/areas/canada/CanadaSamples";
import { CanadaWhyAndWho } from "@/components/sections/areas/canada/CanadaWhyAndWho";
import { CanadaStrongAndCities } from "@/components/sections/areas/canada/CanadaStrongAndCities";
import { CanadaWhyChoose } from "@/components/sections/areas/canada/CanadaWhyChoose";
import { CanadaFAQ } from "@/components/sections/areas/canada/CanadaFAQ";
import { CanadaCTA } from "@/components/sections/areas/canada/CanadaCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "Top ATS Resume Writing Services in Canada: #1 Resume Writers",
  description:
    "Get job-winning, professional ATS resume and CV writing services in Canada. Our resume writers in Canada write #1 resumes that boost interview rates by 75%!",
  openGraph: {
    url: "https://resumesuplift.com/areas/canada/",
    title: "Top ATS Resume Writing Services in Canada: #1 Resume Writers",
    description:
      "Get job-winning, professional ATS resume and CV writing services in Canada. Our resume writers in Canada write #1 resumes that boost interview rates by 75%!",
  },
  twitter: {
    title: "Top ATS Resume Writing Services in Canada: #1 Resume Writers",
    description:
      "Get job-winning, professional ATS resume and CV writing services in Canada. Our resume writers in Canada write #1 resumes that boost interview rates by 75%!",
  },
  alternates: {
    canonical: "https://resumesuplift.com/areas/canada/",
  },
};

export default function CanadaAreaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={getBreadcrumbsForPath("/areas/canada/")} />
      <CanadaHero />
      <CanadaProfessional />
      <CanadaCovers />
      <CanadaOtherServices />
      <CanadaProcess />
      <Pricing />
      <Reviews />
      <CanadaSamples />
      <CanadaWhyAndWho />
      <CanadaStrongAndCities />
      <CanadaWhyChoose />
      <CanadaFAQ />
      <CanadaCTA />
    </>
  );
}
