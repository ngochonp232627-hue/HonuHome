import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "pill";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "default",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-white text-gray-900 font-semibold hover:bg-white/90 active:scale-[0.99] shadow-sm",
      secondary:
        "bg-[#5C84BE] text-white hover:bg-[#4E73A8] active:scale-[0.99]",
      outline:
        "border border-white/60 bg-transparent text-white hover:bg-white/10",
      ghost: "text-white/80 hover:text-white hover:bg-white/10",
      glass:
        "bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 active:scale-[0.99]",
    };

    const sizes = {
      default: "h-11 px-6 text-sm rounded-xl",
      sm: "h-9 px-4 text-xs rounded-lg",
      lg: "h-14 px-8 text-base rounded-2xl",
      pill: "h-[60px] px-8 text-base rounded-[40px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span>Đang xử lý...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
