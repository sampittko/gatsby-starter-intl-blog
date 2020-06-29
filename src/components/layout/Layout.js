import React, { useEffect, useState } from 'react';
import "../../assets/css/main.css";
import Footer from "./footer/Footer";
import Header from './header/Header';
import Main from './Main';
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
      } font-sans text-black leading-tight antialiased w-screen min-h-screen`}
    >
      <Header className="fixed top-0 w-screen h-auto text-xs lg:text-sm" />
      <Main children={children} />
      {/* <Footer className="fixed bottom-0 w-full p-3 text-center text-xs lg:text-sm" /> */}
    </div>
  );
};

export default withIntlRedirect(Layout);