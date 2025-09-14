"use client";
import React from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const ROLES = [
  { key: "freelancer", label: "Freelancer" },
  { key: "founder",    label: "Founder" },
  { key: "trader",     label: "Trader" },
  { key: "team",       label: "Team" },
  { key: "other",      label: "Other" }, // ← новое
];

export default function RoleSelect({ value, onChange }: Props) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {ROLES.map((r) => {
          const active = value === r.key;
          return (
            <button
              key={r.key}
              type="button"
              onClick={() => onChange(r.key)}
              className={[
                "rounded-xl border px-4 py-2 text-sm font-medium transition-all",
                "backdrop-blur bg-white/5 border-white/10 text-white/80 hover:bg-white/10",
                active &&
                  "bg-white/15 text-white border-white/20 ring-2 ring-cyan-300/50",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {r.label}
            </button>
          );
        })}
      </div>
      <input type="hidden" name="role" value={value} />
    </div>
  );
}