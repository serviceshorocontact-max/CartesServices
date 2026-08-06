"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Home } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/i18n/I18nProvider";

export default function SuccessPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="page-gradient min-h-screen pt-28 pb-20">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-theme bg-background/60 p-8 sm:p-10 backdrop-blur-xl"
            >
              {/* Glow effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 opacity-75" />

              <div className="relative flex flex-col items-center text-center">
                {/* Animated success icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="relative mb-6 flex h-20 w-20 items-center justify-center"
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse-ring" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-400/40 bg-emerald-500/10">
                    <ShieldCheck className="h-10 w-10 text-emerald-400" />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl font-bold tracking-tight text-primary sm:text-3xl"
                >
                  {t.activate.success.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="mt-4 max-w-md text-base leading-relaxed text-secondary"
                >
                  {t.activate.success.message}
                </motion.p>

<motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8"
                >
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-purple-500 hover:shadow-violet-500/35 active:scale-[0.98]"
                  >
                    <Home className="h-4 w-4" />
                    {t.activate.success.goHome}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
