// src/app/api/waitlist/route.ts
export const runtime = "edge";

type WaitlistPayload = {
  name: string;
  email: string;
  country?: string;
  role?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as WaitlistPayload;

    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      return new Response("FORMSPREE_ENDPOINT is not set", { status: 500 });
    }

    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const text = await r.text();
      return new Response(text || "Upstream error", { status: 502 });
    }
    return new Response("OK", { status: 200 });
  } catch (e) {
    return new Response("Bad Request", { status: 400 });
  }
}