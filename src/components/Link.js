import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';

const LinkComponent = ({
  to,
  foreign,
  children,
  title,
  className,
}) => (
  <>
    {!foreign ? (
      <Link to={to} className={className}>
        {children}
      </Link>
    ) : (
      <a
        href={to}
        title={title}
        rel="noreferrer"
        target="_blank"
        className={className}
      >
        {children}
      </a>
    )}
  </>
);

LinkComponent.defaultProps = {
  foreign: false,
  title: "",
  className: "",
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  foreign: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default LinkComponent;