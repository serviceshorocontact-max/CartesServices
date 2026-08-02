export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export const ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export const FORM_MESSAGES = {
  required: "Ce champ est obligatoire.",
  invalidEmail: "Adresse email invalide.",
  invalidFileType: "Format de fichier non supporté.",
  fileTooLarge: "Le fichier dépasse la taille maximale autorisée (5 Mo).",
  submitSuccess: "Votre demande a été envoyée avec succès.",
  submitError: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
} as const;
