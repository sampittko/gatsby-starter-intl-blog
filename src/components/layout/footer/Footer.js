import React, { useState } from "react";
import LanguagePicker from "./LanguagePicker";
import Note from "./note/Note";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { injectIntl } from "gatsby-plugin-intl";

const COOKIES_ACCEPTED_KEY = "cookies-accepted";

const Footer = ({ intl }) => {
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
      <CookieConsent
        buttonText={intl.formatMessage({ id: "footer.cookies.accept" })}
        cookieName={COOKIES_ACCEPTED_KEY}
        acceptOnScroll={true}
        disableStyles={true}
        onAccept={() => setCookiesAccepted(true)}
        containerClasses="fixed bottom-0 left-0 w-screen bg-gray-700 z-50 h-14 sm:h-10 xs:h-10 pl-5 pr-5"
        contentClasses="text-white text-left xl:text-center text-sm md:text-md lg:text-lg xl:max-w-full max-w-3/4 py-0 md:py-2"
        buttonClasses="font-bold absolute bottom-0 right-0 h-full px-5 text-white bg-green hover:bg-white hover:text-green mr-4 sm:mr-0 xs:mr-0 xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm"
      >
        {intl.formatMessage({ id: "footer.cookies.consent" })}
      </CookieConsent>
    </footer>
  );
};

export default injectIntl(Footer);
