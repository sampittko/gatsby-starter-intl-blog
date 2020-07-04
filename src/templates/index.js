import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";
import LatestBlogPosts from "../components/pages/index/LatestBlogPosts";
import Section from "../components/pages/index/Section";

const IndexPage = ({ pageContext, intl }) => (
  <Layout>
    <SEO
      lang={pageContext.intl.language}
      description={intl.formatMessage({ id: "page.index.description" })}
    />
    <Section title={intl.formatMessage({ id: "page.index.section.aboutme" })}>
      {/* <div dangerouslySetInnerHTML={{ __html: pageContext.index }} /> */}
    </Section>
    <Section title={intl.formatMessage({ id: "page.index.section.blog" })}>
      <LatestBlogPosts blogPosts={pageContext.blogPosts} limit={3} />
    </Section>
  </Layout>
);

export default injectIntl(IndexPage);
