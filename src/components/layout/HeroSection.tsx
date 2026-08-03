"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScanLine, Repeat, ArrowRight } from "lucide-react";
import { useGsapReveal } from "@/animations/useGsapReveal";
import { fadeInUp } from "@/animations/fadeIn";
import { useTranslation } from "@/i18n/I18nProvider";

export function HeroSection() {
  const { t } = useTranslation();
  const titleRef = useGsapReveal<HTMLHeadingElement>({ delay: 0.1 });
  const subtitleRef = useGsapReveal<HTMLParagraphElement>({ delay: 0.3, y: 20 });

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-32 pb-20 text-center sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute left-[8%] top-24 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl animate-glow" />
      <div className="pointer-events-none absolute right-[10%] top-40 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl animate-float-delayed" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative mx-auto max-w-3xl px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 14 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.badge}
        </motion.div>

        <h1
          ref={titleRef}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {t.site.name} —{" "}
          <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-purple-300 bg-clip-text text-transparent">
            {t.site.tagline}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {t.site.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/activate"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-violet-500/50 sm:w-auto"
            >
              <ScanLine className="h-4 w-4" />
              {t.hero.ctaActivate}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/sell"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              <Repeat className="h-4 w-4" />
              {t.hero.ctaSell}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/60 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <ScanLine className="h-4 w-4 text-emerald-300" />
            {t.hero.instantAuth}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            {t.hero.fastPayment}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            {t.hero.support}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
