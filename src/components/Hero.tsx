"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { IconBot, IconHeart, IconShield } from "@/components/Icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const words = [
  { initial: "F", rest: "itness" },
  { initial: "D", rest: "iet" },
  { initial: "L", rest: "earning" },
];

const promises = [
  { icon: IconBot, label: "AI-powered" },
  { icon: IconHeart, label: "Family-first" },
  { icon: IconShield, label: "Privacy-first" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const fdl = root.current!.querySelector<HTMLElement>("[data-fdl]")!;
        const rests = gsap.utils.toArray<HTMLElement>(".fdl-rest");

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(".fdl-initial", { translate: "0 110%" }, { translate: "0 0%", duration: 1.2, stagger: 0.12 })
          .fromTo("[data-hero-line]", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.15 }, "-=0.7");

        const startFont = () => parseFloat(getComputedStyle(fdl).fontSize);
        const fullWidth = () =>
          rests.reduce((width, el) => width - el.offsetWidth + el.scrollWidth, fdl.offsetWidth);

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top 80px",
              end: "+=160%",
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to("[data-scroll-cue]", { autoAlpha: 0, duration: 0.2 })
          .to(rests, { width: (_, el: HTMLElement) => `${el.scrollWidth / startFont()}em`, opacity: 1, stagger: 0.3, duration: 1 }, 0)
          .to(
            fdl,
            {
              fontSize: () => startFont() * Math.min(1, (window.innerWidth * 0.88) / fullWidth()),
              duration: 1.6,
              ease: "power3.out",
            },
            0,
          )
          .fromTo("[data-hero-outro]", { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 0.8 }, ">-0.2")
          .to({}, { duration: 0.6 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-clip px-6 py-12"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-b from-leaf/40 via-mint/25 to-transparent blur-3xl" />

      <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-brand-dark uppercase shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        Coming soon to iOS &amp; Android
      </p>

      <h1 className="flex flex-col items-center text-center">
        <span className="sr-only">Fitness, Diet, Learning. Small daily habits. Better Everyday.</span>
        <span
          aria-hidden
          data-fdl
          className="flex gap-[0.25em] text-[min(22vw,34svh)] leading-[1.1] font-bold tracking-tight whitespace-nowrap"
        >
          {words.map((word) => (
            <span key={word.initial} className="flex overflow-y-clip">
              <span className="fdl-initial text-ink">{word.initial}</span>
              <span className="fdl-rest text-brand">{word.rest}</span>
            </span>
          ))}
        </span>
        <span aria-hidden data-hero-line className="mt-4 text-lg font-semibold tracking-[0.2em] text-ink-muted uppercase md:text-2xl">
          small daily habits
        </span>
        <span
          aria-hidden
          data-hero-line
          className="mt-2 bg-gradient-to-r from-brand-dark via-brand to-emerald-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl"
        >
          Better Everyday
        </span>
      </h1>

      <div data-hero-outro className="mt-8 flex max-w-xl flex-col items-center text-center">
        <p className="text-lg text-ink-muted">
          One small habit a day across Fitness, Diet, and Learning — done
          together as a family, with an AI Coach cheering you on.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
      </div>

      <div
        data-scroll-cue
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-outline uppercase motion-safe:flex"
      >
        <span className="h-10 w-px bg-outline/50" />
        Scroll
      </div>
    </section>
  );
}
