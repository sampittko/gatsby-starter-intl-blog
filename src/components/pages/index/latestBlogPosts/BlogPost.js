import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../Link';

const BlogPost = ({ frontmatter, slug, index }) => {
  return (
    <Link
      key={`blog-post-${index}`}
      to={slug}
      className="block px-5 py-3 border-2 border-white hover:border-gray-100 bg-gray-100 hover:bg-transparent rounded-full mb-2"
    >
      <div
        className="flex items-center justify-between"
        key={`blog-post-${index}`}
      >
        <h2 className="inline font-medium text-gray-900 title-font">
          {frontmatter.post_title}
        </h2>
        <div className="w-5/12 flex items-center justify-around text-center font-light text-sm">
          <span className="w-56">{frontmatter.post_category}</span>
          <span className="w-16 text-gray-500 font-light">
            {frontmatter.post_date}
          </span>
        </div>
      </div>
    </Link>
  );
};

BlogPost.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default BlogPost;