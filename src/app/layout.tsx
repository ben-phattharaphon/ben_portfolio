import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEN \u2014 Pixel Architect & Creative Developer",
  description: "Portfolio of BEN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* XP.css provides the classic Windows XP UI components */}
        <link rel="stylesheet" href="https://unpkg.com/xp.css/dist/XP.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
