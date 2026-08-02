"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "@/lib/validations/form-schema";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { FormField } from "@/components/ui/FormField";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ImageUpload } from "@/components/form/ImageUpload";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";

interface ContactFormProps {
  enableImageUpload?: boolean;
}

export function ContactForm({ enableImageUpload = true }: ContactFormProps) {
  const { submit, isSubmitting, result, resetResult } = useFormSubmit();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formKey, setFormKey] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (result?.success) {
      reset();
      setImageFile(null);
      setFormKey((k) => k + 1);
    }
  }, [result?.success, reset]);

  const onSubmit = async (data: ContactFormSchema) => {
    resetResult();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    if (enableImageUpload && imageFile) {
      formData.append("image", imageFile);
    }

    await submit(formData);
  };

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div variants={fadeInUp}>
          <FormField label="Nom" htmlFor="name" error={errors.name?.message}>
            <Input
              id="name"
              placeholder="Votre nom complet"
              hasError={!!errors.name}
              {...register("name")}
            />
          </FormField>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FormField label="Email" htmlFor="email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              hasError={!!errors.email}
              {...register("email")}
            />
          </FormField>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <FormField label="Téléphone" htmlFor="phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            placeholder="+33 6 00 00 00 00"
            hasError={!!errors.phone}
            {...register("phone")}
          />
        </FormField>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <FormField label="Message" htmlFor="message" error={errors.message?.message}>
          <Textarea
            id="message"
            rows={5}
            placeholder="Décrivez votre demande de vérification..."
            hasError={!!errors.message}
            {...register("message")}
          />
        </FormField>
      </motion.div>

      {enableImageUpload && (
        <motion.div variants={fadeInUp}>
          <FormField label="Image (optionnel)" htmlFor="image">
            <ImageUpload
              key={formKey}
              onChange={setImageFile}
              disabled={isSubmitting}
            />
          </FormField>
        </motion.div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-start gap-4 rounded-2xl border px-5 py-4 ${
            result.success
              ? "border-emerald-500/40 bg-emerald-500/10"
              : "border-red-500/40 bg-red-500/10"
          }`}
          role="alert"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
              result.success
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {result.success ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
          </motion.div>
          <div className="flex-1">
            <p
              className={`text-sm font-semibold ${
                result.success ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {result.success
                ? "Demande envoyée avec succès !"
                : "Une erreur est survenue"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/70">
              {result.success
                ? "Merci pour votre confiance. Votre demande a bien été transmise à notre équipe, nous vous répondrons par email ou WhatsApp dans les plus brefs délais."
                : result.message}
            </p>
          </div>
        </motion.div>
      )}

      <motion.div variants={fadeInUp} className="pt-2">
        <Button type="submit" isLoading={isSubmitting} className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          Envoyer la demande
        </Button>
      </motion.div>
    </motion.form>
  );
}
