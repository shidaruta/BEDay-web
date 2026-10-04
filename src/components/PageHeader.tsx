import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28">
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-tint blur-3xl" />
      <Reveal className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p className="mb-4 inline-block rounded-full bg-brand-tint px-4 py-1 text-sm font-medium text-brand-dark">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-6 text-lg text-ink-muted">{intro}</p>}
      </Reveal>
    </section>
  );
}
