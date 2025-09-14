export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-white/50">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold">Terms of Use</h1>
          <p className="mt-2 text-sm text-white/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-white/80">
            <strong>Beta notice.</strong> Floint is an early-stage product provided “as is” for testing and
            evaluation. Features may change or be removed at any time.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">Acceptable use</h2>
          <p className="text-white/80">
            You agree not to misuse the site, attempt unauthorized access, or engage in any illegal activity.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">No warranties</h2>
          <p className="text-white/80">
            The site is provided without warranties of any kind. We do not guarantee availability,
            accuracy, or fitness for a particular purpose.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">Liability</h2>
          <p className="text-white/80">
            To the maximum extent permitted by law, Floint will not be liable for any indirect or consequential
            losses arising from use of this site.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">Contact</h2>
          <p className="text-white/80">
            Questions? Contact{" "}
            <a href="mailto:hello@flointpay.com" className="text-white hover:opacity-90 underline">
              hello@flointpay.com
            </a>.
          </p>
        </div>

        {/* Back */}
        <div className="mt-6">
          <a href="/" className="text-sm text-white/70 hover:text-white">← Back to home</a>
        </div>
      </div>
    </main>
  );
}