"use client";

import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { useTranslation } from "@/i18n/I18nProvider";
import { useEffect } from "react";

export function PrivacyPageClient() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.legal.privacy.title} | ${t.site.name}`;
  }, [t]);

  return <LegalPageLayout content={t.legal.privacy} />;
}
