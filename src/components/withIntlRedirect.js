import React, { useEffect } from "react";
import { navigate } from "gatsby-plugin-intl";
import {
  getRedirectPath,
  getRootLanguage,
  getIntlConfig,
  isLanguageSet,
  getLanguagePreference,
  setLanguagePreference,
  setLanguageSet
} from "../utils/i18n";

export const withIntlRedirect = (Component) => {
  const intlConfig = getIntlConfig();

  return (props) => {
    useEffect(() => {
      if (!isLanguageSet(intlConfig)) {
        const langPref = getLanguagePreference(intlConfig);
        let redirectPath;
        if (langPref) {
          redirectPath = langPref;
        }
        else {
          redirectPath = getRedirectPath();
          setLanguagePreference(intlConfig, redirectPath)
        }
        setLanguageSet(intlConfig, true)
        navigate(`/${redirectPath === getRootLanguage() ? "" : redirectPath}`);
      }
    }, []);

    return typeof window !== "undefined" &&
      isLanguageSet(intlConfig) ? (
      <Component {...props} />
    ) : (
      ""
    );
  };
};
