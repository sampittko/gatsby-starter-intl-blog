import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import gatsbyConfig from "../../../../gatsby-config";
import Link from "../../Link";
import GitHub from "../../../assets/img/social/GitHub";
import LinkedIn from "../../../assets/img/social/LinkedIn";
import Twitter from "../../../assets/img/social/Twitter";

const ProfileSocialLinks = ({ socials }) => (
  <div className="mt-2 md:mt-0 mx-auto w-max-content md:w-auto md:mx-none md:absolute md:left-40 lg:left-52">
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
        <Link key={index} to={social.url} title={social.name} foreign newTab>
          <IconComponent className="w-6 lg:w-8 h-auto fill-white border-brown border-b-4 hover:border-white hover:border-b-4 inline mr-2"/>
        </Link>
      );
    })}
  </div>
);

const ProfileHighlightListItem = ({ children }) => <li className="inline">{children}</li>;

const ProfileHighlightsList = ({ children }) => (
  <ul className="list-none text-white text-sm md:text-md lg:text-lg">
    {children.map((child, index) =>
      index === 0 || index !== children.length - 1 ? (
        <ProfileHighlightListItem key={index}>
          {child}&nbsp;&#8226;&nbsp;
        </ProfileHighlightListItem>
      ) : (
        <ProfileHighlightListItem key={index}>{child}</ProfileHighlightListItem>
      )
    )}
  </ul>
);

const ProfileName = ({ name }) => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white md:text-brown">{name}</h1>
);

const ProfileDetails = ({ author, intl }) => (
  <div className="text-center md:text-left md:absolute md:top-14 md:left-40 lg:top-16 lg:left-52 whitespace-no-wrap">
    <ProfileName name={author.fullName} />
    <ProfileHighlightsList>
      <Link
        to={`https://www.google.com/search?q=${author.userName}`}
        onDark
        newTab
        foreign
      >
        @{author.userName}
      </Link>
      {intl.formatMessage({ id: "profile.description.item1" })}
      {intl.formatMessage({ id: "profile.description.item2" })}
    </ProfileHighlightsList>
  </div>
);

const ProfileImage = ({ url }) => (
  <img
    src={url}
    alt=""
    className="transform skew-y-11 rounded-full h-32 w-32 mx-auto md:mx-0 lg:h-40 lg:w-40 border-8 lg:border-12 border-white box-content"
  />
);

const Profile = ({ intl, className }) => {
  const { author } = gatsbyConfig.siteMetadata;

  return (
    <div className={className}>
      <ProfileImage url={author.photoUrl} />
      <ProfileDetails author={author} intl={intl} />
      <ProfileSocialLinks socials={author.socials} />
    </div>
  );
};

export default injectIntl(Profile);
