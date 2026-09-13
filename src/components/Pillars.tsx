import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    name: "Learning",
    description:
      "Books, podcasts, and articles in one shared library. Start a session with a single tap, or just say what you read — the timer and your library do the rest.",
  },
  {
    name: "Fitness",
    description:
      "A live workout timer with GPS for outdoor runs, multiple exercises per session, and one tap to repeat your last workout.",
  },
  {
    name: "Diet",
    description:
      "Snap a photo of your meal and AI logs the calories and macros automatically — no manual entry, no searching a food database.",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
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
            <div className="h-full rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-brand-dark">
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
