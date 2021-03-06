import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "../../../Link";
import { injectIntl } from "gatsby-plugin-intl";

const query = graphql`
  query {
    site {
      siteMetadata {
        developer {
          gitHubUrl
          userName
        }
      }
    }
  }
`;

// Thanks for giving me credits by letting my nickname be displayed with the link to the repo!
const Developer = ({ intl }) => {
  const data = useStaticQuery(query);
  const { developer } = data.site.siteMetadata;

  return (
    <span className="text-xs text-gray-600">
      {intl.formatMessage(
        { id: "footer.note.madeby" },
        {
          developer: (
            <Link
              foreign
              to={developer.gitHubUrl}
              className="font-bold hover:underline"
              title={intl.formatMessage({ id: "footer.note.madeby.hover" })}
            >
              @{developer.userName}
            </Link>
          ),
        }
      )}
      <span className="hidden sm:inline">
        {" "}
        {intl.formatMessage({ id: "footer.note.using" })}
      </span>
    </span>
  );
};

export default injectIntl(Developer);
