import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio in Motion",
    template: "%s | Portfolio in Motion",
  },
  description:
    "A personal portfolio built around a minimalist interactive 3D business card.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
