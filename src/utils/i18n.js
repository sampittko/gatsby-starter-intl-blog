export const getNodeInLanguage = (nodes, languageKey) =>
  nodes.find((node) =>
    node.fileAbsolutePath.includes(`.${languageKey}.`)
  );