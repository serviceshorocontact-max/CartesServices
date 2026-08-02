"use client";

import { useGsapReveal, useGsapFloat } from "@/animations/useGsapReveal";
import { ShieldCheck } from "lucide-react";

export function HeroSection() {
  const titleRef = useGsapReveal<HTMLHeadingElement>({ delay: 0.2 });
  const subtitleRef = useGsapReveal<HTMLParagraphElement>({ delay: 0.5, y: 20 });
  const iconRef = useGsapFloat<HTMLDivElement>();

  return (
    <header className="relative mb-12 text-center">
      <div
        ref={iconRef}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 ring-1 ring-amber-500/20"
      >
        <ShieldCheck className="h-8 w-8 text-amber-400" />
      </div>

      <h1
        ref={titleRef}
        className="bg-gradient-to-r from-zinc-100 via-amber-200 to-amber-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
      >
        Cartes Vérification
      </h1>

      <p
        ref={subtitleRef}
        className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
      >
        Soumettez votre demande de vérification en quelques instants.
        Notre équipe vous répondra dans les plus brefs délais.
      </p>
    </header>
  );
}
