import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { withIntlRedirect } from "../../utils/withIntlRedirect";
import useDarkMode from "../../hooks/useDarkMode";
import PropTypes from "prop-types";

const Layout = ({ children, backTo, backToTitle }) => {
  const [visible, setVisible] = useState(false);
  const darkMode = useDarkMode();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="font-sans text-black leading-tight antialiased min-h-screen max-w-screen-md mx-auto bg-white">
      <Header backTo={backTo} backToTitle={backToTitle} />
      <main
        className={`transition duration-1000 ${
          visible ? "opacity-1" : "opacity-0"
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  backTo: null,
  backToTitle: "",
};

Layout.propTypes = {
  backTo: PropTypes.string,
  backToTitle: PropTypes.string,
};

export default withIntlRedirect(Layout);
