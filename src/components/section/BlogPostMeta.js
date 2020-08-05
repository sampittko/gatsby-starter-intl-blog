import React from "react";
import PropTypes from "prop-types";
import Link from "../Link";

const BlogPostMeta = ({ data }) => (
  <h3 className="text-center font-light text-sm text-gray-600 mb-8">
    <Link className="hover:underline" to={data.category.slug}>
      {data.category.name}
    </Link>{" "}
    | {data.publishedDate}
  </h3>
);

BlogPostMeta.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }).isRequired,
    publishedDate: PropTypes.string.isRequired,
  }),
};

export default BlogPostMeta;
