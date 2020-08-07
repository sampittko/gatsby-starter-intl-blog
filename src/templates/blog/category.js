import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";
import { injectIntl } from "gatsby-plugin-intl";
import Section from "../../components/section/Section";
import MissingTranslation from "../../utils/MissingTranslation";
import BlogPosts from "../../components/blog/list/List";

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
  if (data[intl.locale].edges.length === 0) return <MissingTranslation />;

  const posts = data[intl.locale].edges;

  const { slug } = pageContext

  const category = posts[0].node.frontmatter.post_category

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
      />
      <Section
        title={category}
        render={() => <BlogPosts data={posts} />}
      />
    </Layout>
  );
};

export default injectIntl(BlogCategoryTemplate);
