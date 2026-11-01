import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "primary" | "success" | "warning" | "info";
  className?: string;
}

export function KpiCard({
  label,
  value,
  icon: Icon,
  variant = "primary",
  className,
}: KpiCardProps) {
  const iconVariants = {
    primary: "bg-[#EAF2F8] text-[#5C84BE]",
    success: "bg-emerald-50 text-emerald-600",
    warning: "bg-amber-50 text-amber-600",
    info: "bg-sky-50 text-sky-600",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-5 sm:p-6 border border-[#E3EDF6] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-[135px] sm:h-[150px]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-transform hover:scale-110",
            iconVariants[variant]
          )}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold text-[#253F5B] tracking-tight">
          {value}
        </span>
      </div>

      <p className="text-xs sm:text-sm font-semibold text-[#68819D] tracking-wide">
        {label}
      </p>
    </div>
  );
}
