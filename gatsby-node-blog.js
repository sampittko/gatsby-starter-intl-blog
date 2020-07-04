const { SLUGIFY_SETTINGS, COLLECTIONS } = require("./gatsby-node-helpers");
const { default: slugify } = require("slugify");
const linkLocales = require("./src/locales/links");
const { supportedLanguages } = require("./src/config/i18n");
const { getPath, getCollectionByLanguage } = require("./gatsby-node-helpers");
const path = require('path')

exports.createBlog = (createPage, createRedirect, blogPosts) => {
  const blogPostsIntl = getCollectionByLanguage(
    blogPosts,
    COLLECTIONS.BLOG_POSTS
  );

  createBlogPages(createPage, blogPostsIntl)
  createBlogRedirects(createRedirect)
}

const createBlogPages = (createPage, blogPostsIntl) => {
  createBlogIndexPages(createPage, blogPostsIntl);
  createBlogPostPages(createPage, blogPostsIntl);
  createBlogCategoryPages(createPage, blogPostsIntl);
  createBlogTagPages(createPage, blogPostsIntl);
};

const createBlogIndexPages = (createPage, blogPostsIntl) => {
  const component = path.resolve("src/templates/blog/index.js");

  Object.keys(blogPostsIntl).forEach((languageKey) => {
    const path = getPath(languageKey, `/${linkLocales.blog[languageKey]}`);
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
        SLUGIFY_SETTINGS
      );

      const slugifiedCategory = slugify(
        node.frontmatter.post_category,
        SLUGIFY_SETTINGS
      );

      const categoryBasePath = `${linkLocales.blog[languageKey]}/${linkLocales.blog.categories[languageKey]}/${slugifiedCategory}`;
      const categoryPath = getPath(languageKey, categoryBasePath)

      const blogPostBasePath = `${linkLocales.blog[languageKey]}/${slugifiedCategory}/${slugifiedTitle}`;
      const blogPostPath = getPath(languageKey, blogPostBasePath);

      node.slugs = {
        post: blogPostPath,
        category: categoryPath,
      };

      createPage({
        path: blogPostPath,
        component,
        context: {
          postsNavigation: {
            prev: index === 0 ? null : blogPostsIntl[languageKey][index - 1],
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
  const blogPostsIntlByCategory = {};

  Object.keys(blogPostsIntl).forEach((languageKey) => {
    blogPostsIntl[languageKey].forEach((blogPost) => {
      const slugifiedCategory = slugify(
        blogPost.frontmatter.post_category,
        SLUGIFY_SETTINGS
      );

      if (!blogPostsIntlByCategory[languageKey]) {
        blogPostsIntlByCategory[languageKey] = {};
      }

      blogPostsIntlByCategory[languageKey][
        `${slugifiedCategory}`
      ] = blogPostsIntlByCategory[languageKey][`${slugifiedCategory}`]
        ? [
            ...blogPostsIntlByCategory[languageKey][`${slugifiedCategory}`],
            blogPost,
          ]
        : [blogPost];
    });
  });

  Object.keys(blogPostsIntlByCategory).forEach((languageKey) => {
    Object.keys(blogPostsIntlByCategory[languageKey]).forEach((category) => {
      const basePath = `${linkLocales.blog[languageKey]}/${linkLocales.blog.categories[languageKey]}/${category}`;
      const path = getPath(languageKey, basePath)
      createPage({
        path,
        component,
        context: {
          blogPosts: blogPostsIntlByCategory[languageKey][`${category}`],
        },
      });
    });
  });
};

const createBlogTagPages = (createPage, blogPostsIntl) => {
  const blogTagTemplate = path.resolve("src/templates/blog/tag.js");
  const blogPostsIntlByTag = {};

  Object.keys(blogPostsIntl).forEach((languageKey) => {
    blogPostsIntl[languageKey].forEach((blogPost) => {
      blogPost.frontmatter.post_tags.forEach((blogPostTag) => {
        const slugifiedTag = slugify(blogPostTag, SLUGIFY_SETTINGS);
        if (!blogPostsIntlByTag[languageKey]) {
          blogPostsIntlByTag[languageKey] = {};
        }
        blogPostsIntlByTag[languageKey][`${slugifiedTag}`] = blogPostsIntlByTag[
          languageKey
        ][`${slugifiedTag}`]
          ? [...blogPostsIntlByTag[languageKey][`${slugifiedTag}`], blogPost]
          : [blogPost];
      });
    });
  });

  Object.keys(blogPostsIntlByTag).forEach((languageKey) => {
    Object.keys(blogPostsIntlByTag[languageKey]).forEach((tag) => {
      const basePath = `${linkLocales.blog[languageKey]}/${linkLocales.blog.tags[languageKey]}/${tag}`;
      const path = getPath(languageKey, basePath)

      createPage({
        path,
        component: blogTagTemplate,
        context: {
          blogPosts: blogPostsIntlByTag[languageKey][`${tag}`],
        },
      });
    });
  });
};

const createBlogRedirects = (createRedirect) => {
  Object.keys(supportedLanguages).forEach((supportedLanguageKey) => {
    const blogBasePath = linkLocales.blog[supportedLanguageKey];
    // Internationalized redirects from /blog/tags && /blog/tags/ to /blog
    let baseFromPath = `${blogBasePath}/${linkLocales.blog.tags[supportedLanguageKey]}`;
    let fromPath = getPath(supportedLanguageKey, baseFromPath);
    let toPath = getPath(supportedLanguageKey, blogBasePath);
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
    fromPath = getPath(supportedLanguageKey, baseFromPath)
    toPath = getPath(supportedLanguageKey, blogBasePath)
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
  });
};
