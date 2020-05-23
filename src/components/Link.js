import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const LinkComponent = ({ to, foreign, children, onDark, newTab }) => {
  const className = `${onDark ? "text-white" : "text-brown"} hover:underline`;

  return (
    <>
      {!foreign ? (
        <span className={className}>
          <Link to={to}>
            {children}
          </Link>
        </span>
      ) : (
        <a
          href={to}
          rel="noopener"
          target={newTab ? "_blank" : "_self"}
          className={className}
        >
          {children}
        </a>
      )}
    </>
  );
}

LinkComponent.defaultProps = {
  foreign: false,
  onDark: false,
  newTab: false,
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  foreign: PropTypes.bool,
  onDark: PropTypes.bool,
  newTab: PropTypes.bool,
}

export default LinkComponent;