import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms for using BetterEveryday, the family wellness app for Fitness, Diet, and Learning with an AI Coach.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <ComingSoon>
        Our Terms of Service will be published here before the app launches.
      </ComingSoon>
    </>
  );
}
