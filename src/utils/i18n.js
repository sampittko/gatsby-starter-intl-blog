import { languageSettings } from '../config/i18n';

export const getNodeInLanguage = (nodes, languageKey) =>
  nodes.find((node) =>
    node.fileAbsolutePath.includes(`.${languageKey}.`)
  );

export const isAtRootLanguage = (locale) =>
  locale === languageSettings.rootLanguageKey;