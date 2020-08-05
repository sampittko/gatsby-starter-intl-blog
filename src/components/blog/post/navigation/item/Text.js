import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

const Text = ({ title, intl, back }) => (
  <p className={back ? "text-left" : "text-right"}>
    <span className="block text-sm pb-1">
      {intl.formatMessage({
        id: back ? "blog.post.navigation.prev" : "blog.post.navigation.next",
      })}
    </span>
    <span className="block pt-1">{title}</span>
  </p>
);

Text.defaultProps = {
  back: false
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default injectIntl(Text);