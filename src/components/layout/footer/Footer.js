import React, { useState } from "react";
import LanguagePicker from "./LanguagePicker";
import Note from "./note/Note";
import CookiesComponent, { COOKIES_ACCEPTED_KEY } from "./Cookies";
import { Cookies } from "react-cookie-consent";

const Footer = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    Cookies.get(COOKIES_ACCEPTED_KEY)
  );

  return (
    <footer className="fixed bottom-0 px-10 py-1 sm:px-5 sm:py-5 w-full max-w-screen-md bg-white shadow-2xl sm:shadow-none">
      <div
        className={`flex flex-row justify-between ${
          cookiesAccepted ? "py-3" : "pt-3 pb-10 md:pb-14"
        }`}
      >
        <LanguagePicker />
        <Note />
      </div>
      <CookiesComponent onAccept={() => setCookiesAccepted(true)} />
    </footer>
  );
};

export default Footer;
