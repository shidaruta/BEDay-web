import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IconCheck, IconFlame, IconHeart, IconSparkles } from "@/components/Icons";

const anchors = [
  {
    icon: IconSparkles,
    title: "One small habit.",
    description:
      "A 15-second check-in is all it takes — a timer, a photo, or your voice.",
    tag: "Simple by design",
    iconClass: "bg-mint text-mint-ink",
  },
  {
    icon: IconHeart,
    title: "One better choice.",
    description:
      "Move a little more, eat a little better, read a little longer. Every choice counts toward your family's day.",
    tag: "Every choice counts",
    iconClass: "bg-leaf text-mint-ink",
  },
  {
    icon: IconFlame,
    title: "One day at a time.",
    description:
      "Built for consistency, not perfection. Your family streak grows one day at a time.",
    tag: "Progress over perfection",
    iconClass: "bg-lime text-mint-ink",
  },
];

export function WhyBetterEveryday() {
  return (
    <section id="why" className="bg-surface-low px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Why BetterEveryday?"
          title={
            <>
              Life doesn&apos;t change in one big moment.{" "}
              <span className="text-brand">
                It changes in the small choices we make every day.
              </span>
            </>
          }
        >
          We want our families to be healthier, eat better, move more, read
          more, learn more and spend more meaningful time together — but busy
          lives often get in the way.{" "}
          <strong className="text-ink">BetterEveryday makes progress simple.</strong>
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {anchors.map((anchor, i) => (
            <Reveal
              key={anchor.title}
              delay={i * 120}
              className="flex flex-col justify-between rounded-[2rem] bg-surface p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div>
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${anchor.iconClass}`}>
                  <anchor.icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.08em] text-brand uppercase">
                  0{i + 1}
                </span>
                <h3 className="mt-1 mb-3 text-xl font-semibold text-ink">{anchor.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{anchor.description}</p>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-brand">
                {anchor.tag}
                <IconCheck className="h-4 w-4" />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-ink">
            Because when one person becomes better, the family grows stronger.
            And when families grow stronger, communities become better too.
          </p>
          <p className="mt-6 text-xs font-bold tracking-[0.08em] text-brand-dark uppercase">
            Not about being perfect. Just becoming a little better, every day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
