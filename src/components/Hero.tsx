import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { Reveal } from "@/components/Reveal";
import { IconBot, IconHeart, IconShield } from "@/components/Icons";

const chips = [
  { icon: IconBot, label: "AI-powered" },
  { icon: IconHeart, label: "Family-first" },
  { icon: IconShield, label: "Privacy-first" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-24"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-tint blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 -z-10 h-72 w-72 rounded-full bg-brand-tint/70 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 inline-block rounded-full bg-brand-tint px-4 py-1 text-sm font-medium text-brand-dark">
            Coming soon
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Small Daily Habits.
            <br />
            <span className="bg-gradient-to-r from-brand-dark to-brand bg-clip-text text-transparent">
              Extraordinary Lifelong Results.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-muted">
            BetterEveryday turns your family into a team: one shared mission a
            day, a 15-second check-in, and an AI coach that knows your
            family&apos;s patterns and pushes you to beat them.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted"
              >
                <chip.icon className="h-3.5 w-3.5 text-brand" />
                {chip.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-64 md:w-72">
          <div className="absolute -inset-8 -z-10 rounded-full bg-brand-tint blur-2xl animate-pulse-soft" />
          <div className="animate-float">
            <Image
              src="/hero-mockup.png"
              alt="BetterEveryday app"
              width={533}
              height={1147}
              className="w-full rounded-[2rem] shadow-2xl shadow-brand-dark/20"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
