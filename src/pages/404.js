import React from "react";
import Layout from '../components/layout/Layout';
import { injectIntl } from "gatsby-plugin-intl";

const NotFoundPage = ({ intl }) =>
  <Layout>
    <h1 className="text-xl">
      {intl.formatMessage({ id: 'page.notfound' })}
    </h1>
  </Layout>

export default injectIntl(NotFoundPage);
