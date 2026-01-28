import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Impact } from "@/components/sections/Impact";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Reviews } from "@/components/sections/Reviews";
import { RecentWork } from "@/components/sections/RecentWork";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Impact />
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
