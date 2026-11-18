import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 800",
});

const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "ChillSofa | Smart Entertainment Sofas with Built-in Mini-Fridge",
  description:
    "Sit back and chill more. ChillSofa brings comfortable seating together with a whisper-quiet mini-fridge, cup holders, pull-out snack tray, and fast USB-C charging.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#131209] text-white selection:bg-[#272727] selection:text-white">
        {children}
      </body>
    </html>
  );
}

