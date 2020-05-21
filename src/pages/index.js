import React, { useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Profile from "../components/Profile";
import Layout from "../components/layout/Layout";
import { graphql, navigate } from "gatsby";
// import { getNodeInLanguage } from "../utils/i18n";
import { languageSettings, supportedLanguages } from "../config/i18n";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return languageSettings.defaultLanguageKey;
  }

  const languageKey = navigator && navigator.language && navigator.language.split("-")[0];
  
  if (!languageKey) return languageSettings.defaultLanguageKey;

  switch (languageKey) {
    case supportedLanguages.sk.key:
      return '';
    case supportedLanguages.en.key:
      return supportedLanguages.en.key;
    default:
      return languageSettings.defaultLanguageKey ===
        languageSettings.rootLanguageKey
        ? ""
        : languageSettings.defaultLanguageKey;
  }
};

const IndexPage = ({ pageContext, intl, data }) => {
  // const node = getNodeInLanguage(data.allMarkdownRemark.nodes, pageContext.intl.language)

  useEffect(() => {
    if (!sessionStorage.getItem('language')) {
      const redirectLanguage = getRedirectLanguage()
      sessionStorage.setItem('language', true)
      navigate(`/${redirectLanguage}`);
    }
  })

  return (
    <Layout>
      <SEO lang={pageContext.intl.language} />
      <Profile />
      {/* <div
        dangerouslySetInnerHTML={{ __html: node.html }}
      /> */}
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
