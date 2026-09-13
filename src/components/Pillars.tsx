import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import {
  IconBot,
  IconTarget,
  IconFlame,
  IconAvatar,
  IconCamera,
  IconSparkles,
} from "@/components/Icons";

const pillars = [
  {
    name: "Learning",
    image: "/reading.jpeg",
    headline: "Turn reading into a daily habit",
    description:
      "Books, podcasts, and articles in one shared timer and library — the AI Coach turns every session into a score.",
  },
  {
    name: "Fitness",
    image: "/fitness.jpeg",
    headline: "Move more, without overthinking it",
    description:
      "A live workout timer with GPS for outdoor runs, multiple exercises per session, and one tap to repeat your last workout.",
  },
  {
    name: "Diet",
    image: "/cooking.jpeg",
    headline: "Eat well without the tracking hassle",
    description:
      "Snap a photo of your meal and AI logs the calories and macros automatically — no manual entry, no searching a food database.",
  },
];

const featureGroups = [
  [
    {
      title: "AI Coach",
      icon: IconBot,
      description:
        "A daily 0–100 score with personalized encouragement and suggestions, built from your actual activity.",
    },
    {
      title: "Family Missions",
      icon: IconTarget,
      description:
        "One shared mission a day keeps the whole family pointed at the same goal.",
    },
    {
      title: "Streaks & Leaderboards",
      icon: IconFlame,
      description:
        "Family and friend leaderboards, kept separate, with the same daily/weekly/monthly views.",
    },
  ],
  [
    {
      title: "Growing Avatar",
      icon: IconAvatar,
      description:
        "An avatar that visibly levels up as points and badges add up — especially motivating for kids.",
    },
    {
      title: "Snap-to-Log & Voice",
      icon: IconCamera,
      description:
        "Photo-log a meal, or just say what you did — no forms, no manual data entry.",
    },
    {
      title: "Family Highlight Story",
      icon: IconSparkles,
      description:
        "A weekly AI-generated recap of the family's activity, ready to share.",
    },
  ],
];

function PhotoBanner({
  pillar,
  priority = false,
}: {
  pillar: (typeof pillars)[number];
  priority?: boolean;
}) {
  return (
    <div className="relative h-[420px] w-full overflow-hidden md:h-[460px]">
      <Image
        src={pillar.image}
        alt={pillar.headline}
        fill
        sizes="100vw"
        className="object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-12">
        <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white uppercase backdrop-blur-sm">
          {pillar.name}
        </span>
        <h3 className="max-w-md text-3xl font-semibold text-white md:text-4xl">
          {pillar.headline}
        </h3>
        <p className="mt-4 max-w-md text-white/85">{pillar.description}</p>
      </div>
    </div>
  );
}

function FeatureGroup({ features }: { features: (typeof featureGroups)[number] }) {
  return (
    <div className="bg-surface py-16">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-10 px-6 sm:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal
            key={feature.title}
            delay={i * 100}
            className="group rounded-2xl p-4 text-center transition-colors duration-300 hover:bg-brand-tint/50 sm:text-left"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:mx-0">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">
              {feature.title}
            </h3>
            <p className="mt-2 text-ink-muted">{feature.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Pillars() {
  return (
    <section id="pillars" className="relative overflow-hidden py-20">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Three pillars, one score
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Everything you log across Learning, Fitness, and Diet feeds one
          daily AI Coach score.
        </p>
      </Reveal>

      <div className="mt-14">
        <Reveal direction="left">
          <PhotoBanner pillar={pillars[0]} priority />
        </Reveal>
        <FeatureGroup features={featureGroups[0]} />
        <Reveal direction="right">
          <PhotoBanner pillar={pillars[1]} />
        </Reveal>
        <FeatureGroup features={featureGroups[1]} />
        <Reveal direction="left">
          <PhotoBanner pillar={pillars[2]} />
        </Reveal>
      </div>
    </section>
  );
}
