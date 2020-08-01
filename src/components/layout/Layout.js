import React, { useEffect, useState } from "react";
import "../../assets/css/main.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { withIntlRedirect } from "../../utils/withIntlRedirect";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="font-sans text-black leading-tight antialiased min-h-screen max-w-screen-md mx-auto bg-white">
      <Header />
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

export default withIntlRedirect(Layout);
