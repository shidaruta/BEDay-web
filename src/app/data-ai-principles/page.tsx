import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "Data & AI Principles",
  description:
    "How the BetterEveryday AI Coach scores your day, what family data it uses, and our commitment to transparent AI.",
  path: "/data-ai-principles",
});

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
