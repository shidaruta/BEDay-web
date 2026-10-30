import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";

export function SectionHeading({
  eyebrow,
  title,
  children,
  as = "h2",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="text-xs font-bold tracking-[0.08em] text-brand uppercase">
          {eyebrow}
        </span>
      </Reveal>
      <RevealText as={as} className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {title}
      </RevealText>
      {children && (
        <Reveal delay={200} className="mt-4 text-ink-muted md:text-lg">
          {children}
        </Reveal>
      )}
    </div>
  );
}
