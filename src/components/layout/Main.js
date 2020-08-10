import React from "react";
import PropTypes from "prop-types";

const Main = ({ visible, children }) => (
  <main
    className={`mb-6 sm:mb-12 transition duration-1000 ${
      visible ? "opacity-1" : "opacity-0"
    }`}
  >
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Main;
