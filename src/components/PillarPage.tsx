import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { IconArrowRight } from "@/components/Icons";
import { pillars, type Pillar } from "@/lib/pillars";

export function PillarPage({ pillar }: { pillar: Pillar }) {
  const others = pillars.filter((p) => p.slug !== pillar.slug);

  return (
    <>
      <section className="relative h-[480px] w-full overflow-hidden md:h-[560px]">
        <Image src={pillar.image} alt={pillar.name} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <Reveal className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-12">
          <p className="mb-4 w-fit rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white backdrop-blur">
            {pillar.name}
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {pillar.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/85">{pillar.intro}</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {pillar.features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 100}
              className="group rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <feature.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-ink">{feature.title}</h2>
              <p className="mt-2 text-ink-muted">{feature.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl bg-brand-tint px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold text-brand-dark md:text-3xl">
            Better together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
            Every {pillar.name.toLowerCase()} log counts toward your daily AI
            Coach score and your family&apos;s shared streak.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line bg-surface px-6 py-20">
        <h2 className="text-center text-2xl font-semibold text-ink">
          Explore the other pillars
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/${other.slug}`}
              className="group relative block h-56 overflow-hidden rounded-3xl"
            >
              <Image
                src={other.image}
                alt={other.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{other.name}</h3>
                  <p className="text-sm text-white/80">{other.tagline}</p>
                </div>
                <IconArrowRight className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
