import type { Metadata } from "next";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureBento } from "@/components/FeatureBento";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Create your family team, log your day in 15 seconds, get your AI Coach score, and build streaks together.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorks titleAs="h1" />
      <FeatureBento />
      <FinalCta />
    </>
  );
}
