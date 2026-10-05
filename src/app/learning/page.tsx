import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";
import { pageMetadata } from "@/lib/site";

const pillar = getPillar("learning");

export const metadata: Metadata = pageMetadata({
  title: `${pillar.name} — ${pillar.tagline}`,
  description: pillar.intro,
  path: "/learning",
});

export default function LearningPage() {
  return <PillarPage pillar={pillar} />;
}
