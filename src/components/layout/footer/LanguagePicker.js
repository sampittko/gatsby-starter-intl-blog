import React, { useState } from 'react';
import { supportedLanguages, languageSettings } from "../../../config/i18n";
import { injectIntl, navigate } from "gatsby-plugin-intl";
import PropTypes from 'prop-types';

const LanguagePicker = ({ intl, className }) => {
  const [value, setValue] = useState(intl.locale);

  const onChange = (languageKey) => {
    if (intl.locale !== languageKey) {
      setValue(languageKey);
      if (languageKey === languageSettings.rootLanguageKey) {
        navigate(`/`);
      }
      else {
        navigate(`/${languageKey}`);
      }
    }
  }

  return (
    <select
      className={className}
      onChange={(event) => onChange(event.target.value.toLowerCase())}
      value={value}
    >
      {Object.keys(supportedLanguages).map((supportedLanguage) => {
        const language = supportedLanguages[supportedLanguage].string;
        const languageKey = supportedLanguages[supportedLanguage].key;
        return (
          <option key={languageKey} value={languageKey}>
            {language}
          </option>
        );
      })}
    </select>
  );
};

LanguagePicker.defaultProps = {
  className: ""
}

LanguagePicker.propTypes = {
  className: PropTypes.string,
}

export default injectIntl(LanguagePicker);