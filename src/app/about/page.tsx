"use client";
import Link from "next/link";

export default function AboutPage() {
  return ( 
    <main className="min-h-screen bg-[#0B0D10] text-white px-6 md:px-10 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF]">Floint</span>
        </h1>

        <p className="text-white/80 text-lg leading-relaxed mb-6">
          Floint is a next-generation Web3 fintech platform that allows freelancers, creators, and businesses
          to spend and receive crypto as easily as cash. Our mission is to make digital payments
          fast, borderless, and as intuitive as traditional cards.
        </p>

        <p className="text-white/70 leading-relaxed mb-6">
          We are building a seamless experience with virtual cards, instant top-ups, and
          secure KYC onboarding — all powered by blockchain technology.
        </p>

        <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold mb-3">Our vision</h2>
          <p className="text-white/70">
            To bridge Web3 and the real world, empowering people everywhere to pay, save,
            and grow their wealth without limits.
          </p>
        </div>
      </div>
    <div className="mt-8 text-center">
  <Link href="/" className="text-sm text-white/70 hover:text-white transition">
  ← Back to home
</Link>
</div>
    </main>
  );
}