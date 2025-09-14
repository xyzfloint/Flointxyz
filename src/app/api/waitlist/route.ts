export const dynamic = "force-dynamic";

type WaitlistPayload = {
  name?: string;
  email?: string;
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

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // У Formspree на free-плане лучше не кэшировать
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(`Formspree error: ${text}`, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response("Unexpected server error", { status: 500 });
  }
}