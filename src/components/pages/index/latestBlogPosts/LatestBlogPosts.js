import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import BlogPost from "./BlogPost";

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

  return (
    <>
      {blogPosts.length > 0 ? (
        blogPosts.map((blogPost, index) => {
          if (index + 1 > limit) return "";

          const { frontmatter, fields } = blogPost.node.childMarkdownRemark

          return (
            <BlogPost
              frontmatter={frontmatter}
              slug={fields.slug}
              index={index}
            />
          );
        })
      ) : (
        <h2 className="block text-center px-5 py-3 border-2 border-white bg-gray-100 rounded-full mb-2">
          {intl.formatMessage({ id: "blog.noposts" })}
        </h2>
      )}
    </>
  );
};

LatestBlogPosts.defaultProps = {
  limit: 3,
};

LatestBlogPosts.propTypes = {
  limit: PropTypes.number,
};

export default injectIntl(LatestBlogPosts);
