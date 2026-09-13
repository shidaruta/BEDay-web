import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "3", label: "Habit pillars" },
  { value: "15s", label: "Daily check-in" },
  { value: "0–100", label: "AI Coach score" },
  { value: "2", label: "Platforms — iOS & Android" },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-brand-dark">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="text-center">
            <p className="text-3xl font-semibold text-white md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
