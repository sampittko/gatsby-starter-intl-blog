import React, { useState } from "react";
import { supportedLanguages, languageSettings } from "../../../config/i18n";
import { injectIntl, navigate } from "gatsby-plugin-intl";

const LanguagePicker = ({ intl }) => {
  const [value, setValue] = useState(intl.locale);

  const onChange = (languageKey) => {
    if (intl.locale !== languageKey) {
      setValue(languageKey);
      if (languageKey === languageSettings.rootLanguageKey) {
        navigate(`/`);
      } else {
        navigate(`/${languageKey}`);
      }
    }
  };

  return (
    <select
      className="py-3 block text-gray-600 text-sm appearance-none w-auto bg-white rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center hover:underline"
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
