import React from "react";
import { injectIntl, changeLocale } from "gatsby-plugin-intl";
import {
  getSupportedLanguages,
  getSupportedLanguageStrings,
  setLanguagePreference,
  getIntlConfig,
} from "../../../utils/i18n";

const LanguagePicker = ({ intl }) => {
  const supportedLanguages = getSupportedLanguages();
  const supportedLanguageStrings = getSupportedLanguageStrings();

  const onChange = (language) => {
    changeLocale(language)
    setLanguagePreference(getIntlConfig(), language);
  };

  return (
    <select
      className="py-3 block text-gray-600 text-xs appearance-none w-auto bg-white rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-center hover:underline"
      onChange={(event) => onChange(event.target.value)}
      value={intl.locale}
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
