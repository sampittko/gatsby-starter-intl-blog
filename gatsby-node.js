const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const _ = require("lodash")

const polishSlug = (slug) => slug.replace(/\/\//g, "/");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const nodePath = node.fileAbsolutePath;

    if (nodePath.match(/\/blog\//)) {
      const blogSlug = "/blog";

      const postSlug = createFilePath({
        node,
        getNode,
        basePath: `src/content`,
        trailingSlash: true,
      });

      createNodeField({
        node,
        name: `slug`,
        value: polishSlug(`/${blogSlug}/${postSlug}/`),
      });

      const language = nodePath
        .match(/\/content\/([a-z]{2})\/blog\//)[0]
        .slice(9, 11);

      createNodeField({
        node,
        name: `language`,
        value: language,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___post_date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                post_published
              }
              fields {
                slug
                language
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/templates/blog/post.js`);

  const blogPostsIntl = _.groupBy(result.data.allMarkdownRemark.edges, ({ node }) => node.fields.language);

  _.forOwn(blogPostsIntl, (blogPosts) => {
    blogPosts.forEach(({ node }, index) => {
      const path = node.fields.slug;
      const previous =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
      const next = index === 0 ? null : blogPosts[index - 1].node;

      if (node.frontmatter.post_published) {
        createPage({
          path,
          component: blogPostTemplate,
          context: {
            slug: path,
            previous,
            next,
          },
        });
      }
    });
  });
};
