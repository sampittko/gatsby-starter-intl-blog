module.exports = {
  siteMetadata: {
    title: "Samuel Pitoňák (@sampittko)",
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
    },
    siteUrl: "https://sampittko.sk",
    gitHubUrl: "https://github.com/sampittko/sampittko.sk",
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sk/blog`,
        path: `${__dirname}/src/content/sk/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `en/blog`,
        path: `${__dirname}/src/content/en/blog`,
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
        path: `${__dirname}/src/locales`, // location of translations
        languages: ["sk", "en"], // languages to generate routes for
        defaultLanguage: "sk", // located at root
        redirect: false, // redirect to /{defaultLanguage} when requesting root
        // additional settings for various needs
        external: {
          rootLanguage: "sk", // located at root (eq {defaultLanguage} above but {rootLanguage} is more exact)
          defaultLanguage: "en", // language to redirect to by default
          languageStrings: ["Slovenčina", "English"], // full language names in the same order as {languages} above
        },
      },
    },
    // TODO Configure
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {},
    // },
  ],
};
