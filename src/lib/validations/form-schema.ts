import { z } from "zod";
import { FORM_MESSAGES } from "@/utils/constants";

export const contactFormSchema = z.object({
  name: z.string().min(1, FORM_MESSAGES.required),
  email: z.string().min(1, FORM_MESSAGES.required).email(FORM_MESSAGES.invalidEmail),
  phone: z.string().min(1, FORM_MESSAGES.required),
  message: z.string().min(1, FORM_MESSAGES.required),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const serverFormSchema = contactFormSchema.extend({
  image: z.instanceof(File).optional().nullable(),
});
