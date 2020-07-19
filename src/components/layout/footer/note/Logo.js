import React from "react";
import PropTypes from "prop-types";

const Logo = ({ SVG }) => <SVG className="w-3 h-auto inline-block mx-1" />;

Logo.propTypes = {
  SVG: PropTypes.func.isRequired,
};

export default Logo;
