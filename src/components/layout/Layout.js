import React from 'react';
import "../../assets/css/main.css";
import Footer from "./Footer";
import Header from './header/Header';
import Main from './Main';
import { withIntlRedirect } from '../withIntlRedirect';

const Layout = ({ children }) => {
  return (
    <div className="font-sans text-black leading-tight antialiased min-h-screen flex flex-col items-center justify-between">
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export default withIntlRedirect(Layout);