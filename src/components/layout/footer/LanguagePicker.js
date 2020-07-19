import React, { useState } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import {
  getRootLanguage,
  getSupportedLanguages,
  getSupportedLanguageStrings,
  getLanguagePreferenceStorageKey,
} from "../../../utils/i18n";
import { navigate } from "gatsby";

const LanguagePicker = ({ intl }) => {
  const [value, setValue] = useState(intl.locale);

  const supportedLanguages = getSupportedLanguages();
  const supportedLanguageStrings = getSupportedLanguageStrings();

  const onChange = (language) => {
    setValue(language);
    localStorage.setItem(getLanguagePreferenceStorageKey(), language);
    if (language === getRootLanguage()) {
      navigate(`/`);
    } else {
      navigate(`/${language}`);
    }
  };

  return (
    <select
      className="py-3 block text-gray-600 text-sm appearance-none w-auto bg-white rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center hover:underline"
      onChange={(event) => onChange(event.target.value.toLowerCase())}
      value={value}
    >
      {supportedLanguages.map((supportedLanguage, index) => {
        const language = supportedLanguageStrings[index];
        return (
          <option key={supportedLanguage} value={supportedLanguage}>
            {language}
          </option>
        );
      })}
    </select>
  );
};

export default injectIntl(LanguagePicker);
