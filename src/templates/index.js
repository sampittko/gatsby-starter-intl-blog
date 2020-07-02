import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ pageContext, intl }) => {
  console.log(pageContext.innerHTML)

  return (
    <Layout>
      <SEO
        lang={pageContext.intl.language}
        description={intl.formatMessage({ id: "page.index.description" })}
      />
      <div dangerouslySetInnerHTML={{ __html: pageContext.innerHTML }} />
    </Layout>
  );
};

export default injectIntl(IndexPage);
