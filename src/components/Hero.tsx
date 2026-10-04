import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { Reveal } from "@/components/Reveal";
import {
  IconBook,
  IconBot,
  IconCamera,
  IconFlame,
  IconHeart,
  IconShield,
} from "@/components/Icons";

const promises = [
  { icon: IconBot, label: "AI-powered" },
  { icon: IconHeart, label: "Family-first" },
  { icon: IconShield, label: "Privacy-first" },
];

const floatingBadges = [
  {
    icon: IconFlame,
    title: "14-day family streak",
    caption: "Keep it going!",
    iconClass: "bg-lime text-mint-ink",
    position: "top-10 -left-48",
  },
  {
    icon: IconBook,
    title: "25 min reading done",
    caption: "Learning",
    iconClass: "bg-leaf text-mint-ink",
    position: "top-40 -right-48",
  },
  {
    icon: IconCamera,
    title: "Lunch logged from a photo",
    caption: "Diet",
    iconClass: "bg-mint text-mint-ink",
    position: "bottom-24 -left-56",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-14 pb-20 md:pt-20">
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-b from-leaf/40 via-mint/25 to-transparent blur-3xl" />

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-brand-dark uppercase shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Coming soon · Fitness · Diet · Learning
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Small Daily Habits.
          <br />
          <span className="bg-gradient-to-r from-brand-dark via-brand to-emerald-500 bg-clip-text text-transparent">
            Extraordinary Lifelong Results.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-muted">
          One small habit a day across Fitness, Diet, and Learning — done
          together as a family, with an AI Coach cheering you on.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-outline">
          {promises.map((item, i) => (
            <span key={item.label} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-line" />}
              <span className="flex items-center gap-1.5">
                <item.icon className="h-4 w-4 text-brand" />
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto mt-16 w-60 md:w-72">
        <div className="absolute -inset-20 -z-10 rounded-full bg-leaf/40 blur-3xl animate-pulse-soft" />
        {floatingBadges.map((badge) => (
          <div
            key={badge.title}
            className={`absolute z-10 hidden items-center gap-2.5 rounded-full bg-surface px-4 py-2 shadow-lg lg:flex ${badge.position}`}
          >
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${badge.iconClass}`}>
              <badge.icon className="h-4 w-4" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-xs font-semibold whitespace-nowrap text-ink">{badge.title}</span>
              <span className="block text-[10px] font-bold tracking-[0.08em] text-brand uppercase">{badge.caption}</span>
            </span>
          </div>
        ))}
        <div className="animate-float">
          <Image
            src="/phone-dashboard.png"
            alt="BetterEveryday dashboard"
            width={954}
            height={1878}
            className="w-full"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}
