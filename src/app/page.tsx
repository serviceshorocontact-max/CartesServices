import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AcceptedCardsSection } from "@/components/sections/AcceptedCardsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-gradient min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <HeroSection />
          <FeaturesSection />
          <AcceptedCardsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
