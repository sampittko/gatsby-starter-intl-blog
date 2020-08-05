import React from "react";
import PropTypes from "prop-types";
import Chevron from "../../../../assets/img/chevron.svg";
import Link from "../../../Link";

const BackArrow = ({ to, title }) => (
  <div className="invisible sm:visible absolute h-24 mt-5 z-50 w-screen">
    <div className="relative flex items-center h-full max-w-screen-lg mx-auto">
      <Link to={to} title={title}>
        <div className="group">
          <div className="ml-6 flex justify-center rounded-full bg-white group-hover:bg-gray-700 w-10 h-10 shadow-sm group-hover:shadow-lg">
            <Chevron className="fill-gray-700 group-hover:fill-white transform rotate-180 w-3 h-auto" />
          </div>
        </div>
      </Link>
    </div>
  </div>
);

BackArrow.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BackArrow;
