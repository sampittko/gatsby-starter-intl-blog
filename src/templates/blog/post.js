import React from "react";
import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";
import Section from "../../components/section/Section";
import { graphql } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import Navigation from "../../components/blog/post/navigation/Navigation";

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, language: { eq: $language } }
    ) {
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        categorySlug
      }
      frontmatter {
        post_title
        post_date(formatString: "D. MMM YYYY", locale: $language)
        post_description
        post_category
      }
    }
  }
`;

const BlogPostTemplate = ({ data, pageContext, intl }) => {
  const post = data.markdownRemark;
  const { prev, next } = pageContext;

  const description = post.frontmatter.post_description;
  const title = post.frontmatter.post_title;
  const date = post.frontmatter.post_date;
  const category = post.frontmatter.post_category;
  const { slug, categorySlug } = post.fields;
  const { excerpt } = post;

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
        title={`${title} — ${intl.formatMessage({ id: "page.blog.title" })}`}
        slug={slug}
        description={description || excerpt}
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
            <div dangerouslySetInnerHTML={{ __html: post.html }} className="text-center" />
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
