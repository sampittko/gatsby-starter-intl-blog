import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const BlogIndexTemplate = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <div>
      Hellou
    </div>
  );
};

export default injectIntl(BlogIndexTemplate);