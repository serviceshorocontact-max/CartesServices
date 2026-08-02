"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/form/ContactForm";
import { siteConfig } from "@/utils/site-content";
import { fadeInUp } from "@/animations/fadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="glass-card rounded-3xl p-6 sm:p-10"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Besoin d&apos;aide ?
          </h2>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Notre équipe est là pour vous accompagner. Contactez-nous par email,
            WhatsApp ou via le formulaire ci-dessous.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                siteConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <ContactForm enableImageUpload />
      </motion.div>
    </section>
  );
}
