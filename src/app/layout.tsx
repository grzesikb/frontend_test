import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import Providers from "@/components/providers/Providers";

const opensans = Open_Sans({ subsets: ["latin"] });

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
      <body className={opensans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
