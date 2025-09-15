import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floint — Spend crypto like cash",
  description:
    "Instant payments from your wallet to the world — simple, fast, borderless.",
  icons: {
    // новый путь с уникальным именем (ломаем кэш)
    icon: [
      { url: "/icon-v4.png", type: "image/png", sizes: "any" },
      // если есть .ico — добавь:
      { url: "/favicon-v4.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};