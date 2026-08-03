"use client";

import Link from "next/link";
import { CreditCard, ScanLine, Repeat, Shield, FileText, Scale } from "lucide-react";
import { useTranslation } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-theme bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="h-5 w-5 text-violet-400" />
              <span className="font-semibold">{t.site.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-tertiary">
              {t.footer.description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary">
              {t.footer.services}
            </h3>
            <Link
              href="/activate"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <ScanLine className="h-3.5 w-3.5" />
              {t.nav.activate}
            </Link>
            <Link
              href="/sell"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Repeat className="h-3.5 w-3.5" />
              {t.nav.sell}
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary">
              {t.footer.legal}
            </h3>
            <Link
              href="/confidentialite"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Shield className="h-3.5 w-3.5" />
              {t.footer.privacy}
            </Link>
            <Link
              href="/mentions-legales"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <FileText className="h-3.5 w-3.5" />
              {t.footer.mentions}
            </Link>
            <Link
              href="/cgv"
              className="flex items-center gap-2 text-sm text-tertiary transition-colors hover:text-primary"
            >
              <Scale className="h-3.5 w-3.5" />
              {t.footer.terms}
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-primary">
              {t.footer.contact}
            </h3>
            <p className="text-xs text-tertiary">{t.footer.contactResponse}</p>
          </div>
        </div>

        <div className="border-t border-theme py-6 text-center">
          <p className="text-xs text-tertiary">
            © {currentYear} {t.site.name}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
