"use server";

import { sendContactEmail } from "@/services/email.service";
import { contactFormSchema } from "@/lib/validations/form-schema";
import { validateImageFile } from "@/utils/file-validation";
import { FORM_MESSAGES } from "@/utils/constants";
import type { FormSubmitResult } from "@/types/form";

export async function submitContactForm(
  formData: FormData
): Promise<FormSubmitResult> {
  try {
    const rawData = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    const parsed = contactFormSchema.safeParse(rawData);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message;
      return {
        success: false,
        message: firstError ?? FORM_MESSAGES.submitError,
      };
    }

    const imageEntry = formData.get("image");
    let image: File | null = null;

    if (imageEntry instanceof File && imageEntry.size > 0) {
      const fileError = validateImageFile(imageEntry);
      if (fileError) {
        return { success: false, message: fileError };
      }
      image = imageEntry;
    }

    await sendContactEmail({
      ...parsed.data,
      image,
    });

    return {
      success: true,
      message: FORM_MESSAGES.submitSuccess,
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire:", error);
    return {
      success: false,
      message: FORM_MESSAGES.submitError,
    };
  }
}
