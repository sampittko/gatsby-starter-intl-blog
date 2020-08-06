import React from "react";
import PropTypes from "prop-types";
import Link from "../../Link";

const Item = ({ frontmatter, slug, categorySlug, index }) => (
  <Link
    key={`blog-post-${index}`}
    to={slug}
    className="block px-5 py-3 border-2 border-white hover:border-gray-100 bg-gray-100 hover:bg-transparent rounded-full mb-2"
  >
    <div className="flex items-center justify-between">
      <h2 className="inline font-medium text-gray-900 title-font">
        {frontmatter.post_title}
      </h2>
      <div className="md:w-5/12 md:flex md:items-center md:justify-around text-center font-light text-sm">
        <span className="hidden md:inline w-56">
          <Link to={categorySlug} className="hover:underline">
            {frontmatter.post_category}
          </Link>
        </span>
        <span className="block md:inline w-16 text-gray-500 font-light">
          {frontmatter.post_date}
        </span>
      </div>
    </div>
  </Link>
);

Item.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
