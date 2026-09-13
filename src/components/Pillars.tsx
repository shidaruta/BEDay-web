import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    name: "Learning",
    image: "/reading.jpeg",
    headline: "Turn reading into a daily habit",
    description:
      "Books, podcasts, and articles in one shared timer and library. Start a session with a tap, or just say what you read — the AI Coach turns every session into a score.",
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

export function Pillars() {
  return (
    <section className="relative overflow-hidden py-20">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Three pillars, one score
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Everything you log across Learning, Fitness, and Diet feeds one
          daily AI Coach score.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-4">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.name} delay={i * 100}>
            <div className="relative h-[380px] w-full overflow-hidden md:h-[440px]">
              <Image
                src={pillar.image}
                alt={pillar.headline}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

              <div className="relative flex h-full max-w-6xl flex-col justify-center px-6 mx-auto md:px-12">
                <span className="mb-3 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white uppercase backdrop-blur-sm">
                  {pillar.name}
                </span>
                <h3 className="max-w-md text-3xl font-semibold text-white md:text-4xl">
                  {pillar.headline}
                </h3>
                <p className="mt-4 max-w-md text-white/85">
                  {pillar.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
