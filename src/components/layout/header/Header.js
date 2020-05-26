import React from 'react';
import LanguagePicker from "./LanguagePicker";
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 h-auto w-content-compact mx-auto">
      {/* <Logo />
      <Menu /> */}
      <LanguagePicker />
    </header>
  );
};

export default Header;