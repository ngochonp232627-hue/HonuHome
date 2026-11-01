import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, iconStart, iconEnd, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <div className="relative flex items-center">
          {iconStart && (
            <div className="absolute left-4 sm:left-5 text-white/70 pointer-events-none">
              {iconStart}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              "w-full h-[52px] sm:h-[60px] bg-white/20 hover:bg-white/25 focus:bg-white/30 backdrop-blur-md text-white placeholder:text-white/70 border-2 border-white/80 focus:border-white rounded-[18px] sm:rounded-[20px] px-5 sm:px-6 text-base outline-none transition-all duration-200",
              iconStart && "pl-12 sm:pl-14",
              iconEnd && "pr-12 sm:pr-14",
              error && "border-red-400 focus:border-red-400 bg-red-500/10",
              className
            )}
            {...props}
          />
          {iconEnd && (
            <div className="absolute right-4 sm:right-5 flex items-center">{iconEnd}</div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-300 font-medium pl-2 animate-fadeIn">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
