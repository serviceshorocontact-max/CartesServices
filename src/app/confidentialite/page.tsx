import type { Metadata } from "next";
import { PrivacyPageClient } from "./PrivacyPageClient";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Cartes Vérification",
  description:
    "Politique de confidentialité de Cartes Vérification – protection de vos données personnelles.",
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
