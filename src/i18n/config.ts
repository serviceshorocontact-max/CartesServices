import type { Locale, LocaleInfo } from "./types";

export const LOCALES: LocaleInfo[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "sp", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const DEFAULT_LOCALE: Locale = "fr";
export const LOCALE_STORAGE_KEY = "locale";

export function isValidLocale(value: string): value is Locale {
  return (
    value === "fr" ||
    value === "it" ||
    value === "en" ||
    value === "sp" ||
    value === "de"
  );
}
