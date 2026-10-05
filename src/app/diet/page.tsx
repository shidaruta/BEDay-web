import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";
import { pageMetadata } from "@/lib/site";

const pillar = getPillar("diet");

export const metadata: Metadata = pageMetadata({
  title: `${pillar.name} — ${pillar.tagline}`,
  description: pillar.intro,
  path: "/diet",
});

export default function DietPage() {
  return <PillarPage pillar={pillar} />;
}
