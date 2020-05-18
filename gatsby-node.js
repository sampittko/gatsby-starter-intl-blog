const path = require("path");
const { supportedLanguages, languageSettings } = require("./src/config/i18n");
const slugify = require("slugify");

const slugifySettings = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
                  fileAbsolutePath
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.error(result.errors);
          return reject(result.errors);
        }

        // TODO Create blog index pages

        const blogPosts = result.data.blogPosts.edges;
        createBlogPostsPages(createPage, blogPosts);

        // TODO Create tag pages

        // TODO Create projects pages

        // TODO Create profile pages

        return resolve();
      })
    );
  });
};

const createBlogPostsPages = (createPage, blogPosts) => {
  const blogPostTemplate = path.resolve("src/templates/blog/post.js");
  const blogPostsIntl = {};

  // Create object with properties as empty arrays by language
  Object.keys(supportedLanguages).forEach((supportedLanguage) => {
    blogPostsIntl[supportedLanguage] = [];
  });

  // Push blog posts to corresponding arrays by language
  blogPosts.forEach(({ node }) => {
    if (node.frontmatter.post_published) {
      const languageKey = node.fileAbsolutePath
        .match(/index\..*\.md/)[0]
        .replace(/index\./, "")
        .replace(/\.md/, "");
      blogPostsIntl[languageKey].push(node);
    }
  });

  // Iterate over each blog post in every language and create their individual pages
  Object.keys(blogPostsIntl).forEach((blogPostsLanguageKey) => {
    blogPostsIntl[blogPostsLanguageKey].forEach((node, index) => {
      const slugifiedTitle = slugify(
        node.frontmatter.post_title,
        slugifySettings
      );
      const slugifiedCategory = slugify(
        node.frontmatter.post_category,
        slugifySettings
      );
      const basePath = `blog/${slugifiedCategory}/${slugifiedTitle}`;
      const path = blogPostsLanguageKey === languageSettings.rootLanguageKey
            ? `/${basePath}`
            : `/${blogPostsLanguageKey}/${basePath}`
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          pagination: {
            prev:
              index === 0
                ? null
                : blogPostsIntl[blogPostsLanguageKey][index - 1],
            next:
              index === blogPostsIntl[blogPostsLanguageKey].length - 1
                ? null
                : blogPostsIntl[blogPostsLanguageKey][index + 1],
          },
        },
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;

  // Remove pages created by gatsby-plugin-intl (using translated URLs myself)
  if (page.context.intl.originalPath !== page.path) {
    // Page path was changed
    if (!(page.component.includes("/pages/") && page.context.language !== languageSettings.rootLanguageKey)) {
      // Delete all pages except the ones that are both Gatsby and in different than root language
      deletePage(page)
    }
  }
};