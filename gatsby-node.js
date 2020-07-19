const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path")

const polishSlug = (slug) => slug.replace(/\/\//g, "/");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    if (node.fileAbsolutePath.match(/\/blog\//)) {
      const blogSlug = '/blog'

      const postSlug = createFilePath({
        node,
        getNode,
        basePath: `src/content`,
        trailingSlash: true,
      });

      createNodeField({
        node,
        name: `slug`,
        value: polishSlug(`${blogSlug}${postSlug}`),
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  const blogPostTemplate = path.resolve(`src/templates/blog/post.js`)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.fields.slug

    createPage({
      path,
      component: blogPostTemplate,
      context: {
        slug: path,
      },
    })
  })
}