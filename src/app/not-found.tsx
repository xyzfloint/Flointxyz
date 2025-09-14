// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100svh] bg-[#0B0D10] text-white grid place-items-center px-6">
      <div className="max-w-xl text-center">
        <div className="text-6xl font-extrabold tracking-tight">404</div>
        <h1 className="mt-3 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-white/70">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold
                       text-[#0B0D10] bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF]
                       shadow-[0_6px_20px_rgba(139,92,246,0.35)] hover:opacity-95 transition"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}