import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";
import { useBlogPosts } from "../hooks/useBlogPosts";
import NoBlogPosts from "../components/blog/NoBlogPosts";
import BlogPosts from "../components/pages/blog/BlogPosts";

const BlogIndexTemplate = ({ intl }) => {
  const blogPosts = useBlogPosts(intl.locale, 100);

  const title = intl.formatMessage({ id: "page.blog.title" });

  return (
    <Layout>
      <SEO title={title} />
      <Section
        title={title}
        render={() =>
          blogPosts.length === 0 ? <NoBlogPosts /> : <BlogPosts blogPosts={blogPosts} />
        }
      />
    </Layout>
  );
};

export default injectIntl(BlogIndexTemplate);
