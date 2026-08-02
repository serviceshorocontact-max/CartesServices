"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FormPageLayoutProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  mediaSrc: string;
  mediaCaption: string;
  children: React.ReactNode;
}

export function FormPageLayout({
  icon,
  title,
  subtitle,
  mediaSrc,
  mediaCaption,
  children,
}: FormPageLayoutProps) {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Colonne image */}
      <aside
        className="sticky top-28 hidden lg:block"
        style={{ opacity: 0, transform: "translateX(-24px)" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[36rem] overflow-hidden rounded-xl border border-theme"
        >
          <Image
            src={mediaSrc}
            alt=""
            fill
            className="animate-ken-burns object-cover"
          />
          <div className="absolute inset-0 bg-violet-500/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="absolute inset-x-0 bottom-0 p-8 text-lg font-medium leading-relaxed text-white">
            {mediaCaption}
          </p>
        </motion.div>
      </aside>

      {/* Colonne formulaire */}
      <div className="w-full">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
            {icon}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-secondary">
            {subtitle}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <div className="rounded-xl border border-theme bg-surface p-6 md:p-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

