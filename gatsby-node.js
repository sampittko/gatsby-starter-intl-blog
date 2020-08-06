const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const _ = require("lodash");

// Helper fn to polish accidental 2+ consequent slashes
const polishSlug = (slug) => slug.replace(/\/\//g, "/");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const nodePath = node.fileAbsolutePath;

    if (nodePath.match(/\/blog\//)) {
      const blogSlug = "/blog";

      //
      // Create blog post slug
      //

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

      //
      // Create blog post category slug
      //

      const categorySlug = polishSlug(`/${postSlug}/`).match(
        /(^\/([a-z-])+\/){1}/
      )[0];

      createNodeField({
        node,
        name: `categorySlug`,
        value: polishSlug(`/${blogSlug}/${categorySlug}/`),
      });

      //
      // Get blog post language from file absolute path
      //

      const postLanguage = nodePath
        .match(/\/content\/([a-z]{2})\/blog\//)[0]
        .slice(9, 11);

      createNodeField({
        node,
        name: `language`,
        value: postLanguage,
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
                categorySlug
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
  const blogCategoryTemplate = path.resolve(`src/templates/blog/category.js`);

  const blogPostsIntl = _.groupBy(
    result.data.allMarkdownRemark.edges,
    ({ node }) => node.fields.language
  );

  const blogPostsPages = []
  const blogCategoriesPages = []

  _.forOwn(blogPostsIntl, (blogPosts, language) => {
    blogPosts.forEach(({ node }, index) => {
      const prev =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
      const next = index === 0 ? null : blogPosts[index - 1].node;
      const { categorySlug, slug } = node.fields

      if (node.frontmatter.post_published && !blogPostsPages.includes(slug)) {
        createPage({
          path: slug,
          component: blogPostTemplate,
          context: {
            slug,
            categorySlug,
            language,
            prev,
            next,
          },
        });

        blogPostsPages.push(slug);

        if (!blogCategoriesPages.includes(categorySlug)) {
          createPage({
            path: categorySlug,
            component: blogCategoryTemplate,
            context: {
              slug: categorySlug,
            },
          });
          
          blogCategoriesPages.push(categorySlug);
        }
      }
    });
  });
};
