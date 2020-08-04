import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Link from "../../Link";

const BlogLink = ({ intl }) => (
  <div className="px-5 py-3 mb-2 flex justify-center">
    <Link
      to="/blog"
      className="hover:bg-gray-700 hover:text-white bg-gray-100 rounded-full px-5 py-2 text-black font-light text-sm"
    >
      {intl.formatMessage({ id: "page.index.section.blog.link" })}
    </Link>
  </div>
);

export default injectIntl(BlogLink);
