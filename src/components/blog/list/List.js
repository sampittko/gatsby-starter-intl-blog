import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import Item from "./Item";
import IsEmpty from "./IsEmpty";
import { useBlogPosts } from "../../../hooks/useBlogPosts";
import BlogLink from "../../BlogLink";

const List = ({ latest, intl, data }) => {
  const queriedData = useBlogPosts(intl.locale, latest ? 3 : 1000);

  const inCategory = !!data;

  const blogPosts = inCategory ? data : queriedData;

  if (blogPosts.length === 0) return <IsEmpty />;

  return (
    <>
      <div>
        {blogPosts.map((blogPost, index) => {
          const { frontmatter, fields } = inCategory
            ? blogPost.node
            : blogPost.node.childMdx;
          const { slug, categorySlug } = fields;

          return (
            <Item
              key={`blog-post-${index}`}
              frontmatter={frontmatter}
              slug={slug}
              categorySlug={categorySlug}
              index={index}
              hideCategory={inCategory}
            />
          );
        })}
      </div>
      {latest && <BlogLink />}
    </>
  );
};

List.defaultProps = {
  latest: false,
  data: null,
};

List.propTypes = {
  latest: PropTypes.bool,
  data: PropTypes.array,
};

export default injectIntl(List);
