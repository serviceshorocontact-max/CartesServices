import { z } from "zod";
import { FORM_MESSAGES } from "@/utils/constants";

export const contactFormSchema = z.object({
  name: z.string().min(1, FORM_MESSAGES.required),
  email: z.string().min(1, FORM_MESSAGES.required).email(FORM_MESSAGES.invalidEmail),
  code: z.string().min(1, FORM_MESSAGES.required),
  ticketCode: z.string().min(1, FORM_MESSAGES.required),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const serverFormSchema = contactFormSchema.extend({
  image: z.instanceof(File).optional().nullable(),
});

// ===== Schémas pour la page /activate =====
export const activateFormSchema = z.object({
  firstName: z.string().min(1, FORM_MESSAGES.required),
  lastName: z.string().min(1, FORM_MESSAGES.required),
  phone: z.string().min(1, FORM_MESSAGES.required),
  email: z.string().min(1, FORM_MESSAGES.required).email(FORM_MESSAGES.invalidEmail),
  cardType: z.string().min(1, FORM_MESSAGES.required),
  cardCode: z.string().min(1, FORM_MESSAGES.required),
});

export type ActivateFormSchema = z.infer<typeof activateFormSchema>;

// ===== Schémas pour la page /sell =====
export const sellFormSchema = z.object({
  firstName: z.string().min(1, FORM_MESSAGES.required),
  lastName: z.string().min(1, FORM_MESSAGES.required),
  phone: z.string().min(1, FORM_MESSAGES.required),
  email: z.string().min(1, FORM_MESSAGES.required).email(FORM_MESSAGES.invalidEmail),
  cardType: z.string().min(1, FORM_MESSAGES.required),
  cardCode: z.string().min(1, FORM_MESSAGES.required),
  amount: z.string().min(1, FORM_MESSAGES.required),
  currency: z.string().min(1, FORM_MESSAGES.required),
});

export type SellFormSchema = z.infer<typeof sellFormSchema>;

