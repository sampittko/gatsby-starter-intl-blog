import React from 'react';
import PropTypes from 'prop-types';
import imagePath from '../../../assets/img/the_high_tatras.jpg';

const Image = ({ className }) => (
  <>
    <div
      className={`absolute left-0 ${className}`}
      style={{ backgroundImage: `url(${imagePath})` }}
    />
    <div className={`invisible ${className}`} />
  </>
);

Image.defaultProps = {
  className: "",
};

Image.propTypes = {
  className: PropTypes.string,
};

export default Image;