import gatsbyConfig from "../../gatsby-config";

export const getIntlConfig = () =>
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

export const getRedirectPath = () => {
  if (typeof navigator === `undefined`) {
    return getDefaultLanguage();
  }

  const language =
    navigator && navigator.language && navigator.language.split("-")[0];

  if (!language) return getDefaultLanguage();

  getSupportedLanguages().forEach((supportedLanguage) => {
    if (supportedLanguage === getRootLanguage()) return "";
    else return supportedLanguage;
  });
};
