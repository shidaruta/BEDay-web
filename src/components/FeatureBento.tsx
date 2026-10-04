import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  IconArrowRight,
  IconAvatar,
  IconBot,
  IconCamera,
  IconFlame,
  IconSparkles,
  IconTarget,
  IconUsers,
  IconMic,
  IconClock,
  IconPlay,
} from "@/components/Icons";

function Card({
  span,
  icon: Icon,
  tag,
  title,
  description,
  delay,
  children,
}: {
  span: string;
  icon: (props: { className?: string }) => React.ReactNode;
  tag: string;
  title: string;
  description: string;
  delay: number;
  children?: React.ReactNode;
}) {
  return (
    <Reveal
      delay={delay}
      className={`flex flex-col justify-between rounded-[2rem] bg-surface p-7 shadow-sm transition-shadow duration-300 hover:shadow-md ${span}`}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <Icon className="h-8 w-8 text-brand" />
          <span className="rounded-full bg-mint px-2.5 py-1 text-[11px] font-bold tracking-[0.08em] text-mint-ink uppercase">
            {tag}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
      {children && <div className="mt-6">{children}</div>}
    </Reveal>
  );
}

const avatarStages = [
  { emoji: "🌱", label: "Level 1" },
  { emoji: "🌿", label: "Level 5" },
  { emoji: "🌳", label: "Level 10" },
];

export function FeatureBento() {
  return (
    <section id="features" className="bg-surface-mid px-6 py-24">
      <div className="mx-auto max-w-[960px]">
        <SectionHeading eyebrow="Playful by nature" title="Small wins the whole family can see">
          Points, streaks, and a growing avatar turn healthy habits into a
          game you play together.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-12">
          <Card
            span="md:col-span-7"
            icon={IconAvatar}
            tag="Kids love it"
            title="Growing Avatar"
            description="An avatar that visibly levels up as points and badges add up — especially motivating for kids."
            delay={0}
          >
            <div className="flex items-center justify-around rounded-2xl bg-surface-low p-4">
              {avatarStages.map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-4">
                  {i > 0 && <IconArrowRight className="h-4 w-4 text-outline" />}
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-leaf/50 text-2xl">
                      {stage.emoji}
                    </div>
                    <p className="mt-1 text-[11px] font-bold tracking-[0.08em] text-brand uppercase">{stage.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card
            span="md:col-span-5"
            icon={IconTarget}
            tag="Together"
            title="Family Missions"
            description="One shared mission a day keeps the whole family pointed at the same goal."
            delay={100}
          >
            <div className="flex items-center gap-3 rounded-2xl bg-surface-low p-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-mint-ink">
                <IconUsers className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold tracking-[0.08em] text-brand uppercase">Today&apos;s mission</span>
                <span className="block truncate text-sm font-semibold text-ink">Evening walk together</span>
              </span>
              <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-brand shadow-sm">3 of 4 done</span>
            </div>
          </Card>

          <Card
            span="md:col-span-5"
            icon={IconCamera}
            tag="No forms"
            title="Snap-to-Log & Voice"
            description="Photo-log a meal, or just say what you did — no forms, no manual data entry."
            delay={0}
          >
            <div className="flex flex-wrap gap-2">
              {[
                { icon: IconCamera, label: "Photo" },
                { icon: IconMic, label: "Voice" },
                { icon: IconClock, label: "Timer" },
              ].map((chip) => (
                <span key={chip.label} className="flex items-center gap-1.5 rounded-full bg-surface-low px-3 py-1.5 text-sm font-medium text-ink">
                  <chip.icon className="h-4 w-4 text-brand" />
                  {chip.label}
                </span>
              ))}
            </div>
          </Card>

          <Card
            span="md:col-span-7"
            icon={IconBot}
            tag="Every day"
            title="AI Coach"
            description="A daily score with personalized encouragement and suggestions, built from your actual activity."
            delay={100}
          >
            <div className="flex items-center gap-3 rounded-full bg-surface-low px-4 py-2.5 text-sm text-ink-muted">
              <IconBot className="h-5 w-5 shrink-0 text-brand" />
              <span className="truncate">
                <strong className="text-ink">AI Coach:</strong> &ldquo;Great walk today — a short read tonight will round it off.&rdquo;
              </span>
            </div>
          </Card>

          <Card
            span="md:col-span-6"
            icon={IconFlame}
            tag="Daily · Weekly · Monthly"
            title="Streaks & Leaderboards"
            description="Family and friend leaderboards, kept separate. Competing with friends is opt-in, never default-on."
            delay={0}
          >
            <div className="flex items-center justify-between rounded-2xl bg-surface-low px-4 py-3">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <div key={i} className="text-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      i < 5 ? "bg-brand text-white" : "bg-surface text-line"
                    }`}
                  >
                    <IconFlame className="h-4 w-4" />
                  </span>
                  <span className="mt-1 block text-[11px] font-bold text-outline">{day}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            span="md:col-span-6"
            icon={IconSparkles}
            tag="Every week"
            title="Family Highlight Story"
            description="A weekly AI-generated recap of the family's activity, ready to share."
            delay={100}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm">
                <IconPlay className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">This week&apos;s family highlights</span>
                <span className="block text-[11px] font-bold tracking-[0.08em] text-outline uppercase">Ready to share</span>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
