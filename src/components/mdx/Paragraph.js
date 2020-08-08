import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => <p className="mb-4">{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Paragraph;