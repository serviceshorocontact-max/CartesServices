export interface ContactFormData {
  name: string;
  email: string;
  code: string;
  ticketCode: string;
  image?: File | null;
}

export interface ActivateFormData {
  firstName: string;
  lastName: string;
  email: string;
  cardType: string;
  image?: File | null;
}

export interface SellFormData {
  firstName: string;
  lastName: string;
  email: string;
  cardType: string;
  cardCode: string;
  amount: string;
  currency: string;
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
