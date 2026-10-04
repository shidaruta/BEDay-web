import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IconArrowRight, IconBot, IconCamera, IconFlame, IconUsers } from "@/components/Icons";

const steps = [
  {
    word: "Create",
    icon: IconUsers,
    title: "Start your family team",
    description: "Invite everyone with a code, a link, or a QR scan.",
    iconClass: "bg-brand-tint text-brand-dark",
  },
  {
    word: "Track",
    icon: IconCamera,
    title: "Log your day in 15 seconds",
    description: "A timer, a photo, or your voice — across Fitness, Diet, and Learning.",
    iconClass: "bg-mint text-mint-ink",
  },
  {
    word: "Improve",
    icon: IconBot,
    title: "Get your AI Coach score",
    description: "Your day gets a score, with encouragement and one next step.",
    iconClass: "bg-green-500 text-white",
  },
  {
    word: "Grow Together",
    icon: IconFlame,
    title: "Build streaks as a family",
    description: "Watch the family streak wall climb, and cheer each other on.",
    iconClass: "bg-brand-dark text-white",
  },
];

export function HowItWorks({ titleAs = "h2" }: { titleAs?: "h1" | "h2" }) {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1080px] px-6 py-24">
      <SectionHeading eyebrow="Effortless simplicity" title="How it works" as={titleAs}>
        <span className="flex flex-wrap items-center justify-center gap-x-2 text-sm font-bold tracking-[0.08em] text-brand-dark uppercase">
          {steps.map((step, i) => (
            <span key={step.word} className="flex items-center gap-2">
              {step.word}
              {i < steps.length - 1 && <IconArrowRight className="h-4 w-4" />}
            </span>
          ))}
        </span>
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal
            key={step.word}
            delay={i * 120}
            className="group rounded-[2rem] bg-surface p-6 shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30"
          >
            <span className="text-5xl font-bold text-brand/25 transition-colors duration-300 group-hover:text-brand/60">
              0{i + 1}
            </span>
            <div className="mt-5">
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${step.iconClass}`}>
                <step.icon className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-bold tracking-[0.08em] text-brand uppercase">{step.word}</p>
              <h3 className="mt-1 mb-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-sm text-ink-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
