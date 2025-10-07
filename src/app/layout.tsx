// app/layout.tsx
import type { Metadata } from "next";
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
    <html dir="rtl" lang="ar">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
