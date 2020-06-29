import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ pageContext, intl }) =>
  <Layout>
    <SEO
      lang={pageContext.intl.language}
      description={intl.formatMessage({ id: "page.index.description" })}
    />
  </Layout>

export default injectIntl(IndexPage);
