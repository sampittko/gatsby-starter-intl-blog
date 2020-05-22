import React from "react";
import Layout from '../components/layout/Layout';
import { injectIntl } from "gatsby-plugin-intl";

const NotFoundPage = ({ intl }) =>
  <Layout>
    <h1 className="text-6xl lg:text-12xl xl:text-12xl font-bold">
      {intl.formatMessage({ id: 'page.notfound' })}
    </h1>
  </Layout>

export default injectIntl(NotFoundPage);
