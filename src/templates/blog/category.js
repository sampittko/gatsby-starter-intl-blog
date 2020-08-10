import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";
import { injectIntl } from "gatsby-plugin-intl";
import Section from "../../components/section/Section";
import BlogPosts from "../../components/blog/list/List";
import MissingTranslation from "../../components/MissingTranslation";

export const pageQuery = graphql`
  query BlogPostsByCategory($slug: String!) {
    sk: allMdx(
      filter: {
        fields: { categorySlug: { eq: $slug }, language: { eq: "sk" } }
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
    en: allMdx(
      filter: {
        fields: { categorySlug: { eq: $slug }, language: { eq: "en" } }
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
  const language = intl.locale;

  if (data[language].edges.length === 0) {
    return (
      <MissingTranslation id={`/${language}${pageContext.slug}`} />
    );
  }

  const posts = data[language].edges;

  const { slug } = pageContext;

  const category = posts[0].node.frontmatter.post_category;

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
        lang={language}
        title={`${category} — ${intl.formatMessage({ id: "page.blog.title" })}`}
        slug={slug}
        description={`${intl.formatMessage({
          id: "page.category.description",
        })}: ${category}`}
      />
      <Section title={category} render={() => <BlogPosts data={posts} />} />
    </Layout>
  );
};

export default injectIntl(BlogCategoryTemplate);
