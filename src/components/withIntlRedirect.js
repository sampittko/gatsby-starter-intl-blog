import React, { useEffect } from "react";
import { navigate } from 'gatsby';
import { getRedirectLanguage } from "../utils/i18n";

export const withIntlRedirect = (Component) => {
  return (props) => {
    useEffect(() => {
      if (!sessionStorage.getItem("language")) {
        const redirectLanguage = getRedirectLanguage();
        sessionStorage.setItem("language", true);
        navigate(`/${redirectLanguage}`);
      }
    }, []);

    return typeof window !== 'undefined' && sessionStorage.getItem("language") ? <Component {...props}/> : ""
  };
}