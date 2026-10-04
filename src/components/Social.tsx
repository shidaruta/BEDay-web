import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IconArrowRight } from "@/components/Icons";
import { socials } from "@/lib/socials";

export function Social() {
  return (
    <section id="social" className="px-6 py-24">
      <SectionHeading eyebrow="Daily ideas for Fitness • Diet • Learning" title="Join the BetterEveryday Movement" />

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map(({ label, href, Icon }, i) => (
          <Reveal key={label} delay={i * 100}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-full bg-surface p-2.5 pr-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint text-mint-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <span className="flex-1 font-semibold text-ink">{label}</span>
              <IconArrowRight className="h-5 w-5 text-outline transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
