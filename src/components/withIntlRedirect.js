import React, { useEffect } from "react";
import { languageSettings, supportedLanguages } from "../config/i18n";
import { navigate } from 'gatsby';

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return languageSettings.defaultLanguageKey;
  }

  const languageKey =
    navigator && navigator.language && navigator.language.split("-")[0];

  if (!languageKey) return languageSettings.defaultLanguageKey;

  switch (languageKey) {
    case supportedLanguages.sk.key:
      return "";
    case supportedLanguages.en.key:
      return supportedLanguages.en.key;
    default:
      return languageSettings.defaultLanguageKey ===
        languageSettings.rootLanguageKey
        ? ""
        : languageSettings.defaultLanguageKey;
  }
};

export const withIntlRedirect = (Component) => {
  return (props) => {
    useEffect(() => {
      if (!sessionStorage.getItem("language")) {
        const redirectLanguage = getRedirectLanguage();
        sessionStorage.setItem("language", true);
        navigate(`/${redirectLanguage}`);
      }
    }, []);
    return <Component {...props}/>
  };
}