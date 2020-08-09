import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children }) => (
  <p className="mb-4 pm-0 sm:mx-12 text-justify text-black dark:text-gray-300">
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
