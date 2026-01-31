import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings/editorial feel
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading", // Naming it font-heading which mapped to nothing in globals yet, but I can add it or just use it directly
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATS-Optimized Resumes & CVs That Land You Interviews",
  description: "Get more interviews with ATS-optimized, recruiter-approved resumes. tailored to your role and industry.",
  verification: {
    google: "3lT3phbyzEO6yh8nkCSIfsnzWpAhfxIhU_WNM2r60sQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 relative z-10 bg-background shadow-xl">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}

