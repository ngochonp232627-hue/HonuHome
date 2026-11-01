"use client";

import * as React from "react";
import { Search, Bell, Menu } from "lucide-react";

interface TopHeaderProps {
  onToggleSidebar?: () => void;
  unreadCount?: number;
}

export function TopHeader({
  onToggleSidebar,
  unreadCount = 99,
}: TopHeaderProps) {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <header className="sticky top-0 z-30 h-[90px] lg:h-[101px] bg-white border-b border-[#E3EDF6] flex items-center justify-between px-4 sm:px-8 transition-all">
      <div className="flex items-center gap-3 sm:gap-6 flex-1 max-w-2xl">
        {/* Mobile menu button */}
        <button
          onClick={onToggleSidebar}
          className="p-2.5 rounded-xl text-[#253F5B] hover:bg-[#F2F8FC] lg:hidden"
          aria-label="Mở thanh menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Bar - Chuẩn Figma Pill 100px */}
        <div className="relative w-full max-w-[556px]">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Tìm kiếm phòng, người thuê, hóa đơn..."
            className="w-full h-[52px] lg:h-[56px] pl-6 pr-14 rounded-full bg-[#F2F8FC] border border-[#DEEBF5] focus:border-[#5C84BE] focus:bg-white text-base text-[#253F5B] placeholder:text-[#BCC6D5] outline-none transition-all duration-200 shadow-inner/10"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-[#5C84BE] hover:text-[#426ba8] hover:bg-[#E2EFF9] transition-colors"
            aria-label="Thực hiện tìm kiếm"
          >
            <Search className="w-5 h-5 stroke-[2.3]" />
          </button>
        </div>
      </div>

      {/* Right Controls: Notifications & Profile */}
      <div className="flex items-center gap-3 sm:gap-6 ml-4">
        {/* Notification Bell with Badge 99 */}
        <div className="relative">
          <button
            type="button"
            className="relative p-3 rounded-2xl text-[#253F5B] hover:bg-[#F2F8FC] hover:text-[#5C84BE] transition-all group"
            aria-label="Thông báo hệ thống"
          >
            <Bell className="w-6 h-6 stroke-[2] transition-transform group-hover:rotate-12" />

            {/* Notification Badge: 99 */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[24px] h-[22px] px-1.5 rounded-full bg-rose-500 text-white text-[11px] font-extrabold flex items-center justify-center ring-2 ring-white shadow-md animate-pulse">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* User Avatar Circle */}
        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-[#E5EEF6]">
          <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full ring-2 ring-[#5C84BE]/30 bg-gradient-to-tr from-[#5C84BE] to-[#7DA0D0] flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-sm cursor-pointer hover:ring-[#5C84BE] transition-all">
            NA
          </div>
        </div>
      </div>
    </header>
  );
}
