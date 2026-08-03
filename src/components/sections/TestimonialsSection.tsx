"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";
import { useTranslation } from "@/i18n/I18nProvider";

const initials = ["J", "M", "A"];

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="temoignages" className="py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="glass-card rounded-3xl p-6 sm:p-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-10 text-center text-2xl font-bold text-primary sm:text-3xl"
        >
          {t.testimonials.title}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={item.author}
              variants={fadeInUp}
              className="hover-lift rounded-2xl border border-theme bg-white/5 p-6"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-secondary">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-sm font-bold text-white">
                  {initials[index]}
                </div>
                <span className="text-sm font-medium text-primary">
                  {item.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
