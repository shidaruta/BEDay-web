import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("fitness");

export const metadata: Metadata = {
  title: "Fitness",
  description: pillar.intro,
};

export default function FitnessPage() {
  return <PillarPage pillar={pillar} />;
}
