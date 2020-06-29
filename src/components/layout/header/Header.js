import React from 'react';
import Navigation from './navigation/Navigation';
import PropTypes from "prop-types";

const Header = ({ className }) =>
  <header className={className}>
    <Navigation className="flex flex-row justify-center items-center" />
  </header>

Header.defaultProps = {
  className: "",
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;