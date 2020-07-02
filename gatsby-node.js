const path = require("path");
const { supportedLanguages, languageSettings } = require("./src/config/i18n");
const slugify = require("slugify");
const linkLocales = require('./src/locales/links')
const links = require('./src/utils/markdown/modifiers/ast-links')
const unified = require('unified')
const html = require('rehype-stringify')

const slugifySettings = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
};

// 1. Sort data by language
// 2. Generate pages for each language
// 3. (optional) Create redirects where meaningful

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
        
        const blogPosts = result.data.blogPosts.edges;
        const blogPostsIntl = getCollectionByLanguage(blogPosts);
        
        createBlogPages(createPage, blogPostsIntl);
        createBlogRedirects(createRedirect);

        const indexes = result.data.indexes.nodes;
        const indexesIntl = getCollectionByLanguage(indexes);

        createIndexPages(createPage, indexesIntl, blogPostsIntl);

        return resolve();
      })
    );
  });
};

// TODO Use lodash helper fn?
const getCollectionByLanguage = (collection) => {
  const collectionIntl = {};
  const isBlogPost = collection[0] && collection[0].node
  const isIndex = collection[0] && collection[0].htmlAst

  if (isBlogPost) {
    // Create object with properties being empty arrays divided by language
    Object.keys(supportedLanguages).forEach((supportedLanguage) => {
      collectionIntl[supportedLanguage] = [];
    });
  }

  // Push blog posts to corresponding arrays by language
  collection.forEach((item) => {
    if (isBlogPost) {
      const blogPost = item.node
      if (blogPost.frontmatter.post_published) {
        const languageKey = getLanguageKeyFromFilePath(
          blogPost.fileAbsolutePath
        );
        collectionIntl[languageKey].push(blogPost);
      }
    }
    else if (isIndex) {
      const index = item
      const languageKey = getLanguageKeyFromFilePath(index.fileAbsolutePath);
      collectionIntl[languageKey] = index.htmlAst;
    }
  });

  return collectionIntl;
}

const createBlogPages = (createPage, blogPostsIntl) => {
  createBlogIndexPages(createPage, blogPostsIntl);
  createBlogPostPages(createPage, blogPostsIntl);
  createBlogCategoryPages(createPage, blogPostsIntl);
  createBlogTagPages(createPage, blogPostsIntl);
}

const createBlogIndexPages = (createPage, blogPostsIntl) => {
  const component = path.resolve("src/templates/blog/index.js");

  Object.keys(blogPostsIntl).forEach((languageKey) => {
    const path =
      isAtRootLanguage(languageKey)
        ? `/${linkLocales.blog[languageKey]}`
        : `/${languageKey}/${linkLocales.blog[languageKey]}`;
    createPage({
      path,
      component,
      context: {
        blogPosts: blogPostsIntl[languageKey],
      },
    });
  });
};

const createBlogPostPages = (createPage, blogPostsIntl) => {
  const component = path.resolve("src/templates/blog/post.js");

  // Iterate over each blog post in every language and create their individual pages
  Object.keys(blogPostsIntl).forEach((languageKey) => {
    blogPostsIntl[languageKey].forEach((node, index) => {
      const slugifiedTitle = slugify(
        node.frontmatter.post_title,
        slugifySettings
      );
      const slugifiedCategory = slugify(
        node.frontmatter.post_category,
        slugifySettings
      );
      const basePath = `${linkLocales.blog[languageKey]}/${slugifiedCategory}/${slugifiedTitle}`;
      const path =
        isAtRootLanguage(languageKey)
          ? `/${basePath}`
          : `/${languageKey}/${basePath}`;
      createPage({
        path,
        component,
        context: {
          postsNavigation: {
            prev:
              index === 0
                ? null
                : blogPostsIntl[languageKey][index - 1],
            next:
              index === blogPostsIntl[languageKey].length - 1
                ? null
                : blogPostsIntl[languageKey][index + 1],
          },
        },
      });
    });
  });
};

