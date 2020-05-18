const { languageSettings, supportedLanguages } = require("./src/config/i18n");

module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
    description: "Personal website of Samuel Pitoňák",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: Object.keys(supportedLanguages),
        defaultLanguage: languageSettings.rootLanguageKey,
        redirect: false,
      },
    },
  ],
};
