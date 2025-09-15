// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floint — Spend crypto like cash",
  description: "Instant payments from your wallet to the world — simple, fast, borderless.",
  icons: { icon: "/icon.png" }, // или /favicon.ico, если используешь .ico
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}