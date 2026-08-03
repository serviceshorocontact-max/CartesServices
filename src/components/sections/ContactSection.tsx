"use client";

import { motion } from "framer-motion";
import { Mail, ScanLine, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/form/ContactForm";
import { siteConfig } from "@/utils/site-content";
import { fadeInUp } from "@/animations/fadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="contact-bg relative py-16 sm:py-20">
      {/* Overlay pour lisibilité */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/80 to-[var(--background)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="relative glass-card rounded-3xl p-6 sm:p-10"
      >
        <div className="mb-8 text-center">
<h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Besoin d&lsquo;aide ?
          </h2>
          <p className="mt-3 text-sm text-secondary sm:text-base">
            Notre équipe est là pour vous accompagner. Contactez-nous par email
            ou via le formulaire ci-dessous.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-theme bg-white/5 px-5 py-2.5 text-sm text-secondary transition-colors hover:bg-white/10 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Nous écrire
            </a>
            <Link
              href="/activate"
              className="inline-flex items-center gap-2 rounded-full border border-theme bg-white/5 px-5 py-2.5 text-sm text-secondary transition-colors hover:bg-white/10 hover:text-primary"
            >
              <ScanLine className="h-4 w-4" />
              Authentifier une carte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <ContactForm enableImageUpload />
      </motion.div>
    </section>
  );
}
