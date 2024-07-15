import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Providers from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartłomiej Grzesik",
  description: "Zadanie rekrutacyjne - nabthat/frontend_test ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
