import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScanLine, ShieldCheck, Clock, BarChart } from "lucide-react";
import { ActivateForm } from "@/components/forms/ActivateForm";

export default function ActivatePage() {
  return (
    <>
      <Navbar />
      <div className="page-gradient min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Colonne informations */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <div>
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                    <ScanLine className="h-6 w-6" />
                  </span>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Authentifier une carte
                  </h1>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    Remplissez le formulaire ci-dessous pour lancer le processus
                    d&apos;authentification de votre carte cadeau.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Sécurisé et confidentiel
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        Vos données sont chiffrées et traitées en toute
                        confidentialité.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Traitement rapide
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        Réponse sous 24h ouvrées, souvent plus rapide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <BarChart className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Meilleurs taux
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        Nous proposons les meilleurs taux du marché.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Colonne formulaire */}
            <div className="w-full">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
                <ActivateForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
