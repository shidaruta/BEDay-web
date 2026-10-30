"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/fitness", label: "Fitness" },
  { href: "/diet", label: "Diet" },
  { href: "/learning", label: "Learning" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const crumbLabels: Record<string, string> = {
  ...Object.fromEntries(links.map((link) => [link.href, link.label])),
  "/privacy": "Privacy",
  "/terms": "Terms",
  "/data-ai-principles": "Data & AI Principles",
};

export function Nav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);
  const goHome = () => {
    close();
    if (pathname === "/") {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0 });
    }
  };
  const crumb = crumbLabels[pathname];

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, lenis]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-canvas/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" onClick={goHome} className="flex shrink-0 items-center gap-2">
              <Image src="/be-logo.png" alt="BetterEveryday" width={32} height={32} className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold tracking-tight text-brand-dark max-[359px]:sr-only">BetterEveryday</span>
            </Link>

            {pathname !== "/" && crumb && (
              <nav aria-label="Breadcrumb" className="hidden min-w-0 sm:block">
                <ol className="flex items-center gap-3 text-sm font-semibold">
                  <li aria-hidden className="text-line">/</li>
                  <li aria-current="page" className="truncate text-ink-muted">
                    {crumb}
                  </li>
                </ol>
              </nav>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/#download"
              onClick={close}
              className="rounded-full bg-brand px-4 py-2 text-sm font-semibold whitespace-nowrap text-white shadow-[0_12px_32px_-4px_rgba(21,128,61,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-brand-dark sm:px-5"
            >
              Get the app
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold tracking-[0.1em] text-ink uppercase hover:bg-brand-tint"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5">
                <path d="M4 8h16M4 16h16" />
              </svg>
              <span className="max-sm:sr-only">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={close}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm transition-opacity duration-500 motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        data-lenis-prevent
        className={`fixed inset-y-0 right-0 z-[70] flex w-full flex-col overflow-y-auto bg-canvas px-8 pt-6 pb-10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:w-[440px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-4 flex -translate-y-1/2 flex-col text-[11rem] leading-[0.85] font-bold text-brand/[0.06] select-none"
        >
          <span>F</span>
          <span>D</span>
          <span>L</span>
        </span>

        <div className="flex justify-end">
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            className="flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold tracking-[0.1em] text-ink uppercase hover:bg-brand-tint"
          >
            Close
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Main" className="relative mt-10 flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? goHome : close}
                aria-current={active ? "page" : undefined}
                className={`w-fit rounded-xl py-2 text-3xl font-bold tracking-tight transition-colors ${
                  active ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#download"
          onClick={close}
          className="relative mt-auto w-fit rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
        >
          Get the app
        </Link>
      </div>
    </>
  );
}
