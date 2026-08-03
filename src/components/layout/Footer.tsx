"use client";

import Link from "next/link";
import { CreditCard, Mail, ScanLine, Repeat, Shield, FileText, Scale } from "lucide-react";
import { siteConfig } from "@/utils/site-content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-theme bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Grille principale */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 : Logo & description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="h-5 w-5 text-violet-400" />
              <span className="font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-tertiary">
              Service sécurisé d&apos;authentification et de revente de cartes
              cadeaux. Nous vous accompagnons dans toutes vos transactions.
            </p>
          </div>

          {/* Colonne 2 : Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary">Services</h3>
            <Link
              href="/activate"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <ScanLine className="h-3.5 w-3.5" />
              Authentifier une carte
            </Link>
            <Link
              href="/sell"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Repeat className="h-3.5 w-3.5" />
              Revendre une carte
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact
            </a>
          </div>

          {/* Colonne 3 : Informations légales */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary">Informations légales</h3>
            <Link
              href="/confidentialite"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Shield className="h-3.5 w-3.5" />
              Politique de confidentialité
            </Link>
            <Link
              href="/mentions-legales"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <FileText className="h-3.5 w-3.5" />
              Mentions légales
            </Link>
            <Link
              href="/cgv"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Scale className="h-3.5 w-3.5" />
              Conditions générales
            </Link>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary">Contact</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              Nous contacter
            </a>
            <p className="text-xs text-tertiary">
              Réponse sous 24h ouvrées
            </p>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-theme py-6 text-center">
          <p className="text-xs text-tertiary">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
