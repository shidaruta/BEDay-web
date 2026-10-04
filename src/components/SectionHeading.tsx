import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  children,
  as: Title = "h2",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-xs font-bold tracking-[0.08em] text-brand uppercase">
        {eyebrow}
      </span>
      <Title className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {title}
      </Title>
      {children && <div className="mt-4 text-ink-muted md:text-lg">{children}</div>}
    </Reveal>
  );
}
