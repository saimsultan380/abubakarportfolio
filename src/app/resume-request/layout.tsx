import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Request Form — Build Your Resume from Scratch",
  description:
    "Fill in your career details and let us craft a professional, ATS-optimized resume from scratch tailored to your target role and industry.",
  alternates: {
    canonical: "https://resumesuplift.com/resume-request/",
  },
  robots: { index: false, follow: false },
};

export default function ResumeRequestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
