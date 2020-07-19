import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import BlogPost from "./BlogPost";
import NoBlogPost from "../../../NoBlogPost";
import { useBlogPosts } from "../../../../hooks/useBlogPosts";
import More from "./More";

const LatestBlogPosts = ({ limit, intl }) => {
  const blogPosts = useBlogPosts(intl.locale, limit);

  if (blogPosts.length === 0) return <NoBlogPost />;

  return (
    <>
      <div>
        {blogPosts.map((blogPost, index) => {
          const { frontmatter, fields } = blogPost.node.childMarkdownRemark;
          const { slug } = fields;

          return (
            <BlogPost
              key={`blog-post-${index}`}
              frontmatter={frontmatter}
              slug={slug}
              index={index}
            />
          );
        })}
      </div>
      {blogPosts.length < limit && (
        <More />
      )}
    </>
  );
};

LatestBlogPosts.defaultProps = {
  limit: 3,
};

LatestBlogPosts.propTypes = {
  limit: PropTypes.oneOf([2, 3, 4, 5]),
};

export default injectIntl(LatestBlogPosts);
