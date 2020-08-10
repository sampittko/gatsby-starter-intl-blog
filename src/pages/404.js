import React from 'react'
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Section from "../components/section/Section";
import { injectIntl } from 'gatsby-plugin-intl';

const NotFoundPage = ({ intl }) => (
  <Layout
    backTo={{
      to: "/",
      title: `${intl.formatMessage({ id: "backto" })} ${intl.formatMessage({
        id: "backto.homepage",
      })}`,
    }}
  >
    <SEO
      title={intl.formatMessage({ id: "page.notfound.title" })}
      lang={intl.locale}
    />
    <Section
      title="404"
      render={() => (
        <p className="text-center">
          {intl.formatMessage({ id: "page.notfound.description" })}
        </p>
      )}
    />
  </Layout>
);

export default injectIntl(NotFoundPage);
