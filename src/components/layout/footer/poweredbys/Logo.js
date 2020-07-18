import React from "react";
import PropTypes from "prop-types";

const Logo = ({ SVG }) => <SVG className="h-5 w-auto inline-block" />;

Logo.propTypes = {
  SVG: PropTypes.node.isRequired,
};

export default Logo;
