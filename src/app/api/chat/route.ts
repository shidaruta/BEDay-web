const UPSTREAM_TIMEOUT_MS = 125_000;

type ChatRequest = {
  message?: unknown;
  sessionId?: unknown;
};

function safeError(status: number) {
  if (status === 400) return "Please check your message and try again.";
  if (status === 429) return "The assistant is busy right now. Please wait a moment and try again.";
  if (status === 504) return "The assistant took too long to respond. Please try again.";
  return "The assistant is temporarily unavailable. Please try again soon.";
}

export async function POST(request: Request) {
  const upstreamUrl = process.env.CHATBOT_API_URL;
  if (!upstreamUrl) {
    return Response.json(
      { error: "The assistant has not been configured yet." },
      { status: 503 },
    );
  }

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return Response.json({ error: "The request must contain valid JSON." }, { status: 400 });
  }

  if (typeof body.message !== "string" || !body.message.trim() || body.message.length > 1000) {
    return Response.json(
      { error: "Your message must be between 1 and 1000 characters." },
      { status: 400 },
    );
  }

  const payload: { message: string; sessionId?: string } = { message: body.message };
  if (typeof body.sessionId === "string" && body.sessionId) {
    payload.sessionId = body.sessionId;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.CHATBOT_CLIENT_API_KEY) {
      headers["x-api-key"] = process.env.CHATBOT_CLIENT_API_KEY;
    }

    const response = await fetch(upstreamUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      const status = [400, 429, 504].includes(response.status) ? response.status : 502;
      return Response.json({ error: safeError(status) }, { status });
    }

    const result = data as { reply?: unknown; sessionId?: unknown } | null;
    if (typeof result?.reply !== "string" || typeof result.sessionId !== "string") {
      return Response.json(
        { error: "The assistant returned an unexpected response." },
        { status: 502 },
      );
    }

    return Response.json({ reply: result.reply, sessionId: result.sessionId });
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "AbortError";
    return Response.json(
      { error: safeError(timedOut ? 504 : 502) },
      { status: timedOut ? 504 : 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
