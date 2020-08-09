import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { withIntlRedirect } from "../../utils/withIntlRedirect";
import useDarkMode from "../../hooks/useDarkMode";
import PropTypes from "prop-types";

const Layout = ({ children, backTo }) => {
  const [visible, setVisible] = useState(false);

  useDarkMode()
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="font-sans text-black leading-tight antialiased min-h-screen max-w-screen-md mx-auto bg-white dark:bg-gray-900">
      <Header backTo={backTo} />
      <main
        className={`mb-6 sm:mb-10 transition duration-1000 ${
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
};

Layout.propTypes = {
  backTo: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default withIntlRedirect(Layout);
