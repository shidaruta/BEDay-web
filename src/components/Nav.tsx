import Image from "next/image";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/be-logo.png" alt="BetterEveryday" width={32} height={32} className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-semibold">BetterEveryday</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
