import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FloHouse - Quản lý phòng & Căn hộ cho thuê",
  description: "Hệ thống quản lý phòng trọ, căn hộ, hợp đồng và hóa đơn FloHouse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-[#EAF2F8] text-[#253F5B] selection:bg-[#5C84BE] selection:text-white">
        {children}
      </body>
    </html>
  );
}
