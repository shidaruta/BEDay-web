"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const offsetByDirection = {
  up: { x: 0, y: 64 },
  left: { x: -96, y: 0 },
  right: { x: 96, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, ...offsetByDirection[direction] },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1.1,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
    return () => mm.revert();
  });

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
