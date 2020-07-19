import React from 'react';
import ButtonLink from '../../../ButtonLink';
import { injectIntl } from 'gatsby-plugin-intl';

const More = ({ intl }) => (
  <div className="px-5 py-3 mb-2 flex justify-center">
    <ButtonLink
      to="/blog"
      className="hover:bg-gray-700 hover:text-white bg-gray-300 rounded-full px-5 py-2 text-gray-600 text-sm"
    >
      {intl.formatMessage({ id: "page.index.section.blog.more" })}
    </ButtonLink>
  </div>
);

export default injectIntl(More);