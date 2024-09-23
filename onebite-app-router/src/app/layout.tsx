import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Grid from "@/_component/Grid";
import GlobalNav from "@/_component/global-nav";
import { ReactNode } from "react";
import { ThemeProvider } from "@/_component/theme-provider";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "한입 - 시네마",
  description: "한입 시네마 😎",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>
        <ThemeProvider attribute="data-theme">
          <Grid.center>
            <GlobalNav />
            {children}
          </Grid.center>
        </ThemeProvider>
      </body>
    </html>
  );
}
