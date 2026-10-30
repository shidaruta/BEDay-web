"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { IconArrowRight, IconCheck } from "@/components/Icons";
import { pillars } from "@/lib/pillars";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function PillarExplorer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]");
        const images = gsap.utils.toArray<HTMLElement>("[data-scene-image]");
        const copies = gsap.utils.toArray<HTMLElement>("[data-scene-copy]");
        const steps = gsap.utils.toArray<HTMLElement>("[data-scene-step]");
        const titles = gsap.utils
          .toArray<HTMLElement>("[data-scene-title]")
          .map((title) => SplitText.create(title, { type: "chars", mask: "chars" }));

        gsap.from(titles[0].chars, {
          yPercent: 110,
          duration: 1,
          ease: "power4.out",
          stagger: 0.05,
          scrollTrigger: { trigger: root.current, start: "top 60%", toggleActions: "play none none reverse" },
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 80px",
            end: () => `+=${window.innerHeight * (scenes.length - 1) * 1.2}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(images[0], { scale: 1.15 }, { scale: 1, duration: 1, ease: "none" });

        scenes.slice(1).forEach((scene, i) => {
          const next = i + 1;
          tl.to(copies[i], { autoAlpha: 0, y: -60, duration: 0.4, ease: "power1.in" }, "+=0.3")
            .fromTo(
              scene,
              { clipPath: "inset(100% 0% 0% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.inOut" },
              "<",
            )
            .fromTo(images[next], { scale: 1.25 }, { scale: 1, duration: 1.4, ease: "none" }, "<")
            .fromTo(copies[next], { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, ">-0.7")
            .from(titles[next].chars, { yPercent: 110, duration: 0.5, stagger: 0.04, ease: "power3.out" }, "<")
            .to(steps[i], { opacity: 0.4, duration: 0.3 }, "<")
            .to(steps[next], { opacity: 1, duration: 0.3 }, "<");
        });

        tl.to({}, { duration: 0.5 });

        return () => titles.forEach((split) => split.revert());
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="pillars" className="pillar-story relative" aria-label="The three pillars">
      {pillars.map((p, i) => (
        <article key={p.slug} data-scene className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-clip md:items-center">
          <Image
            data-scene-image
            src={p.image}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover ${p.focus}`}
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-transparent" />

          <div data-scene-copy className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:px-12 md:pb-0">
            <p className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
              0{i + 1} / 0{pillars.length} · {p.name}
            </p>
            <h2 data-scene-title className="mt-3 text-6xl leading-[1.15] font-bold tracking-tight text-white md:text-8xl md:leading-[1.15]">
              {p.name}
            </h2>
            <p className="mt-4 max-w-xl text-2xl font-semibold text-white md:text-3xl">{p.tagline}</p>
            <p className="mt-4 max-w-lg text-white/85 md:text-lg">{p.intro}</p>

            <ul className="mt-6 flex max-w-xl flex-wrap gap-2">
              {p.features.map((feature) => (
                <li
                  key={feature.title}
                  className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm text-white backdrop-blur"
                >
                  <IconCheck className="h-4 w-4 text-mint" />
                  {feature.title}
                </li>
              ))}
            </ul>

            <Link
              href={`/${p.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm transition-transform hover:scale-[1.03]"
            >
              Explore {p.name}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}

      <ol
        aria-hidden
        className="pillar-story-progress absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 flex-col gap-4 text-right text-sm font-bold tracking-[0.15em] text-white uppercase"
      >
        {pillars.map((p, i) => (
          <li key={p.slug} data-scene-step className={i === 0 ? "" : "opacity-40"}>
            0{i + 1} {p.name}
          </li>
        ))}
      </ol>
    </section>
  );
}
