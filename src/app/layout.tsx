import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.scss";
import Navbar from "@/components/main/navbar";
import Header from "@/components/main/header";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metrix",
  description: "Web layout of an administrator dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
