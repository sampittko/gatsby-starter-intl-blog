import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";
import LatestBlogPosts from "../components/pages/index/latestBlogPosts/LatestBlogPosts";
import Section from "../components/pages/index/Section";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.language}
      description={intl.formatMessage({ id: "page.index.description" })}
    />
    <Section
      title={intl.formatMessage({ id: "page.index.section.blog" })}
      render={() => <LatestBlogPosts />}
    />
  </Layout>
);

export default injectIntl(IndexPage);
