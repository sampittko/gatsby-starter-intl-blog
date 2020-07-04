import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import classNames from 'classnames';

const LinkComponent = ({
  to,
  foreign,
  children,
  title,
  className,
  groupHover,
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
        rel="noopener"
        target="_blank"
        className={`${className} ${classNames({
          group: groupHover,
        })}`}
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
  groupHover: false,
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  foreign: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default LinkComponent;