import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreBadges";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="download" className="bg-brand-tint">
      <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Small daily habits. Extraordinary lifelong results.
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          BetterEveryday for iOS and Android — coming soon.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>
        <p className="mt-2 text-xs text-ink-muted">Coming soon — not yet available for download</p>
      </Reveal>
    </section>
  );
}
