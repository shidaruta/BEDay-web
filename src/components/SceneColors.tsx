"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stops = [
  { id: "how-it-works", color: "--color-forest" },
  { id: "why", color: "--color-surface-low" },
  { id: "features", color: "--color-canvas" },
];

export function SceneColors() {
  useGSAP(() => {
    const styles = getComputedStyle(document.documentElement);
    const color = (token: string) => styles.getPropertyValue(token).trim();

    stops.reduce((previous, stop) => {
      const next = color(stop.color);
      gsap.fromTo(
        document.body,
        { backgroundColor: previous },
        {
          backgroundColor: next,
          ease: "none",
          immediateRender: false,
          scrollTrigger: { trigger: `#${stop.id}`, start: "top 75%", end: "top 25%", scrub: true },
        },
      );
      return next;
    }, color("--color-canvas"));
  });

  return null;
}
