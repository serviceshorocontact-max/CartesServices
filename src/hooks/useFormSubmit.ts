"use client";

import { useState, useCallback } from "react";
import { submitContactForm } from "@/app/actions/submit-form";
import type { FormSubmitResult } from "@/types/form";

export function useFormSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<FormSubmitResult | null>(null);

  const submit = useCallback(async (formData: FormData) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await submitContactForm(formData);
      setResult(response);
      return response;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const resetResult = useCallback(() => setResult(null), []);

  return { submit, isSubmitting, result, resetResult };
}
