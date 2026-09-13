const features = [
  {
    title: "AI Coach",
    description:
      "A daily 0–100 score with personalized encouragement and suggestions, built from your actual activity.",
  },
  {
    title: "Family Missions",
    description:
      "One shared mission a day keeps the whole family pointed at the same goal.",
  },
  {
    title: "Streaks & Leaderboards",
    description:
      "Family and friend leaderboards, kept separate, with the same daily/weekly/monthly views.",
  },
  {
    title: "Growing Avatar",
    description:
      "An avatar that visibly levels up as points and badges add up — especially motivating for kids.",
  },
  {
    title: "Snap-to-Log & Voice",
    description:
      "Photo-log a meal, or just say what you did — no forms, no manual data entry.",
  },
  {
    title: "Family Highlight Story",
    description:
      "A weekly AI-generated recap of the family's activity, ready to share.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Everything a family needs to build the habit
        </h2>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <div className="h-1.5 w-8 rounded-full bg-brand" />
            <h3 className="mt-4 text-lg font-semibold text-ink">
              {feature.title}
            </h3>
            <p className="mt-2 text-ink-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
