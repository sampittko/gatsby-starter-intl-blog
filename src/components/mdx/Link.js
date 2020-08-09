import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ to, title, newTab, children }) => (
  <a href={to} title={title} target={newTab ? "_blank" : "self"}>
    {children}
  </a>
);

Link.defaultProps = {
  newTab: true,
  title: ""
}

Link.propTypes = {
  newTab: PropTypes.bool,
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Link;