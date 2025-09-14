"use client";
import React, { useState } from "react";
import RoleSelect from "@/components/RoleSelect";
import Button from "@/components/ui/Button";

export default function WaitlistPage() {
  const [role, setRole] = useState("freelancer");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // Сохраняем ссылку на форму ДО await
    const form = e.currentTarget;

    // Собираем данные + добавляем роль из стейта на всякий
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, role };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("ok");
      form.reset();          // теперь это не упадёт
      setRole("freelancer"); // вернуть селект в дефолт
    } catch (err) {
      setStatus("err");
      console.error(err);
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <main className="min-h-[100svh] bg-[#0B0D10] text-white flex items-center">
      <div className="mx-auto w-full max-w-3xl px-6">
        <header className="mb-8 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-white/50">Floint Waitlist</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Be first to try{" "}
            <span className="bg-[linear-gradient(135deg,#7C3AED_0%,#8B5CF6_45%,#22D3EE_100%)] bg-clip-text text-transparent">
              Floint
            </span>
          </h1>
          <p className="mt-3 text-white/60">
            Early access to our crypto-to-card experience and product updates.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur">
          <form onSubmit={onSubmit} className="grid gap-5">
            {/* скрыто передаём роль в сабмит, на случай если серверу нужно именно из формы */}
            <input type="hidden" name="role" value={role} />

            <div className="grid gap-2">
              <label className="text-sm text-white/70">Your role</label>
              <RoleSelect value={role} onChange={setRole} />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20"
                  placeholder="Satoshi Nakamoto"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20"
                  placeholder="you@domain.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-white/70">Country (optional)</label>
              <input
                name="country"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20"
                placeholder="United Arab Emirates"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" disabled={status === "loading"} className={status === "loading" ? "opacity-70" : ""}>
                {status === "loading" ? "Joining…" : "Join waitlist"}
              </Button>

              <a href="/" className="ml-auto text-sm text-white/70 hover:text-white transition flex items-center gap-1">
                ← Back to home
              </a>

              {status === "ok" && <span className="text-sm text-emerald-400">Thanks! We’ll be in touch.</span>}
              {status === "err" && <span className="text-sm text-rose-400">Something went wrong. Try again.</span>}
            </div>
          </form>
        </section>

        <p className="mt-6 text-center text-xs text-white/40">
          By joining, you agree to receive early product updates from Floint.
        </p>
      </div>
    </main>
  );
}