const createBlogCategoryPages = (createPage, blogPostsIntl) => {
  const component = path.resolve("src/templates/blog/category.js");
  const blogPostsIntlByCategory = {}

  Object.keys(blogPostsIntl).forEach((languageKey) => {
    blogPostsIntl[languageKey].forEach((blogPost) => {
      const slugifiedCategory = slugify(
        blogPost.frontmatter.post_category,
        slugifySettings
      );
      if (!blogPostsIntlByCategory[languageKey]) {
        blogPostsIntlByCategory[languageKey] = {}
      }
      blogPostsIntlByCategory[languageKey][`${slugifiedCategory}`] = blogPostsIntlByCategory[languageKey][`${slugifiedCategory}`] ? [...blogPostsIntlByCategory[languageKey][`${slugifiedCategory}`], blogPost] : [blogPost]
    })
  })

  Object.keys(blogPostsIntlByCategory).forEach((languageKey) => {
    Object.keys(blogPostsIntlByCategory[languageKey]).forEach((category) => {
      const basePath = `${linkLocales.blog[languageKey]}/${linkLocales.blog.categories[
        languageKey]}/${category}`;
      const path =
        isAtRootLanguage(languageKey)
          ? `/${basePath}`
          : `/${languageKey}/${basePath}`;
      createPage({
        path,
        component,
        context: {
          blogPosts: blogPostsIntlByCategory[languageKey][`${category}`],
        },
      });
    })
  })
}

const createBlogTagPages = (createPage, blogPostsIntl) => {
  const blogTagTemplate = path.resolve("src/templates/blog/tag.js");
  const blogPostsIntlByTag = {}

  Object.keys(blogPostsIntl).forEach((languageKey) => {
    blogPostsIntl[languageKey].forEach((blogPost) => {
      blogPost.frontmatter.post_tags.forEach((blogPostTag) => {
        const slugifiedTag = slugify(
          blogPostTag,
          slugifySettings
        );
        if (!blogPostsIntlByTag[languageKey]) {
          blogPostsIntlByTag[languageKey] = {}
        }
        blogPostsIntlByTag[languageKey][`${slugifiedTag}`] = blogPostsIntlByTag[languageKey][`${slugifiedTag}`] ? [...blogPostsIntlByTag[languageKey][`${slugifiedTag}`], blogPost] : [blogPost]
      })
    })
  })

  Object.keys(blogPostsIntlByTag).forEach((languageKey) => {
    Object.keys(blogPostsIntlByTag[languageKey]).forEach((tag) => {
      const basePath = `${linkLocales.blog[languageKey]}/${linkLocales.blog.tags[languageKey]}/${tag}`;
      const path =
        isAtRootLanguage(languageKey)
          ? `/${basePath}`
          : `/${languageKey}/${basePath}`;
      createPage({
        path,
        component: blogTagTemplate,
        context: {
          blogPosts: blogPostsIntlByTag[languageKey][`${tag}`],
        },
      });
    })
  })
}

const createBlogRedirects = (createRedirect) => {
  Object.keys(supportedLanguages).forEach((supportedLanguageKey) => {
    const isRootLanguage = isAtRootLanguage(supportedLanguageKey);
    const blogBasePath = linkLocales.blog[supportedLanguageKey];
    // Internationalized redirects from /blog/tags && /blog/tags/ to /blog
    let baseFromPath = `${blogBasePath}/${linkLocales.blog.tags[supportedLanguageKey]}`;
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
    baseFromPath = `${blogBasePath}/${linkLocales.blog.categories[supportedLanguageKey]}`;
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

const createIndexPages = (createPage, indexesIntl, blogPostsIntl) => {
  const component = path.resolve("src/templates/index.js");

  Object.keys(indexesIntl).forEach((languageKey) => {
    const path = isAtRootLanguage(languageKey)
      ? '/'
      : `/${languageKey}`;

    const htmlAst = indexesIntl[languageKey]
    const innerHTML = unified().use(links).use(html);

    createPage({
      path,
      component,
      context: {
        innerHTML,
      },
    });
  });

  for (index in indexesIntl) {
    
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;

  // Remove pages created by gatsby-plugin-intl (using translated URLs myself)
  if (page.context.intl.originalPath !== page.path && !pathWithException(page.path)) {
    if (!page.component.includes('/pages/')) {
      deletePage(page)
    }
  }
};

// Exceptions for pages that were unexpectedly deleted
const pathWithException = (pagePath) => {
  return pagePath === "/en/blog";
}

const isAtRootLanguage = (locale) =>
  locale === languageSettings.rootLanguageKey;

const getLanguageKeyFromFilePath = (filePath) => {
  return filePath
    .match(/index\..*\.md/)[0]
    .replace(/index\./, "")
    .replace(/\.md/, "");
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};