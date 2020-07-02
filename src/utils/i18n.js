import { languageSettings, supportedLanguages } from '../config/i18n';

export const isAtRootLanguage = (locale) =>
  locale === languageSettings.rootLanguageKey;

export const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return languageSettings.defaultLanguageKey;
  }

  const languageKey =
    navigator && navigator.language && navigator.language.split("-")[0];

  if (!languageKey) return languageSettings.defaultLanguageKey;

  switch (languageKey) {
    case supportedLanguages.sk.key:
      return "";
    case supportedLanguages.en.key:
      return supportedLanguages.en.key;
    default:
      return languageSettings.defaultLanguageKey ===
        languageSettings.rootLanguageKey
        ? ""
        : languageSettings.defaultLanguageKey;
  }
};