import React from "react";
import LanguagePicker from "./LanguagePicker";
import PoweredBys from "./poweredbys/PoweredBys";

const Footer = () => (
  <footer className="absolute bottom-0 px-10 md:px-5 py-8 flex flex-row justify-between w-full max-w-screen-md">
    <LanguagePicker />
    <PoweredBys />
  </footer>
);

export default Footer;
