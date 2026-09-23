import { IconFacebook, IconInstagram, IconTikTok } from "./Icons";

const socials = [
  { href: "https://www.instagram.com/bettereveyday26?stkn=MXJxNzVyZGs0cW5nbw==", label: "Instagram", Icon: IconInstagram },
  { href: "https://www.facebook.com/profile.php?id=61592063613871", label: "Facebook", Icon: IconFacebook },
  { href: "https://www.tiktok.com/@bettereveryday227", label: "TikTok", Icon: IconTikTok },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-ink-muted md:flex-row">
        <p>&copy; {new Date().getFullYear()} BetterEveryday. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-ink-muted hover:text-ink">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:bettereveryda7@gmail.com"
            className="rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-brand-dark"
          >
            Contact us
          </a>
          <a href="#" className="hover:text-ink">
            Privacy
          </a>
          <a href="#" className="hover:text-ink">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
