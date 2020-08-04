import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";
import BlogPosts from "../components/blog/BlogPosts";

const BlogIndexTemplate = ({ intl }) => {
  const title = intl.formatMessage({ id: "page.blog.title" });

  return (
    <Layout>
      <SEO title={title} />
      <Section
        title={title}
        render={() => <BlogPosts />}
      />
    </Layout>
  );
};

export default injectIntl(BlogIndexTemplate);
