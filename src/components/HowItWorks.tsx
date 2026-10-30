import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
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
    iconClass: "bg-lime text-mint-ink",
  },
];

export function HowItWorks({ titleAs = "h2" }: { titleAs?: "h1" | "h2" }) {
  return (
    <section id="how-it-works" className="bg-forest px-6 py-28">
      <div className="mx-auto grid max-w-[1080px] gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
        <div className="self-start md:sticky md:top-36">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.2em] text-mint uppercase">Small daily habits</span>
          </Reveal>
          <RevealText as={titleAs} className="mt-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
            How it works
          </RevealText>
          <Reveal delay={200}>
            <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold tracking-[0.08em] text-leaf uppercase">
              {steps.map((step, i) => (
                <span key={step.word} className="flex items-center gap-2">
                  {step.word}
                  {i < steps.length - 1 && <IconArrowRight className="h-4 w-4" />}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <ol className="space-y-6 md:space-y-10">
          {steps.map((step, i) => (
            <li key={step.word}>
              <Reveal
                direction="right"
                className="group rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-[translate,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-mint/40 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.iconClass}`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-6xl leading-none font-bold text-mint/20 transition-colors duration-300 group-hover:text-mint/50">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-6 text-[11px] font-bold tracking-[0.08em] text-mint uppercase">{step.word}</p>
                <h3 className="mt-1 mb-2 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/70 md:text-lg">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
