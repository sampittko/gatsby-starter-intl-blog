import React from 'react';
import LanguagePicker from "./LanguagePicker";
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 w-screen">
      <Logo />
      <LanguagePicker />
    </header>
  );
};

export default Header;