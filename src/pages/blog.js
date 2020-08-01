import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";
import { useBlogPosts } from "../hooks/useBlogPosts";
import NoBlogPost from "../components/NoBlogPost";

const BlogIndexTemplate = ({ intl }) => {
  const blogPosts = useBlogPosts(intl.locale, 100);

  const title = intl.formatMessage({ id: "page.blog.title" });

  return (
    <Layout>
      <SEO title={title} />
      <Section title={title} render={() => <NoBlogPost />} />
    </Layout>
  );
};

export default injectIntl(BlogIndexTemplate);
