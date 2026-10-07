"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconBot, IconCheck } from "@/components/Icons";
import { pillars } from "@/lib/pillars";

export function PillarExplorer() {
  const [active, setActive] = useState(0);

  return (
    <section id="pillars" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-bold tracking-[0.08em] text-brand uppercase">Fitness · Diet · Learning</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Three pillars. <span className="text-brand">One daily score.</span>
          </h2>
        </div>

        <div role="tablist" aria-label="Pillars" className="flex items-center gap-1 self-start rounded-full bg-surface-mid p-1 md:self-auto">
          {pillars.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              id={`tab-${p.slug}`}
              aria-selected={i === active}
              aria-controls="pillar-panel"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                i === active ? "bg-surface text-brand-dark shadow-sm" : "text-ink-muted hover:text-ink"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div
          id="pillar-panel"
          role="tabpanel"
          aria-labelledby={`tab-${pillars[active].slug}`}
          className="grid gap-8 rounded-[2rem] bg-surface p-6 shadow-lg sm:p-10 md:grid-cols-2"
        >
          <div className="relative min-h-80 overflow-hidden rounded-2xl">
            {pillars.map((p, i) => (
              <Image
                key={p.slug}
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className={`object-cover ${p.focus} transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-surface/90 px-4 py-3 shadow-md backdrop-blur-md">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <IconCheck className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold text-ink sm:truncate">
                {pillars[active].sampleLog.text}
              </span>
              <span className="shrink-0 rounded-full bg-mint px-2.5 py-0.5 text-[11px] font-bold tracking-[0.08em] text-mint-ink uppercase">
                {pillars[active].sampleLog.method}
              </span>
            </div>
          </div>

          <div className="grid">
            {pillars.map((p, i) => (
              <div
                key={p.slug}
                aria-hidden={i !== active}
                inert={i !== active}
                className={`col-start-1 row-start-1 flex flex-col gap-6 transition-opacity duration-300 ${
                  i === active ? "opacity-100" : "invisible opacity-0"
                }`}
              >
                <div>
                  <p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.08em] text-brand uppercase">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    {p.name}
                  </p>
                  <h3 className="text-2xl font-semibold text-ink">{p.tagline}</h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{p.intro}</p>
                </div>

                <ul className="space-y-3 rounded-2xl bg-surface-low p-5">
                  {p.features.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                        <feature.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{feature.title}</span>
                        <span className="block text-sm text-ink-muted">{feature.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-4">
                  <Link
                    href={`/${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-brand-dark"
                  >
                    Explore {p.name}
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="flex items-center gap-1.5 text-sm text-outline">
                    <IconBot className="h-4 w-4 text-brand" />
                    Scored by your AI Coach
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
