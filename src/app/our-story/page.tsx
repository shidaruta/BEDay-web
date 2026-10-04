import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Social } from "@/components/Social";
import { IconArrowRight, IconBook, IconBowl, IconDumbbell } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "BetterEveryday started as a hand-drawn reflection chart on a wall at home — a family writing down small, good choices every day.",
};

const columns = [
  {
    from: "Eating Healthy",
    examples: "Mangoes, half-boiled eggs, spinach soup, grapes",
    to: "Diet",
    icon: IconBowl,
  },
  {
    from: "Exercise",
    examples: "Cycling, running, football, burpees, a walk",
    to: "Fitness",
    icon: IconDumbbell,
  },
  {
    from: "Reading",
    examples: "Sherlock Holmes, Oliver Twist",
    to: "Learning",
    icon: IconBook,
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="It started on a sheet of paper."
        intro="Before there was an app, there was a reflection chart on a wall at home — and a family writing down one small, good choice at a time."
      />

      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-24 md:grid-cols-2">
        <Reveal direction="left">
          <figure className="-rotate-1 rounded-[2rem] bg-surface p-3 shadow-xl ring-1 ring-line transition-transform duration-500 hover:rotate-0">
            <Image
              src="/genesis.jpeg"
              alt="A hand-drawn reflection chart pinned to a wooden wall, with columns for Eating Healthy, Exercise, Reading, and Idea Generation filled in by two children"
              width={1280}
              height={960}
              className="rounded-[1.5rem]"
              sizes="(min-width: 768px) 480px, 100vw"
              priority
            />
            <figcaption className="px-2 pt-3 pb-1 text-center text-sm text-outline">
              Where it all began: our family&apos;s reflection chart.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal direction="right" className="space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            It was a big sheet of paper with a few green lines, pinned below a
            row of the kids&apos; paintings. Each day, the children filled it
            in: what they ate, how they moved, and what they read.
          </p>
          <p>
            There was even a column for big ideas — like a plan to renovate
            their room.
          </p>
          <p>
            No points. No app. Just the simple habit of noticing small, good
            choices and writing them down together.
          </p>
          <p className="font-semibold text-ink">
            When small choices are visible, they add up — and a family starts
            cheering each other on.
          </p>
        </Reveal>
      </section>

      <section className="bg-surface-low px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="From paper to app" title="The same three columns, grown up">
            BetterEveryday keeps what worked on the wall, and adds an AI Coach,
            family streaks, and a place where everyone can see each
            other&apos;s progress.
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-3">
            {columns.map((column, i) => (
              <Reveal
                key={column.to}
                delay={i * 120}
                className="rounded-[2rem] bg-surface p-7 shadow-sm"
              >
                <p className="text-[11px] font-bold tracking-[0.08em] text-outline uppercase">On the chart</p>
                <p className="mt-1 text-lg font-semibold text-ink">{column.from}</p>
                <p className="mt-1 text-sm text-ink-muted italic">{column.examples}</p>

                <div className="my-5 flex items-center gap-3 text-brand">
                  <span className="h-px flex-1 bg-line" />
                  <IconArrowRight className="h-5 w-5 rotate-90" />
                  <span className="h-px flex-1 bg-line" />
                </div>

                <p className="text-[11px] font-bold tracking-[0.08em] text-brand uppercase">In the app</p>
                <p className="mt-1 flex items-center gap-2 text-2xl font-bold text-ink">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-mint-ink">
                    <column.icon className="h-5 w-5" />
                  </span>
                  {column.to}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-xl leading-relaxed text-ink">
              When one person becomes better, the family grows stronger. And
              when families grow stronger, communities become better too.
            </p>
            <p className="mt-6 text-xs font-bold tracking-[0.08em] text-brand-dark uppercase">
              Not about being perfect. Just becoming a little better, every day.
            </p>
          </Reveal>
        </div>
      </section>

      <Social />
    </>
  );
}
