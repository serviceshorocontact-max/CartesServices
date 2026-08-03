"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardBrands } from "@/utils/site-content";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";
import { useTranslation } from "@/i18n/I18nProvider";

const cardImages = [
  "/cards/carte0.jpg",
  "/cards/carte1.jpg",
  "/cards/carte2.jpg",
  "/cards/carte3.jpg",
];

export function AcceptedCardsSection() {
  const { t } = useTranslation();

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
          className="mb-2 text-center text-2xl font-bold text-primary sm:text-3xl"
        >
          {t.acceptedCards.title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mb-10 text-center text-sm text-secondary"
        >
          {t.acceptedCards.subtitle}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.acceptedCards.cards.map((card, index) => (
            <motion.div
              key={card.name}
              variants={fadeInUp}
              className="group hover-lift overflow-hidden rounded-2xl border border-theme bg-white/5 transition-all hover:border-violet-500/30 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={cardImages[index]}
                  alt={card.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary">{card.name}</h3>
                <p className="mt-1 text-xs text-tertiary">{card.description}</p>
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
              className="chip rounded-full px-4 py-2 text-xs font-medium"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
