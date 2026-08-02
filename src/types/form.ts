export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  image?: File | null;
}

export interface FormSubmitResult {
  success: boolean;
  message: string;
}

export interface ImageUploadState {
  file: File | null;
  preview: string | null;
}
