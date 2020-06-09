const { languageSettings, supportedLanguages } = require("./src/config/i18n");

module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
    author: {
      fullName: "Samuel Pitoňák",
      photoUrl: "https://avatars3.githubusercontent.com/u/38221262",
      email: "sampittko@gmail.com",
      userName: "sampittko",
      socials: {
        twitter: {
          name: "Twitter",
          url: "https://twitter.com/sampittko",
        },
        linkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com/in/sampittko",
        },
        gitHub: {
          name: "GitHub",
          url: "https://github.com/sampittko",
        },
      },
    },
    siteUrl: "https://sampittko.sk",
    restrictedMode: true,
    gitHubUrl: "https://github.com/sampittko/personal-website",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://sampittko.sk",
        sitemap: "https://sampittko.sk/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Pitoňák (@sampittko)`,
        short_name: `Samuel Pitoňák`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
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
    // TODO Configure
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //     exclude: [],
    //     pageTransitionDelay: 0,
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     defer: false,
    //   },
    // },
    // TODO Configure
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {},
    // },
  ],
};
