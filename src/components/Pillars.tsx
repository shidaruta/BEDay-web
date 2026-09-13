import Image from "next/image";
import { Reveal } from "@/components/Reveal";

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

      {/* Lead: full-bleed banner for Learning */}
      <Reveal className="mt-14">
        <div className="relative h-[420px] w-full overflow-hidden md:h-[500px]">
          <Image
            src="/reading.jpeg"
            alt="Turn reading into a daily habit"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-12">
            <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white uppercase backdrop-blur-sm">
              Learning
            </span>
            <h3 className="max-w-md text-3xl font-semibold text-white md:text-4xl">
              Turn reading into a daily habit
            </h3>
            <p className="mt-4 max-w-md text-white/85">
              Books, podcasts, and articles in one shared timer and library —
              the AI Coach turns every session into a score.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Contained, alternating split panels for Fitness and Diet */}
      <div className="mx-auto mt-20 max-w-6xl space-y-20 px-6">
        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="mb-3 inline-block rounded-full bg-brand-tint px-3 py-1 text-xs font-medium tracking-wide text-brand-dark uppercase">
              Fitness
            </span>
            <h3 className="text-2xl font-semibold text-ink md:text-3xl">
              Move more, without overthinking it
            </h3>
            <p className="mt-4 text-ink-muted">
              A live workout timer with GPS for outdoor runs, multiple
              exercises per session, and one tap to repeat your last workout.
            </p>
          </div>
          <div className="relative order-1 h-72 overflow-hidden rounded-3xl shadow-xl md:order-2 md:h-96">
            <Image
              src="/fitness.jpeg"
              alt="Move more, without overthinking it"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl md:h-96">
            <Image
              src="/cooking.jpeg"
              alt="Eat well without the tracking hassle"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-brand-tint px-3 py-1 text-xs font-medium tracking-wide text-brand-dark uppercase">
              Diet
            </span>
            <h3 className="text-2xl font-semibold text-ink md:text-3xl">
              Eat well without the tracking hassle
            </h3>
            <p className="mt-4 text-ink-muted">
              Snap a photo of your meal and AI logs the calories and macros
              automatically — no manual entry, no searching a food database.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
