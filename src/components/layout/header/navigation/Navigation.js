import React from 'react';
import PropTypes from "prop-types";
import Logo from "./Logo";
import Menu from "./Menu";

const Navigation = ({ className }) =>
  <div className={className}>
    <Logo />
    <Menu />
  </div>

Navigation.defaultProps = {
  className: "",
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;