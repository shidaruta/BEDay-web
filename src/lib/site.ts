import type { Metadata } from "next";
import { socials } from "@/lib/socials";

export const site = {
  name: "BetterEveryday",
  url: "https://app.bettereveryday.live",
  tagline: "Small Daily Habits. Extraordinary Lifelong Results.",
  description:
    "BetterEveryday is an AI-powered family wellness app that turns Learning, Fitness, and Diet into one daily habit loop — with an AI Coach, family streaks, and leaderboards.",
  sameAs: socials.map((social) => social.href),
};

export const routes = [
  "/",
  "/how-it-works",
  "/fitness",
  "/diet",
  "/learning",
  "/our-story",
  "/data-ai-principles",
  "/privacy",
  "/terms",
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: (typeof routes)[number];
};

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
