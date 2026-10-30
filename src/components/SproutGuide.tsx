"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sprout } from "@/components/Sprout";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const chapters = [
  { id: "top", label: "Hi, I’m Sprout!" },
  { id: "pillars", label: "Fitness · Diet · Learning" },
  { id: "how-it-works", label: "Small daily habits" },
  { id: "why", label: "Why BetterEveryday" },
  { id: "features", label: "Small wins" },
  { id: "download", label: "Better Everyday!" },
];

export function SproutGuide() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 80rem)", () => {
        const guide = root.current!.querySelector<HTMLElement>("[data-guide]")!;
        const body = root.current!.querySelector<HTMLElement>("[data-guide-body]")!;
        const label = root.current!.querySelector<HTMLElement>("[data-guide-label]")!;

        gsap.set(root.current, { autoAlpha: 1 });

        const travel = { start: 0, end: "max", scrub: 0.8, invalidateOnRefresh: true };
        gsap.to(guide, {
          y: () => root.current!.offsetHeight - guide.offsetHeight,
          ease: "none",
          scrollTrigger: travel,
        });
        gsap.to("[data-guide-fill]", { scaleY: 1, ease: "none", scrollTrigger: travel });

        const say = (text: string) => {
          label.textContent = text;
          gsap.killTweensOf(label);
          gsap
            .timeline()
            .fromTo(label, { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.4, ease: "back.out(2)" })
            .to(label, { autoAlpha: 0, x: -12, duration: 0.3 }, "+=2.2");
          gsap.fromTo(body, { y: 0 }, { y: -14, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" });
        };

        chapters.forEach(({ id, label: text }) => {
          const section = document.getElementById(id);
          if (!section) return;
          ScrollTrigger.create({
            trigger: section,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => self.isActive && say(text),
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} aria-hidden className="pointer-events-none invisible fixed top-28 bottom-10 left-6 z-40 hidden w-12 xl:block">
      <div className="absolute top-6 bottom-6 left-1/2 w-0.5 -translate-x-1/2 overflow-clip rounded-full bg-outline/15">
        <div data-guide-fill className="h-full w-full origin-top scale-y-0 bg-gradient-to-b from-lime via-brand to-mint" />
      </div>

      <div data-guide className="relative h-12 w-12">
        <div data-guide-body className="relative h-full w-full">
          <div className="absolute -inset-3 rounded-full bg-lime/50 blur-xl animate-pulse-soft" />
          <Sprout className="relative h-12 w-12 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]" />
        </div>
        <span
          data-guide-label
          className="invisible absolute top-1/2 left-16 -translate-y-1/2 rounded-full bg-surface px-3 py-1.5 text-xs font-bold whitespace-nowrap text-brand-dark shadow-lg"
        />
      </div>
    </div>
  );
}
