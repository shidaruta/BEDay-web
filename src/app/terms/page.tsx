import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using BetterEveryday.",
};

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
