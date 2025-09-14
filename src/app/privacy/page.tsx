export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-white/50">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-white/80">
            <strong>Beta notice.</strong> Floint is currently in early development. We only collect the
            minimum information required to operate this website and our waitlist.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">What we collect</h2>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li><strong>Waitlist data:</strong> name, email, role, optional message.</li>
            <li><strong>Basic analytics:</strong> anonymous usage data to improve UX.</li>
          </ul>

          <h2 className="mt-6 mb-2 text-xl font-semibold">How we use your data</h2>
          <p className="text-white/80">
            We use the data to manage the waitlist, share product updates, and improve the website.
            We do <span className="underline underline-offset-4">not</span> sell personal data.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">Storage & security</h2>
          <p className="text-white/80">
            Data is stored with reputable providers and transmitted over TLS. Access is restricted
            to authorized personnel only.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">Your choices</h2>
          <p className="text-white/80">
            You can request access or deletion of your data by contacting us at{" "}
            <a href="mailto:hello@flointpay.com" className="text-white hover:opacity-90 underline">
              hello@flointpay.com
            </a>.
          </p>

          <h2 className="mt-6 mb-2 text-xl font-semibold">Updates</h2>
          <p className="text-white/80">
            We may update this notice as the product evolves. Material changes will be reflected here.
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