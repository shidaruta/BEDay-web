import { Reveal } from "@/components/Reveal";
import { IconBot, IconHeart, IconFlame, IconShield } from "@/components/Icons";

const values = [
  {
    icon: IconBot,
    title: "AI Coach",
    description: "Scores your day and coaches you forward",
  },
  {
    icon: IconHeart,
    title: "Family first",
    description: "Adults and kids, playing as one team",
  },
  {
    icon: IconFlame,
    title: "Real streaks",
    description: "Built for consistency, not perfection",
  },
  {
    icon: IconShield,
    title: "Privacy first",
    description: "Your family's data stays yours",
  },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-brand-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4">
        {values.map((value, i) => (
          <Reveal key={value.title} delay={i * 80} className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
              <value.icon className="h-5 w-5" />
            </div>
            <p className="mt-3 font-semibold text-white">{value.title}</p>
            <p className="mt-1 text-sm text-white/70">{value.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
