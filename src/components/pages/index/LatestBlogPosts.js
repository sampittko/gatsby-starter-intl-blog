import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link';

const LatestBlogPosts = ({ blogPosts, limit }) => {
  return (
    <div>
      {blogPosts.map((blogPost, index) => { 
        if ((index + 1) > limit) return;

        return (
          <div
            key={`blog-post-${index}`}
            className="py-8 flex flex-wrap md:flex-no-wrap"
          >
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                <Link to={blogPost.slugs.category}>
                  {blogPost.frontmatter.post_category}
                </Link>
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                {blogPost.frontmatter.post_date}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {blogPost.frontmatter.post_title}
              </h2>
              <p className="leading-relaxed">blogPost.excerpt</p>
              <Link
                to={blogPost.slugs.post}
                className="text-indigo-500 inline-flex items-center mt-4"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        );})}
    </div>
  );
};

LatestBlogPosts.defaultProps = {
  blogPosts: [],
  limit: 3,
}

LatestBlogPosts.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.object),
  limit: PropTypes.number,
};

export default LatestBlogPosts;