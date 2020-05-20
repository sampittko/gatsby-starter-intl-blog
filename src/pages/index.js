import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { getNodeInLanguage } from "../utils/i18n";
import '../assets/css/main.css'

const IndexPage = ({ pageContext, intl, data }) => {
  const node = getNodeInLanguage(data.allMarkdownRemark.nodes, pageContext.intl.language)

  return (
    <Layout>
      <SEO lang={pageContext.intl.language} />
      <div dangerouslySetInnerHTML={{ __html: node.html }}/>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/index/" } }) {
      nodes {
        html
        fileAbsolutePath
      }
    }
  }
`;

export default injectIntl(IndexPage);
