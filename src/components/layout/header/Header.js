import React from 'react';
import LanguagePicker from "./LanguagePicker";
import Navigation from './navigation/Navigation';

const Header = () => {
  return (
    <header className="fixed top-0 w-screen h-auto">
      <Navigation />
      <LanguagePicker />
    </header>
  );
};

export default Header;