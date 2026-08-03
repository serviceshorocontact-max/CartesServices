"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cardBrands } from "@/utils/site-content";
import { useTranslation } from "@/i18n/I18nProvider";

const CARD_WIDTH = 220;
const GAP = 24;
const DURATION = 25;

const cardImages = [
  "/cards/carte0.jpg",
  "/cards/carte1.jpg",
  "/cards/carte2.jpg",
  "/cards/carte3.jpg",
];

export function FeaturedCardsCarousel() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const allCards = [
    ...t.acceptedCards.cards,
    ...t.acceptedCards.cards,
    ...t.acceptedCards.cards,
  ];

  return (
    <section id="cartes-carousel" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            {t.acceptedCards.title}
          </h2>
          <p className="mt-3 text-sm text-secondary">
            {t.acceptedCards.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent" />

        {isInView && (
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{
              x: [0, -(allCards.length / 3) * (CARD_WIDTH + GAP)],
            }}
            transition={{
              x: {
                duration: (allCards.length / 3) * DURATION,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {allCards.map((card, index) => (
              <div
                key={`${card.name}-${index}`}
                className="group shrink-0 overflow-hidden rounded-2xl border border-theme bg-white/5 transition-all hover:border-violet-500/40 hover:bg-white/10"
                style={{ width: CARD_WIDTH }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <Image
                    src={cardImages[index % cardImages.length]}
                    alt={card.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-primary">
                    {card.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-tertiary">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
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
      </div>
    </section>
  );
}
