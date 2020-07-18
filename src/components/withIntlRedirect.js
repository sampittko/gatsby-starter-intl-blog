import React, { useEffect } from "react";
import { navigate } from "gatsby-plugin-intl";
import { getRedirectPath } from "../utils/i18n";

export const withIntlRedirect = (Component) => {
  return (props) => {
    useEffect(() => {
      if (!sessionStorage.getItem("language")) {
        const redirectPath = getRedirectPath();
        sessionStorage.setItem("language", true);
        navigate(`/${redirectPath}`);
      }
    }, []);

    return typeof window !== "undefined" &&
      sessionStorage.getItem("language") ? (
      <Component {...props} />
    ) : (
      ""
    );
  };
};
