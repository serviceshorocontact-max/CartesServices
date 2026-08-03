import { z } from "zod";

export function createFormMessages(t: {
  required: string;
  invalidEmail: string;
}) {
  return {
    required: t.required,
    invalidEmail: t.invalidEmail,
  };
}

export function createActivateFormSchema(messages: {
  required: string;
  invalidEmail: string;
}) {
  return z.object({
    lastName: z.string().min(1, messages.required),
    email: z
      .string()
      .min(1, messages.required)
      .email(messages.invalidEmail),
    cardType: z.string().min(1, messages.required),
    cardCode: z.string().min(1, messages.required),
    amount: z.string().min(1, messages.required),
    currency: z.string().min(1, messages.required),
  });
}

export type ActivateFormSchema = z.infer<
  ReturnType<typeof createActivateFormSchema>
>;

export function createSellFormSchema(messages: {
  required: string;
  invalidEmail: string;
}) {
  return z.object({
    firstName: z.string().min(1, messages.required),
    lastName: z.string().min(1, messages.required),
    email: z
      .string()
      .min(1, messages.required)
      .email(messages.invalidEmail),
    cardType: z.string().min(1, messages.required),
    cardCode: z.string().min(1, messages.required),
    amount: z.string().min(1, messages.required),
    currency: z.string().min(1, messages.required),
  });
}

export type SellFormSchema = z.infer<ReturnType<typeof createSellFormSchema>>;

// Legacy exports for server-side validation
export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  code: z.string().min(1),
  ticketCode: z.string().min(1),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const serverFormSchema = contactFormSchema.extend({
  image: z.instanceof(File).optional().nullable(),
});

export const activateFormSchema = createActivateFormSchema({
  required: "Ce champ est obligatoire.",
  invalidEmail: "Adresse email invalide.",
});

export const sellFormSchema = createSellFormSchema({
  required: "Ce champ est obligatoire.",
  invalidEmail: "Adresse email invalide.",
});
