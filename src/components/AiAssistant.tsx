"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { IconBot, IconSparkles } from "@/components/Icons";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  isError?: boolean;
};

type ChatResponse = {
  reply?: unknown;
  sessionId?: unknown;
  error?: unknown;
};

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I’m your BetterEveryday assistant. Ask me anything about building healthier habits, learning, fitness, or nutrition.",
};

function createMessage(role: ChatMessage["role"], content: string, isError = false): ChatMessage {
  return { id: crypto.randomUUID(), role, content, isError };
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef<string | null>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [isOpen, isLoading, messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => () => requestRef.current?.abort(), []);

  async function sendMessage() {
    const message = input.trim();
    if (!message || isLoading) return;

    setInput("");
    setMessages((current) => [...current, createMessage("user", message)]);
    setIsLoading(true);

    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          ...(sessionIdRef.current ? { sessionId: sessionIdRef.current } : {}),
        }),
        signal: controller.signal,
      });
      const data = (await response.json()) as ChatResponse;

      if (!response.ok || typeof data.reply !== "string") {
        throw new Error(typeof data.error === "string" ? data.error : "I couldn’t answer that just now. Please try again.");
      }

      if (typeof data.sessionId === "string") sessionIdRef.current = data.sessionId;
      setMessages((current) => [...current, createMessage("assistant", data.reply as string)]);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      const content = error instanceof Error ? error.message : "I couldn’t answer that just now. Please try again.";
      setMessages((current) => [...current, createMessage("assistant", content, true)]);
    } finally {
      if (requestRef.current === controller) requestRef.current = null;
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  function startNewChat() {
    requestRef.current?.abort();
    requestRef.current = null;
    sessionIdRef.current = null;
    setMessages([welcomeMessage]);
    setInput("");
    setIsLoading(false);
    inputRef.current?.focus();
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(0,101,44,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand max-sm:right-3 max-sm:bottom-3"
        aria-label="Open BetterEveryday assistant"
      >
        <IconSparkles className="h-5 w-5" />
        <span>Ask BetterEveryday</span>
      </button>
    );
  }

  return (
    <section
      aria-label="BetterEveryday AI assistant"
      className="fixed right-4 bottom-4 z-50 flex h-[min(34rem,calc(100dvh-2rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_70px_rgba(27,27,30,0.2)] max-sm:right-3 max-sm:bottom-3 max-sm:left-3 max-sm:h-[min(34rem,calc(100dvh-1.5rem))] max-sm:w-auto"
    >
      <header className="flex items-center gap-3 bg-brand px-4 py-3.5 text-white">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/15">
          <IconBot className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-extrabold">BetterEveryday AI</h2>
          <p className="flex items-center gap-1.5 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Your personal growth guide
          </p>
        </div>
        <button
          type="button"
          onClick={startNewChat}
          className="rounded-xl p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Start a new chat"
          title="New chat"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
            <path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 4v4.5h4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-xl p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Close assistant"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto bg-surface-low/70 px-4 py-4" aria-live="polite">
        {messages.map((message) => {
          const isUser = message.role === "user";
          return (
            <article key={message.id} className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
              <span className="mb-1 px-1 text-[10px] font-bold tracking-wide text-ink-muted uppercase">
                {isUser ? "You" : "BetterEveryday AI"}
              </span>
              <div
                className={`max-w-[88%] whitespace-pre-wrap break-words px-3.5 py-2.5 text-left text-sm leading-6 ${
                  isUser
                    ? "rounded-2xl rounded-br-md bg-brand text-white"
                    : message.isError
                      ? "rounded-2xl rounded-bl-md border border-red-200 bg-red-50 text-red-800"
                      : "rounded-2xl rounded-bl-md border border-line bg-surface text-ink shadow-sm"
                }`}
              >
                {message.content}
              </div>
            </article>
          );
        })}

        {isLoading && (
          <div className="flex flex-col items-start" role="status" aria-label="Assistant is thinking">
            <span className="mb-1 px-1 text-[10px] font-bold tracking-wide text-ink-muted uppercase">BetterEveryday AI</span>
            <div className="flex gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-3 shadow-sm">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand motion-reduce:animate-none"
                  style={{ animationDelay: `${dot * 120}ms` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={scrollAnchorRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-line bg-surface p-3">
        <div className="flex items-end gap-2 rounded-2xl border border-line bg-surface-low px-3 py-2 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={1000}
            rows={1}
            disabled={isLoading}
            placeholder="Ask me anything…"
            aria-label="Message"
            className="field-sizing-content max-h-24 min-h-8 flex-1 resize-none bg-transparent py-1 text-base leading-6 sm:text-sm text-ink outline-none placeholder:text-ink-muted/70 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4.5 w-4.5" aria-hidden="true">
              <path d="m5 12 14-7-4.5 14-2.8-5.2L5 12Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p className="mt-1.5 text-center text-[10px] text-ink-muted pointer-coarse:hidden">Enter to send · Shift + Enter for a new line</p>
      </form>
    </section>
  );
}
