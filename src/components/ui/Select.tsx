import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export function Select({ className, hasError, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full cursor-pointer appearance-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-primary placeholder:text-tertiary backdrop-blur-sm transition-all duration-200",
        "focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20",
        hasError
          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          : "border-theme hover:border-violet-500/40",
        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23888888%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

