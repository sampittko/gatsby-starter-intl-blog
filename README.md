# [www.sampittko.sk](https://sampittko.sk/)

Personal website of Samuel Pitoňák.

## Planned Features

This list contains all the features that are planned for the future versions of this project.

### **v1**

- Multilingual
- Blog with Categories and Tags
- Projects
- Timeline

### v2

- Dark Mode
- Automatically Generate Blog Post Images

### v3

- Internationalized Links as Gatsby Plugin - e.g. <u>/domov</u> & <u>/en/home</u> are equivalent

## Contributing

Check [CONTRIBUTING.md](https://github.com/sampittko/sampittko.sk/blob/master/CONTRIBUTING.md) in order to see how to contribute to this open-source project.

## Changelog

Check what is new but also the history of changes for this project in [CHANGELOG.md](https://github.com/sampittko/sampittko.sk/blob/master/CHANGELOG.md).

## Adding Support For a New Language

Follow these instructions in order to add support for a new language.

1. Open [gatsby-config.js](https://github.com/sampittko/sampittko.sk/blob/master/gatsby-config.js) file and:
   1. Extend configuration of <u>gatsby-plugin-intl</u> as follows:
      - Add a new language to <pre>options.languages</pre> array
      - Add a new language to <pre>options.external.languageStrings</pre> array
   2. Extend configuration of <u>gatsby-source-filesystem</u> as follows:
      1. *To be added*
2. Open [locales](https://github.com/sampittko/sampittko.sk/blob/master/src/locales/) folder and create a new <pre>[language-key].json</pre> file with correct translations (copy the existing one and change it)
3. Open [content](https://github.com/sampittko/sampittko.sk/blob/master/src/content/) folder and create a new <pre>[language-key]</pre> folder with subfolder structure tree (copy the existing one and change it)
4. Extend existing GraphQL queries in the [hooks](https://github.com/sampittko/sampittko.sk/blob/master/src/hooks/) folder by adding the newly added language (copy existing part of the query and change it so that it uses new language key).
5. **You are done.** If you wish to change default language or language that is at the root of your website, follow the comments that can be found inside configuration of <u>gatsby-plugin-intl</u> (open [gatsby-config.js](https://github.com/sampittko/sampittko.sk/blob/master/gatsby-config.js) again)

## Adding Pages

You are able to add a new page to each section this theme supports. You need to follow some rules in order to successfully add a page.

### Adding a Blog Post

_To be added._

### Adding a Project

_To be added._

### Adding a Timeline Item

_To be added._

## License

This project is under the MIT license which is great! Read more [here](https://github.com/sampittko/sampittko.sk/blob/master/LICENSE.md).