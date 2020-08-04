import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";
import BlogPosts from "../components/blog/list/List";
import Section from "../components/Section";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.language}
      description={intl.formatMessage({ id: "page.index.description" })}
    />
    <Section
      title={intl.formatMessage({ id: "page.index.section.blog" })}
      render={() => <BlogPosts latest />}
    />
  </Layout>
);

export default injectIntl(IndexPage);
