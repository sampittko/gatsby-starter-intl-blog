import React from "react";
import LanguagePicker from "./LanguagePicker";
import PoweredBys from "./poweredbys/PoweredBys";

const Footer = () => (
  <footer className="fixed bottom-0 px-10 py-1 md:px-5 md:py-5 flex flex-row justify-between w-screen w-full max-w-screen-md bg-white shadow-2xl md:shadow-none">
    <LanguagePicker />
    <PoweredBys />
  </footer>
);

export default Footer;
