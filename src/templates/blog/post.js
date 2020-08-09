import React from "react";
import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";
import Section from "../../components/section/Section";
import { graphql } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import Navigation from "../../components/blog/post/navigation/Navigation";
import MissingTranslation from "../../utils/MissingTranslation";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Paragraph from "../../components/mdx/Paragraph";
import Link from "../../components/mdx/Link";

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    sk: mdx(fields: { slug: { eq: $slug }, language: { eq: "sk" } }) {
      body
      fields {
        slug
        categorySlug
      }
      frontmatter {
        page_description
        post_title
        post_date(formatString: "D. MMM YYYY", locale: "sk")
        post_category
      }
    }
    en: mdx(fields: { slug: { eq: $slug }, language: { eq: "en" } }) {
      body
      fields {
        slug
        categorySlug
      }
      frontmatter {
        page_description
        post_title
        post_date(formatString: "D. MMM YYYY", locale: "en")
        post_category
      }
    }
  }
`;

const shortcodes = { Paragraph, Link };

const BlogPostTemplate = ({ data, pageContext, intl }) => {
  const language = intl.locale;
  if (!data[language]) return <MissingTranslation />;

  const post = data[language];
  const { prevIntl, nextIntl } = pageContext;
  const prev = prevIntl[language];
  const next = nextIntl[language];

  const pageDescription = post.frontmatter.page_description;
  const title = post.frontmatter.post_title;
  const date = post.frontmatter.post_date;
  const category = post.frontmatter.post_category;
  const { slug, categorySlug } = post.fields;

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
        lang={intl.locale}
        title={`${title} — ${intl.formatMessage({
          id: "page.blog.title",
        })}`}
        slug={slug}
        description={pageDescription}
      />
      <Section
        title={title}
        blogPostMeta={{
          category: {
            name: category,
            slug: categorySlug,
          },
          publishedDate: date,
        }}
        render={() => (
          <div>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
            <Navigation
              prev={{
                title: prev?.frontmatter.post_title,
                slug: prev?.fields.slug,
              }}
              next={{
                title: next?.frontmatter.post_title,
                slug: next?.fields.slug,
              }}
            />
          </div>
        )}
      />
    </Layout>
  );
};

export default injectIntl(BlogPostTemplate);
