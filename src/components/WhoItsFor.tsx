const audiences = [
  {
    title: "Families with children",
    description:
      "Build healthy routines together — daily missions, a shared streak wall, and parental controls for kids' accounts.",
  },
  {
    title: "Health-conscious adults",
    description:
      "Track your own reading, fitness, and diet, and compete with friends on your own terms — opt-in, never default-on.",
  },
];

export function WhoItsFor() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Who it&apos;s for
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl bg-brand-tint p-8"
            >
              <h3 className="text-xl font-semibold text-brand-dark">
                {audience.title}
              </h3>
              <p className="mt-3 text-ink-muted">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
