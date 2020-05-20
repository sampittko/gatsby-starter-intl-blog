const { languageSettings, supportedLanguages } = require("./src/config/i18n");

module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
    author: "Samuel Pitoňák <sampittko@gmail.com>",
    description: "Personal website of Samuel Pitoňák",
    siteUrl: "https://sampittko.sk",
    social: {
      twitter: "sampittko",
      linkedin: "sampittko",
      github: "sampittko",
    },
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
