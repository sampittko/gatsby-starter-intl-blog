import React from 'react';
import PropTypes from 'prop-types';
import CookieConsent from "react-cookie-consent";
import { injectIntl } from "gatsby-plugin-intl";

export const COOKIES_ACCEPTED_KEY = "cookies-accepted";

const Cookies = ({ intl, onAccept }) => (
  <CookieConsent
    buttonText={intl.formatMessage({ id: "footer.cookies.accept" })}
    cookieName={COOKIES_ACCEPTED_KEY}
    acceptOnScroll={true}
    disableStyles={true}
    onAccept={onAccept}
    containerClasses="fixed bottom-0 left-0 w-screen bg-gray-700 z-50 h-8 flex justify-between items-center sm:justify-center"
    contentClasses="text-white text-left sm:text-center text-xs w-9/12 px-2 leading-none"
    buttonClasses="font-bold absolute bottom-0 right-0 h-full px-5 text-white bg-green hover:bg-white hover:text-green text-xs"
  >
    {intl.formatMessage({ id: "footer.cookies.consent" })}
  </CookieConsent>
);

Cookies.propTypes = {
  onAccept: PropTypes.func.isRequired,
};

export default injectIntl(Cookies);