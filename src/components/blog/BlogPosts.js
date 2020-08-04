import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import BlogPost from "./BlogPost";
import NoBlogPosts from "./NoBlogPosts";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import BlogLink from "../pages/index/BlogLink";

const BlogPosts = ({ latest, intl }) => {
  const blogPosts = useBlogPosts(intl.locale, latest ? 3 : 1000);

  if (blogPosts.length === 0) return <NoBlogPosts />;

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
      {latest && <BlogLink />}
    </>
  );
};

BlogPosts.defaultProps = {
  latest: false
};

BlogPosts.propTypes = {
  latest: PropTypes.bool,
};

export default injectIntl(BlogPosts);
