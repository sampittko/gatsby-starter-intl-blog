import React from "react";
import PropTypes from "prop-types";
import Link from "../../Link";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    blogPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { order: ASC, fields: [frontmatter___post_date] }
    ) {
      edges {
        node {
          frontmatter {
            page_description
            page_image
            post_title
            post_tags
            post_category
            post_date
            post_published
          }
          excerpt
          fileAbsolutePath
        }
      }
    }
  }
`;

const LatestBlogPosts = ({ limit, intl }) => {
  const { blogPosts } = useStaticQuery(query);

  return (
    <>
      {blogPosts.length > 0 ? (
        blogPosts.map((blogPost, index) => {
          if (index + 1 > limit) return "";

          return (
            <Link
              key={`blog-post-${index}`}
              to={blogPost.slugs.post}
              className="block px-5 py-3 border-2 border-white hover:border-gray-100 bg-gray-100 hover:bg-transparent rounded-full mb-2"
            >
              <div
                className="flex items-center justify-between"
                key={`blog-post-${index}`}
              >
                <h2 className="inline font-medium text-gray-900 title-font">
                  {blogPost.frontmatter.post_title}
                </h2>
                <div className="w-5/12 flex items-center justify-around text-center font-light text-sm">
                  <span className="w-56">
                    {blogPost.frontmatter.post_category}
                  </span>
                  <span className="w-16 text-gray-500 font-light">
                    {blogPost.frontmatter.post_date}
                  </span>
                </div>
              </div>
            </Link>
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
