import React from "react";
import Section from "./section/Section";
import Layout from "./layout/Layout";
import { injectIntl } from "gatsby-plugin-intl";
import PropTypes from "prop-types";

const MissingTranslation = ({ intl, id }) => (
  <Layout
    backTo={{
      to: "/blog/",
      title: `${intl.formatMessage({ id: "backto" })} ${intl.formatMessage({
        id: "backto.blog",
      })}`,
    }}
  >
    <Section
      title={intl.formatMessage({ id: "missingtranslation.title" })}
      render={() => (
        <p className="text-center">
          {intl.formatMessage({ id: "missingtranslation.suggestion" })}
          <span className="block text-sm mt-1 w-auto">
            <span className="bg-gray-300 px-2 py-px">
              ID: <span className="underline">{id}</span>
            </span>
          </span>
        </p>
      )}
    />
  </Layout>
);

MissingTranslation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default injectIntl(MissingTranslation);
