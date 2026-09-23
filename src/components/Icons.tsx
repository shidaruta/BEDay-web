type IconProps = { className?: string };
const base = "h-6 w-6";

export function IconBook({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H11a1 1 0 0 1 1 1v15a1 1 0 0 0-1-1H4.5A1.5 1.5 0 0 1 3 17.5z" />
      <path d="M21 5.5A1.5 1.5 0 0 0 19.5 4H13a1 1 0 0 0-1 1v15a1 1 0 0 1 1-1h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
  );
}

export function IconDumbbell({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1.5" y="9.5" width="3" height="5" rx="1" />
      <rect x="19.5" y="9.5" width="3" height="5" rx="1" />
      <rect x="5.5" y="7.5" width="2.5" height="9" rx="1" />
      <rect x="16" y="7.5" width="2.5" height="9" rx="1" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

export function IconBowl({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3.5 12.5h17a7.5 6 0 0 1-17 0z" />
      <path d="M12 8.5V4M9 6l1.5 2.5M15 6l-1.5 2.5" />
    </svg>
  );
}

export function IconBot({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <circle cx="9" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFlame({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5c1 3.5-3 4.5-3 8.5a3 3 0 0 0 6 0c0-1.5-.8-2.5-1-4 2 1.5 3.5 4 3.5 7a5.5 5.5 0 1 1-11 0c0-5 3.5-6.5 5.5-11.5z" />
    </svg>
  );
}

export function IconAvatar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      <path d="M12 2.5v1.5M18 4l-1 1.3M6 4l1 1.3" />
    </svg>
  );
}

export function IconCamera({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function IconSparkles({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11 2.5c.4 2.6 1 4.1 2.1 5.4 1.3 1.1 2.8 1.7 5.4 2.1-2.6.4-4.1 1-5.4 2.1-1.1 1.3-1.7 2.8-2.1 5.4-.4-2.6-1-4.1-2.1-5.4-1.3-1.1-2.8-1.7-5.4-2.1 2.6-.4 4.1-1 5.4-2.1 1.1-1.3 1.7-2.8 2.1-5.4z" />
      <path d="M18.5 15.5c.2 1.1.5 1.8.9 2.3.5.5 1.2.7 2.3.9-1.1.2-1.8.5-2.3.9-.5.5-.7 1.2-.9 2.3-.2-1.1-.5-1.8-.9-2.3-.5-.5-1.2-.7-2.3-.9 1.1-.2 1.8-.5 2.3-.9.5-.5.7-1.2.9-2.3z" />
    </svg>
  );
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 3v5.5c0 4.5-3 7.5-7 9.5-4-2-7-5-7-9.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconHeart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

export function IconFacebook({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 22v-8.5h2.9l.4-3.4H14V7.9c0-1 .3-1.6 1.7-1.6H17V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.8H8v3.4h2.6V22z" />
    </svg>
  );
}

export function IconInstagram({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTikTok({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.5 2h-3v13.5a2.8 2.8 0 1 1-2-2.7v-3.1a5.9 5.9 0 1 0 5 5.8V9.1a7.5 7.5 0 0 0 4.5 1.5V7.6a4.5 4.5 0 0 1-4.5-4.5z" />
    </svg>
  );
}
