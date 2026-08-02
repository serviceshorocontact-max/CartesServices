"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, ScanLine, Repeat, Menu, X, Home } from "lucide-react";
import { navLinks, siteConfig } from "@/utils/site-content";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navIcon = (icon: string) => {
    switch (icon) {
      case "home":
        return <Home className="h-4 w-4" />;
      case "activate":
        return <ScanLine className="h-4 w-4" />;
      case "sell":
        return <Repeat className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-theme bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-primary sm:text-base"
        >
          <CreditCard className="h-5 w-5 text-violet-400" />
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-theme bg-white/5 p-1 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-secondary transition-colors hover:bg-white/10 hover:text-primary"
            >
              {navIcon(link.icon)}
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-primary md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-theme bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-secondary transition-colors hover:bg-white/10"
                >
                  {navIcon(link.icon)}
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
