"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  DoorOpen,
  Users,
  FileSignature,
  ReceiptText,
  Wrench,
  BarChart3,
  Settings,
  Home,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  {
    name: "Trang chủ",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Quản Lí Phòng",
    href: "/rooms",
    icon: DoorOpen,
  },
  {
    name: "Người Thuê",
    href: "/tenants",
    icon: Users,
  },
  {
    name: "Hợp Đồng",
    href: "/contracts",
    icon: FileSignature,
  },
  {
    name: "Hóa Đơn",
    href: "/invoices",
    icon: ReceiptText,
  },
  {
    name: "Sự Cố/ Bảo Trì",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    name: "Báo Cáo",
    href: "/reports",
    icon: BarChart3,
  },
  {
    name: "Cài Đặt",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 z-50 w-[260px] bg-[#EAF2F8] border-r border-[#D2E2F0] flex flex-col justify-between py-6 px-4 transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Top Header & Logo */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-3">
            <Link href="/dashboard" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5C84BE] to-[#426ba8] flex items-center justify-center text-white shadow-md shadow-[#5C84BE]/20 group-hover:scale-105 transition-transform">
                <Home className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#253F5B]">
                  HonuHome
                </span>
                <span className="text-[11px] font-semibold text-[#5C84BE] tracking-wider uppercase">
                  Property Manager
                </span>
              </div>
            </Link>

            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#253F5B] hover:bg-[#D9E7F3] lg:hidden"
              aria-label="Đóng thanh menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard" || pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[15px] font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#5C84BE] text-white shadow-md shadow-[#5C84BE]/25 font-semibold"
                      : "text-[#4A6482] hover:bg-[#DCE9F5] hover:text-[#253F5B]"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 shrink-0 transition-transform",
                      isActive ? "text-white scale-105" : "text-[#5C84BE]"
                    )}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Card (Nguyễn Văn A - Quản Lí) */}
        <div className="pt-4 border-t border-[#D2E2F0]">
          <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-sm">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#5C84BE] to-[#88A6D3] flex items-center justify-center text-white font-bold text-base shadow-inner">
              NA
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-[#253F5B] truncate">
                Nguyễn Văn A
              </span>
              <span className="text-xs text-[#7B93AD] font-medium">
                Quản Lí Tòa Nhà
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
