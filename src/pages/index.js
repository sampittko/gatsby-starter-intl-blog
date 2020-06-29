import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import Profile from "../components/pages/index/Profile";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ pageContext, intl }) =>
  <Layout>
    <SEO
      lang={pageContext.intl.language}
      description={intl.formatMessage({ id: "page.index.description" })}
    />
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center h-content h-48 md:h-20 lg:h-26 w-screen transform -skew-y-11 bg-brown">
        <Profile className="absolute -top-26 lg:-top-32 md:inset-x-0 md:mx-auto md:w-content-compact lg:w-content" />
      </div>
    </div>
  </Layout>

export default injectIntl(IndexPage);
