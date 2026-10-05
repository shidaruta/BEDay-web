import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";
import { pageMetadata } from "@/lib/site";

const pillar = getPillar("fitness");

export const metadata: Metadata = pageMetadata({
  title: `${pillar.name} — ${pillar.tagline}`,
  description: pillar.intro,
  path: "/fitness",
});

export default function FitnessPage() {
  return <PillarPage pillar={pillar} />;
}
