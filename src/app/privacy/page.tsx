import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How BetterEveryday protects your family's data — privacy-first design, parental controls for kids, and we never sell your data.",
  path: "/privacy",
});

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
