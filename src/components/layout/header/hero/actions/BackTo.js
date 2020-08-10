import React from "react";
import PropTypes from "prop-types";
import Chevron from "../../../../../assets/img/icons/chevron.svg";
import Link from "../../../../Link";

const BackTo = ({ data }) => (
  <>
    {data ? (
      <Link to={data.to} title={data.title}>
        <div className="group">
          <div className="ml-6 flex justify-center rounded-full bg-white dark:bg-gray-300 group-hover:bg-gray-700 w-10 h-10 shadow-sm group-hover:shadow-lg">
            <Chevron className="fill-gray-700 group-hover:fill-white transform rotate-180 w-3 h-auto" />
          </div>
        </div>
      </Link>
    ) : (
      <div />
    )}
  </>
);

BackTo.propTypes = {
  data: PropTypes.shape({
    to: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default BackTo;
