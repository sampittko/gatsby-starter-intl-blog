import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../assets/img/close.svg";

const Close = ({ onClick }) => (
  <button onClick={onClick}>
    <Icon className="absolute top-0 right-0 fill-white h-full p-3 w-auto bg-green dark:bg-dark-green hover:bg-white dark-hover:bg-gray-300 hover:fill-green dark-hover:fill-dark-green" />
  </button>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Close;
