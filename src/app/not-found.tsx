export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white grid place-items-center px-6">
      <div className="text-center space-y-4">
        <div className="text-sm text-white/60">Error 404</div>
        <h1 className="text-3xl md:text-5xl font-semibold">Page not found</h1>
        <p className="text-white/70">The page you’re looking for doesn’t exist.</p>
        <a
          href="/"
          className="inline-flex rounded-xl px-5 py-3 text-sm font-semibold
                     text-[#0B0D10] bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF]">
          Back to home
        </a>
      </div>
    </main>
  );
}