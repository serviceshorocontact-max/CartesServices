"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  CreditCard,
  Hash,
  Paperclip,
  CloudUpload,
} from "lucide-react";
import {
  activateFormSchema,
  type ActivateFormSchema,
} from "@/lib/validations/form-schema";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { ImageUpload } from "@/components/form/ImageUpload";
import { cardTypes } from "@/utils/site-content";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";

export function ActivateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formKey, setFormKey] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ActivateFormSchema>({
    resolver: zodResolver(activateFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      cardType: "",
      cardCode: "",
    },
  });

  useEffect(() => {
    if (result?.success) {
      reset();
      setImageFile(null);
      setFormKey((k) => k + 1);
    }
  }, [result?.success, reset]);

  const onSubmit = async (data: ActivateFormSchema) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("cardType", data.cardType);
      formData.append("cardCode", data.cardCode);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const { submitActivateForm } = await import("@/app/actions/submit-activate");
      const response = await submitActivateForm(formData);
      setResult(response);
    } catch (error) {
      console.error("Erreur:", error);
      setResult({
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <motion.div variants={fadeInUp}>
          <FormField label="Prénom" htmlFor="firstName" error={errors.firstName?.message}>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
              <Input
                id="firstName"
                className="pl-9"
                placeholder="Votre prénom"
                hasError={!!errors.firstName}
                {...register("firstName")}
              />
            </div>
          </FormField>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FormField label="Nom" htmlFor="lastName" error={errors.lastName?.message}>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
              <Input
                id="lastName"
                className="pl-9"
                placeholder="Votre nom"
                hasError={!!errors.lastName}
                {...register("lastName")}
              />
            </div>
          </FormField>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
            <Input
              id="email"
              type="email"
              className="pl-9"
              placeholder="votre@email.com"
              hasError={!!errors.email}
              {...register("email")}
            />
          </div>
        </FormField>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <FormField label="Type de carte" htmlFor="cardType" error={errors.cardType?.message}>
          <div className="relative">
            <CreditCard className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-tertiary" />
            <Select
              id="cardType"
              className="pl-9"
              hasError={!!errors.cardType}
              {...register("cardType")}
            >
              <option value="">Sélectionnez le type de carte</option>
              {cardTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
        </FormField>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <FormField label="Code de la carte" htmlFor="cardCode" error={errors.cardCode?.message}>
          <div className="relative">
            <Hash className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
            <Input
              id="cardCode"
              type="password"
              className="pl-9"
              placeholder="Entrez le code de votre carte"
              autoComplete="off"
              hasError={!!errors.cardCode}
              {...register("cardCode")}
            />
          </div>
        </FormField>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <span className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary">
          <Paperclip className="h-4 w-4 text-tertiary" />
          Justificatifs (facultatif)
        </span>
        <div className="rounded-xl border border-dashed border-theme bg-white/5 p-6 text-center transition-colors">
          <CloudUpload className="mx-auto h-6 w-6 text-tertiary" />
          <p className="mt-3 text-sm text-secondary">Glissez vos documents ici</p>
          <div className="mt-4">
            <ImageUpload
              key={formKey}
              onChange={setImageFile}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`flex items-start gap-4 rounded-xl border px-5 py-4 ${
              result.success
                ? "border-emerald-500/40 bg-emerald-500/10"
                : "border-red-500/40 bg-red-500/10"
            }`}
            role="alert"
          >
            <div
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
            </div>
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
                  ? "Merci pour votre confiance. Notre équipe traite votre demande d'activation et vous répondra par email dans les plus brefs délais."
                  : result.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={fadeInUp}>
        <Button
          type="submit"
          isLoading={isSubmitting}
          className="w-full"
        >
          <Send className="h-4 w-4" />
          Envoyer la demande
        </Button>
      </motion.div>
    </motion.form>
  );
}
