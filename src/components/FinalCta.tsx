import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="download" className="px-6 py-24">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-surface-mid px-8 py-16 text-center shadow-lg sm:px-14">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-leaf/40 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-mint-ink uppercase">
            Coming soon to iOS &amp; Android
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Ready to become better every day?
          </h2>
          <p className="mt-4 text-lg text-ink-muted">Start your family&apos;s journey today.</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>

          <Link
            href="/#social"
            className="mt-6 inline-block rounded-full border border-brand px-6 py-2.5 text-sm font-semibold text-brand transition-all duration-300 hover:bg-brand hover:text-white"
          >
            Follow the BetterEveryday journey
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
