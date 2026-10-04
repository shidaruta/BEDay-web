import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("diet");

export const metadata: Metadata = {
  title: "Diet",
  description: pillar.intro,
};

export default function DietPage() {
  return <PillarPage pillar={pillar} />;
}
