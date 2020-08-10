import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { withIntlRedirect } from "../../utils/withIntlRedirect";
import useDarkMode from "../../hooks/useDarkMode";
import PropTypes from "prop-types";
import Main from "./Main";
import BackgroundColor from "./BackgroundColor";

const Layout = ({ children, backTo }) => {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="font-sans text-black leading-tight antialiased min-h-screen max-w-screen-md mx-auto bg-white dark:bg-gray-900">
      <BackgroundColor />
      <Header
        backTo={backTo}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(!darkMode)}
      />
      <Main visible={visible}>{children}</Main>
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
