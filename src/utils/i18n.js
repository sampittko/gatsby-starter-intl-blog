const i18nConfig = require('../config/i18n')

exports.getBlogTagPrefix = (languageKey) => {
  switch (languageKey) {
    case i18nConfig.supportedLanguages.sk.key:
      return "znacky";
    case i18nConfig.supportedLanguages.en.key:
      return "tags";
    default:
      return "tags";
  }
};

exports.getBlogCategoryPrefix = (languageKey) => {
  switch (languageKey) {
    case i18nConfig.supportedLanguages.sk.key:
      return "kategorie";
    case i18nConfig.supportedLanguages.en.key:
      return "categories";
    default:
      return "categories";
  }
};