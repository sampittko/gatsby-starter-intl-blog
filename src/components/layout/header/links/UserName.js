import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../../../Link";

const UserName = ({ userName, intl }) => (
  <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:dark:border-gray-700 sm:py-2 sm:mt-0 mt-4">
    <Link
      to={`https://www.google.com/search?q=${userName}`}
      foreign
      title={intl.formatMessage({ id: "username.hover" })}
    >
      <span className="text-gray-600 hover:text-gray-400 dark:text-gray-500 dark-hover:text-gray-700 bg-gray-300 hover:bg-gray-700 dark:bg-gray-700 dark-hover:bg-gray-300 rounded-full px-3 py-1 shadow-sm hover:shadow-lg ">
        @{userName}
      </span>
    </Link>
  </p>
);

UserName.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default injectIntl(UserName);
