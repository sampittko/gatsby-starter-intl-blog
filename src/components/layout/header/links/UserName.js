import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../../../Link";

const UserName = ({ className, userName, intl }) => (
  <p className={className}>
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
