import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../Link';

const Navigation = ({ prev, next }) => (
  <div>
    {prev.title && <Link to={prev.slug}>{prev.title}</Link>}
    {next.title && <Link to={next.slug}>{next.title}</Link>}
  </div>
);

Navigation.propTypes = {
  prev: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
  next: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
};

export default Navigation;