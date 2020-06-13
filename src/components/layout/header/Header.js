import React from 'react';
import Navigation from './navigation/Navigation';
import gatsbyConfig from '../../../../gatsby-config';
import WIP from './WIP';

const Header = () => {
  const { restrictedMode } = gatsbyConfig.siteMetadata

  return (
    <header className="fixed top-0 w-screen h-auto text-xs lg:text-sm">
      {restrictedMode ? <WIP /> : <Navigation />}
    </header>
  );
};

export default Header;