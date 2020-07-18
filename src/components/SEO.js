import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { languageSettings } from "../config/i18n";
import { injectIntl } from "gatsby-plugin-intl";

const SEO = ({
  intl,
  meta,
  image,
  title,
  description,
  slug,
  lang = languageSettings.defaultLanguageKey,
}) => (
  <StaticQuery
    query={query}
    render={(data) => {
      const { siteMetadata } = data.site;
      const metaDescription = description;
      const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null;
      const url = `${siteMetadata.siteUrl}${slug}`;
      return (
        <Helmet
          htmlAttributes={{ lang }}
          {...(title
            ? {
                titleTemplate: `%s — ${siteMetadata.title}`,
                title,
              }
            : {
                title: `${siteMetadata.title} — ${intl.formatMessage({
                  id: "page.index.title",
                })}`,
              })}
          meta={[
            {
              name: "description",
              content: metaDescription,
            },
            {
              property: "og:url",
              content: url,
            },
            {
              property: "og:title",
              content: title || siteMetadata.title,
            },
            {
              property: "og:description",
              content: metaDescription,
            },
            {
              name: "twitter:card",
              content: "summary",
            },
            {
              name: "twitter:creator",
              content: `@${siteMetadata.author.userName}`,
            },
            {
              name: "twitter:title",
              content: title || siteMetadata.title,
            },
            {
              name: "twitter:description",
              content: metaDescription,
            },
          ]
            .concat(
              metaImage
                ? [
                    {
                      property: "og:image",
                      content: metaImage,
                    },
                    {
                      name: "twitter:image",
                      content: metaImage,
                    },
                  ]
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

const query = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        author {
          fullName
          userName
        }
        siteUrl
      }
    }
  }
`;

SEO.defaultProps = {
  meta: [],
  title: "",
  slug: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default injectIntl(SEO);
