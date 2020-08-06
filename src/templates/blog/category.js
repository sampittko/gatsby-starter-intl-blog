import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";
import { injectIntl } from "gatsby-plugin-intl";

export const pageQuery = graphql`
  query BlogPostsByCategory($slug: String!) {
    sk: allMarkdownRemark(
      filter: {
        fields: {
          categorySlug: { eq: $slug }
          language: { eq: "sk" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            post_title
            post_date(formatString: "D. MMM YYYY", locale: "sk")
            post_category
          }
          fields {
            slug
          }
        }
      }
    }
    en: allMarkdownRemark(
      filter: {
        fields: {
          categorySlug: { eq: $slug }
          language: { eq: "en" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            post_title
            post_date(formatString: "D. MMM YYYY", locale: "en")
            post_category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const BlogCategoryTemplate = ({ data, pageContext, intl }) => {
  const posts = data[intl.locale].edges;

  const { slug } = pageContext
  const description = "None"

  const category = "None"

  return (
    <Layout
      backTo={{
        to: "/blog/",
        title: `${intl.formatMessage({ id: "backto" })} ${intl.formatMessage({
          id: "backto.blog",
        })}`,
      }}
    >
      <SEO
        title={`${category} — ${intl.formatMessage({ id: "page.blog.title" })}`}
        slug={slug}
        description={description}
      />
    </Layout>
  );
};

export default injectIntl(BlogCategoryTemplate);
