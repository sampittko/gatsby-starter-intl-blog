import React, { useState, useEffect } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';

const Profile = ({ intl }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    if (!loaded) {
      setLoaded(true);
    }
  };

  useEffect(() => {
    // Check if cached
    setTimeout(() => {
      onLoad();
    }, 9)
  })

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <div className={`${loaded ? "transition-opacity ease-in duration-100" : "opacity-0"} md:flex rounded-lg p-6`}>
            <img
              onLoad={onLoad}
              src={author.photoUrl}
              alt={intl.formatMessage({ id: "profile.image.alt" })}
              className="rounded-full h-16 w-16 mb-3 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6 md:mb-0 border-4 border-black-300 box-content"
            />
            <div className="text-center md:text-left mt-auto mb-auto">
              <h2 className="text-lg">{author.fullName}</h2>
              <div>{intl.formatMessage({ id: "profile.position" })}</div>
              <a
                href={`mailto:${author.email}`}
                className="text-gray-600 hover:underline"
                title={intl.formatMessage({ id: "profile.email.hover" })}
              >
                {author.email}
              </a>
            </div>
          </div>
        );
      }}
    />
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          fullName
          photoUrl
          email
        }
      }
    }
  }
`

export default injectIntl(Profile);