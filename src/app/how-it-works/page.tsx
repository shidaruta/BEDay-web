import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureBento } from "@/components/FeatureBento";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  description:
    "Create your family team, log your day in 15 seconds, get your AI Coach score, and build streaks together.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorks titleAs="h1" />
      <FeatureBento />
      <FinalCta />
    </>
  );
}
