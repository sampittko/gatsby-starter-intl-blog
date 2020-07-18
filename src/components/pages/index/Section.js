import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div className="px-5">
      <h1 className="text-center font-light text-xl mb-8">{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
