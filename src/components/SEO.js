import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import { getDefaultLanguage } from "../utils/i18n";

const SEO = ({
  intl,
  meta,
  image,
  title,
  description,
  slug,
  lang = getDefaultLanguage(),
}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            ogImageUrl
            author {
              userName
            }
          }
        }
      }
    `}
    render={(data) => {
      const { siteMetadata } = data.site;
      const metaDescription = description;
      const metaImage = image
        ? `${siteMetadata.siteUrl}/${image}`
        : siteMetadata.ogImageUrl;
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

SEO.defaultProps = {
  meta: [],
  title: "",
  slug: "",
  lang: "",
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default injectIntl(SEO);
