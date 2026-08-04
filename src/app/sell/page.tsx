"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Repeat, ShieldCheck, Clock, TrendingUp } from "lucide-react";
import { SellForm } from "@/components/forms/SellForm";
import { useTranslation } from "@/i18n/I18nProvider";

export default function SellPage() {
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
                    <Repeat className="h-6 w-6" />
                  </span>
                  <h1>
                    {t.sell.title}
                  </h1>
                  <p>
                    {t.sell.subtitle}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <h3>
                        {t.sell.secure.title}
                      </h3>
                      <p>
                        {t.sell.secure.description}
                        </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {t.sell.fast.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        {t.sell.fast.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {t.sell.rates.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">
                        {t.sell.rates.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Colonne formulaire */}
            <div className="w-full">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
                <SellForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
