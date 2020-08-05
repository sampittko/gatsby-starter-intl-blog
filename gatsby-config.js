module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
    siteUrl: "https://sampittko.sk",
    author: {
      fullName: "Samuel Pitoňák",
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
      openToWork: true,
    },
    // Thanks for giving me credits by letting my nickname be displayed with the link to the repo inside footer!
    developer: {
      gitHubUrl: "https://github.com/sampittko/gatsby-starter-intl-blog",
      userName: "sampittko",
      fullName: "Samuel Pitoňák",
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/img/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: (file) => `${file.hash}`,
            },
          },
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sk/blog`,
        path: `${__dirname}/content/sk/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `en/blog`,
        path: `${__dirname}/content/en/blog`,
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
        path: `${__dirname}/src/locales`, // language JSON resource path
        languages: ["sk", "en"], // supported language keys
        defaultLanguage: "sk", // default language when visiting /page instead of sk/page
        redirect: true, // if the value is true, / or /page-2 will be redirected to the user’s preferred language router. e.g) /ko or /ko/page-2. Otherwise, the pages will render defaultLangugage language.
        // additional settings for the needs of site components
        external: {
          defaultLanguage: "en", // language to redirect to by default if language was not set
          languageStrings: ["Slovenčina", "English"], // full language names in the same order as languages above
          storageKeys: {
            session: {
              languageSet: "language-set", // waiting for initialization of this every new session so that Layout can be animation-renderred with corresponding content and appropriate language
            },
            local: {
              languagePreference: "gatsby-intl-language", // if set, always redirecting to this language in a new session
            },
          },
        },
      },
    },
    `gatsby-plugin-offline`,
    // TODO
    // `gatsby-plugin-feed`,
    // TODO
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        head: false,
        anonymize: true,
        respectDNT: false,
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "sampittko.sk",
      },
    },
  ],
};
