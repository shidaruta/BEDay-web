import { Hero } from "@/components/Hero";
import { WhyBetterEveryday } from "@/components/WhyBetterEveryday";
import { PillarExplorer } from "@/components/PillarExplorer";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureBento } from "@/components/FeatureBento";
import { Trust } from "@/components/Trust";
import { Social } from "@/components/Social";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyBetterEveryday />
      <PillarExplorer />
      <FeatureBento />
      <HowItWorks />
      <Trust />
      <Social />
      <Faq />
      <FinalCta />
    </>
  );
}
