"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScanLine, ShieldCheck, Clock, BarChart } from "lucide-react";
import { ActivateForm } from "@/components/forms/ActivateForm";
import { useTranslation } from "@/i18n/I18nProvider";

export default function ActivatePage() {
  const { t } = useTranslation();

  const infoItems = [
    { icon: ShieldCheck, color: "text-emerald-400", ...t.activate.secure },
    { icon: Clock, color: "text-amber-400", ...t.activate.fast },
    { icon: BarChart, color: "text-cyan-400", ...t.activate.rates },
  ];

  return (
    <>
      <Navbar />
      <div className="page-gradient min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <div>
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                    <ScanLine className="h-6 w-6" />
                  </span>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {t.activate.title}
                  </h1>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {t.activate.subtitle}
                  </p>
                </div>

                <div className="space-y-5">
                  {infoItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                    >
                      <item.icon className={`mt-0.5 h-5 w-5 shrink-0 ${item.color}`} />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

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
