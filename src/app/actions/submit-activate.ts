"use server";

import { sendActivateEmail } from "@/services/email.service";
import { activateFormSchema } from "@/lib/validations/form-schema";
import { validateImageFile } from "@/utils/file-validation";
import { FORM_MESSAGES } from "@/utils/constants";
import type { FormSubmitResult } from "@/types/form";

export async function submitActivateForm(
  formData: FormData
): Promise<FormSubmitResult> {
  try {
    const rawData = {
      lastName: formData.get("lastName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      cardType: formData.get("cardType")?.toString() ?? "",
      cardCode: formData.get("cardCode")?.toString() ?? "",
      amount: formData.get("amount")?.toString() ?? "",
      currency: formData.get("currency")?.toString() ?? "",
    };

    const parsed = activateFormSchema.safeParse(rawData);

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

    await sendActivateEmail({
      ...parsed.data,
      image,
    });

    return {
      success: true,
      message: FORM_MESSAGES.submitSuccess,
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire d'activation:", error);
    return {
      success: false,
      message: FORM_MESSAGES.submitError,
    };
  }
}

