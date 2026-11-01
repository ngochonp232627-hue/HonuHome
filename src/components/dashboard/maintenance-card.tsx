import Link from "next/link";
import { Wrench, ChevronRight } from "lucide-react";
import type { MaintenanceSummary } from "@/types/dashboard";

interface MaintenanceCardProps {
  summary: MaintenanceSummary;
}

export function MaintenanceCard({ summary }: MaintenanceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-[#E3EDF6] shadow-sm flex flex-col justify-between min-h-[340px] sm:h-[397px]">
      {/* Header */}
      <div>
        <p className="text-base font-bold text-[#253F5B] leading-snug">
          Yêu cầu sửa chữa
        </p>
      </div>

      {/* Center Metric Display */}
      <div className="flex flex-col items-center justify-center my-auto space-y-3">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
          <Wrench className="w-8 h-8 stroke-[2.2]" />
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black text-[#253F5B]">
            {summary.inProgressCount}
          </span>
          <span className="text-lg font-bold text-[#718BA6]">Yêu cầu</span>
        </div>

        <div className="px-4 py-2 rounded-2xl bg-amber-50/70 border border-amber-200/50">
          <p className="text-sm font-semibold text-amber-800">
            Đang xử lý:{" "}
            <span className="font-extrabold">{summary.inProgressCount}</span>
          </p>
        </div>
      </div>

      {/* Action Button */}
      <Link
        href="/maintenance"
        className="w-full h-12 rounded-2xl bg-[#5C84BE] hover:bg-[#4D74AD] active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm shadow-[#5C84BE]/20 transition-all"
      >
        <span>Xem danh sách</span>
        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
      </Link>
    </div>
  );
}
