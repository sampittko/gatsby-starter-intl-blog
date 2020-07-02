import React from 'react';
import gatsbyConfig from '../../../../gatsby-config';

import PropTypes from 'prop-types';
import Home from './links/Home';
import UserName from './links/UserName';
import Socials from './links/Socials';

const Header = ({ className }) => {
  const { socials, userName, fullName, photoUrl } = gatsbyConfig.siteMetadata.author;

  return (
    <header className={className}>
      <Home
        className="flex font-medium items-center md:justify-start justify-center"
        fullName={fullName}
        photoUrl={photoUrl}
      />
      <UserName
        className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
        userName={userName}
      />
      <Socials
        className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        socials={socials}
      />
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