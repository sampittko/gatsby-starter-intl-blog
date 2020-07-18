import { useEffect } from "react";
import { navigate } from "gatsby-plugin-intl";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  });

  return "";
};

export default NotFoundPage;
