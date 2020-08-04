import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../../../Link";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          email
        }
      }
    }
  }
`;

const Message = ({ intl }) => {
  const data = useStaticQuery(query);
  const { email } = data.site.siteMetadata.author;

  return (
    <span className="leading-8">
      {intl.formatMessage(
        { id: "opentowork" },
        {
          contactMe: (
            <Link
              foreign
              to={`mailto:${email}?subject=${intl.formatMessage({
                id: "opentowork.email.subject",
              })}`}
              title={email}
              className="font-bold hover:underline"
            >
              {intl.formatMessage({
                id: "opentowork.contactme",
              })}
            </Link>
          ),
        }
      )}
    </span>
  );
};

export default injectIntl(Message);
