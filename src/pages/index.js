import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import { getNodeInLanguage } from "../utils/i18n";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ pageContext, data, intl }) => {
  const { nodes } = data.allMarkdownRemark;
  const node = getNodeInLanguage(
    nodes,
    pageContext.intl.language
  );

  return (
    <Layout>
      <SEO
        lang={pageContext.intl.language}
        description={intl.formatMessage({ id: "page.index.description" })}
      />
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/index/" } }
    ) {
      nodes {
        html
        fileAbsolutePath
      }
    }
  }
`;

export default injectIntl(IndexPage);
