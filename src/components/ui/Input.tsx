import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 backdrop-blur-sm transition-all duration-200",
        "focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20",
        hasError
          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          : "border-zinc-700/80 hover:border-zinc-600",
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
        "w-full resize-none rounded-xl border bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 backdrop-blur-sm transition-all duration-200",
        "focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20",
        hasError
          ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          : "border-zinc-700/80 hover:border-zinc-600",
        className
      )}
      {...props}
    />
  );
}
