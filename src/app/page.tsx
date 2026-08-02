import { HeroSection } from "@/components/layout/HeroSection";
import { ContactForm } from "@/components/form/ContactForm";

export default function Home() {
  return (
    <main className="page-gradient grid-pattern min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4 py-16 sm:px-6">
        <HeroSection />

        <section className="glass-card rounded-2xl p-6 sm:p-10">
          <ContactForm enableImageUpload />
        </section>

        <footer className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Cartes Vérification — Tous droits réservés
        </footer>
      </div>
    </main>
  );
}
