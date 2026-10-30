"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function RevealText({
  as: Tag = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(ref.current, { autoAlpha: 1 });
      const split = SplitText.create(ref.current, {
        type: "words",
        mask: "words",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.words, {
            yPercent: 110,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }),
      });
      return () => split.revert();
    });
    return () => mm.revert();
  });

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
