import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akansh Srivastava — SDE-2 @ Microsoft",
  description:
    "SDE-2 at Microsoft with 6+ years in distributed systems (Java, .NET, Node.js, Python). Scaled Dynamics 365 telephony tooling from 2K to 40K concurrent calls and shipped Cadence at 10M+ calls/week with zero failures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0c0414] text-white">
        {children}
      </body>
    </html>
  );
}
