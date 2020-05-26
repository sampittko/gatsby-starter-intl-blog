import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import gatsbyConfig from '../../../gatsby-config';
import Link from '../Link';

const Footer = ({ intl }) => {
  const { gitHubUrl } = gatsbyConfig.siteMetadata

  return (
    <footer className="fixed bottom-0 w-full p-3 text-center">
      {intl.formatMessage(
        { id: "footer.opensource" },
        {
          emoji: (
            <span
              role="img"
              aria-label=""
            >
              🖤
            </span>
          ),
          repo: (
            <Link to={gitHubUrl} foreign newTab>
              GitHub
            </Link>
          )
        }
      )}
    </footer>
  );
};

export default injectIntl(Footer);