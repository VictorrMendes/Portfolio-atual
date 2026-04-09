import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { DisableLegacyServiceWorkers } from "@/components/DisableLegacyServiceWorkers";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Mendes | Portfolio",
  description:
    "Portfolio dark/tech com estetica game pixelada, construido com Next.js e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${pressStart.variable} h-full`}> 
      <body className="min-h-full bg-background text-foreground font-sans antialiased">
        <DisableLegacyServiceWorkers />
        {children}
      </body>
    </html>
  );
}
