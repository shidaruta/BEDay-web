import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/socials";
import { IconBan, IconBot, IconShield } from "@/components/Icons";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/fitness", label: "Fitness" },
      { href: "/diet", label: "Diet" },
      { href: "/learning", label: "Learning" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/our-story", label: "Our Story" },
      { href: "/contact", label: "Contact us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/data-ai-principles", label: "Data & AI Principles" },
    ],
  },
];

const promises = [
  { icon: IconBan, label: "Never sell your data" },
  { icon: IconShield, label: "Privacy-first" },
  { icon: IconBot, label: "Transparent AI" },
];

export function Footer() {
  return (
    <footer className="bg-surface-low px-6 pt-16 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 pb-12 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-2">
              <span className="mb-1 text-[11px] font-bold tracking-[0.08em] text-brand uppercase">
                {column.title}
              </span>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-[11px] font-bold tracking-[0.08em] text-brand uppercase">Our promise</span>
            {promises.map((item) => (
              <span key={item.label} className="flex items-center gap-2 text-sm text-ink-muted">
                <item.icon className="h-4 w-4 text-brand" />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-line pt-8 text-sm text-ink-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/be-logo.png" alt="" width={24} height={24} className="h-6 w-6 rounded-md" />
            <span>&copy; {new Date().getFullYear()} BetterEveryday. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-ink-muted transition-colors hover:text-brand">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
