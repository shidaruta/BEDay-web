import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BetterEveryday collects, uses, and protects your family's data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <ComingSoon>
        Our full Privacy Policy will be published here before the app launches.
      </ComingSoon>
    </>
  );
}
