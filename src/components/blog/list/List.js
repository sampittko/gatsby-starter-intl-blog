import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import Item from "./Item";
import IsEmpty from "./IsEmpty";
import { useBlogPosts } from "../../../hooks/useBlogPosts";
import BlogLink from "../../pages/index/BlogLink";

const List = ({ latest, intl }) => {
  const blogPosts = useBlogPosts(intl.locale, latest ? 3 : 1000);

  if (blogPosts.length === 0) return <IsEmpty />;

  return (
    <>
      <div>
        {blogPosts.map((blogPost, index) => {
          const { frontmatter, fields } = blogPost.node.childMarkdownRemark;
          const { slug } = fields;

          return (
            <Item
              key={`blog-post-${index}`}
              frontmatter={frontmatter}
              slug={slug}
              index={index}
            />
          );
        })}
      </div>
      {latest && <BlogLink />}
    </>
  );
};

List.defaultProps = {
  latest: false
};

List.propTypes = {
  latest: PropTypes.bool,
};

export default injectIntl(List);
