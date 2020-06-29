import React, { useEffect, useState } from 'react';
import "../../assets/css/main.css";
import Header from './header/Header';
import Main from './Main';
import Footer from "./footer/Footer";
import { withIntlRedirect } from '../withIntlRedirect';

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div
      className={`${
        visible ? "transition duration-500 opacity-1" : "opacity-0"
      } font-sans text-black leading-tight antialiased min-h-screen max-w-screen-md mx-auto`}
    >
      <Header className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col" />
      <Main children={children} />
      <Footer className="absolute bottom-0 px-5 py-8" />
    </div>
  );
};

export default withIntlRedirect(Layout);