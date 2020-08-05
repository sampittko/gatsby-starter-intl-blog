import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../assets/img/close.svg";

const Close = ({ onClick }) => (
  <button onClick={onClick}>
    <Icon className="absolute top-0 right-0 fill-white h-full p-3 w-auto bg-green hover:bg-white hover:fill-green" />
  </button>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Close;
