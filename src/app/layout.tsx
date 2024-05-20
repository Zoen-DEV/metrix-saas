import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metrix",
  description: "Web layout of an administrator dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <aside style={{ background: "green" }}>
          <nav>
            <h1>nav</h1>
          </nav>
        </aside>
        {children}
      </body>
    </html>
  );
}
