import React from "react";
import LanguagePicker from "./LanguagePicker";
import Note from "./note/Note";

const Footer = () => (
  <footer className="fixed bottom-0 px-10 py-1 sm:px-5 sm:py-5 flex flex-row justify-between w-screen w-full max-w-screen-md bg-white shadow-2xl sm:shadow-none bg-opacity-75">
    <LanguagePicker />
    <Note />
  </footer>
);

export default Footer;
