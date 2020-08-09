import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "./Link";

const BlogLink = ({ intl }) => (
  <div className="px-5 py-3 mb-2 flex justify-center">
    <Link
      to="/blog/"
      className="shadow-sm hover:shadow-lg hover:bg-gray-700 dark-hover:bg-gray-300 hover:text-white dark-hover:text-gray-700 bg-gray-100 dark:bg-gray-700 rounded-full px-5 py-2 text-black dark:text-gray-300 font-light text-sm"
    >
      {intl.formatMessage({ id: "page.index.section.blog.link" })}
    </Link>
  </div>
);

export default injectIntl(BlogLink);
