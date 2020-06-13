import React from 'react';
import LanguagePicker from "./LanguagePicker";
import OpenSource from './OpenSource';

const Footer = () => (
  <footer className="fixed bottom-0 w-full p-3 text-center text-xs lg:text-sm">
    <LanguagePicker className="block text-brown mx-auto appearance-none w-auto bg-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center" />
    <OpenSource />
  </footer>
);

export default Footer;