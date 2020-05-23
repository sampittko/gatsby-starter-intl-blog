import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import gatsbyConfig from "../../../../gatsby-config";
import Link from "../../Link";

const ProfileHighlightListItem = ({ children }) => <li className="inline">{children}</li>;

const ProfileHighlightsList = ({ children }) =>
  <ul className="list-none text-white text-sm md:text-lg">
    {children.map((child, index) =>
      index === 0 || index !== children.length - 1 ? (
        <ProfileHighlightListItem key={index}>
          {child}&nbsp;&#8226;&nbsp;
        </ProfileHighlightListItem>
      ) : (
        <ProfileHighlightListItem>{child}</ProfileHighlightListItem>
      )
    )}
  </ul>;

const ProfileName = ({ name }) => (
  <h1 className="text-xl md:text-3xl font-extrabold text-white text-center">{name}</h1>
);

const ProfileImage = ({ url, intl }) => (
  <img
    src={url}
    alt={intl.formatMessage({ id: "profile.image.alt" })}
    className="rounded-full h-16 w-16 mb-3 md:h-24 md:w-24 mx-auto transform skew-y-11 border-4 border-white content-box"
  />
);

const Profile = ({ intl }) => {
  const { author } = gatsbyConfig.siteMetadata;

  return (
    <div>
      <ProfileImage url={author.photoUrl} intl={intl} />
      <div className="text-center md:text-left mt-auto mb-auto">
        <ProfileName name={author.fullName} />
        <ProfileHighlightsList>
          <Link to={`mailto:${author.email}`} onDark newTab>
            {author.email}
          </Link>
          {intl.formatMessage({ id: "profile.description.item1" })}
          {intl.formatMessage({ id: "profile.description.item2" })}
        </ProfileHighlightsList>
      </div>
    </div>
  );
};

export default injectIntl(Profile);
