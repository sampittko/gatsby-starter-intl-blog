import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import { getNodeInLanguage } from "../utils/i18n";
import Profile from "../components/pages/index/Profile";

const IndexPage = ({ pageContext, intl, data }) => {
  const node = getNodeInLanguage(data.allMarkdownRemark.nodes, pageContext.intl.language)

  return (
    <Layout>
      <SEO lang={pageContext.intl.language} />
      <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
        <div className="flex flex-col justify-center items-center min-h-2/5-screen md:min-h-1/2-screen w-screen transform -skew-y-11 bg-brown">
          <Profile />
          <div
            className="text-white mt-6"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </div>
      </div>
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
