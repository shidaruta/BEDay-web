import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, site } from "@/lib/site";
import { socials } from "@/lib/socials";
import { Reveal } from "@/components/Reveal";
import { CopyEmail } from "@/components/CopyEmail";
import { ContactForm } from "@/components/ContactForm";
import { IconArrowRight, IconAt, IconHeart, IconHelp } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the BetterEveryday team — questions, feedback, or ideas for your family's daily habits.",
  path: "/contact",
});

const cardClass = "flex flex-col rounded-3xl border border-line bg-surface p-6 shadow-lg sm:p-8";
const rowClass = "flex items-center gap-3 rounded-2xl bg-surface-low p-3 shadow-sm";
const rowIconClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-brand-dark shadow-sm";
const rowLabelClass = "text-[10px] font-bold tracking-[0.08em] text-ink-muted uppercase";
const rowValueClass = "truncate font-semibold text-ink";
const rowActionClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface text-ink-muted shadow-sm transition-colors hover:text-brand-dark";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-20 md:pt-14">
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-tint blur-3xl" />

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <Reveal direction="left" className={cardClass}>
          <p className="inline-flex items-center gap-1.5 self-start rounded-full bg-brand-tint px-2.5 py-0.5 text-[10px] font-bold tracking-[0.08em] text-brand-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Get in touch
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            We&apos;d love to hear from your family.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Questions about the app, feedback on an idea, or a story about your family&apos;s
            progress — reach out and we&apos;ll get back to you.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link href="/#faq" className={`${rowClass} group transition-colors hover:bg-surface-mid`}>
              <span className={rowIconClass}>
                <IconHelp className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className={rowLabelClass}>Quick answers</p>
                <p className={rowValueClass}>Read the FAQ first</p>
              </div>
              <IconArrowRight className="mr-2 h-5 w-5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-dark" />
            </Link>

            <div className={rowClass}>
              <span className={rowIconClass}>
                <IconAt className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className={rowLabelClass}>Email</p>
                <a href={`mailto:${site.email}`} className={`block ${rowValueClass} hover:text-brand-dark`}>
                  {site.email}
                </a>
              </div>
              <CopyEmail email={site.email} className={rowActionClass} />
            </div>

            <div className={rowClass}>
              <span className={rowIconClass}>
                <IconHeart className="h-5 w-5 fill-current" />
              </span>
              <div className="min-w-0 flex-1">
                <p className={rowLabelClass}>Follow along</p>
                <p className={rowValueClass}>Our journey</p>
              </div>
              <div className="flex items-center gap-1.5">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={rowActionClass}>
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-auto flex items-center gap-2 pt-6 text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            A real person on our small team reads every message.
          </p>
        </Reveal>

        <Reveal direction="right" delay={100} className={cardClass}>
          <h2 className="text-2xl font-bold tracking-tight text-ink">Send a message</h2>
          <p className="mt-2 mb-5 text-sm text-ink-muted">
            Pick a topic, add a few details, and we&apos;ll get right back to you.
          </p>
          <ContactForm email={site.email} />
        </Reveal>
      </div>
    </section>
  );
}
