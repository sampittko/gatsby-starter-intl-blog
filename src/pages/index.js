import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import { getNodeInLanguage } from "../utils/i18n";
import Profile from "../components/pages/index/Profile";

const IndexPage = ({ pageContext, data }) => {
  const node = getNodeInLanguage(data.allMarkdownRemark.nodes, pageContext.intl.language)

  return (
    <Layout>
      <SEO lang={pageContext.intl.language} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center min-h-2/5-screen md:min-h-1/2-screen w-screen transform -skew-y-11 bg-brown">
          <Profile />
          <div
            className="hidden bg-white -mt-32 text-black mt-6 transform skew-y-11 max-w-screen-sm w-full mx-4 p-4"
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

export default IndexPage;
