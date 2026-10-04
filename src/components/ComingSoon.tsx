import { Reveal } from "@/components/Reveal";

export function ComingSoon({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-6 pb-24">
      <Reveal className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-10 text-center">
        <p className="text-lg text-ink-muted">{children}</p>
        <p className="mt-6 text-sm text-ink-muted">
          Questions in the meantime?{" "}
          <a href="mailto:bettereveryda7@gmail.com" className="font-medium text-brand-dark hover:underline">
            Contact us
          </a>
        </p>
      </Reveal>
    </section>
  );
}
