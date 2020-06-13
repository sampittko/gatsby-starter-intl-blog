import React from 'react';
import LanguagePicker from "./LanguagePicker";
import OpenSource from './OpenSource';
import PropTypes from "prop-types";

const Footer = ({ className }) => (
  <footer className={className}>
    <LanguagePicker className="block text-brown mx-auto appearance-none w-auto bg-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center" />
    <OpenSource />
  </footer>
);

Footer.defaultProps = {
  className: "",
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;