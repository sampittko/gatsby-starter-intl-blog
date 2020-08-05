import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, blogPostMeta }) => (
  <h1
    className={`text-center font-light text-xl ${
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
