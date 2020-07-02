import React from 'react';
import PropTypes from 'prop-types';
import Home from "./Home";
import UserName from "./UserName";
import Socials from "./Socials";
import gatsbyConfig from "../../../../../gatsby-config";


const Links = ({ className }) => {
  const {
    socials,
    userName,
    fullName,
    photoUrl,
  } = gatsbyConfig.siteMetadata.author;

  return (
    <div className={className}>
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
    </div>
  );
};

Links.defaultProps = {
  className: ""
}

Links.propTypes = {
  className: PropTypes.string
};

export default Links;