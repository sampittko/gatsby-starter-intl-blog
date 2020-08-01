import gatsbyConfig from "../../gatsby-config";

export const getIntlConfig = () =>
  gatsbyConfig.plugins.find(
    (plugin) => plugin.resolve === "gatsby-plugin-intl"
  );

const getLanguageSetKey = (intlConfig) =>
  intlConfig.options.external.storageKeys.session.languageSet;

export const isLanguageSet = (intlConfig) =>
  sessionStorage.getItem(getLanguageSetKey(intlConfig));

export const setLanguageSet = (intlConfig, value) =>
  sessionStorage.setItem(getLanguageSetKey(intlConfig), value);

const getLanguagePreferenceKey = (intlConfig) =>
  intlConfig.options.external.storageKeys.local.languagePreference;

export const getLanguagePreference = (intlConfig) =>
  localStorage.getItem(getLanguagePreferenceKey(intlConfig));

export const setLanguagePreference = (intlConfig, value) =>
  localStorage.setItem(getLanguagePreferenceKey(intlConfig), value);

export const getSupportedLanguages = () => getIntlConfig().options.languages;

export const getSupportedLanguageStrings = () =>
  getIntlConfig().options.external.languageStrings;

export const getRootLanguage = () =>
  getIntlConfig().options.external.rootLanguage;

export const getDefaultLanguage = () =>
  getIntlConfig().options.external.defaultLanguage;

export const getRedirectPath = () => {
  if (typeof navigator === `undefined`) {
    return getDefaultLanguage();
  }

  const language =
    navigator && navigator.language && navigator.language.split("-")[0];

  if (!language) {
    return getDefaultLanguage();
  }

  if (language === getRootLanguage()) return "";
  return language;
};
