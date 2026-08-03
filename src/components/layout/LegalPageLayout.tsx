"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { LegalPageContent } from "@/i18n/types";

interface LegalPageProps {
  content: LegalPageContent;
}

export function LegalPageLayout({ content }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <div className="page-gradient min-h-screen pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-3 text-sm text-tertiary">{content.lastUpdated}</p>
            <p className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-xs leading-relaxed text-amber-200/80">
              {content.disclaimer}
            </p>
          </header>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-lg font-semibold text-primary">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-secondary">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
