import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import Item from "./Item";
import IsEmpty from "./IsEmpty";
import { useBlogPosts } from "../../../hooks/useBlogPosts";
import BlogLink from "../../pages/index/BlogLink";
import Pagination from "../../pagination/Pagination";

const List = ({ latest, intl, data }) => {
  const queriedData = useBlogPosts(intl.locale, latest ? 3 : 1000);

  const blogPosts = data ? data : queriedData;

  if (blogPosts.length === 0) return <IsEmpty />;

  return (
    <>
      <div>
        {blogPosts.map((blogPost, index) => {
          const { frontmatter, fields } = data ? blogPost.node : blogPost.node.childMarkdownRemark;
          const { slug, categorySlug } = fields;

          return (
            <Item
              key={`blog-post-${index}`}
              frontmatter={frontmatter}
              slug={slug}
              categorySlug={data ? "" : categorySlug}
              index={index}
            />
          );
        })}
      </div>
      {latest ? <BlogLink /> : <Pagination />}
    </>
  );
};

List.defaultProps = {
  latest: false,
  data: null
};

List.propTypes = {
  latest: PropTypes.bool,
  data: PropTypes.array,
};

export default injectIntl(List);
