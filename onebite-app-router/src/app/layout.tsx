import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Montserrat = localFont({
  src: "/font/Montserrat-Bold.woff2", // 절대 경로로 설정
  variable: "--font-Montserrat",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Montserrat.variable}`}>{children}</body>
    </html>
  );
}
