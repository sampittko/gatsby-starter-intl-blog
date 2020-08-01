import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { withIntlRedirect } from "../withIntlRedirect";
import classNames from "classnames";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="font-sans text-black leading-tight antialiased min-h-screen max-w-screen-md mx-auto bg-white">
      <Header />
      <main
        className={classNames({
          "transition duration-1000 opacity-1": visible,
          "opacity-0": !visible,
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default withIntlRedirect(Layout);
