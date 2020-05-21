import React, { useState } from 'react';
import { supportedLanguages, languageSettings } from "../../../config/i18n";
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
    <div className="w-auto absolute right-0">
      <select
        className="block appearance-none w-auto bg-white text-gray-600 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
        onChange={(event) => onChange(event.target.value.toLowerCase())}
        value={value}
      >
        {Object.keys(supportedLanguages).map((supportedLanguage) => {
          const languageKey = supportedLanguages[supportedLanguage].key;
          return (
            <option key={languageKey} value={languageKey}>
              {languageKey.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default injectIntl(LanguagePicker);