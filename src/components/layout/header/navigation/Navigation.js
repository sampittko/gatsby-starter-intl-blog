import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navigation;