import { fr } from "./messages/fr";
import { it } from "./messages/it";
import { en } from "./messages/en";
import { es } from "./messages/sp";
import { de } from "./messages/de";
import type { Locale, Messages } from "./types";

export const messages: Record<Locale, Messages> = {
  fr,
  it,
  en,
  sp: es,
  de,
};
