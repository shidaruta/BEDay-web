import { Reveal } from "@/components/Reveal";
import {
  IconBot,
  IconTarget,
  IconFlame,
  IconAvatar,
  IconCamera,
  IconSparkles,
} from "@/components/Icons";

const features = [
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
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-tint/60 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Everything a family needs to build the habit
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={(i % 3) * 100}
              className="group rounded-2xl p-4 transition-colors duration-300 hover:bg-brand-tint/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
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
    </section>
  );
}
