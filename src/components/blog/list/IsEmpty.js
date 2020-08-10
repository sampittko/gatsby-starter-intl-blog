import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const IsEmpty = ({ intl }) => (
  <h2 className="block text-center text-black dark:text-gray-300 px-5 py-3 border-2 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-700 rounded-full mb-2">
    {intl.formatMessage({ id: "blog.noposts" })}
  </h2>
);

export default injectIntl(IsEmpty);
