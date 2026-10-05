import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/site";

const priorities: Partial<Record<(typeof routes)[number], number>> = {
  "/": 1,
  "/how-it-works": 0.8,
  "/fitness": 0.8,
  "/diet": 0.8,
  "/learning": 0.8,
  "/our-story": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: priorities[path] ?? 0.3,
  }));
}
