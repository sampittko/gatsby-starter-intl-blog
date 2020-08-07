# Gatsby i18lized Blog Starter

Kick off your project with this internationalized blog boilerplate.

## Features

- Built to support as many languages as needed right out of the box
- Designed to be extensible so that the starter fits anyones needs
- Dark mode
- Categorizable blog posts
- Completely Git-hosted content through Markdown files
- Easy navigation
- Simple & classy look achieved with amazing [Tailwind CSS](https://tailwindcss.com/)
- Accessible & fast for great SEO and high usability
- Easily configurable through [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) file
- Let others know that you are open to work by just one click
- Cookie consent for GDPR compliance
- Just necessary packages as dependencies

## Live Demo

Visit [www.gatsby-starter-intl-blog.now.sh](https://gatsby-starter-intl-blog.now.sh/) in order to see this repository compiled and running in action through [Vercel](https://vercel.com).

## Project Structure

```
    .
    ├── content                     # Markdown files used by Gatsby to generate pages
    │   ├── sk                      # Content translated to Slovak langauge
    │   └── en                      # Content translated to English language
    ├── src
    │   ├── assets                  # Static assets (e.g. CSS and images)
    │   ├── components              # All React and Gatsby-friendly components
    │   ├── hooks                   # React hooks for better reusability
    │   ├── locales                 # Translations for UI components for every supported language
    │   ├── pages                   # Pages that are generated by Gatsby
    │   ├── templates               # Templates used by Gatsby to generate pages
    │   └── utils                   # Utility functions that are needed across the application
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── gatsby-config.js            # Tools and utilities
    ├── gatsby-node.js              # Main config file for Gatsby plugins and site meta data
    ├── LICENSE
    ├── package.json                # Main Node package file with dependencies and meta data for the project
    ├── postcss.config.js           # Post CSS config file that is used by Tailwind CSS
    ├── README.md
    └── tailwind.config.js          # Tailwind CSS config file
    
```

## Internationalization

This starter supports addition of new languages out of the box.

### Rules

You need to follow certain rules for internationalization to work correctly. Breaking any of the following rules may cause internationalization to not work.

1. Keep folders names of individual articles consistent across supported languages (e.g. <u>/content/en/blog/life-hacks/this-is-my-first-blog-post/</u>, <u>/content/sk/blog/life-hacks/this-is-my-first-blog-post/</u> and <u>/content/si/blog/life-hacks/this-is-my-first-blog-post/</u>)
2. Prefix blog post folder name with it's category name (e.g. <u>life-hacks</u> from the example above)
3. Use **at least** `post_title`, `post_category` and `post_date` in frontmatter of article's MD file
4. Make `post_category` field inside frontmatter consistent across all blog posts in the category's folder

```markdown
---
page_description: This is a super blog 2 						# Use for better SEO
post_title: Ahojqiq
post_description: How to get consistent thoughts 		# Use for custom excerpt
post_category: Zamyslenia
post_date: "2020-04-05"
post_published: true 																# Use when blog post is just a draft
---
```

Suggestion: keep folders names of articles (blog posts titles in other words) and their categories in the default language (e.g. default language of the website in the example mentioned above would be English)

Note: it is not necessary to make a post translation immediately after writing a blog post in any of the supported languages

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

4. Extend existing GraphQL queries in the [hooks](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/hooks/) folder by adding the newly added language

5. Extend existing GraphQL page queries in [blog.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/templates/blog/blog.js) and [category.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/templates/blog/category.js) by adding the newly added language

6. **You are done**

### Change Default Language

**Default language** is selected at the very first load of the website if the browser language of a visitor does not match any of the supported languages or it cannot be read correctly. Execute the following steps in order to change it:

1. Open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) file and navigate to the configuration of <u>gatsby-plugin-intl</u>
2. Change the value of `options.external.defaultLanguage` key with wanted language key
3. **You are done**

## Personalize

Make it fully yours by replacing defaults with your personal information. Firstly, open [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js) and change `title`, `siteUrl` and properties of `author` object inside `siteMetadata`object.

### Change favicon with profile picture inside header

Replace default [favicon.png](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/assets/img/favicon.png) file.

- resolution: square
- format: PNG

### Change header image

Replace default [header_image.jpg](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/src/assets/img/header_image.jpg) file.

- resolution: 1024x96
- format: JPEG

### Toggle open to work status

Set `openToWork` to either `true` or `false` inside [gatsby-config.js](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/gatsby-config.js).

## Contributing

Check [CONTRIBUTING.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/CONTRIBUTING.md) in order to see how to contribute to this open-source project.

## Changelog

Check what is new but also the history of changes for this project in [CHANGELOG.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/CHANGELOG.md).

## License

This project is under the MIT license which is great! Read more inside [LICENSE.md](https://github.com/sampittko/gatsby-starter-intl-blog/blob/master/LICENSE).
