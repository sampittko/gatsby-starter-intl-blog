import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";

const ButtonLink = ({ to, className, children, onClick }) => (
  <button onClick={onClick}>
    <Link to={to} className={className}>
      {children}
    </Link>
  </button>
);

ButtonLink.defaultProps = {
  className: "",
  onClick: null,
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonLink;
