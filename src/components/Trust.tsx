import { Reveal } from "@/components/Reveal";
import { IconBan, IconBot, IconHeart, IconLock, IconShield } from "@/components/Icons";

const principles = [
  { icon: IconShield, label: "Privacy-first design" },
  { icon: IconHeart, label: "Family-friendly, with parental controls" },
  { icon: IconLock, label: "Secure data" },
  { icon: IconBan, label: "We never sell your data" },
  { icon: IconBot, label: "Transparent AI" },
];

export function Trust() {
  return (
    <section id="trust" className="bg-surface-low px-6 py-24">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 rounded-[2rem] bg-brand p-8 text-white shadow-xl sm:p-12 md:flex-row">
        <div className="max-w-lg">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.08em] text-leaf uppercase">
            <IconShield className="h-5 w-5" />
            Built with trust
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">
            Your family&apos;s life is not advertising data
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Your family&apos;s data is personal. We collect only what the app
            needs to help your family grow, and we never sell or rent it.
          </p>
          <p className="mt-6 text-sm text-white/60">
            Privacy Policy, Terms, and Data &amp; AI Principles — coming soon.
          </p>
        </div>

        <ul className="flex w-full shrink-0 flex-col gap-2 sm:w-auto">
          {principles.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold">
              <item.icon className="h-4 w-4 shrink-0 text-leaf" />
              {item.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
