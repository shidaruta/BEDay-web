import { Reveal } from "@/components/Reveal";
import { IconBook, IconDumbbell, IconBowl } from "@/components/Icons";

const pillars = [
  {
    name: "Learning",
    icon: IconBook,
    description:
      "Books, podcasts, and articles in one shared library. Start a session with a single tap, or just say what you read — the timer and your library do the rest.",
  },
  {
    name: "Fitness",
    icon: IconDumbbell,
    description:
      "A live workout timer with GPS for outdoor runs, multiple exercises per session, and one tap to repeat your last workout.",
  },
  {
    name: "Diet",
    icon: IconBowl,
    description:
      "Snap a photo of your meal and AI logs the calories and macros automatically — no manual entry, no searching a food database.",
  },
];

export function Pillars() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand-tint blur-3xl" />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Three pillars, one score
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Everything you log across Learning, Fitness, and Diet feeds one
          daily AI Coach score.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.name} delay={i * 100}>
            <div className="group h-full rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand-dark transition-transform duration-300 group-hover:scale-110">
                <pillar.icon />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-brand-dark">
                {pillar.name}
              </h3>
              <p className="mt-3 text-ink-muted">{pillar.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
