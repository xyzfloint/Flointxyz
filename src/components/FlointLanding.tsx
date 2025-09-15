'use client';
import Link from 'next/link';   // ← добавь импорт
import Image from "next/image";
import { useEffect } from 'react';
export default function FlointLanding() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // отключаем авто-восстановление скролла браузером
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // если пришли с хэшем (#how и т.п.) — убираем его и скроллим наверх
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="min-h-screen text-white overflow-hidden relative">
      {/* STATIC FINTECH BACKGROUND */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Мягкие радиальные пятна (фиолет → циан) */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(1200px 600px at 15% -10%, rgba(139,92,246,0.30), transparent 60%)," +
              "radial-gradient(900px 500px at 82% 0%, rgba(0,224,255,0.22), transparent 58%)," +
              "radial-gradient(800px 500px at 50% 115%, rgba(124,77,255,0.18), transparent 55%)",
            filter: "saturate(120%) blur(10px)",
          }}
        />
        {/* Тонкая сетка */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Базовый фон */}
        <div className="absolute inset-0 bg-[#0B0D10]" />
      </div>

      {/* NAV */}
<header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
  <div className="flex items-center gap-3">
    <Image
      src="/logo2.png"
      alt="Floint logo"
      width={120}
      height={32}
      className="h-15 w-auto"
      priority
    />
  </div>
  <div className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
    Coming&nbsp;soon
  </div>
</header>

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-10 pt-10 md:pt-16 pb-24 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
          Web3 • Fintech • Cards
        </div>

        <h1 className="mt-6 mx-auto max-w-4xl text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.02em]">
          Spend{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF]">
            crypto
          </span>{" "}
          like cash
        </h1>

        <p className="mt-3 mx-auto max-w-2xl text-base md:text-lg text-white/80">
          Instant payments from your wallet to the world — simple, fast, borderless.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                       text-[#0B0D10] bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF]
                       shadow-[0_6px_20px_rgba(139,92,246,0.35)] hover:opacity-95 transition"
          >
            Join waitlist
          </Link>
          <Link
            href="#how"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                       text-white/90 border border-white/15 bg-white/5 hover:bg-white/10
                       backdrop-blur transition"
          >
            How it works
          </Link>
        </div>

        {/* Preview block (замени весь свой текущий блок на это) */}
<div
  className="relative mt-12 md:mt-16 w-full max-w-5xl mx-auto aspect-[16/9]
             rounded-3xl border border-white/15 bg-white/5
             backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]
             overflow-hidden"
>
  {/* мягкие «подсветки» позади карты */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-[#8B5CF6]/40 rounded-full blur-3xl" />
    <div className="absolute -bottom-24 right-0 w-[26rem] h-[26rem] bg-[#00E0FF]/40 rounded-full blur-3xl" />
  </div>

  {/* лёгкий бликовый оверлей (очень тонкий) */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,#fff,transparent_40%),radial-gradient(circle_at_70%_80%,#fff,transparent_40%)]" />

  {/* сама карта наверху */}
  <div className="relative z-10 grid place-items-center h-full">
    <AbstractCardDemo />
  </div>
</div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative z-10 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StepCard
            index={1}
            title="Verify (KYC)"
            text="Quick, compliance-first onboarding powered by trusted providers."
            illustration={<IlloKYC />}
          />
          <StepCard
            index={2}
            title="Top up"
            text="Add USDC/USDT from your wallet or buy via on-ramp."
            illustration={<IlloTopUp />}
          />
          <StepCard
            index={3}
            title="Tap to pay"
            text="Your virtual card works anywhere."
            illustration={<IlloTapToPay />}
          />
        </div>
      </section>
{/* FAQ */}
<section className="relative z-10 px-6 md:px-10 pb-20">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-white/90">
      FAQ
    </h2>
    <div className="mt-8 space-y-3">
      <FaqItem q="Do I need KYC?" a="Yes. We partner with trusted providers to keep onboarding quick and compliant." />
      <FaqItem q="Which assets are supported?" a="USDC/USDT at launch, expanding over time with partner support." />
      <FaqItem q="Which regions are supported?" a="We’ll open in phases. Join the waitlist to get notified for your region." />
      <FaqItem q="Fees?" a="Transparent pricing. We’ll publish exact fees before launch; early users may get reduced fees." />
      <FaqItem q="Is this non-custodial?" a="You control your wallet and private keys. We don’t custody your crypto." />
      <FaqItem q="Apple/Google Pay?" a="Virtual card works where available, subject to issuing partner and region." />
    </div>
  </div>
</section>

{/* FOR WHOM */}
<section className="relative z-10 mt-12 px-6 md:px-10">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-white/90">
      Built for real-world use
    </h2>
    <p className="mt-2 text-center text-white/70">Who gets value on day one</p>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <WhomCard title="Freelancers" points={["Instant payouts", "Spend globally"]} />
      <WhomCard title="Agencies" points={["Team cards", "Centralized limits"]} />
      <WhomCard title="Remote teams" points={["Multi-currency USDC/USDT", "Low FX friction"]} />
      <WhomCard title="Solo founders" points={["No bank hurdles", "On-ramp, then tap"]} />
    </div>
  </div>
</section>

{/* TRUST SIGNALS */}
<section className="relative z-10 mt-10 md:mt-14 px-6 md:px-10">
  <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
    <div className="text-center text-xs text-white/60 mb-4">Powered by</div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
      <LogoPill text="USDC / USDT" />
      <LogoPill text="Visa / MC Issuer (TBD)" />
      <LogoPill text="WalletConnect" />
      <LogoPill text="On-Ramp Partner (TBD)" />
    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="relative z-10 mt-14 border-t border-white/10 px-4 py-6 text-center md:text-left">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/80">© {new Date().getFullYear()} Floint — Coming soon</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-white/70 hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white">Terms</Link>
            <Link
      href="/about"
      className="text-sm text-white/80 hover:text-white transition"
    >
      About
    </Link>
            <a href="mailto:hello@flointpay.com" className="text-sm text-white/80 hover:text-white">hello@flointpay.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ===== helpers ===== */

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00E0FF" />
        </linearGradient>
      </defs>
      <path d="M6 9.5c0-1.38 1.12-2.5 2.5-2.5H26v4H11a1.5 1.5 0 0 1 0-3H26" fill="url(#lg)" opacity="0.95" />
      <path d="M6 17.5c0-1.38 1.12-2.5 2.5-2.5H21v4H11a1.5 1.5 0 0 1 0-3H21" fill="url(#lg)" opacity="0.65" />
    </svg>
  );
}
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="text-sm font-semibold text-white/90">{q}</span>
        <span className="ml-4 h-6 w-6 grid place-items-center rounded-md border border-white/10 bg-white/5 text-white/70">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm text-white/70">{a}</p>
    </details>
  );
}

function WhomCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/[0.07] transition">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#00E0FF]">
          {/* Силуэт пользователя */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="h-5 w-5 opacity-90"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
        <h3 className="text-base font-semibold tracking-[-0.01em]">{title}</h3>
      </div>

      <ul className="mt-4 space-y-1 text-sm text-white/75 list-disc pl-5">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
function StepCard({
  index,
  title,
  text,
  illustration,
}: {
  index: number;
  title: string;
  text: string;
  illustration: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/[0.07] transition">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#00E0FF] text-[#0B0D10] font-bold">
          {index}
        </div>
        <h3 className="text-base font-semibold tracking-[-0.01em]">{title}</h3>
      </div>

      {/* Иллюстрация */}
      <div className="mt-5">{illustration}</div>

      <p className="mt-4 text-sm text-white/70">{text}</p>
    </div>
  );
}
function LogoPill({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
      <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" aria-hidden>
        <defs>
          <linearGradient id="pill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#00E0FF" />
          </linearGradient>
        </defs>
        <circle cx="10" cy="10" r="8" fill="none" stroke="url(#pill)" strokeWidth="2" opacity=".9" />
      </svg>
      <span className="text-sm text-white/80">{text}</span>
    </div>
  );
}

/* --- Иллюстрации (SVG) --- */

function IlloKYC() {
  return (
    <svg viewBox="0 0 240 120" className="w-full h-auto">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00E0FF" />
        </linearGradient>
      </defs>
      <rect x="12" y="20" width="216" height="84" rx="14"
        fill="none" stroke="url(#g1)" strokeOpacity="0.35" />
      <rect x="24" y="32" width="80" height="64" rx="10"
        fill="none" stroke="url(#g1)" strokeOpacity="0.65" />
      <circle cx="64" cy="60" r="16" fill="none" stroke="url(#g1)" strokeWidth="2" />
      <path d="M48 88c4-10 28-10 32 0" fill="none" stroke="url(#g1)" />
      <rect x="116" y="38" width="96" height="10" rx="5" fill="url(#g1)" opacity=".35" />
      <rect x="116" y="56" width="80" height="8" rx="4" fill="url(#g1)" opacity=".25" />
      <rect x="116" y="72" width="60" height="8" rx="4" fill="url(#g1)" opacity=".18" />
    </svg>
  );
}

function IlloTopUp() {
  return (
    <svg viewBox="0 0 240 120" className="w-full h-auto">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00E0FF" />
        </linearGradient>
      </defs>
      <rect x="20" y="24" width="140" height="72" rx="12"
        fill="none" stroke="url(#g2)" strokeOpacity=".5" />
      <rect x="28" y="46" width="90" height="12" rx="6" fill="url(#g2)" opacity=".28" />
      <rect x="28" y="66" width="70" height="10" rx="5" fill="url(#g2)" opacity=".2" />
      <g opacity=".9">
        <circle cx="178" cy="60" r="34" fill="none" stroke="url(#g2)" />
        <path d="M178 44v20M168 54h20" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function IlloTapToPay() {
  return (
    <svg viewBox="0 0 240 120" className="w-full h-auto">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00E0FF" />
        </linearGradient>
      </defs>
      {/* Карта */}
      <rect x="24" y="28" width="152" height="64" rx="12"
        fill="none" stroke="url(#g3)" strokeOpacity=".55" />
      <rect x="36" y="42" width="40" height="8" rx="4" fill="url(#g3)" opacity=".3" />
      <rect x="36" y="60" width="80" height="8" rx="4" fill="url(#g3)" opacity=".22" />
      {/* NFC волны */}
      <path d="M188,48 q12,12 0,24" fill="none" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
      <path d="M196,40 q20,20 0,40" fill="none" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <path d="M204,32 q28,28 0,56" fill="none" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" opacity=".35" />
    </svg>
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