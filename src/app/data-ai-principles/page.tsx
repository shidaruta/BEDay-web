import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Data & AI Principles",
  description: "How BetterEveryday uses data and AI, and the principles behind it.",
};

export default function DataAiPrinciplesPage() {
  return (
    <>
      <PageHeader title="Data & AI Principles" />
      <ComingSoon>
        Our Data &amp; AI Principles — how we use your data and how the AI Coach works — will be published here before the app launches.
      </ComingSoon>
    </>
  );
}
