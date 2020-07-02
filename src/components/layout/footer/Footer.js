import React from 'react';
import LanguagePicker from "./LanguagePicker";
import PropTypes from "prop-types";

const Footer = ({ className }) => (
  <footer className={className}>
    <LanguagePicker className="block text-gray-600 text-sm appearance-none w-auto bg-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center hover:underline" />
  </footer>
);

Footer.defaultProps = {
  className: "",
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;