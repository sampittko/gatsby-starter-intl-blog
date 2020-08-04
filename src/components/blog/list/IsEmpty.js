import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const IsEmpty = ({ intl }) => (
  <h2 className="block text-center px-5 py-3 border-2 border-white bg-gray-100 rounded-full mb-2">
    {intl.formatMessage({ id: "blog.noposts" })}
  </h2>
);

export default injectIntl(IsEmpty);
