import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Samples — ATS-Optimized CV Examples",
  description:
    "Browse real resume samples crafted by Resumes Uplift. See ATS-optimized, recruiter-approved CV designs for every career level and industry.",
  alternates: {
    canonical: "https://resumesuplift.com/samples/",
  },
  openGraph: {
    title: "Resume Samples — ATS-Optimized CV Examples | Resumes Uplift",
    description:
      "Browse real resume samples crafted by Resumes Uplift. ATS-optimized, recruiter-approved CV designs for every career level.",
    url: "https://resumesuplift.com/samples/",
  },
};

export default function SamplesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
