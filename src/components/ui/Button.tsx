"use client";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: boolean;
};

export default function Button({ className = "", asLink, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all";
  const visual =
    "bg-[linear-gradient(135deg,#7C3AED_0%,#8B5CF6_50%,#22D3EE_100%)] text-white shadow-[0_10px_30px_rgba(124,58,237,.35)] hover:brightness-110 active:translate-y-[1px]";
  const ring = "focus:outline-none focus:ring-2 focus:ring-cyan-300/60";
  return (
    <button {...props} className={[base, visual, ring, className].join(" ")} />
  );
}