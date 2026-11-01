import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, checked, defaultChecked, onChange, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const [isChecked, setIsChecked] = React.useState(
      checked ?? defaultChecked ?? false
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      onChange?.(e);
    };

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex items-center gap-2.5 cursor-pointer select-none group",
          className
        )}
      >
        <div className="relative">
          <input
            type="checkbox"
            id={inputId}
            ref={ref}
            checked={isChecked}
            onChange={handleChange}
            className="sr-only peer"
            {...props}
          />
          <div className="w-5 h-5 rounded-md border-2 border-white/80 bg-white/10 backdrop-blur-sm peer-checked:bg-[#5C84BE] peer-checked:border-[#5C84BE] transition-all flex items-center justify-center group-hover:border-white">
            <Check
              className={cn(
                "w-3.5 h-3.5 text-white transition-transform duration-150",
                isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
              strokeWidth={3}
            />
          </div>
        </div>
        {label && <span className="text-sm text-white/90 font-medium">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
