import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import Actions from "./actions/Actions";

const Hero = ({ backTo, darkMode, onDarkModeToggle }) => {
  const className = "h-24 w-full mt-5";

  return (
    <>
      <div className={`absolute left-0 w-screen`}>
        <Actions
          backTo={backTo}
          darkMode={darkMode}
          onDarkModeToggle={onDarkModeToggle}
        />
        <Image className={className} />
      </div>
      <div className={`invisible ${className}`} />
    </>
  );
};

Hero.defaultProps = {
  backTo: null,
};

Hero.propTypes = {
  backTo: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  darkMode: PropTypes.bool.isRequired,
  onDarkModeToggle: PropTypes.func.isRequired,
};

export default Hero;
