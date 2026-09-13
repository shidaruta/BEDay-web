import { Reveal } from "@/components/Reveal";

const steps = [
  {
    step: "01",
    title: "Create your family",
    description:
      "Start a family group and invite everyone with a code, a link, or a QR scan.",
  },
  {
    step: "02",
    title: "Log your day",
    description:
      "A 15-second check-in — a timer, a photo, or your voice — across Learning, Fitness, and Diet.",
  },
  {
    step: "03",
    title: "Get your AI Coach score",
    description:
      "Your day is scored 0–100, with personalized encouragement and suggestions.",
  },
  {
    step: "04",
    title: "Build streaks together",
    description:
      "Watch the family streak wall climb, and compete on leaderboards with family and friends.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            How it works
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 100} className="group">
              <span className="inline-block text-sm font-semibold text-brand transition-transform duration-300 group-hover:scale-125">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
