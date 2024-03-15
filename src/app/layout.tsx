import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavProvider } from "@/contexts/navContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dourado Comunicação",
  description: "Sua empresa sempre aberta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NavProvider>
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
