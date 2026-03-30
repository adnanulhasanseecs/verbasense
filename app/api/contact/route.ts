import { parseContactForm } from "@/lib/contact-schema";
import { sendContactInquiry } from "@/lib/email";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestBuckets = new Map<string, number[]>();

function getClientIp(forwardedFor: string | null): string {
  if (!forwardedFor) return "unknown";
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string, now: number): boolean {
  const bucket = requestBuckets.get(ip) ?? [];
  const recent = bucket.filter((ts) => now - ts < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    requestBuckets.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestBuckets.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const h = await headers();
  const ip = getClientIp(h.get("x-forwarded-for"));
  const now = Date.now();

  if (isRateLimited(ip, now)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again shortly." },
      { status: 429 },
    );
  }

  const payload = (await request.json().catch(() => null)) as
    | (Record<string, unknown> & { website?: unknown })
    | null;
  if (!payload) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots often fill hidden fields.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const parsed = parseContactForm(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  try {
    await sendContactInquiry(parsed.data);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unable to send inquiry right now. Please email us directly." },
      { status: 500 },
    );
  }
}
