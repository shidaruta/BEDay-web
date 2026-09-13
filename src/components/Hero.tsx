import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-brand-tint px-4 py-1 text-sm font-medium text-brand-dark">
            Coming soon
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Small Daily Habits.
            <br />
            Extraordinary Lifelong Results.
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-muted">
            BetterEveryday turns your family into a team: one shared mission a
            day, a 15-second check-in, and an AI coach that knows your
            family&apos;s patterns and pushes you to beat them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-muted">
              App Store — coming soon
            </span>
            <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-ink-muted">
              Google Play — coming soon
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-64 md:w-72">
          <div className="absolute -inset-8 -z-10 rounded-full bg-brand-tint blur-2xl" />
          <Image
            src="/hero-mockup.png"
            alt="BetterEveryday app"
            width={700}
            height={1238}
            className="w-full rounded-[2.5rem] shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
