import React, { useEffect, useState } from 'react';
import "../../assets/css/main.css";
import Footer from "./Footer";
import Header from './header/Header';
import Main from './Main';
import { withIntlRedirect } from '../withIntlRedirect';

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className={`${visible ? "transition duration-500 opacity-1" : "opacity-0"} font-sans text-black leading-tight antialiased w-screen min-h-screen`}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export default withIntlRedirect(Layout);