import React from 'react';
import gatsbyConfig from '../../../../gatsby-config';
import GitHub from "../../../assets/img/social/GitHub";
import LinkedIn from "../../../assets/img/social/LinkedIn";
import Twitter from "../../../assets/img/social/Twitter";
import Link from '../../Link';
import PropTypes from 'prop-types';

const Header = ({ className }) => {
  const { socials, userName, fullName, photoUrl } = gatsbyConfig.siteMetadata.author;

  return (
    <header className={className}>
      <Link
        to="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <img
          src={photoUrl}
          alt=""
          className="inline-block rounded-full h-10 w-10"
        />
        <span className="inline-block h-full ml-3 text-xl align-middle">
          {fullName}
        </span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        <Link
          to={`https://www.google.com/search?q=${userName}`}
          newTab
          foreign
          className="text-gray-600 align-middle"
        >
          @{userName}
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        {Object.keys(socials).map((socialPage, index) => {
          let social, IconComponent;
          switch (socials[socialPage].name) {
            case socials.gitHub.name:
              social = socials.gitHub;
              IconComponent = GitHub;
              break;
            case socials.linkedIn.name:
              social = socials.linkedIn;
              IconComponent = LinkedIn;
              break;
            case socials.twitter.name:
              social = socials.twitter;
              IconComponent = Twitter;
              break;
            default:
              social = socials.twitter;
              IconComponent = Twitter;
              break;
          }
          return (
            <Link
              key={index}
              to={social.url}
              title={social.name}
              foreign
              newTab
            >
              <IconComponent className="transition-colors ease-linear duration-150 w-5 h-auto fill-gray-500 hover:fill-gray-700 inline mx-1" />
            </Link>
          );
        })}
      </span>
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