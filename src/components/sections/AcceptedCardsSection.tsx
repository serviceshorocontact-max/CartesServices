"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { acceptedCards, cardBrands } from "@/utils/site-content";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";

export function AcceptedCardsSection() {
  return (
    <section id="cartes" className="py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="glass-card rounded-3xl p-6 sm:p-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Cartes acceptées
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mb-10 text-center text-sm text-white/60"
        >
          PCS, Transcash, Google Play, Steam, Neosurf et bien plus encore
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {acceptedCards.map((card) => (
            <motion.div
              key={card.name}
              variants={fadeInUp}
              className="group hover-lift overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-1 text-xs text-white/50">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {cardBrands.map((brand) => (
            <span
              key={brand}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
