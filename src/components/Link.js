import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';

const LinkComponent = ({ to, foreign, children, newTab, title, className, groupHover }) => {
  const href = foreign ? to : `/${to}`.replace(/\/\//g, "/");

  return (
    <>
      {!foreign ? (
        <Link
          to={href}
          className={`${className} ${classNames({
            group: groupHover,
          })}`}
        >
          {children}
        </Link>
      ) : (
        <a
          href={href}
          title={title}
          rel="noopener"
          target={newTab ? "_blank" : "_self"}
          className={`${className} ${classNames({
            group: groupHover,
          })}`}
        >
          {children}
        </a>
      )}
    </>
  );
}

LinkComponent.defaultProps = {
  foreign: false,
  newTab: false,
  title: "",
  className: "",
  groupHover: false,
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  foreign: PropTypes.bool,
  newTab: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  groupHover: PropTypes.bool,
}

export default LinkComponent;