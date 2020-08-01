import React from "react";
import ButtonLink from "../../../ButtonLink";
import { injectIntl } from "gatsby-plugin-intl";

const All = ({ intl }) => (
  <div className="px-5 py-3 mb-2 flex justify-center">
    <ButtonLink
      to="/blog"
      className="hover:bg-gray-700 hover:text-white bg-gray-100 rounded-full px-5 py-2 text-black font-light text-sm"
    >
      {intl.formatMessage({ id: "page.index.section.blog.all" })}
    </ButtonLink>
  </div>
);

export default injectIntl(All);
