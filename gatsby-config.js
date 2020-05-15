module.exports = {
  siteMetadata: {
    title: 'Samuel Pitoňák (@sampittko)',
    description: 'Personal website of Samuel Pitoňák'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
