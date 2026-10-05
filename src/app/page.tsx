import { Hero } from "@/components/Hero";
import { WhyBetterEveryday } from "@/components/WhyBetterEveryday";
import { PillarExplorer } from "@/components/PillarExplorer";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureBento } from "@/components/FeatureBento";
import { Trust } from "@/components/Trust";
import { Social } from "@/components/Social";
import { Faq, faqs } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { pillars } from "@/lib/pillars";
import { site } from "@/lib/site";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      "@id": `${site.url}/#app`,
      name: site.name,
      url: site.url,
      description: site.description,
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      image: `${site.url}/phone-dashboard.png`,
      publisher: { "@id": `${site.url}/#organization` },
      featureList: pillars.flatMap((pillar) => pillar.features.map((feature) => feature.title)),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <WhyBetterEveryday />
      <PillarExplorer />
      <FeatureBento />
      <HowItWorks />
      <Trust />
      <Social />
      <Faq />
      <FinalCta />
    </>
  );
}
