const path = require("path");
const { supportedLanguages, languageSettings } = require("./src/config/i18n");
const slugify = require("slugify");
const { getBlogTagPrefix, getBlogCategoryPrefix } = require('./src/utils/i18n')

const slugifySettings = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
};

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

        const blogPosts = result.data.blogPosts.edges;
        const blogBasePath = "blog";
        createBlogPages(createPage, blogPosts, blogBasePath);
        createBlogRedirects(createRedirect, blogBasePath);

        // TODO Create projects pages

        // TODO Create profile pages

        return resolve();
      })
    );
  });
};

// TODO Use lodash helper fn?
const getBlogPostsByIntl = (blogPosts) => {
  const blogPostsIntl = {};

  // Create object with properties being empty arrays divided by language
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

  return blogPostsIntl;
}

const createBlogPages = (createPage, blogPosts, basePath) => {
  const blogPostsIntl = getBlogPostsByIntl(blogPosts);
  // TODO createBlogIndexPages in case new supported language is added that writes `blog` word differently
  createBlogPostsPages(createPage, blogPostsIntl, basePath);
  createBlogCategoriesPages(createPage, blogPostsIntl, basePath);
  createBlogTagsPages(createPage, blogPostsIntl, basePath);
}

const createBlogPostsPages = (createPage, blogPostsIntl, blogPath) => {
  const blogPostTemplate = path.resolve("src/templates/blog/post.js");

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
      const basePath = `${blogPath}/${slugifiedCategory}/${slugifiedTitle}`;
      const path =
        blogPostsLanguageKey === languageSettings.rootLanguageKey
          ? `/${basePath}`
          : `/${blogPostsLanguageKey}/${basePath}`;
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          postsNavigation: {
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

const createBlogTagsPages = (createPage, blogPostsIntl, blogPath) => {
  const blogTagTemplate = path.resolve("src/templates/blog/tag.js");
  const blogPostsIntlByTag = {}

  Object.keys(blogPostsIntl).forEach((blogPostsLanguageKey) => {
    blogPostsIntl[blogPostsLanguageKey].forEach((blogPost) => {
      blogPost.frontmatter.post_tags.forEach((blogPostTag) => {
        const slugifiedTag = slugify(
          blogPostTag,
          slugifySettings
        );
        if (!blogPostsIntlByTag[blogPostsLanguageKey]) {
          blogPostsIntlByTag[blogPostsLanguageKey] = {}
        }
        blogPostsIntlByTag[blogPostsLanguageKey][`${slugifiedTag}`] = blogPostsIntlByTag[blogPostsLanguageKey][`${slugifiedTag}`] ? [...blogPostsIntlByTag[blogPostsLanguageKey][`${slugifiedTag}`], blogPost] : [blogPost]
      })
    })
  })

  Object.keys(blogPostsIntlByTag).forEach((blogPostsLanguageKey) => {
    Object.keys(blogPostsIntlByTag[blogPostsLanguageKey]).forEach((blogPostTagInLanguage) => {
      const basePath = `${blogPath}/${getBlogTagPrefix(blogPostsLanguageKey)}/${blogPostTagInLanguage}`;
      const path =
        blogPostsLanguageKey === languageSettings.rootLanguageKey
          ? `/${basePath}`
          : `/${blogPostsLanguageKey}/${basePath}`;
      createPage({
        path,
        component: blogTagTemplate,
        context: {
          blogPosts: blogPostsIntlByTag[blogPostsLanguageKey][`${blogPostTagInLanguage}`],
        },
      });
    })
  })
}

const createBlogCategoriesPages = (createPage, blogPostsIntl, blogPath) => {
  const blogCategoryTemplate = path.resolve("src/templates/blog/category.js");
  const blogPostsIntlByCategory = {}

  Object.keys(blogPostsIntl).forEach((blogPostsLanguageKey) => {
    blogPostsIntl[blogPostsLanguageKey].forEach((blogPost) => {
      const slugifiedCategory = slugify(
        blogPost.frontmatter.post_category,
        slugifySettings
      );
      if (!blogPostsIntlByCategory[blogPostsLanguageKey]) {
        blogPostsIntlByCategory[blogPostsLanguageKey] = {}
      }
      blogPostsIntlByCategory[blogPostsLanguageKey][`${slugifiedCategory}`] = blogPostsIntlByCategory[blogPostsLanguageKey][`${slugifiedCategory}`] ? [...blogPostsIntlByCategory[blogPostsLanguageKey][`${slugifiedCategory}`], blogPost] : [blogPost]
    })
  })

  Object.keys(blogPostsIntlByCategory).forEach((blogPostsLanguageKey) => {
    Object.keys(blogPostsIntlByCategory[blogPostsLanguageKey]).forEach((blogPostCategoryInLanguage) => {
      const basePath = `${blogPath}/${getBlogCategoryPrefix(blogPostsLanguageKey)}/${blogPostCategoryInLanguage}`;
      const path =
        blogPostsLanguageKey === languageSettings.rootLanguageKey
          ? `/${basePath}`
          : `/${blogPostsLanguageKey}/${basePath}`;
      createPage({
        path,
        component: blogCategoryTemplate,
        context: {
          blogPosts: blogPostsIntlByCategory[blogPostsLanguageKey][`${blogPostCategoryInLanguage}`],
        },
      });
    })
  })
}

const createBlogRedirects = (createRedirect, blogBasePath) => {
  Object.keys(supportedLanguages).forEach((supportedLanguageKey) => {
    const isRootLanguage = supportedLanguageKey === languageSettings.rootLanguageKey;
    // Internationalized redirects from /blog/tags && /blog/tags/ to /blog
    let baseFromPath = `${blogBasePath}/${getBlogTagPrefix(supportedLanguageKey)}`;
    let fromPath = isRootLanguage
          ? `/${baseFromPath}`
          : `/${supportedLanguageKey}/${baseFromPath}`
    let toPath = isRootLanguage
          ? `/${blogBasePath}`
          : `/${supportedLanguageKey}/${blogBasePath}`
    createRedirect({
      fromPath,
      toPath,
      isPermanent: false,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: `${fromPath}/`,
      toPath,
      isPermanent: false,
      redirectInBrowser: true,
    });

    // Internationalized redirects from /blog/categories && /blog/categories/ to /blog
    baseFromPath = `${blogBasePath}/${getBlogCategoryPrefix(supportedLanguageKey)}`;
    fromPath = isRootLanguage
      ? `/${baseFromPath}`
      : `/${supportedLanguageKey}/${baseFromPath}`
    toPath = isRootLanguage
      ? `/${blogBasePath}`
      : `/${supportedLanguageKey}/${blogBasePath}`;
    createRedirect({
      fromPath,
      toPath,
      isPermanent: false,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: `${fromPath}/`,
      toPath,
      isPermanent: false,
      redirectInBrowser: true,
    });
  })
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