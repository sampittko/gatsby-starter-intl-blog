import React from 'react';
import LanguagePicker from "./LanguagePicker";
import Profile from "./Profile";
import Menu from './Menu';

const Header = () => {
  return (
    <header className="fixed top-0 w-screen">
      {/* <Profile /> */}
      {/* <Menu /> */}
      <LanguagePicker />
    </header>
  );
};

export default Header;