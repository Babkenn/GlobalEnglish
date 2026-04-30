import { en } from "./locales/en";
import { hy } from "./locales/hy";
import { ru } from "./locales/ru";
import type { Language, Translation } from "./types";

export type { Language, Translation };

export const translations: Record<Language, Translation> = {
  hy,
  en,
  ru,
};

export const defaultLanguage: Language = "hy";
