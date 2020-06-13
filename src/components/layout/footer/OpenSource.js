import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../../Link";
import gatsbyConfig from "../../../../gatsby-config";

const OpenSource = ({ intl }) => {
  const { gitHubUrl } = gatsbyConfig.siteMetadata
  return (
    <>
      {intl.formatMessage(
        { id: "footer.opensource" },
        {
          emoji: (
            <span role="img" aria-label="">
              🖤
            </span>
          ),
          repo: (
            <Link to={gitHubUrl} foreign newTab>
              GitHub
            </Link>
          ),
        }
      )}
    </>
  );
}

export default injectIntl(OpenSource);