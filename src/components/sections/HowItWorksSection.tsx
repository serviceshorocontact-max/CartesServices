"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, KeyRound, CheckCircle2 } from "lucide-react";
import { howItWorks } from "@/utils/site-content";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";

const iconMap = {
  search: Search,
  key: KeyRound,
  check: CheckCircle2,
};

export function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" className="py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Comment ça marche ?
          </h2>
          <p className="mt-3 text-sm text-secondary sm:text-base">
            Authentifiez vos cartes en 3 étapes simples et rapides
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3">
          {howItWorks.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="glass-card hover-lift overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/90 text-xs font-bold text-white backdrop-blur-sm">
                        {step.step}
                      </span>
                      <span className="text-xs font-medium text-white/80">
                        Étape {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-tertiary">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Ligne de connexion entre les étapes */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute -right-4 top-1/3 hidden h-0.5 w-8 bg-gradient-to-r from-violet-500/40 to-transparent sm:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
