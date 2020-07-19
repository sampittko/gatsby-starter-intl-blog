import gatsbyConfig from "../../gatsby-config";

const getIntlConfig = () =>
  gatsbyConfig.plugins.find(
    (plugin) => plugin.resolve === "gatsby-plugin-intl"
  );

export const getSupportedLanguages = () => getIntlConfig().options.languages;

export const getSupportedLanguageStrings = () =>
  getIntlConfig().options.external.languageStrings;

export const getRootLanguage = () =>
  getIntlConfig().options.external.rootLanguage;

export const getDefaultLanguage = () =>
  getIntlConfig().options.external.defaultLanguage;

export const getLanguageSetStorageKey = () =>
  getIntlConfig().options.external.storageKeys.session.languageSet;

export const getLanguagePreferenceStorageKey = () =>
  getIntlConfig().options.external.storageKeys.local.languagePreference;

export const getRedirectPath = () => {
  if (typeof navigator === `undefined`) {
    return getDefaultLanguage();
  }

  const language =
    navigator && navigator.language && navigator.language.split("-")[0];

  if (!language) {
    return getDefaultLanguage();
  }

  const rootLanguage = getRootLanguage();

  if (language === rootLanguage) return ""
  return language
};
