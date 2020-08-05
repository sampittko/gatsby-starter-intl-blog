import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, subTitle, render }) => (
  <div className="px-5 pb-16">
    <h1
      className={`text-center font-light text-xl ${subTitle ? "mb-2" : "mb-8"}`}
    >
      {title}
    </h1>
    {subTitle && (
      <h3 className="text-center font-light text-sm text-gray-600 mb-8">
        {subTitle}
      </h3>
    )}
    {render()}
  </div>
);

Section.defaultProps = {
  subTitle: "",
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  render: PropTypes.func.isRequired,
};

export default Section;
