import type { Metadata } from "next";
import { MentionsPageClient } from "./MentionsPageClient";

export const metadata: Metadata = {
  title: "Mentions légales | Cartes Vérification",
  description:
    "Mentions légales de Cartes Vérification – informations sur l'éditeur et l'hébergeur du site.",
};

export default function MentionsPage() {
  return <MentionsPageClient />;
}
