"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard, Repeat } from "lucide-react";
import { useGsapReveal } from "@/animations/useGsapReveal";
import { fadeInUp } from "@/animations/fadeIn";
import { siteConfig } from "@/utils/site-content";

export function HeroSection() {
  const titleRef = useGsapReveal<HTMLHeadingElement>({ delay: 0.1 });
  const subtitleRef = useGsapReveal<HTMLParagraphElement>({ delay: 0.3, y: 20 });

  return (
    <section id="accueil" className="relative pt-28 pb-16 text-center sm:pt-32 sm:pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mx-auto max-w-3xl"
      >
        <h1
          ref={titleRef}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {siteConfig.name} —{" "}
          <span className="bg-gradient-to-r from-violet-200 to-purple-300 bg-clip-text text-transparent">
            {siteConfig.tagline}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              <CreditCard className="h-4 w-4" />
              Activer une carte
            </Link>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              <Repeat className="h-4 w-4" />
              Revendre une carte
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
