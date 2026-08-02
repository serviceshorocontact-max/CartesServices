"use client";

import Link from "next/link";
import { CreditCard, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/utils/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-indigo-950/50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 text-white">
            <CreditCard className="h-5 w-5 text-violet-300" />
            <span className="font-semibold">{siteConfig.name}</span>
          </div>

          <p className="max-w-md text-sm text-white/60">
            Service sécurisé d&apos;activation et de revente de cartes cadeaux
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                siteConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              Contact
            </Link>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
