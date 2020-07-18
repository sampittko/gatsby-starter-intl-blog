import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../../../Link";

const UserName = ({ className, userName, intl }) => (
  <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    <Link
      to={`https://www.google.com/search?q=${userName}`}
      foreign
      title={intl.formatMessage({ id: "username.hover" })}
    >
      <span className="hover:bg-gray-700 hover:text-white bg-gray-300 rounded-full px-3 py-1 text-gray-600">
        @{userName}
      </span>
    </Link>
  </p>
);

UserName.defaultProps = {
  className: "",
};

UserName.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string.isRequired,
};

export default injectIntl(UserName);
