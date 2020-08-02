# Gatsby i18lized Blog Starter

Kick off your project with this internationalized blog boilerplate created with ❤️ by [Samuel Pitoňák](https://twitter.com/sampittko).

## Features

- Easily configurable through [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) file
- Built to support as many languages as needed out of the box
- Dark mode
- Blog categories and tags
- Blog pagination
- Styling through [Tailwind CSS](https://tailwindcss.com/)

## Live Demo

Visit [www.gatsby-starter-intl-blog.now.sh](https://gatsby-starter-intl-blog.now.sh/) in order to see this repository compiled and running in action through [Vercel](https://vercel.com).

## Internationalization

This starter supports addition of new languages out of the box. Subsections of this section show how to manage settings regarding internationalization of your website that is powered by this starter.

### Adding Support For a New Language

Replace `[language-key]` with the actual language key that represents the language that is to be added.

1. Open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) file

   1. Extend configuration of <u>gatsby-plugin-intl</u>

      - Add a new `[language-key]` to `options.languages` array
      - Add a new `[language-key]` to `options.external.languageStrings` array

   2. Extend configuration of <u>gatsby-source-filesystem</u> by adding the following entry

      ```javascript
      {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `[language-key]/blog`,
        path: `${__dirname}/content/[language-key]/blog`,
      },
      ```

2. Open [locales](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/locales/) folder and create a new `[language-key].json` file with corresponding translations

3. Open [content](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/content/) folder and create a new `/[language-key]/blog/` folder (ideally with translated existing articles included)

   - Important note: **keep the folder names of individual articles consistent across supported languages** (e.g. <u>/content/en/blog/this-is-my-first-blog-post/</u>, <u>/content/sk/blog/this-is-my-first-blog-post/</u> and <u>/content/si/blog/this-is-my-first-blog-post/</u>)
   - Suggestion: keep folders names of articles (blog posts titles in other words) and their categories in the default language (e.g. default language of the website in the example mentioned above would be English)

4. Extend existing GraphQL queries in the [hooks](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/hooks/) folder by adding the newly added language

5. **You are done.**

### Change <u>Default Language</u>

**Default language** is selected at the very first load of the website if the browser language of a visitor does not match any of the supported languages or it cannot be read correctly. Execute the following steps in order to change it:

1. Open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) file and navigate to the configuration of <u>gatsby-plugin-intl</u>
2. Change the value of `options.external.defaultLanguage` key with wanted language key
3. **You are done.**

### Change <u>Root Language</u>

**Root language** is the language that the website is displayed in at the root path (e.g. at [www.sampittko.sk](https://sampittko.sk)). Execute the following steps in order to change it:

1. Open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) file and navigate to the configuration of <u>gatsby-plugin-intl</u>
2. Change the value of `options.external.rootLanguage` key with wanted language key
3. Change the value of `options.defaultLanguage` so that it matches the value of `options.external.rootLanguage` key that was set previously
4. **You are done.**

## Contributing

Check [CONTRIBUTING.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/CONTRIBUTING.md) in order to see how to contribute to this open-source project.

## Changelog

Check what is new but also the history of changes for this project in [CHANGELOG.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/CHANGELOG.md).

## License

This project is under the MIT license which is great! Read more inside [LICENSE.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/LICENSE.md).
