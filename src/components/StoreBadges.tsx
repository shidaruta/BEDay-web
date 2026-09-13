function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.86-1.01.628 0 2.886.06 4.374 2.19-.113.07-2.42 1.4-2.42 4.13 0 3.24 2.892 4.38 2.926 4.4z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M4.8 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l.1.1L14.8 12v-.2L4.9 2.2l-.1.1z" fill="#00d7fe" />
      <path d="M18.1 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-4 2.3z" fill="#ffbc00" />
      <path d="M18.2 15.3L14.8 12 4.8 21.9c.4.4 1 .4 1.7.1l11.7-6.7" fill="#ff3547" />
      <path d="M18.2 8.7L6.5 2c-.7-.4-1.3-.3-1.7.1L14.8 12l3.4-3.3z" fill="#00d766" />
    </svg>
  );
}

export function AppStoreBadge() {
  return (
    <span className="flex cursor-not-allowed items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white opacity-90">
      <AppleLogo />
      <span className="text-left leading-tight">
        <span className="block text-[10px]">Download on the</span>
        <span className="block text-lg font-semibold -mt-0.5">App Store</span>
      </span>
    </span>
  );
}

export function GooglePlayBadge() {
  return (
    <span className="flex cursor-not-allowed items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white opacity-90">
      <PlayLogo />
      <span className="text-left leading-tight">
        <span className="block text-[10px]">GET IT ON</span>
        <span className="block text-lg font-semibold -mt-0.5">Google Play</span>
      </span>
    </span>
  );
}
