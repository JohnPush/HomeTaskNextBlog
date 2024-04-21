import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog about JP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
