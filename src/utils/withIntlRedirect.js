import React, { useEffect } from "react";
import { changeLocale } from "gatsby-plugin-intl";
import {
  getRedirectLanguage,
  getIntlConfig,
  isLanguageSet,
  getLanguagePreference,
  setLanguageSet,
} from "./i18n";

export const withIntlRedirect = (Component) => {
  const intlConfig = getIntlConfig();

  return (props) => {
    useEffect(() => {
      if (!isLanguageSet(intlConfig)) {
        const languagePreference = getLanguagePreference(intlConfig);
        let redirectLanguage;

        if (languagePreference) {
          redirectLanguage = languagePreference;
        } else {
          redirectLanguage = getRedirectLanguage();
        }

        setLanguageSet(intlConfig, true);
        changeLocale(redirectLanguage);
      }
    }, []);

    return typeof window !== "undefined" && isLanguageSet(intlConfig) ? (
      <Component {...props} />
    ) : (
      ""
    );
  };
};
