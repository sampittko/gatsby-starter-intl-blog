import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const LinkComponent = ({ to, foreign, children, onDark, newTab, title }) => {
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
          title={title}
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
  title: "",
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  foreign: PropTypes.bool,
  onDark: PropTypes.bool,
  newTab: PropTypes.bool,
  title: PropTypes.string,
}

export default LinkComponent;