const { languageSettings, supportedLanguages } = require("./src/config/i18n");

exports.SLUGIFY_SETTINGS = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
};

exports.COLLECTIONS = {
  BLOG_POSTS: 1,
  INDEXES: 2,
};

exports.getPath = (languageKey, basePath) =>
  polishLink(
    languageKey === languageSettings.rootLanguageKey
      ? basePath
      : `/${languageKey}/${basePath}`
  );

// TODO Use lodash helper fn?
exports.getCollectionByLanguage = (collection, collectionType) => {
  const collectionIntl = {};

  if (collectionType === this.COLLECTIONS.BLOG_POSTS) {
    Object.keys(supportedLanguages).forEach((supportedLanguage) => {
      collectionIntl[supportedLanguage] = [];
    });
  }

  // Push blog posts to corresponding arrays by language
  collection.forEach((item) => {
    if (collectionType === this.COLLECTIONS.BLOG_POSTS) {
      const blogPost = item.node;
      if (blogPost.frontmatter.post_published) {
        const languageKey = getLanguageFromFilePath(blogPost.fileAbsolutePath);
        collectionIntl[languageKey].push(blogPost);
      }
    } else if (collectionType === this.COLLECTIONS.INDEXES) {
      const index = item;
      const languageKey = getLanguageFromFilePath(index.fileAbsolutePath);
      collectionIntl[languageKey] = index;
    }
  });

  return collectionIntl;
}

const getLanguageFromFilePath = (filePath) => {
  return filePath
    .match(/index\..*\.md/)[0]
    .replace(/index\./, "")
    .replace(/\.md/, "");
};

const polishLink = (link) => link.replace(/\/\//g, "/");