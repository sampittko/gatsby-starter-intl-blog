import React, { useState, useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import gatsbyConfig from '../../../../gatsby-config';

const Profile = ({ intl }) => {
  const [loaded, setLoaded] = useState(false);

  const { author } = gatsbyConfig.siteMetadata

  const onLoad = () => {
    if (!loaded) {
      setLoaded(true);
    }
  };

  useEffect(() => {
    // Check if cached
    setTimeout(() => {
      onLoad();
    }, 9);
  });

  return (
    <div
      className={`${
        loaded ? "transition-opacity ease-in duration-100" : "opacity-0"
      } w-auto md:flex rounded-lg p-6 transform -skew-y-11`}
    >
      <img
        onLoad={onLoad}
        src={author.photoUrl}
        alt={intl.formatMessage({ id: "profile.image.alt" })}
        className="rounded-full h-16 w-16 mb-3 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6 md:mb-0 transform skew-y-11"
      />
      <div className="text-center md:text-left mt-auto mb-auto">
        <h2 className="text-3xl font-extrabold">{author.fullName}</h2>
      </div>
    </div>
  );
};

export default injectIntl(Profile);
