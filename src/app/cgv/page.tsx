import type { Metadata } from "next";
import { TermsPageClient } from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | Cartes Vérification",
  description:
    "Conditions générales d'utilisation de Cartes Vérification – règles d'accès et d'utilisation du service.",
};

export default function TermsPage() {
  return <TermsPageClient />;
}
