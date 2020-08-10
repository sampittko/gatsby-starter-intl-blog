import React from 'react';
import PropTypes from 'prop-types';
import Sun from "../../../../../assets/img/icons/sun.svg";
import Moon from "../../../../../assets/img/icons/moon.svg";
import { injectIntl } from 'gatsby-plugin-intl';

const DarkModeToggle = ({ value, onToggle, intl }) => (
  <div className="group">
    <button
      onClick={onToggle}
      className="bg-white group-hover:bg-gray-700 dark:bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center mr-10 lg:-mr-5"
      title={
        value
          ? intl.formatMessage({ id: "darkmode.toggle.turnoff" })
          : intl.formatMessage({ id: "darkmode.toggle.turnon" })
      }
    >
      {value ? (
        <Sun className="dark:fill-gray-300 w-3 h-auto" />
      ) : (
        <Moon className="fill-gray-700 group-hover:fill-gray-300 w-3 h-auto" />
      )}
    </button>
  </div>
);

DarkModeToggle.propTypes = {
  value: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default injectIntl(DarkModeToggle);