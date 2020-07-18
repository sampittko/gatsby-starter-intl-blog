const path = require("path");
const {
  getCollectionByLanguage,
  COLLECTIONS,
  getPath,
  isExceptionPath,
} = require("./gatsby-node-helpers");
const { createBlog } = require("./gatsby-node-blog");

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            blogPosts: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/content/blog/" } }
              sort: { order: ASC, fields: [frontmatter___post_date] }
            ) {
              edges {
                node {
                  frontmatter {
                    page_description
                    page_image
                    post_title
                    post_tags
                    post_category
                    post_date
                    post_published
                  }
                  excerpt
                  fileAbsolutePath
                }
              }
            }
            indexes: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/content/index/" } }
            ) {
              nodes {
                htmlAst
                fileAbsolutePath
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.error(result.errors);
          return reject(result.errors);
        }

        const indexes = result.data.indexes.nodes;
        const blogPosts = result.data.blogPosts.edges;

        createBlog(createPage, createRedirect, blogPosts);

        createIndex(createPage, indexes, blogPosts);

        return resolve();
      })
    );
  });
};

const createIndex = (createPage, indexes, blogPosts) => {
  const indexesIntl = getCollectionByLanguage(indexes, COLLECTIONS.INDEXES);

  const blogPostsIntl = getCollectionByLanguage(
    blogPosts,
    COLLECTIONS.BLOG_POSTS
  );

  const component = path.resolve("src/templates/index.js");

  Object.keys(indexesIntl).forEach((languageKey) => {
    const path = getPath(languageKey, "/");

    const index = indexesIntl[languageKey];

    createPage({
      path,
      component,
      context: {
        index,
        blogPosts: blogPostsIntl[languageKey],
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;

  // Remove pages created by gatsby-plugin-intl (using translated URLs myself)
  if (
    page.context.intl.originalPath !== page.path &&
    !isExceptionPath(page.path)
  ) {
    if (!page.component.includes("/pages/")) {
      deletePage(page);
    }
  }
};