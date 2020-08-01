import React, { useEffect } from "react";
import { navigate } from "gatsby-plugin-intl";
import {
  getRedirectLanguage,
  getRootLanguage,
  getIntlConfig,
  isLanguageSet,
  getLanguagePreference,
  setLanguagePreference,
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
          setLanguagePreference(intlConfig, redirectLanguage);
        }

        setLanguageSet(intlConfig, true);

        navigate(
          `/${redirectLanguage === getRootLanguage() ? "" : `${redirectLanguage}/`}`
        );
      }
    }, []);

    return typeof window !== "undefined" && isLanguageSet(intlConfig) ? (
      <Component {...props} />
    ) : (
      ""
    );
  };
};
