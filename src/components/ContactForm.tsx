"use client";

import { useState } from "react";
import { IconSend } from "@/components/Icons";

const topics = ["Question", "Feedback", "Partnership", "Press"];

const fieldClass =
  "w-full rounded-2xl border border-line bg-surface-low px-4 py-2.5 text-sm text-ink placeholder:text-outline transition-colors focus:border-brand focus:bg-surface focus:outline-none";
const labelClass = "mb-1 block text-[10px] font-bold tracking-[0.08em] text-ink-muted uppercase";

export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const topic = String(data.get("topic"));
    const name = String(data.get("name"));
    const from = String(data.get("email"));
    const message = String(data.get("message"));

    const subject = `${topic} from ${name}`;
    const body = `${message}\n\n— ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3">
      <fieldset>
        <legend className={labelClass}>Topic</legend>
        <div className="flex flex-wrap gap-1.5">
          {topics.map((topic, i) => (
            <label key={topic} className="cursor-pointer">
              <input type="radio" name="topic" value={topic} defaultChecked={i === 0} className="peer sr-only" />
              <span className="block rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-muted transition-colors peer-checked:border-mint peer-checked:bg-mint peer-checked:text-mint-ink peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:text-ink">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>Name</label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>Email</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <label htmlFor="contact-message" className={labelClass}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us what's on your mind…"
          className={`${fieldClass} min-h-28 flex-1 resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-1 flex items-center justify-center gap-2 rounded-full bg-leaf py-3 text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime hover:shadow-[0_10px_24px_-8px_rgba(21,128,61,0.45)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none active:translate-y-0 active:shadow-none"
      >
        Send message
        <IconSend className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      <p role="status" className="text-center text-xs text-ink-muted">
        {sent
          ? `Your email app should open with the message ready. If it didn't, write to us at ${email}.`
          : "We use your details only to answer this message."}
      </p>
    </form>
  );
}
