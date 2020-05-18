import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ intl }) => {
  return (
    <div>
      {intl.formatMessage({ id: "welcome" })}
    </div>
  );
};

export default injectIntl(IndexPage);
