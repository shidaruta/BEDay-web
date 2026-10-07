"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@/components/Icons";

export function CopyEmail({ email, className }: { email: string; className: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className={className}
    >
      {copied ? <IconCheck className="h-4 w-4 text-brand" /> : <IconCopy className="h-4 w-4" />}
    </button>
  );
}
