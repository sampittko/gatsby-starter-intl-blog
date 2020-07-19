import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import BlogPost from "./BlogPost";
import NoBlogPost from "./NoBlogPost";

const query = graphql`
  query {
    sk: allFile(
      filter: { sourceInstanceName: { eq: "sk/blog" } }
      sort: {
        order: ASC
        fields: childMarkdownRemark___frontmatter___post_date
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              post_title
              post_category
              post_date
            }
            fields {
              slug
            }
          }
        }
      }
    }
    en: allFile(
      filter: { sourceInstanceName: { eq: "en/blog" } }
      sort: {
        order: ASC
        fields: childMarkdownRemark___frontmatter___post_date
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              post_title
              post_category
              post_date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`;

const LatestBlogPosts = ({ limit, intl }) => {
  const data = useStaticQuery(query);
  const blogPosts = data[intl.locale].edges

  if (blogPosts.length === 0) return <NoBlogPost />;

  return blogPosts.map((blogPost, index) => {
    if (index + 1 > limit) return "";

    const { frontmatter, fields } = blogPost.node.childMarkdownRemark
    const { slug } = fields

    return (
      <BlogPost
        key={`blog-post-${index}`}
        frontmatter={frontmatter}
        slug={slug}
        index={index}
      />
    );
  })
};

LatestBlogPosts.defaultProps = {
  limit: 3,
};

LatestBlogPosts.propTypes = {
  limit: PropTypes.number,
};

export default injectIntl(LatestBlogPosts);
