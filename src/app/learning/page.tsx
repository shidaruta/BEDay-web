import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";

const pillar = getPillar("learning");

export const metadata: Metadata = {
  title: "Learning",
  description: pillar.intro,
};

export default function LearningPage() {
  return <PillarPage pillar={pillar} />;
}
