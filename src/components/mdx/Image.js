import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ path, alt }) => (
  <img className="m-4 rounded-md" src={path} alt={alt} />
);

Image.defaultProps = {
  alt: ""
}

Image.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;