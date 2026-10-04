import {
  IconBook,
  IconBot,
  IconBowl,
  IconCamera,
  IconFlame,
  IconSparkles,
  IconTarget,
  IconTrendUp,
  IconUsers,
} from "@/components/Icons";

export const pillars = [
  {
    slug: "fitness",
    sampleLog: { text: "Evening walk logged · 30 min", method: "Timer" },
    focus: "object-[80%_center]",
    name: "Fitness",
    image: "/fitness.jpeg",
    tagline: "Move more, without overthinking it",
    intro:
      "A live workout timer with GPS for outdoor runs, multiple exercises per session, and one tap to repeat your last workout.",
    features: [
      {
        icon: IconFlame,
        title: "Live workout timer",
        description: "Start a session and add as many exercises as you like as you go.",
      },
      {
        icon: IconTarget,
        title: "GPS for outdoor runs",
        description: "Track your route and distance when you head outside.",
      },
      {
        icon: IconTrendUp,
        title: "Repeat in one tap",
        description: "Did the same workout yesterday? Start it again with a single tap.",
      },
    ],
  },
  {
    slug: "diet",
    sampleLog: { text: "Lunch logged from a photo", method: "Photo" },
    focus: "object-[74%_center]",
    name: "Diet",
    image: "/cooking.jpeg",
    tagline: "Eat well without the tracking hassle",
    intro:
      "Snap a photo of your meal and AI logs the calories and macros automatically — no manual entry, no searching a food database.",
    features: [
      {
        icon: IconCamera,
        title: "Snap to log",
        description: "Take a photo of your meal and the AI does the logging.",
      },
      {
        icon: IconBowl,
        title: "Calories and macros, automatically",
        description: "No manual entry and no searching a food database.",
      },
      {
        icon: IconSparkles,
        title: "Or just say it",
        description: "Prefer talking? Say what you ate and it's logged.",
      },
    ],
  },
  {
    slug: "learning",
    sampleLog: { text: "25 min of reading logged", method: "Timer" },
    focus: "object-[70%_center]",
    name: "Learning",
    image: "/reading.jpeg",
    tagline: "Turn reading into a daily habit",
    intro:
      "Books, podcasts, and articles in one shared timer and library — the AI Coach turns every session into a score.",
    features: [
      {
        icon: IconBook,
        title: "Books, podcasts, and articles",
        description: "Every kind of learning, logged in one place.",
      },
      {
        icon: IconUsers,
        title: "A shared family library",
        description: "One timer and one library for the whole family.",
      },
      {
        icon: IconBot,
        title: "Every session scored",
        description: "The AI Coach turns each session into progress you can see.",
      },
    ],
  },
] as const;

export type Pillar = (typeof pillars)[number];

export function getPillar(slug: Pillar["slug"]) {
  return pillars.find((pillar) => pillar.slug === slug)!;
}
