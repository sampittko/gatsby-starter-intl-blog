import React, { useEffect } from "react";
import { navigate } from "gatsby-plugin-intl";
import {
  getRedirectPath,
  getRootLanguage,
  getLanguagePreferenceStorageKey,
  getLanguagePreferenceStorageKey,
  getLanguageSetStorageKey,
} from "../utils/i18n";

export const withIntlRedirect = (Component) => {
  const langSetKey = getLanguageSetStorageKey();
  const langPrefKey = getLanguagePreferenceStorageKey();

  return (props) => {
    useEffect(() => {
      if (!sessionStorage.getItem(langSetKey)) {
        const langPref = localStorage.getItem(langPrefKey);
        let redirectPath;
        if (langPref) {
          redirectPath = langPref;
        }
        else {
          redirectPath = getRedirectPath();
          localStorage.setItem(langPrefKey, redirectPath);
        }
        sessionStorage.setItem(langSetKey, true);
        redirectPath = redirectPath === getRootLanguage() ? "" : redirectPath
        navigate(`/${redirectPath}`);
      }
    }, []);

    return typeof window !== "undefined" &&
      sessionStorage.getItem(langSetKey) ? (
      <Component {...props} />
    ) : (
      ""
    );
  };
};
