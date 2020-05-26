import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import { getNodeInLanguage } from "../utils/i18n";
import Profile from "../components/pages/index/Profile";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ pageContext, data, intl }) => {
  const node = getNodeInLanguage(data.allMarkdownRemark.nodes, pageContext.intl.language)

  return (
    <Layout>
      <SEO
        lang={pageContext.intl.language}
        description={intl.formatMessage({ id: "page.index.description" })}
      />
      <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
        <div className="flex flex-col justify-center items-center h-content h-48 md:h-20 lg:h-26 w-screen transform -skew-y-11 bg-brown">
          <Profile className="absolute -top-26 lg:-top-32 md:inset-x-0 md:mx-auto md:w-content-compact lg:w-content" />
          <div
            className="hidden absolute bottom-0 border-4 border-brown bg-white -mt-32 text-black mt-6 transform skew-y-11 max-w-screen-sm w-full mx-4 p-4"
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
