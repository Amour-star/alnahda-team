import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "فريق النهضة التطوعي",
  description: "معًا نحو نهضة حقيقية تخدم الإنسان وتبني المستقبل",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={tajawal.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
