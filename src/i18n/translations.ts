// Barrel for the i18n module:
// - English is the source of truth for the TranslationKey type (see ./en.ts).
// - Each additional language (e.g. ./no.ts) is typed against TranslationKey,
//   so missing or extra keys fail the TypeScript build.
//
// To add a new language:
//   1. Create src/i18n/<code>.ts following ./no.ts as a template.
//   2. Add the code to Language + SUPPORTED_LANGUAGES + the labels below.
//   3. Add it to TRANSLATIONS.

import { en, type TranslationKey } from './en';
import { no } from './no';

export type Language = 'en' | 'no';
export type { TranslationKey };

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'no'];
export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  no: 'Norsk',
};

export const LANGUAGE_SHORT_LABELS: Record<Language, string> = {
  en: 'EN',
  no: 'NO',
};

export const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  en,
  no,
};
