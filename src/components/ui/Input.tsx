import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all duration-200",
        "focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20",
        hasError
          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          : "border-white/15 hover:border-white/25",
        className
      )}
      {...props}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export function Textarea({ className, hasError, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all duration-200",
        "focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20",
        hasError
          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          : "border-white/15 hover:border-white/25",
        className
      )}
      {...props}
    />
  );
}
