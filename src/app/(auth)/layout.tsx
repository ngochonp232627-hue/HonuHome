import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Đăng nhập | FloHouse",
  description: "Đăng nhập vào hệ thống quản lý bất động sản và phòng trọ FloHouse",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden bg-slate-900">
      {/* Background Image with Fallback Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/auth/login-bg.png"
          alt="FloHouse Background"
          fill
          priority
          className="object-cover object-center brightness-95"
          sizes="100vw"
        />
        {/* Subtle Dark Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[640px] my-auto">
        {children}
      </div>
    </main>
  );
}
