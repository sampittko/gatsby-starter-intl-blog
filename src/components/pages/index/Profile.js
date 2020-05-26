import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import gatsbyConfig from "../../../../gatsby-config";
import Link from "../../Link";

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
  <div className="text-center md:text-left md:absolute md:top-7 md:left-20 lg:top-8 lg:left-26 whitespace-no-wrap">
    <ProfileName name={author.fullName} />
    <ProfileHighlightsList>
      <Link to={`mailto:${author.email}`} onDark newTab foreign>
        {author.email}
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

const Profile = ({ intl }) => {
  const { author } = gatsbyConfig.siteMetadata;

  return (
    <div className="absolute -top-13 lg:-top-16 md:inset-x-0 md:mx-auto w-content">
      <ProfileImage url={author.photoUrl} />
      <ProfileDetails author={author} intl={intl} />
    </div>
  );
};

export default injectIntl(Profile);
