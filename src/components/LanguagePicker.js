import React, { useState } from 'react';
import { supportedLanguages, languageSettings } from "../config/i18n";
import { injectIntl } from "gatsby-plugin-intl";
import { navigate } from "gatsby";

const LanguagePicker = ({ intl }) => {
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
      className="block text-brown mx-auto appearance-none w-auto bg-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center"
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

export default injectIntl(LanguagePicker);