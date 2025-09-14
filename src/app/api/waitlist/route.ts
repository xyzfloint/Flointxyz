// src/app/api/waitlist/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      return NextResponse.json(
        { ok: false, error: "FORMSPREE_ENDPOINT is not set" },
        { status: 500 }
      );
    }

    const data = await req.json();
    if (!data?.email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { ok: false, error: `Formspree error: ${text}` },
        { status: 502 }
      );
    }

    const json = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, provider: "formspree", response: json });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}