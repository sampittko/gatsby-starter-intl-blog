import React from 'react';
import LanguagePicker from "./LanguagePicker";
import Navigation from './navigation/Navigation';
import gatsbyConfig from '../../../../gatsby-config';
import WIP from './WIP';

const Header = () => {
  const { restrictedMode } = gatsbyConfig.siteMetadata

  return (
    <header className="fixed top-0 w-screen h-auto">
      {restrictedMode ? (
        <WIP />
      ) : (
        <Navigation />
      )}
      <LanguagePicker />
    </header>
  );
};

export default Header;