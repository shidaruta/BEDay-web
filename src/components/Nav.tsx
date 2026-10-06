"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/fitness", label: "Fitness" },
  { href: "/diet", label: "Diet" },
  { href: "/learning", label: "Learning" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const goHome = () => {
    close();
    if (pathname === "/") window.scrollTo({ top: 0 });
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 h-20 px-4 sm:gap-6 sm:px-6">
        <Link href="/" onClick={goHome} className="flex shrink-0 items-center gap-2">
          <Image src="/be-logo.png" alt="BetterEveryday" width={32} height={32} className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-brand-dark max-[359px]:sr-only">BetterEveryday</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-semibold lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 transition-colors ${
                  active ? "bg-mint text-mint-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#download"
            onClick={close}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold sm:px-5 whitespace-nowrap text-white shadow-[0_12px_32px_-4px_rgba(21,128,61,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-brand-dark"
          >
            Get the app
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand-tint lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-canvas px-4 py-4 sm:px-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`block rounded-xl px-3 py-3 text-base hover:bg-brand-tint ${
                pathname === link.href ? "font-semibold text-brand-dark" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
