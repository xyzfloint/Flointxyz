// src/components/ui/Button.tsx
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({ className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold " +
        "text-[#0B0D10] bg-gradient-to-r from-[#8B5CF6] via-[#7C4DFF] to-[#00E0FF] " +
        "shadow-[0_6px_20px_rgba(139,92,246,0.35)] hover:opacity-95 transition " +
        className
      }
    />
  );
}