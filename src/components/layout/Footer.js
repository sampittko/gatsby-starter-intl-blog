import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

const Footer = ({ intl }) => {
  return (
    <div className="p-3 text-center">
      {intl.formatMessage(
        { id: "footer.opensource" },
        {
          emoji: (
            <span
              role="img"
              aria-label={intl.formatMessage({ id: "footer.emoji.label" })}
            >
              🖤
            </span>
          ),
        }
      )}
      &nbsp;
      <StaticQuery
        query={query}
        render={(data) => {
          const { gitHubUrl } = data.site.siteMetadata;
          return (
            <a
              className="text-gray-600 hover:underline"
              href={gitHubUrl}
              target="_blank"
              rel="noreferrer"
              title={gitHubUrl}
            >
              GitHub
            </a>
          );
        }}
      />
    </div>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        gitHubUrl
      }
    }
  }
`;

export default injectIntl(Footer);