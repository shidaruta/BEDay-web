export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-ink-muted md:flex-row">
        <p>&copy; {new Date().getFullYear()} BetterEveryday. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink">
            Contact
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
