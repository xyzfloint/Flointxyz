'use client';

const WAITLIST_URL = 'https://forms.gle/HkAnJp9E5DrLjgSz6';

export default function FlointLanding() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white overflow-hidden">
      <Background />

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-3">
          <LogoMark className="h-8 w-8" />
          <span className="font-semibold tracking-[-0.02em] text-white/90">Floint</span>
        </div>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
        >
          Join waitlist
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 md:px-10 pt-10 md:pt-16 pb-24 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
          Web3 • Fintech • Cards
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.02em]">
          Spend{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF]">
            crypto
          </span>{' '}
          like cash
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70">
          Virtual card connected to your wallet. Tap to pay with Apple Pay & Google Pay.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            id="waitlist"
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl px-5 py-3 text-sm font-medium text-[#0B0D10] bg-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-300"
            aria-label="Join the Floint waitlist"
          >
            Join the waitlist
          </a>
          <a
            href="#how"
            className="rounded-xl px-5 py-3 text-sm font-medium text-white/80 bg-white/0 border border-white/15 backdrop-blur transition hover:bg-white/5 hover:text-white"
          >
            How it works
          </a>
        </div>

        {/* Preview block */}
        <div className="pointer-events-none mt-12 md:mt-16 w-full max-w-5xl aspect-[16/9] rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          <AbstractCardDemo />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StepCard index={1} title="Verify (KYC)" text="Quick, compliance-first onboarding powered by trusted providers." />
          <StepCard index={2} title="Top up" text="Add USDC/USDT from your wallet or buy via on-ramp." />
          <StepCard index={3} title="Tap to pay" text="Your virtual card works with Apple Pay & Google Pay anywhere." />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <LogoMark className="h-5 w-5" />
            <span>Floint</span>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white/80">floint.xyz</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <span className="text-white/30">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- helpers (must be in this file) ---------- */

function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 animate-[pulse_12s_ease-in-out_infinite] opacity-90"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% -10%, rgba(139,92,246,0.35), transparent 60%),' +
            'radial-gradient(900px 500px at 85% 10%, rgba(0,224,255,0.30), transparent 60%),' +
            'radial-gradient(800px 400px at 50% 110%, rgba(124,77,255,0.25), transparent 55%)',
          filter: 'saturate(130%) blur(12px)',
        }}
      />
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] opacity-[0.10]" viewBox="0 0 600 600">
        <defs>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#00E0FF" />
          </linearGradient>
        </defs>
        <path
          d="M300,60 C420,90 540,180 520,300 C500,420 380,520 260,520 C140,520 60,420 80,300 C100,180 180,120 300,60 Z"
          fill="url(#g)"
          filter="url(#blur)"
        />
      </svg>
      <style>{`@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.03)} }`}</style>
    </div>
  );
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00E0FF" />
        </linearGradient>
      </defs>
      {/* Abstract F made of two flows */}
      <path d="M6 9.5c0-1.38 1.12-2.5 2.5-2.5H26v4H11a1.5 1.5 0 0 1 0-3H26" fill="url(#lg)" opacity="0.95" />
      <path d="M6 17.5c0-1.38 1.12-2.5 2.5-2.5H21v4H11a1.5 1.5 0 0 1 0-3H21" fill="url(#lg)" opacity="0.65" />
    </svg>
  );
}

function StepCard({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#00E0FF] text-[#0B0D10] font-bold">
          {index}
        </div>
        <h3 className="text-base font-semibold tracking-[-0.01em]">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{text}</p>
    </div>
  );
}

function AbstractCardDemo() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-[90%] max-w-xl rounded-3xl border border-white/10 bg-[#0f1216]/80 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="h-6 w-6" />
              <span className="text-sm text-white/80">Floint • Virtual Card</span>
            </div>
            <span className="text-xs text-white/50">•••• 5123</span>
          </div>
          <div className="mt-6">
            <div className="text-3xl font-semibold tracking-tight">$ 1,248.32</div>
            <div className="mt-1 text-xs text-white/50">USD • Available</div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">Top up</div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">Freeze</div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">Limits</div>
          </div>
        </div>
      </div>
    </div>
  );
}
