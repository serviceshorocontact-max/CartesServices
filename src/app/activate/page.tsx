import type { Metadata } from "next";
import { ActivatePageClient } from "./ActivatePageClient";

export const metadata: Metadata = {
  title: "Authentifier une carte | Cartes Vérification",
  description:
    "Authentifiez votre carte cadeau en toute sécurité. Remplissez le formulaire pour lancer le processus de vérification.",
};

export default function ActivatePage() {
  return <ActivatePageClient />;
}
