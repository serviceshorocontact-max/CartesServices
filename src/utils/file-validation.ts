import {
  ALLOWED_IMAGE_EXTENSIONS,
  ALLOWED_IMAGE_TYPES,
  MAX_FILE_SIZE,
} from "./constants";

export function isAllowedImageType(file: File): boolean {
  const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
  return (
    (ALLOWED_IMAGE_TYPES as readonly string[]).includes(file.type) ||
    ALLOWED_IMAGE_EXTENSIONS.includes(extension)
  );
}

export function isAllowedFileSize(file: File): boolean {
  return file.size <= MAX_FILE_SIZE;
}

export function validateImageFile(file: File): string | null {
  if (!isAllowedImageType(file)) {
    return "Format de fichier non supporté.";
  }
  if (!isAllowedFileSize(file)) {
    return "Le fichier dépasse la taille maximale autorisée (5 Mo).";
  }
  return null;
}
