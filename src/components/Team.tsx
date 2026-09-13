const team = [
  { name: "Team member", role: "Role" },
  { name: "Team member", role: "Role" },
  { name: "Team member", role: "Role" },
  { name: "Team member", role: "Role" },
];

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          The team
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
        {team.map((member, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-brand-tint" />
            <p className="mt-4 font-semibold text-ink">{member.name}</p>
            <p className="text-sm text-ink-muted">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
