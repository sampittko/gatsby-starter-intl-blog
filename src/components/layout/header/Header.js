import React from 'react';
import Navigation from './navigation/Navigation';
import gatsbyConfig from '../../../../gatsby-config';
import WIP from './WIP';
import PropTypes from "prop-types";

const Header = ({ className }) => {
  const { restrictedMode } = gatsbyConfig.siteMetadata

  return (
    <header className={className}>
      {restrictedMode ? (
        <WIP className="flex items-center justify-center bg-white text-brown font-bold px-4 py-3 w-full" />
      ) : (
        <Navigation className="flex flex-row justify-center items-center" />
      )}
    </header>
  );
};

Header.defaultProps = {
  className: "",
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;