const { languageSettings, supportedLanguages } = require("./src/config/i18n");

module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
    author: {
      fullName: "Samuel Pitoňák",
      photoUrl: "https://avatars3.githubusercontent.com/u/38221262",
      email: "sampittko@gmail.com",
      userName: "sampittko",
    },
    description: "Personal website of Samuel Pitoňák",
    siteUrl: "https://sampittko.sk",
    gitHubUrl: "https://github.com/sampittko/personal-website",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Pitoňák (@sampittko)`,
        short_name: `Samuel Pitoňák`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.ico`,
      },
    },
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
