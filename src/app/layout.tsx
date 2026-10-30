import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AiAssistant } from "@/components/AiAssistant";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Hides scroll-animated content before first paint. If the app's JS never
// boots (failed or stale chunks), the class is dropped so nothing stays hidden.
const motionScript = `(function(d){d.classList.add("js");setTimeout(function(){if(!d.dataset.motion)d.classList.remove("js")},3000)})(document.documentElement)`;

const homeTitle =`${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s — ${site.name}`,
    default: homeTitle,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: homeTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/be-logo.png`,
      description: site.description,
      sameAs: site.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <JsonLd data={organizationJsonLd} />
        <SmoothScroll>
          <Nav />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
          <AiAssistant />
        </SmoothScroll>
      </body>
    </html>
  );
}
