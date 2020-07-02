import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';

const LinkComponent = ({ to, foreign, children, onDark, newTab, title, notText, className, groupHover }) => {
  const internalClassName = `${onDark ? "text-white" : "text-brown"} ${className}`;
  const href = foreign ? to : `/${to}`.replace(/\/\//g, "/");

  return (
    <>
      {!foreign ? (
        <>
          {notText ? (
            <Link to={href}>{children}</Link>
          ) : (
            <span className={internalClassName}>
              <Link
                to={href}
                className={classNames({
                  group: groupHover,
                })}
              >
                {children}
              </Link>
            </span>
          )}
        </>
      ) : (
        <a
          href={href}
          title={title}
          rel="noopener"
          target={newTab ? "_blank" : "_self"}
          className={`${!notText ? internalClassName : ""} ${classNames({
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
  onDark: false,
  newTab: false,
  title: "",
  notText: false,
  className: "",
  groupHover: false,
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  foreign: PropTypes.bool,
  onDark: PropTypes.bool,
  newTab: PropTypes.bool,
  title: PropTypes.string,
  notText: PropTypes.bool,
  className: PropTypes.string,
  groupHover: PropTypes.bool,
}

export default LinkComponent;