"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, ImageIcon, RefreshCw } from "lucide-react";
import { validateImageFile } from "@/utils/file-validation";
import { ALLOWED_IMAGE_EXTENSIONS, MAX_FILE_SIZE } from "@/utils/constants";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
}

export function ImageUpload({ onChange, error, disabled }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptTypes = ALLOWED_IMAGE_EXTENSIONS.join(",");

  const processFile = useCallback(
    (file: File) => {
      const validationError = validateImageFile(file);
      if (validationError) {
        setLocalError(validationError);
        return;
      }

      setLocalError(null);

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setFileName(file.name);
      onChange(file);
    },
    [onChange, preview]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleRemove = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFileName(null);
    setLocalError(null);
    onChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleReplace = () => {
    inputRef.current?.click();
  };

  const displayError = error || localError;

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept={acceptTypes}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
        aria-label="Upload image"
      />

      <AnimatePresence mode="wait">
        {preview ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900/40"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={preview}
                alt="Aperçu"
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>

            <div className="flex items-center justify-between border-t border-zinc-700/50 bg-zinc-900/60 px-4 py-3">
              <span className="truncate text-sm text-zinc-400">{fileName}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleReplace}
                  disabled={disabled}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-amber-400 transition-colors hover:bg-amber-500/10 disabled:opacity-50"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Remplacer
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  disabled={disabled}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
                >
                  <X className="h-3.5 w-3.5" />
                  Supprimer
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragOver={(e) => {
              e.preventDefault();
              if (!disabled) setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => !disabled && inputRef.current?.click()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 transition-all duration-200",
              isDragging
                ? "border-amber-500/60 bg-amber-500/5"
                : "border-zinc-700/60 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-900/50",
              disabled && "cursor-not-allowed opacity-50",
              displayError && "border-red-500/40"
            )}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800/80">
              {isDragging ? (
                <Upload className="h-6 w-6 text-amber-400" />
              ) : (
                <ImageIcon className="h-6 w-6 text-zinc-500" />
              )}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-300">
                Glissez une image ou cliquez pour parcourir
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                JPG, PNG, WEBP — max {MAX_FILE_SIZE / (1024 * 1024)} Mo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {displayError && (
        <p className="text-sm text-red-400" role="alert">
          {displayError}
        </p>
      )}
    </div>
  );
}
