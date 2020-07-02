// thanks goes to @jlengstorf (https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/)

const visit = require("unist-util-visit");

module.exports = (tree) => {
  visit(
    tree,
    // only visit a tags that contain text
    (node) =>
      node.tagName === "a" && node.children.some((n) => n.tagName === "text"),
    (node) => {
      // set target for a node
      if (node.properties) {
        node.properties.target = "_blank";
      }
    }
  );
};
