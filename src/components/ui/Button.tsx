import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "ghost";
}

export function Button({
  children,
  className,
  isLoading,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:from-violet-400 hover:to-purple-500 hover:shadow-violet-500/35 active:scale-[0.98]",
        variant === "ghost" &&
          "border border-white/15 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
