import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, blogPostMeta }) => (
  <h1
    className={`text-center text-black dark:text-gray-300 font-light text-xl ${
      blogPostMeta ? "mb-2" : "mb-8"
    }`}
  >
    {title}
  </h1>
);

Title.propTypes = {
  blogPostMeta: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
