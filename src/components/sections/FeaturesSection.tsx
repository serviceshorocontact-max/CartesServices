"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gift, CheckCircle2 } from "lucide-react";
import { features } from "@/utils/site-content";
import { fadeInUp, staggerContainer } from "@/animations/fadeIn";

const iconMap = {
  shield: ShieldCheck,
  gift: Gift,
  check: CheckCircle2,
};

export function FeaturesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-3"
      >
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="glass-card hover-lift rounded-2xl p-6 text-center sm:p-8"
            >
              <div
                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tertiary">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
